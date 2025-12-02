import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import {
    getOverallStats,
    getQuizAnalytics,
    getDifficultyAnalysis,
    getPopularTKK,
    getFailedQuestions,
    getUserEngagement,
    clearAnalyticsCache
} from '../services/analyticsService';
import {
    exportQuizAnalytics,
    exportUserEngagement,
    exportFailedQuestions,
    exportOverallStats
} from '../utils/exportUtils';
import AnalyticsOverview from '../components/analytics/AnalyticsOverview';
import QuizAnalyticsChart from '../components/analytics/QuizAnalyticsChart';
import DifficultyHeatmap from '../components/analytics/DifficultyHeatmap';
import PopularTKKList from '../components/analytics/PopularTKKList';
import FailedQuestionsTable from '../components/analytics/FailedQuestionsTable';
import { Download, RefreshCw, BarChart3, Home } from 'lucide-react';

const AdminDashboard = () => {
    const { currentUser } = useAuth();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [stats, setStats] = useState(null);
    const [quizAnalytics, setQuizAnalytics] = useState([]);
    const [difficultyData, setDifficultyData] = useState([]);
    const [popularTKK, setPopularTKK] = useState([]);
    const [failedQuestions, setFailedQuestions] = useState([]);
    const [userEngagement, setUserEngagement] = useState([]);

    useEffect(() => {
        loadAllData();
    }, []);

    const loadAllData = async () => {
        setLoading(true);

        try {
            // Load all analytics data in parallel
            const [
                statsData,
                analyticsData,
                difficultyAnalysis,
                popularData,
                failedData,
                engagementData
            ] = await Promise.all([
                getOverallStats(),
                getQuizAnalytics(),
                getDifficultyAnalysis(),
                getPopularTKK(),
                getFailedQuestions(),
                getUserEngagement()
            ]);

            setStats(statsData);
            setQuizAnalytics(analyticsData);
            setDifficultyData(difficultyAnalysis);
            setPopularTKK(popularData);
            setFailedQuestions(failedData);
            setUserEngagement(engagementData);
        } catch (error) {
            console.error('Error loading analytics data:', error);
            alert('Gagal memuat data analytics. Silakan refresh halaman.');
        } finally {
            setLoading(false);
        }
    };

    const handleRefresh = async () => {
        setRefreshing(true);
        clearAnalyticsCache();
        await loadAllData();
        setRefreshing(false);
    };

    const handleExportAll = () => {
        if (stats) exportOverallStats(stats);
        if (quizAnalytics.length > 0) exportQuizAnalytics(quizAnalytics);
        if (userEngagement.length > 0) exportUserEngagement(userEngagement);
        if (failedQuestions.length > 0) exportFailedQuestions(failedQuestions);

        alert('Semua data berhasil diekspor! 📊');
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-12">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold font-anta text-gray-900 mb-2">
                                📊 Admin Dashboard
                            </h1>
                            <p className="text-gray-600">
                                Selamat datang, <span className="font-semibold">{currentUser?.displayName || currentUser?.email}</span>
                            </p>
                        </div>

                        <div className="flex gap-3">
                            <button
                                onClick={() => navigate('/')}
                                className="btn btn-outline gap-2"
                            >
                                <Home size={18} />
                                <span className="hidden md:inline">Home</span>
                            </button>

                            <button
                                onClick={handleRefresh}
                                className={`btn btn-outline gap-2 ${refreshing ? 'loading' : ''}`}
                                disabled={refreshing}
                            >
                                <RefreshCw size={18} className={refreshing ? 'animate-spin' : ''} />
                                <span className="hidden md:inline">Refresh</span>
                            </button>

                            <button
                                onClick={handleExportAll}
                                className="btn btn-primary gap-2"
                                disabled={loading}
                            >
                                <Download size={18} />
                                <span className="hidden md:inline">Export All</span>
                            </button>
                        </div>
                    </div>

                    <div className="h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full"></div>
                </div>

                {/* Overview Stats */}
                <AnalyticsOverview stats={stats} loading={loading} />

                {/* Quiz Analytics Chart */}
                <QuizAnalyticsChart data={quizAnalytics} loading={loading} />

                {/* Difficulty Heatmap */}
                <DifficultyHeatmap data={difficultyData} loading={loading} />

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    {/* Popular TKK */}
                    <PopularTKKList data={popularTKK} loading={loading} />

                    {/* User Engagement Chart */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <h3 className="text-xl font-bold font-anta text-gray-900 mb-6">
                            📈 User Engagement (30 Hari Terakhir)
                        </h3>

                        {loading ? (
                            <div className="h-64 bg-gray-100 rounded animate-pulse"></div>
                        ) : userEngagement.length === 0 ? (
                            <div className="text-center py-12 text-gray-500">
                                Belum ada data engagement
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <div className="grid grid-cols-3 gap-4 text-center mb-6">
                                    <div className="p-3 bg-blue-50 rounded-lg">
                                        <div className="text-2xl font-bold text-blue-600">
                                            {userEngagement.reduce((sum, day) => sum + day.activeUsers, 0)}
                                        </div>
                                        <div className="text-xs text-gray-600">Total Active Users</div>
                                    </div>
                                    <div className="p-3 bg-green-50 rounded-lg">
                                        <div className="text-2xl font-bold text-green-600">
                                            {userEngagement.reduce((sum, day) => sum + day.quizzes, 0)}
                                        </div>
                                        <div className="text-xs text-gray-600">Total Quizzes</div>
                                    </div>
                                    <div className="p-3 bg-purple-50 rounded-lg">
                                        <div className="text-2xl font-bold text-purple-600">
                                            {Math.round(userEngagement.reduce((sum, day) => sum + day.activeUsers, 0) / userEngagement.length)}
                                        </div>
                                        <div className="text-xs text-gray-600">Avg Daily Users</div>
                                    </div>
                                </div>

                                <div className="max-h-64 overflow-y-auto">
                                    <table className="w-full text-sm">
                                        <thead className="sticky top-0 bg-white border-b-2 border-gray-200">
                                            <tr>
                                                <th className="text-left py-2 px-3 font-semibold text-gray-700">Date</th>
                                                <th className="text-center py-2 px-3 font-semibold text-gray-700">Users</th>
                                                <th className="text-center py-2 px-3 font-semibold text-gray-700">Quizzes</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {userEngagement.slice().reverse().map((day, index) => (
                                                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                                                    <td className="py-2 px-3 text-gray-900">
                                                        {new Date(day.date).toLocaleDateString('id-ID', {
                                                            day: 'numeric',
                                                            month: 'short'
                                                        })}
                                                    </td>
                                                    <td className="py-2 px-3 text-center font-semibold text-blue-600">
                                                        {day.activeUsers}
                                                    </td>
                                                    <td className="py-2 px-3 text-center font-semibold text-green-600">
                                                        {day.quizzes}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Failed Questions Table */}
                <FailedQuestionsTable data={failedQuestions} loading={loading} />

                {/* Footer Info */}
                <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-primary/20">
                    <div className="flex items-start gap-4">
                        <BarChart3 className="text-primary flex-shrink-0 mt-1" size={24} />
                        <div>
                            <h4 className="font-bold text-gray-900 mb-2">Tentang Dashboard Analytics</h4>
                            <p className="text-sm text-gray-700 mb-2">
                                Dashboard ini menampilkan data agregat dari semua pengguna aplikasi Saka Wira Kartika.
                                Data di-cache selama 5 menit untuk mengoptimalkan performa.
                            </p>
                            <p className="text-sm text-gray-600">
                                Terakhir dimuat: {new Date().toLocaleString('id-ID')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
