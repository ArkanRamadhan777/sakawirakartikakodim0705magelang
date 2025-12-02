import React from 'react';
import { AlertCircle } from 'lucide-react';

const FailedQuestionsTable = ({ data, loading }) => {
    if (loading) {
        return (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
                <div className="h-8 bg-gray-200 rounded w-1/3 mb-6 animate-pulse"></div>
                <div className="space-y-3">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="h-16 bg-gray-100 rounded animate-pulse"></div>
                    ))}
                </div>
            </div>
        );
    }

    if (!data || data.length === 0) {
        return (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
                <h3 className="text-xl font-bold font-anta text-gray-900 mb-6">❌ Soal Paling Sering Salah</h3>
                <div className="text-center py-12 text-gray-500">
                    Belum ada data soal yang salah
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
            <h3 className="text-xl font-bold font-anta text-gray-900 mb-6">❌ Soal Paling Sering Salah (Top 10)</h3>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b-2 border-gray-200">
                            <th className="text-left py-3 px-4 font-semibold text-gray-700 text-sm">Rank</th>
                            <th className="text-left py-3 px-4 font-semibold text-gray-700 text-sm">TKK</th>
                            <th className="text-left py-3 px-4 font-semibold text-gray-700 text-sm">Soal</th>
                            <th className="text-center py-3 px-4 font-semibold text-gray-700 text-sm">Total Attempts</th>
                            <th className="text-center py-3 px-4 font-semibold text-gray-700 text-sm">Wrong</th>
                            <th className="text-center py-3 px-4 font-semibold text-gray-700 text-sm">Fail Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr
                                key={index}
                                className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                            >
                                <td className="py-3 px-4">
                                    <div className="flex items-center gap-2">
                                        {index < 3 && (
                                            <span className="text-xl">
                                                {index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}
                                            </span>
                                        )}
                                        <span className="font-semibold text-gray-700">#{index + 1}</span>
                                    </div>
                                </td>
                                <td className="py-3 px-4">
                                    <div className="text-sm font-medium text-gray-900 max-w-xs truncate">
                                        {item.tkkTitle}
                                    </div>
                                </td>
                                <td className="py-3 px-4">
                                    <div className="text-sm text-gray-700 max-w-md line-clamp-2">
                                        {item.question}
                                    </div>
                                </td>
                                <td className="py-3 px-4 text-center">
                                    <span className="text-sm font-medium text-gray-900">
                                        {item.totalAttempts}
                                    </span>
                                </td>
                                <td className="py-3 px-4 text-center">
                                    <span className="text-sm font-medium text-red-600">
                                        {item.wrongAttempts}
                                    </span>
                                </td>
                                <td className="py-3 px-4 text-center">
                                    <div className="flex items-center justify-center gap-2">
                                        <div className="relative w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                                            <div
                                                className="absolute top-0 left-0 h-full bg-red-500 rounded-full"
                                                style={{ width: `${item.failRate}%` }}
                                            ></div>
                                        </div>
                                        <span className={`text-sm font-bold ${item.failRate >= 70 ? 'text-red-600' :
                                                item.failRate >= 50 ? 'text-orange-600' :
                                                    'text-yellow-600'
                                            }`}>
                                            {item.failRate}%
                                        </span>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Info */}
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg flex items-start gap-3">
                <AlertCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                <div className="text-sm text-blue-800">
                    <strong>Info:</strong> Data ini menunjukkan soal-soal yang paling sering dijawab salah oleh pengguna.
                    Gunakan informasi ini untuk meningkatkan kualitas materi pembelajaran atau menyesuaikan tingkat kesulitan soal.
                </div>
            </div>
        </div>
    );
};

export default FailedQuestionsTable;
