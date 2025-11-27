import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';

const LeaderboardOverall = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    loadOverallLeaderboard();
  }, []);

  const loadOverallLeaderboard = async () => {
    setLoading(true);
    setError('');
    try {
      const querySnapshot = await getDocs(collection(db, 'quiz_results'));
      const userScores = {};
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const key = data.userId;
        if (!userScores[key]) {
          userScores[key] = {
            userName: data.userName || data.userEmail,
            userEmail: data.userEmail,
            totalScore: 0,
            totalQuizzes: 0,
            fastestTime: data.timeUsed,
          };
        }
        userScores[key].totalScore += data.score;
        userScores[key].totalQuizzes += 1;
        if (data.timeUsed < userScores[key].fastestTime) {
          userScores[key].fastestTime = data.timeUsed;
        }
      });
      const sorted = Object.values(userScores).sort((a, b) => b.totalScore - a.totalScore);
      setLeaderboardData(sorted.slice(0, 20));
    } catch (err) {
      console.error('Error loading overall leaderboard:', err);
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">🏆 Leaderboard Overall</h1>
          <p className="text-gray-600">Peringkat peserta terbaik semua TKK</p>
        </div>
        {loading && (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Memuat leaderboard...</p>
          </div>
        )}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <p className="text-red-600 text-center">{error}</p>
          </div>
        )}
        {!loading && !error && (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {leaderboardData.length === 0 ? (
              <div className="p-12 text-center text-gray-500">
                <p className="text-xl mb-2">📊</p>
                <p>Belum ada data leaderboard</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Peringkat</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Nama</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold">Total Skor</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold">Quiz Diikuti</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold">Waktu Tercepat</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {leaderboardData.map((entry, index) => (
                      <tr key={entry.userEmail} className={`hover:bg-gray-50 transition-colors ${index < 3 ? 'bg-yellow-50' : ''}`}>
                        <td className="px-6 py-4">
                          <span className="text-2xl">{getMedalEmoji(index + 1)}</span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="font-medium text-gray-900">{entry.userName}</div>
                          <div className="text-sm text-gray-500">{entry.userEmail}</div>
                        </td>
                        <td className="px-6 py-4 text-center text-green-700 font-bold text-xl">{entry.totalScore}</td>
                        <td className="px-6 py-4 text-center text-blue-700 font-semibold">{entry.totalQuizzes}</td>
                        <td className="px-6 py-4 text-center text-purple-700 font-semibold">{Math.floor(entry.fastestTime / 60)}:{String(entry.fastestTime % 60).padStart(2, '0')}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default LeaderboardOverall;
