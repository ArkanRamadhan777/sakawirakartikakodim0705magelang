import { useState, useEffect, useCallback } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';
// Impor ikon: Award, User, Clock, Star, dan BadgeCent.
import { Award, User, Clock, Star, BadgeCent } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

// Fungsi pembantu untuk memformat waktu dari detik menjadi MM:SS
const formatTime = (seconds) => {
  if (typeof seconds !== 'number' || !isFinite(seconds)) {
    return 'N/A';
  }
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
};

// Fungsi pembantu untuk menentukan ikon/peringkat
const getMedalIcon = (rank) => {
  let iconColor = 'text-gray-400';
  let iconFill = 'fill-gray-400';
  let rankTextColor = 'text-white';
  
  // Tentukan warna berdasarkan peringkat
  if (rank === 1) {
    iconColor = 'text-yellow-500'; // Emas
    iconFill = 'fill-yellow-500';
    rankTextColor = 'text-gray-900'; // Angka hitam agar kontras dengan emas
  } else if (rank === 2) {
    iconColor = 'text-gray-400'; // Perak
    iconFill = 'fill-gray-400';
  } else if (rank === 3) {
    iconColor = 'text-amber-700'; // Perunggu
    iconFill = 'fill-amber-700';
  }

  // LOGIKA 1: Peringkat 1, 2, dan 3 (Badge + Angka di tengah)
  if (rank <= 3) {
    return (
      <div className="flex items-center gap-2">
        {/* Kontainer Relatif untuk Menumpuk Ikon dan Angka */}
        <div className="relative w-7 h-7 flex items-center justify-center">
          
          {/* 1. Ikon Lencana (BadgeCent) */}
          <BadgeCent className={`${iconColor} ${iconFill} absolute`} size={28} />
          
          {/* 2. Angka Peringkat (Tepat di Tengah Ikon) */}
          <span className={`text-xs font-extrabold z-10 ${rankTextColor}`}>
            {rank}
          </span>
        </div>
      </div>
    );
  }
  
  // LOGIKA 2: Peringkat di bawah 3 (Hanya Angka Saja)
  return (
    <div className="flex items-center gap-2 text-gray-600">
      <span className="font-semibold text-base">{rank}</span> 
    </div>
  );
};

// --- Komponen Utama ---
const LeaderboardOverall = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { currentUser } = useAuth();

  const loadOverallLeaderboard = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const querySnapshot = await getDocs(collection(db, 'quiz_results'));
      const userScores = {};

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const key = data.userId;

        const currentTimeUsed = data.timeUsed || Infinity;

        if (!userScores[key]) {
          userScores[key] = {
            userId: data.userId,
            userName: data.userName || data.userEmail,
            userEmail: data.userEmail,
            totalScore: 0,
            totalQuizzes: 0,
            fastestTime: currentTimeUsed,
          };
        }

        userScores[key].totalScore += data.score;
        userScores[key].totalQuizzes += 1;

        if (currentTimeUsed < userScores[key].fastestTime) {
          userScores[key].fastestTime = currentTimeUsed;
        }
      });

      let finalLeaderboard = Object.values(userScores);

      // Urutkan leaderboard: 1. Skor Total (turun), 2. Waktu Tercepat (naik)
      finalLeaderboard.sort((a, b) => {
        if (b.totalScore !== a.totalScore) {
          return b.totalScore - a.totalScore;
        }
        return a.fastestTime - b.fastestTime;
      });

      setLeaderboardData(finalLeaderboard);

    } catch (err) {
      console.error("Gagal memuat leaderboard:", err);
      setError("Gagal memuat data leaderboard. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadOverallLeaderboard();
  }, [loadOverallLeaderboard]);

  // PENGEMBALIAN JSX UTAMA KOMPONEN
  return (
    <>
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <Award className="text-red-600" size={28} />
        Leaderboard Keseluruhan
      </h2>
      {/* Bagian Loading dan Error */}
      {loading && (
        <div className="bg-white rounded-lg shadow-md p-12 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Memuat leaderboard...</p>
        </div>
      )}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <p className="text-red-600 text-center">{error}</p>
        </div>
      )}

      {/* Bagian Tampilan Data */}
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
                <thead className="bg-gradient-to-r from-red-600 to-gray-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Peringkat</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Nama</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold">
                      <div className="flex items-center justify-end">
                        Skor Total
                      </div>
                    </th>
                    <th className="px-6 py-4 text-right text-sm font-semibold">
                      <div className="flex items-center justify-end gap-1">
                        Kuis Selesai
                      </div>
                    </th>
                    <th className="px-6 py-4 text-right text-sm font-semibold">
                      <div className="flex items-center justify-end gap-1">
                        <Clock size={16} /> Waktu Tercepat
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {leaderboardData.map((user, index) => {
                    const rank = index + 1;
                    const isCurrentUser = currentUser && user.userId === currentUser.uid;

                    return (
                      <tr
                        key={user.userId}
                        // Penanda baris pengguna yang sedang login
                        className={`transition duration-150 ${
                          isCurrentUser ? 'bg-red-100 hover:bg-red-200 font-bold' : 'hover:bg-gray-50'
                        }`}
                      >
                        {/* Peringkat */}
                        <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-900">
                          {getMedalIcon(rank)}
                        </td>

                        {/* Nama (Termasuk ikon penanda pengguna) */}
                        <td className="px-6 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                          <div className="flex items-center gap-3">
                            {/* Ikon untuk Pengguna Saat Ini: Bintang Merah */}
                            {isCurrentUser ? (
                              <Star size={20} className="text-red-500 fill-red-500" />
                            ) : (
                              <User size={20} className="text-gray-500" />
                            )}
                            <span>{user.userName}</span>
                          </div>
                        </td>

                        {/* Skor Total */}
                        <td className="px-6 py-3 whitespace-nowrap text-sm text-right font-extrabold text-red-600">
                          {user.totalScore.toLocaleString()}
                        </td>

                        {/* Kuis Selesai */}
                        <td className="px-6 py-3 whitespace-nowrap text-sm text-right text-gray-700">
                          {user.totalQuizzes}
                        </td>

                        {/* Waktu Tercepat */}
                        <td className="px-6 py-3 whitespace-nowrap text-sm text-right text-gray-700">
                          <span className="font-mono text-base">{formatTime(user.fastestTime)}</span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default LeaderboardOverall;