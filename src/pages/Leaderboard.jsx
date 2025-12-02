import { useState, useEffect, useMemo } from 'react';
import { getTkkLeaderboard } from '../services/quizService';
import { kridas } from '../data/kridas';
import { Listbox } from '@headlessui/react';
// Import ikon yang dibutuhkan
import { Award, Check, ChevronDown, BadgeCent, Star, User } from 'lucide-react'; 
import { useAuth } from '../contexts/AuthContext';
import Breadcrumbs from '../components/Breadcrumbs';

// --- FUNGSI PEMBANTU ---

// Fungsi untuk memformat waktu (detik ke MM:SS)
const formatTime = (seconds) => {
    if (typeof seconds !== 'number' || !isFinite(seconds) || seconds < 0) {
        return 'N/A';
    }
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
};

// Fungsi untuk format tanggal (Contoh: 15 Okt 2025)
const formatDate = (timestamp) => {
    if (!timestamp) return 'N/A';
    return new Date(timestamp).toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });
};

// Fungsi untuk mendapatkan ikon peringkat (BadgeCent untuk 1-3, Angka untuk 4+)
const getMedalIcon = (rank) => {
  let iconColor = 'text-gray-400';
  let iconFill = 'fill-gray-400';
  let rankTextColor = 'text-white';
  
  if (rank === 1) {
    iconColor = 'text-yellow-500'; // Emas
    iconFill = 'fill-yellow-500';
    rankTextColor = 'text-gray-900';
  } else if (rank === 2) {
    iconColor = 'text-gray-400'; // Perak
    iconFill = 'fill-gray-400';
  } else if (rank === 3) {
    iconColor = 'text-amber-700'; // Perunggu
    iconFill = 'fill-amber-700';
  }

  // Peringkat 1, 2, dan 3
  if (rank <= 3) {
    return (
      <div className="flex items-center">
        <div className="relative w-7 h-7 flex items-center justify-center">
          <BadgeCent className={`${iconColor} ${iconFill} absolute`} size={28} />
          <span className={`text-xs font-extrabold z-10 ${rankTextColor}`}>
            {rank}
          </span>
        </div>
      </div>
    );
  }
  
  // Peringkat di bawah 3
  return (
    <div className="flex items-center text-gray-600 pl-2">
      <span className="font-semibold text-base">{rank}</span> 
    </div>
  );
};

// --- KOMPONEN UTAMA ---
const Leaderboard = () => {
    
    // Properti CSS untuk menyembunyikan scrollbar (Chrome, Firefox, IE/Edge)
    const hideScrollbar = `
        .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
            display: none;
        }
    `;

    // Ambil semua TKK (hanya ID dan Nama TKK)
    const tkkOptions = useMemo(() =>
        kridas.flatMap(krida =>
            krida.tkk.map(tkk => ({
                id: tkk.id,
                name: tkk.title,
            }))
        ), []
    );

    // Set nilai awal selectedTkk ke string kosong ('') untuk menampilkan 'Pilih TKK'
    const [selectedTkk, setSelectedTkk] = useState('');

    const [leaderboardData, setLeaderboardData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const { currentUser } = useAuth(); 

    const selectedTkkObject = tkkOptions.find(tkk => tkk.id === selectedTkk) || null;

    useEffect(() => {
        // HANYA memuat data jika TKK sudah dipilih
        if (selectedTkk) {
            loadLeaderboard();
        } else {
            setLeaderboardData([]);
            setLoading(false); 
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedTkk]); 

    const loadLeaderboard = async () => {
        setLoading(true);
        setError('');
        try {
            const data = await getTkkLeaderboard(selectedTkk, 50); 
            setLeaderboardData(data);
        } catch (err) {
            console.error('Error loading leaderboard:', err);
            setError('Gagal memuat leaderboard');
        } finally {
            setLoading(false);
        }
    };

    const getScoreColor = (score) => {
        return 'text-red-600 font-bold';
    };

    return (
        <>
            {/* Sisipkan style untuk menyembunyikan scrollbar */}
            <style>{hideScrollbar}</style>
            
            <Breadcrumbs items={[{ label: 'Leaderboard' }]} />

            {/* TKK Selector with Listbox */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pilih TKK untuk melihat peringkat:
                </label>
                <Listbox value={selectedTkk} onChange={setSelectedTkk}>
                    <div className="relative">
                        <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-white py-3 pl-4 pr-10 text-left shadow-md border-2 border-gray-300 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all">
                            <span className="block truncate font-medium text-gray-800">
                                {/* Teks Listbox Button: Hanya TKK atau Pilih TKK */}
                                {selectedTkkObject 
                                    ? `TKK ${selectedTkkObject.name}` 
                                    : 'Pilih TKK'
                                }
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                <ChevronDown className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </span>
                        </Listbox.Button>
                        
                        {/* Listbox Options: Tambahkan class 'hide-scrollbar' */}
                        <Listbox.Options className="absolute z-10 mt-2 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 shadow-xl border-2 border-gray-200 focus:outline-none hide-scrollbar">
                            
                            {/* Opsi default yang tidak bisa dipilih */}
                            <Listbox.Option
                                disabled
                                value=""
                                className="relative cursor-default select-none py-3 pl-10 pr-4 text-gray-500 font-medium bg-gray-50"
                            >
                                Pilih TKK
                            </Listbox.Option>

                            {tkkOptions.map((tkk) => (
                                <Listbox.Option
                                    key={tkk.id}
                                    value={tkk.id}
                                    className={({ active }) =>
                                        `relative cursor-pointer select-none py-3 pl-10 pr-4 transition-colors ${active ? 'bg-red-50 text-red-900' : 'text-gray-900'
                                        }`
                                    }
                                >
                                    {({ selected }) => (
                                        <>
                                            <span className={`block truncate ${selected ? 'font-semibold' : 'font-normal'}`}>
                                                TKK {tkk.name}
                                            </span>
                                            {selected && (
                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-red-600">
                                                    <Check className="h-5 w-5" aria-hidden="true" />
                                                </span>
                                            )}
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </div>
                </Listbox>
            </div>

            {/* Loading State */}
            {loading && (
                <div className="bg-white rounded-lg shadow-md p-12 text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
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
                        <div className="overflow-x-auto hide-scrollbar"> {/* Class 'hide-scrollbar' pada tabel */}
                            <table className="w-full">
                                <thead className="bg-gradient-to-r from-red-600 to-gray-900 text-white">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-sm font-semibold">Peringkat</th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold">Nama</th>
                                        <th className="px-6 py-4 text-center text-sm font-semibold">Benar</th>
                                        <th className="px-6 py-4 text-center text-sm font-semibold">Skor Nilai</th>
                                        <th className="px-6 py-4 text-center text-sm font-semibold">Waktu</th>
                                        <th className="px-6 py-4 text-center text-sm font-semibold">Tanggal</th>
                                        <th className="px-6 py-4 text-center text-sm font-semibold">Skor Akhir</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {leaderboardData.map((entry, index) => {
                                        const rank = index + 1;
                                        const isCurrentUser = currentUser && entry.userId === currentUser.uid;

                                        return (
                                            <tr
                                                key={entry.id}
                                                className={`transition-colors ${isCurrentUser ? 'bg-red-100 hover:bg-red-200 font-bold' : 'hover:bg-gray-50'} ${rank <= 3 ? 'bg-red-50' : ''}`}
                                            >
                                                <td className="px-6 py-4">
                                                    {getMedalIcon(rank)}
                                                </td>

                                                <td className="px-6 py-4">
                                                    <div className="font-medium text-gray-900 flex items-center gap-2">
                                                        {isCurrentUser ? (
                                                            <Star size={20} className="text-red-500 fill-red-500" />
                                                        ) : (
                                                            <User size={20} className="text-gray-500" />
                                                        )}
                                                        <span>{entry.userName || entry.userEmail || 'Anonymous'}</span>
                                                    </div>
                                                </td>
                                                
                                                <td className="px-6 py-4 text-center text-gray-700">
                                                    {entry.correctAnswers}/{entry.totalQuestions}
                                                </td>
                                                
                                                <td className="px-6 py-4 text-center">
                                                    <span className="text-lg font-bold text-gray-700">
                                                        {entry.scoreValue || (entry.correctAnswers * 5)}
                                                    </span>
                                                </td>
                                                
                                                <td className="px-6 py-4 text-center text-gray-700">
                                                    {formatTime(entry.timeUsed)}
                                                </td>
                                                
                                                <td className="px-6 py-4 text-center text-sm text-gray-500">
                                                    {formatDate(entry.timestamp)}
                                                </td>
                                                
                                                <td className="px-6 py-4 text-center">
                                                    <span className="text-xl font-black text-primary">
                                                        {entry.finalScore ? entry.finalScore.toFixed(2) : ((entry.scoreValue || entry.correctAnswers * 5) + (entry.timeUsed >= 600 ? 0 : (1 - (entry.timeUsed / 600)) * 20)).toFixed(2)}
                                                    </span>
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

            {/* Empty State KETIKA BELUM MEMILIH TKK */}
            {!loading && !error && !selectedTkk && (
                <div className="bg-white rounded-lg shadow-md p-16 text-center text-gray-600">
                    <p className="text-xl font-semibold">Silakan Pilih TKK di atas</p>
                    <p className="text-md mt-2">Peringkat akan muncul setelah Anda memilih salah satu TKK.</p>
                </div>
            )}
        </>
    );
};

export default Leaderboard;