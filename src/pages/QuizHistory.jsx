import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { getUserQuizHistory, getUserStats } from '../services/quizService';
import { History, TrendingUp, Target, Clock, Award, AlertCircle, ArrowLeft } from 'lucide-react';

const QuizHistory = () => {
  const { currentUser } = useAuth();
  const [history, setHistory] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (currentUser) {
      loadData();
    }
  }, [currentUser]);

  const loadData = async () => {
    setLoading(true);
    setError('');

    try {
      // Load quiz history
      const historyResult = await getUserQuizHistory(currentUser.uid, 20);
      if (historyResult.success) {
        setHistory(historyResult.data);
      } else {
        setError('Gagal memuat riwayat quiz');
      }

      // Load stats
      const statsResult = await getUserStats(currentUser.uid);
      if (statsResult.success) {
        setStats(statsResult.data);
      }
    } catch (err) {
      setError('Terjadi kesalahan saat memuat data');
      console.error(err);
    }

    setLoading(false);
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-600 bg-green-50';
    if (score >= 60) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-12">
        <div className="container mx-auto px-4 text-center">
          <AlertCircle className="mx-auto mb-4 text-gray-400" size={64} />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Login Diperlukan</h2>
          <p className="text-gray-600 mb-6">Silakan login untuk melihat riwayat quiz kamu</p>
          <Link to="/login" className="btn btn-primary">
            Login Sekarang
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-primary mb-4 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Kembali ke Beranda
          </Link>
          <h1 className="text-3xl font-bold font-anta text-gray-900 flex items-center gap-3">
            <History className="text-primary" size={32} />
            Riwayat Quiz
          </h1>
          <p className="text-gray-600 mt-2">Lihat semua quiz yang pernah kamu kerjakan</p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <span className="loading loading-spinner loading-lg text-primary"></span>
            <p className="text-gray-600 mt-4">Memuat data...</p>
          </div>
        ) : error ? (
          <div className="alert alert-error">
            <AlertCircle size={20} />
            <span>{error}</span>
            <button onClick={loadData} className="btn btn-sm">Coba Lagi</button>
          </div>
        ) : (
          <>
            {/* Stats Cards */}
            {stats && (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <Target className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Total Quiz</p>
                      <p className="text-2xl font-bold text-gray-900">{stats.totalQuizzes}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-green-50 rounded-lg">
                      <TrendingUp className="text-green-600" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Rata-rata Skor</p>
                      <p className="text-2xl font-bold text-gray-900">{stats.avgScore}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-purple-50 rounded-lg">
                      <Award className="text-purple-600" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Akurasi</p>
                      <p className="text-2xl font-bold text-gray-900">{stats.accuracy}%</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-orange-50 rounded-lg">
                      <Target className="text-orange-600" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Total Poin</p>
                      <p className="text-2xl font-bold text-gray-900">{stats.totalScore}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* History List */}
            {history.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center">
                <History className="mx-auto mb-4 text-gray-400" size={64} />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Belum Ada Riwayat</h3>
                <p className="text-gray-600 mb-6">Kerjakan quiz pertama kamu untuk melihat riwayat di sini</p>
                <Link to="/krida" className="btn btn-primary">
                  Mulai Quiz
                </Link>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="table">
                    <thead className="bg-gray-50">
                      <tr>
                        <th>No</th>
                        <th>Quiz</th>
                        <th>Skor</th>
                        <th>Benar</th>
                        <th>Waktu</th>
                        <th>Tanggal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {history.map((item, index) => (
                        <tr key={item.id} className="hover:bg-gray-50">
                          <td className="font-medium">{index + 1}</td>
                          <td>
                            <div>
                              <p className="font-medium text-gray-900">{item.quizTitle.replace('Quiz', 'Kuis')}</p>
                              <p className="text-sm text-gray-500">{formatDate(item.timestamp)}</p>
                            </div>
                          </td>
                          <td>
                            <div className={`badge badge-lg font-bold ${getScoreColor(item.score)}`}>
                              {item.score} / 100
                            </div>
                          </td>
                          <td>
                            <span className="text-gray-700">
                              {item.correctAnswers} / {item.totalQuestions}
                            </span>
                          </td>
                          <td>
                            <div className="flex items-center gap-2 text-gray-600">
                              <Clock size={16} />
                              {formatTime(item.timeUsed)}
                            </div>
                          </td>
                          <td className="text-sm text-gray-500">
                            {new Date(item.timestamp).toLocaleDateString('id-ID', {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric'
                            })}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default QuizHistory;
