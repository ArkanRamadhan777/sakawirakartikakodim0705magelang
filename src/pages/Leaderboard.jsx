import { useState, useEffect } from 'react';
import { getTkkLeaderboard } from '../services/quizService';
import { kridas } from '../data/kridas';

const Leaderboard = () => {
  const [selectedTkk, setSelectedTkk] = useState('');
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Get all TKK options from kridas
  const tkkOptions = kridas.flatMap(krida => 
    krida.tkk.map(tkk => ({
      id: tkk.id,
      name: tkk.title,
      kridaName: krida.name
    }))
  );

  useEffect(() => {
    if (selectedTkk) {
      loadLeaderboard();
    }
  }, [selectedTkk]);

  const loadLeaderboard = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await getTkkLeaderboard(selectedTkk, 10);
      setLeaderboardData(data);
    } catch (err) {
      console.error('Error loading leaderboard:', err);
      setError('Gagal memuat leaderboard');
    } finally {
      setLoading(false);
    }
  };

  const getMedalEmoji = (rank) => {
    if (rank === 1) return '🥇';
    if (rank === 2) return '🥈';
    if (rank === 3) return '🥉';
    return `#${rank}`;
  };

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-600 font-bold';
    if (score >= 60) return 'text-yellow-600 font-semibold';
    return 'text-red-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            🏆 Leaderboard
          </h1>
          <p className="text-gray-600">
            Peringkat peserta terbaik per TKK
          </p>
        </div>

        {/* TKK Selector */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Pilih TKK untuk melihat peringkat:
          </label>
          <select
            value={selectedTkk}
            onChange={(e) => setSelectedTkk(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="">-- Pilih TKK --</option>
            {tkkOptions.map((tkk) => (
              <option key={tkk.id} value={tkk.id}>
                {tkk.kridaName} - {tkk.name}
              </option>
            ))}
          </select>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Memuat leaderboard...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <p className="text-red-600 text-center">{error}</p>
          </div>
        )}

        {/* Leaderboard Table */}
        {!loading && !error && selectedTkk && (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {leaderboardData.length === 0 ? (
              <div className="p-12 text-center text-gray-500">
                <p className="text-xl mb-2">📊</p>
                <p>Belum ada data untuk TKK ini</p>
                <p className="text-sm mt-2">Jadilah yang pertama mengerjakan quiz!</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Peringkat</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Nama</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold">Skor</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold">Benar</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold">Waktu</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold">Tanggal</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {leaderboardData.map((entry, index) => (
                      <tr
                        key={entry.id}
                        className={`hover:bg-gray-50 transition-colors ${
                          index < 3 ? 'bg-yellow-50' : ''
                        }`}
                      >
                        <td className="px-6 py-4">
                          <span className="text-2xl">
                            {getMedalEmoji(index + 1)}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="font-medium text-gray-900">
                            {entry.userName || 'Anonymous'}
                          </div>
                          <div className="text-sm text-gray-500">
                            {entry.userEmail}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className={`text-xl ${getScoreColor(entry.score)}`}>
                            {entry.score}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center text-gray-700">
                          {entry.correctAnswers}/{entry.totalQuestions}
                        </td>
                        <td className="px-6 py-4 text-center text-gray-700">
                          {Math.floor(entry.timeUsed / 60)}:{String(entry.timeUsed % 60).padStart(2, '0')}
                        </td>
                        <td className="px-6 py-4 text-center text-sm text-gray-500">
                          {new Date(entry.timestamp).toLocaleDateString('id-ID', {
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
            )}
          </div>
        )}

        {/* Info Cards */}
        {!loading && !error && selectedTkk && leaderboardData.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white rounded-lg shadow-md p-4 text-center">
              <p className="text-sm text-gray-600 mb-1">Skor Tertinggi</p>
              <p className="text-2xl font-bold text-green-600">
                {leaderboardData[0]?.score || 0}
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 text-center">
              <p className="text-sm text-gray-600 mb-1">Total Peserta</p>
              <p className="text-2xl font-bold text-blue-600">
                {leaderboardData.length}
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 text-center">
              <p className="text-sm text-gray-600 mb-1">Waktu Tercepat</p>
              <p className="text-2xl font-bold text-purple-600">
                {leaderboardData[0]?.timeUsed 
                  ? `${Math.floor(leaderboardData[0].timeUsed / 60)}:${String(leaderboardData[0].timeUsed % 60).padStart(2, '0')}`
                  : '-'
                }
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Leaderboard;
