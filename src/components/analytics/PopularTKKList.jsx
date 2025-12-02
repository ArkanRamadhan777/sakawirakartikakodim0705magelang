import React from 'react';
import { Trophy, TrendingUp, Target } from 'lucide-react';

const PopularTKKList = ({ data, loading }) => {
    if (loading) {
        return (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
                <div className="h-8 bg-gray-200 rounded w-1/3 mb-6 animate-pulse"></div>
                <div className="space-y-3">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="h-20 bg-gray-100 rounded animate-pulse"></div>
                    ))}
                </div>
            </div>
        );
    }

    if (!data || data.length === 0) {
        return (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
                <h3 className="text-xl font-bold font-anta text-gray-900 mb-6">🏆 TKK Paling Populer</h3>
                <div className="text-center py-12 text-gray-500">
                    Belum ada data TKK populer
                </div>
            </div>
        );
    }

    const getRankBadge = (rank) => {
        if (rank === 1) return { emoji: '🥇', color: 'bg-yellow-100 text-yellow-800 border-yellow-300' };
        if (rank === 2) return { emoji: '🥈', color: 'bg-gray-100 text-gray-800 border-gray-300' };
        if (rank === 3) return { emoji: '🥉', color: 'bg-orange-100 text-orange-800 border-orange-300' };
        return { emoji: `#${rank}`, color: 'bg-blue-50 text-blue-700 border-blue-200' };
    };

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
            <h3 className="text-xl font-bold font-anta text-gray-900 mb-6">🏆 TKK Paling Populer (Top 10)</h3>

            <div className="space-y-4">
                {data.map((item) => {
                    const badge = getRankBadge(item.rank);

                    return (
                        <div
                            key={item.rank}
                            className="p-4 border-2 border-gray-100 rounded-xl hover:border-primary/30 hover:shadow-md transition-all"
                        >
                            <div className="flex items-start gap-4">
                                {/* Rank Badge */}
                                <div className={`flex-shrink-0 w-12 h-12 rounded-lg border-2 ${badge.color} flex items-center justify-center font-bold text-lg`}>
                                    {badge.emoji}
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-bold text-gray-900 mb-2 truncate">
                                        {item.tkkTitle}
                                    </h4>

                                    <div className="grid grid-cols-3 gap-4 text-sm">
                                        <div className="flex items-center gap-2">
                                            <TrendingUp size={16} className="text-blue-600" />
                                            <div>
                                                <div className="text-xs text-gray-500">Attempts</div>
                                                <div className="font-semibold text-gray-900">{item.attempts}</div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <Target size={16} className="text-green-600" />
                                            <div>
                                                <div className="text-xs text-gray-500">Completion</div>
                                                <div className="font-semibold text-gray-900">{item.completionRate}%</div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <Trophy size={16} className="text-yellow-600" />
                                            <div>
                                                <div className="text-xs text-gray-500">Avg Score</div>
                                                <div className="font-semibold text-gray-900">{item.averageScore}%</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="mt-3">
                                        <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                                            <span>Completion Progress</span>
                                            <span>{item.completions} / {item.attempts}</span>
                                        </div>
                                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full transition-all"
                                                style={{ width: `${item.completionRate}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PopularTKKList;
