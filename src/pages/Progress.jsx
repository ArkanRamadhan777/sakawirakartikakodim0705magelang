import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Navigate, Link } from 'react-router-dom';
import { getUserProgress, getUserStats, getProgressByKrida, getUserBadges } from '../services/progressService';
import BadgeDisplay from '../components/BadgeDisplay';
import ProgressCard from '../components/ProgressCard';
import { Trophy, Target, Clock, Award, TrendingUp, ChevronDown, ChevronUp } from 'lucide-react';

const Progress = () => {
    const { currentUser } = useAuth();
    const [loading, setLoading] = useState(true);
    const [quizResults, setQuizResults] = useState([]);
    const [stats, setStats] = useState(null);
    const [progressByKrida, setProgressByKrida] = useState([]);
    const [badges, setBadges] = useState([]);
    const [expandedKrida, setExpandedKrida] = useState(null);

    useEffect(() => {
        if (currentUser) {
            loadProgress();
        }
    }, [currentUser]);

    const loadProgress = async () => {
        setLoading(true);
        const result = await getUserProgress(currentUser.uid);

        if (result.success) {
            const results = result.data;
            setQuizResults(results);

            // Calculate stats
            const userStats = getUserStats(results);
            setStats(userStats);

            // Get progress by Krida
            const kridasProgress = getProgressByKrida(results);
            setProgressByKrida(kridasProgress);

            // Get badges
            const userBadges = getUserBadges(results, userStats);
            setBadges(userBadges);
        }

        setLoading(false);
    };

    const toggleKrida = (index) => {
        setExpandedKrida(expandedKrida === index ? null : index);
    };

    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        if (hours > 0) {
            return `${hours}h ${minutes}m`;
        }
        return `${minutes}m`;
    };

    if (!currentUser) {
        return <Navigate to="/login" />;
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 pt-24 pb-12 flex items-center justify-center">
                <div className="text-center">
                    <div className="loading loading-spinner loading-lg text-primary"></div>
                    <p className="mt-4 text-gray-600">Loading your progress...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-12">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold font-anta text-gray-900 mb-2">
                        📊 Progress Dashboard
                    </h1>
                    <p className="text-gray-600">
                        Track your learning journey and achievements
                    </p>
                </div>

                {/* User Stats Summary */}
                {stats && (
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 text-center">
                            <div className="text-primary mb-2">
                                <Trophy size={24} className="mx-auto" />
                            </div>
                            <div className="text-2xl font-bold text-gray-900">{stats.totalQuizzes}</div>
                            <div className="text-xs text-gray-600">Total Quizzes</div>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 text-center">
                            <div className="text-green-600 mb-2">
                                <Target size={24} className="mx-auto" />
                            </div>
                            <div className="text-2xl font-bold text-gray-900">{stats.averageScore}%</div>
                            <div className="text-xs text-gray-600">Avg Score</div>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 text-center">
                            <div className="text-blue-600 mb-2">
                                <Clock size={24} className="mx-auto" />
                            </div>
                            <div className="text-2xl font-bold text-gray-900">{formatTime(stats.totalTime)}</div>
                            <div className="text-xs text-gray-600">Time Spent</div>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 text-center">
                            <div className="text-yellow-600 mb-2">
                                <Award size={24} className="mx-auto" />
                            </div>
                            <div className="text-2xl font-bold text-gray-900">{badges.filter(b => b.earned).length}</div>
                            <div className="text-xs text-gray-600">Badges Earned</div>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 text-center">
                            <div className="text-purple-600 mb-2">
                                <TrendingUp size={24} className="mx-auto" />
                            </div>
                            <div className="text-2xl font-bold text-gray-900">{stats.completedTKKs}</div>
                            <div className="text-xs text-gray-600">TKKs Completed</div>
                        </div>
                    </div>
                )}

                {/* Badges Section */}
                <div className="mb-8">
                    <BadgeDisplay badges={badges} />
                </div>

                {/* Progress by Krida */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                    <h2 className="text-2xl font-bold font-anta text-gray-900 mb-6 flex items-center gap-2">
                        <span>📚</span>
                        Progress by Krida
                    </h2>

                    {progressByKrida.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-gray-500 mb-4">No progress data available yet.</p>
                            <Link to="/krida" className="btn btn-primary">
                                Start Learning
                            </Link>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {progressByKrida.map((krida, index) => (
                                <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                                    {/* Krida Header */}
                                    <button
                                        onClick={() => toggleKrida(index)}
                                        className="w-full p-4 bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="text-2xl">{krida.icon}</span>
                                            <div className="text-left">
                                                <h3 className="font-bold text-gray-900">{krida.krida}</h3>
                                                <p className="text-sm text-gray-600">
                                                    {krida.completedCount} / {krida.totalCount} TKKs completed
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="text-right">
                                                <div className="font-bold text-primary">{krida.completionPercentage}%</div>
                                                <div className="text-xs text-gray-500">Complete</div>
                                            </div>
                                            {expandedKrida === index ? (
                                                <ChevronUp className="text-gray-400" size={20} />
                                            ) : (
                                                <ChevronDown className="text-gray-400" size={20} />
                                            )}
                                        </div>
                                    </button>

                                    {/* TKK Progress Cards */}
                                    {expandedKrida === index && (
                                        <div className="p-4 bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                            {krida.tkkProgress.map((tkk) => (
                                                <ProgressCard key={tkk.id} tkk={tkk} progress={tkk.progress} />
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Progress;
