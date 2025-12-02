import React from 'react';

const DifficultyHeatmap = ({ data, loading }) => {
    if (loading) {
        return (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
                <div className="h-8 bg-gray-200 rounded w-1/3 mb-6 animate-pulse"></div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                    {[...Array(12)].map((_, i) => (
                        <div key={i} className="h-24 bg-gray-100 rounded animate-pulse"></div>
                    ))}
                </div>
            </div>
        );
    }

    if (!data || data.length === 0) {
        return (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
                <h3 className="text-xl font-bold font-anta text-gray-900 mb-6">🎯 Analisis Tingkat Kesulitan</h3>
                <div className="text-center py-12 text-gray-500">
                    Belum ada data kesulitan
                </div>
            </div>
        );
    }

    const getDifficultyColor = (difficulty) => {
        switch (difficulty) {
            case 'Easy':
                return 'bg-green-100 border-green-300 text-green-800';
            case 'Medium':
                return 'bg-yellow-100 border-yellow-300 text-yellow-800';
            case 'Hard':
                return 'bg-orange-100 border-orange-300 text-orange-800';
            case 'Very Hard':
                return 'bg-red-100 border-red-300 text-red-800';
            default:
                return 'bg-gray-100 border-gray-300 text-gray-800';
        }
    };

    const getDifficultyEmoji = (difficulty) => {
        switch (difficulty) {
            case 'Easy':
                return '😊';
            case 'Medium':
                return '🤔';
            case 'Hard':
                return '😰';
            case 'Very Hard':
                return '😱';
            default:
                return '❓';
        }
    };

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold font-anta text-gray-900">🎯 Analisis Tingkat Kesulitan</h3>

                {/* Legend */}
                <div className="flex gap-2 text-xs">
                    <div className="flex items-center gap-1">
                        <div className="w-4 h-4 bg-green-100 border border-green-300 rounded"></div>
                        <span>Easy</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="w-4 h-4 bg-yellow-100 border border-yellow-300 rounded"></div>
                        <span>Medium</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="w-4 h-4 bg-orange-100 border border-orange-300 rounded"></div>
                        <span>Hard</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="w-4 h-4 bg-red-100 border border-red-300 rounded"></div>
                        <span>Very Hard</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className={`p-4 rounded-lg border-2 transition-all hover:scale-105 cursor-pointer ${getDifficultyColor(item.difficulty)}`}
                        title={`${item.tkkTitle}\nAvg Score: ${item.averageScore}%\nCompletion: ${item.completionRate}%`}
                    >
                        <div className="text-2xl mb-2 text-center">
                            {getDifficultyEmoji(item.difficulty)}
                        </div>
                        <div className="text-xs font-semibold text-center mb-1 line-clamp-2">
                            {item.tkkTitle}
                        </div>
                        <div className="text-xs text-center opacity-75">
                            {item.averageScore}% avg
                        </div>
                        <div className="text-xs font-bold text-center mt-1">
                            {item.difficulty}
                        </div>
                    </div>
                ))}
            </div>

            {/* Summary */}
            <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                        <div className="text-2xl font-bold text-green-600">
                            {data.filter(d => d.difficulty === 'Easy').length}
                        </div>
                        <div className="text-sm text-gray-600">Easy</div>
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-yellow-600">
                            {data.filter(d => d.difficulty === 'Medium').length}
                        </div>
                        <div className="text-sm text-gray-600">Medium</div>
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-orange-600">
                            {data.filter(d => d.difficulty === 'Hard').length}
                        </div>
                        <div className="text-sm text-gray-600">Hard</div>
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-red-600">
                            {data.filter(d => d.difficulty === 'Very Hard').length}
                        </div>
                        <div className="text-sm text-gray-600">Very Hard</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DifficultyHeatmap;
