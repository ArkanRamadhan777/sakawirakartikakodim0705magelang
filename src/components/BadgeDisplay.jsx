import React from 'react';

/**
 * Component untuk menampilkan daftar badge (lencana) yang telah didapatkan 
 * dan yang masih terkunci.
 * * Asumsi: Struktur data badge adalah:
 * { 
 * id: number, 
import React from 'react';

/**
 * Component untuk menampilkan daftar badge (lencana) yang telah didapatkan 
 * dan yang masih terkunci.
 * * Asumsi: Struktur data badge adalah:
 * { 
 * id: number, 
 * name: string, 
 * description: string, 
 * icon: string (atau JSX), 
 * earned: boolean 
 * }
 */
const BadgeDisplay = ({ badges }) => {
    // 1. Memfilter badge yang sudah didapatkan (earned: true)
    const earnedBadges = badges.filter(b => b.earned);

    // Component helper untuk merender satu badge
    const BadgeCard = ({ badge }) => (
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-primary-400 hover:scale-[1.03] shadow-primary-200/50 transition-all duration-300">

            {/* Ikon Badge */}
            <div className="text-5xl mb-3 flex justify-center text-primary-600">
                {badge.icon}
            </div>

            {/* Nama Badge */}
            <h4 className="font-extrabold text-lg text-center truncate mb-1" title={badge.name}>
                {badge.name}
            </h4>

            {/* Status & Deskripsi */}
            <p className="text-xs text-center italic text-green-600 font-semibold">
                Didapatkan
            </p>
            <p className="text-sm text-gray-600 mt-2 text-center">
                {badge.description}
            </p>
        </div>
    );

    return (
        <div className="space-y-10">
            {/* Bagian Badge yang Didapatkan */}
            <div>
                <h3 className="text-2xl font-bold mb-4 border-b pb-2 text-gray-800">
                    🏆 Lencana yang Didapatkan ({earnedBadges.length})
                </h3>
                {earnedBadges.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {earnedBadges.map(badge => (
                            <BadgeCard key={badge.id} badge={badge} />
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-600 italic">Belum ada lencana yang didapatkan.</p>
                )}
            </div>
        </div>
    );
};

export default BadgeDisplay;