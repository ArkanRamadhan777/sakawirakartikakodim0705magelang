import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Navigate, useNavigate, Link } from 'react-router-dom';
import { getUserProgress, getUserStats, getProgressByKrida, getUserBadges } from '../services/progressService';
import { getUserRank } from '../services/leaderboardService';
import { calculateStreak } from '../services/streakService';
import BadgeDisplay from '../components/BadgeDisplay';
import ProgressCard from '../components/ProgressCard';
import ProgressChart from '../components/ProgressChart';
import RecommendationsWidget from '../components/RecommendationsWidget';
import { Trophy, Clock, Award, TrendingUp, ChevronDown, ChevronUp, User, Mail, LogOut, Edit2, Calendar, Flame, Share2 } from 'lucide-react';
import { generateShareText, shareViaWebShare, copyToClipboard, shareToWhatsApp } from '../utils/shareUtils';

const Profile = () => {
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [quizResults, setQuizResults] = useState([]);
    const [stats, setStats] = useState(null);
    const [progressByKrida, setProgressByKrida] = useState([]);
    const [badges, setBadges] = useState([]);
    const [expandedKrida, setExpandedKrida] = useState(null);
    const [userRank, setUserRank] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [newDisplayName, setNewDisplayName] = useState('');
    const [streak, setStreak] = useState(null);

    useEffect(() => {
        if (currentUser) {
            loadProgress();
            loadRank();
        }
    }, [currentUser]);

    const loadProgress = async () => {
        setLoading(true);
        const result = await getUserProgress(currentUser.uid);

        if (result.success) {
            const results = result.data;
            setQuizResults(results);

            const userStats = getUserStats(results);
            setStats(userStats);

            const kridasProgress = getProgressByKrida(results);
            setProgressByKrida(kridasProgress);

            const userBadges = getUserBadges(results, userStats);
            setBadges(userBadges);

            // Calculate streak
            const streakData = calculateStreak(results);
            setStreak(streakData);
        }

        setLoading(false);
    };

    const loadRank = async () => {
        const rankResult = await getUserRank(currentUser.uid);
        if (rankResult.success) {
            setUserRank(rankResult);
        }
    };

    const handleUpdateProfile = async () => {
        if (!newDisplayName.trim()) return;

        try {
            const { updateProfile } = await import('firebase/auth');
            await updateProfile(currentUser, {
                displayName: newDisplayName.trim()
            });
            setIsEditModalOpen(false);
            setNewDisplayName('');
            // Refresh to show new name
            window.location.reload();
        } catch (error) {
            console.error('Error updating profile:', error);
            alert('Gagal mengupdate profil');
        }
    };

    const handleShare = async (type, data) => {
        const text = generateShareText(type, data);

        // Try Web Share API first
        const shareResult = await shareViaWebShare(text);

        if (!shareResult.success) {
            // Fallback to copy to clipboard
            const copyResult = await copyToClipboard(text);
            if (copyResult.success) {
                alert('Teks berhasil disalin! Paste di social media favoritmu 📋');
            }
        }
    };

    const toggleKrida = (index) => {
        setExpandedKrida(expandedKrida === index ? null : index);
    };

    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        if (hours > 0) {
            return `${hours}j ${minutes}m`;
        }
        return `${minutes}m`;
    };

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/');
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    if (!currentUser) {
        return <Navigate to="/login" />;
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 pt-24 pb-12 flex items-center justify-center">
                <div className="text-center">
                    <div className="loading loading-spinner loading-lg text-primary"></div>
                    <p className="mt-4 text-gray-600">Memuat profil Anda...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-12">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Profile Header */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div className="flex items-center gap-4 flex-1">
                            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                                <User size={40} className="text-primary" />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-2">
                                    <h1 className="text-2xl md:text-3xl font-bold font-anta text-gray-900">
                                        {currentUser.displayName || 'Pengguna'}
                                    </h1>
                                    <button
                                        onClick={() => {
                                            setNewDisplayName(currentUser.displayName || '');
                                            setIsEditModalOpen(true);
                                        }}
                                        className="btn btn-ghost btn-sm btn-circle"
                                        title="Edit Profil"
                                    >
                                        <Edit2 size={16} />
                                    </button>
                                </div>
                                <div className="flex items-center gap-2 text-gray-600 mt-1">
                                    <Mail size={16} />
                                    <span className="text-sm">{currentUser.email}</span>
                                </div>
                                {userRank && userRank.rank && (
                                    <div className="mt-2">
                                        <span className="badge badge-primary gap-1">
                                            <Trophy size={14} />
                                            Peringkat #{userRank.rank} dari {userRank.total}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="btn btn-outline btn-error gap-2"
                        >
                            <LogOut size={18} />
                            Keluar
                        </button>
                    </div>
                </div>

                {/* Stats Summary */}
                {stats && (
                    <div className="mb-8">
                        <h2 className="text-xl font-bold font-anta text-gray-900 mb-4">📊 Statistik Saya</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 text-center">
                                <div className="text-primary mb-2">
                                    <Trophy size={24} className="mx-auto" />
                                </div>
                                <div className="text-2xl font-bold text-gray-900">{stats.totalQuizzes}</div>
                                <div className="text-xs text-gray-600">Total Kuis</div>
                            </div>

                            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 text-center">
                                <div className="text-green-600 mb-2">
                                    <Trophy size={24} className="mx-auto" />
                                </div>
                                <div className="text-2xl font-bold text-gray-900">{stats.averageScore}%</div>
                                <div className="text-xs text-gray-600">Rata-rata Nilai</div>
                            </div>

                            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 text-center">
                                <div className="text-blue-600 mb-2">
                                    <Clock size={24} className="mx-auto" />
                                </div>
                                <div className="text-2xl font-bold text-gray-900">{formatTime(stats.totalTime)}</div>
                                <div className="text-xs text-gray-600">Waktu Belajar</div>
                            </div>

                            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 text-center">
                                <div className="text-yellow-600 mb-2">
                                    <Award size={24} className="mx-auto" />
                                </div>
                                <div className="text-2xl font-bold text-gray-900">{badges.filter(b => b.earned).length}</div>
                                <div className="text-xs text-gray-600">Lencana Didapat</div>
                            </div>

                            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 text-center">
                                <div className="text-purple-600 mb-2">
                                    <TrendingUp size={24} className="mx-auto" />
                                </div>
                                <div className="text-2xl font-bold text-gray-900">{stats.completedTKKs}</div>
                                <div className="text-xs text-gray-600">TKK Selesai</div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Progress Chart */}
                {quizResults.length > 0 && (
                    <div className="mb-8">
                        <ProgressChart quizResults={quizResults} />
                    </div>
                )}

                {/* Recommendations Widget */}
                <div className="mb-8">
                    <RecommendationsWidget limit={5} />
                </div>

                {/* Recent Activity */}
                {quizResults.length > 0 && (
                    <div className="mb-8">
                        <h2 className="text-xl font-bold font-anta text-gray-900 mb-4">📅 Aktivitas Terbaru</h2>
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                            <div className="space-y-3">
                                {quizResults.slice(0, 5).map((result, index) => (
                                    <div key={index} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                                        <div className="flex-shrink-0">
                                            <Calendar size={20} className="text-gray-400" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="font-semibold text-gray-900">{result.tkkTitle || result.tkkId}</div>
                                            <div className="text-sm text-gray-500">
                                                {new Date(result.timestamp?.toDate()).toLocaleDateString('id-ID', {
                                                    day: 'numeric',
                                                    month: 'long',
                                                    year: 'numeric',
                                                    hour: '2-digit',
                                                    minute: '2-digit'
                                                })}
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <span className={`badge ${result.score >= 80 ? 'badge-success' : result.score >= 60 ? 'badge-warning' : 'badge-error'}`}>
                                                {result.score}%
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Streak Counter */}
                {streak && (
                    <div className="mb-8">
                        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl shadow-lg p-6 text-white">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h2 className="text-xl font-bold font-anta mb-2 flex items-center gap-2">
                                        <Flame size={24} />
                                        Streak Belajar
                                    </h2>
                                    <p className="text-white/90 text-sm">Hari berturut-turut belajar</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-5xl font-bold">{streak.currentStreak}</div>
                                    <div className="text-sm text-white/80 mt-1">Hari</div>
                                </div>
                            </div>
                            {streak.longestStreak > streak.currentStreak && (
                                <div className="mt-4 pt-4 border-t border-white/20">
                                    <p className="text-sm text-white/80">
                                        Rekor terpanjang: <span className="font-bold">{streak.longestStreak} hari</span>
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Badges Section */}
                <div className="mb-8">
                    <BadgeDisplay badges={badges} />
                </div>

                {/* Share Achievement */}
                {stats && (
                    <div className="mb-8">
                        <h2 className="text-xl font-bold font-anta text-gray-900 mb-4">📢 Bagikan Pencapaian</h2>
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <button
                                    onClick={() => handleShare('score', { score: stats.averageScore })}
                                    className="btn btn-outline gap-2"
                                >
                                    <Share2 size={16} />
                                    Nilai Saya
                                </button>
                                <button
                                    onClick={() => handleShare('tkk_complete', { count: stats.completedTKKs })}
                                    className="btn btn-outline gap-2"
                                >
                                    <Share2 size={16} />
                                    TKK Selesai
                                </button>
                                {streak && streak.currentStreak > 0 && (
                                    <button
                                        onClick={() => handleShare('streak', { days: streak.currentStreak })}
                                        className="btn btn-outline gap-2"
                                    >
                                        <Share2 size={16} />
                                        Streak
                                    </button>
                                )}
                                <button
                                    onClick={() => shareToWhatsApp(generateShareText('score', { score: stats.averageScore }))}
                                    className="btn btn-success gap-2 text-white"
                                >
                                    WhatsApp
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Progress by Krida */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                    <h2 className="text-2xl font-bold font-anta text-gray-900 mb-6 flex items-center gap-2">
                        <span>📚</span>
                        Progress Belajar Per Krida
                    </h2>

                    {progressByKrida.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-gray-500 mb-4">Belum ada data progress. Mulai belajar sekarang!</p>
                            <a href="/krida" className="btn btn-primary">
                                Mulai Belajar
                            </a>
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
                                                    {krida.completedCount} / {krida.totalCount} TKK selesai
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="text-right">
                                                <div className="font-bold text-primary">{krida.completionPercentage}%</div>
                                                <div className="text-xs text-gray-500">Selesai</div>
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

            {/* Edit Profile Modal */}
            {isEditModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={() => setIsEditModalOpen(false)}>
                    <div className="bg-white rounded-2xl p-6 max-w-md w-full mx-4" onClick={(e) => e.stopPropagation()}>
                        <h3 className="text-xl font-bold font-anta mb-4">Edit Profil</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="label">
                                    <span className="label-text">Nama Tampilan</span>
                                </label>
                                <input
                                    type="text"
                                    className="input input-bordered w-full"
                                    value={newDisplayName}
                                    onChange={(e) => setNewDisplayName(e.target.value)}
                                    placeholder="Masukkan nama Anda"
                                />
                            </div>
                            <div className="flex gap-2 justify-end">
                                <button
                                    className="btn btn-ghost"
                                    onClick={() => setIsEditModalOpen(false)}
                                >
                                    Batal
                                </button>
                                <button
                                    className="btn btn-primary"
                                    onClick={handleUpdateProfile}
                                    disabled={!newDisplayName.trim()}
                                >
                                    Simpan
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Profile;
