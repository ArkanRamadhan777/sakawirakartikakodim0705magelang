import React from 'react';
import { Users, FileText, Award, TrendingUp } from 'lucide-react';

const AnalyticsOverview = ({ stats, loading }) => {
    if (loading) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[1, 2, 3, 4].map(i => (
                    <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 animate-pulse">
                        <div className="h-12 bg-gray-200 rounded mb-4"></div>
                        <div className="h-8 bg-gray-200 rounded mb-2"></div>
                        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                    </div>
                ))}
            </div>
        );
    }

    const cards = [
        {
            title: 'Total Pengguna',
            value: stats.totalUsers || 0,
            icon: Users,
            color: 'blue',
            bgColor: 'bg-blue-50',
            iconColor: 'text-blue-600',
            description: 'Pengguna terdaftar'
        },
        {
            title: 'Total Kuis',
            value: stats.totalQuizzes || 0,
            icon: FileText,
            color: 'green',
            bgColor: 'bg-green-50',
            iconColor: 'text-green-600',
            description: 'Kuis diselesaikan'
        },
        {
            title: 'Rata-rata Nilai',
            value: `${stats.averageScore || 0}%`,
            icon: Award,
            color: 'yellow',
            bgColor: 'bg-yellow-50',
            iconColor: 'text-yellow-600',
            description: 'Nilai keseluruhan'
        },
        {
            title: 'Pengguna Aktif',
            value: stats.activeUsersLast7Days || 0,
            icon: TrendingUp,
            color: 'purple',
            bgColor: 'bg-purple-50',
            iconColor: 'text-purple-600',
            description: '7 hari terakhir'
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {cards.map((card, index) => (
                <div
                    key={index}
                    className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
                >
                    <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 rounded-xl ${card.bgColor}`}>
                            <card.icon className={`${card.iconColor}`} size={24} />
                        </div>
                    </div>
                    <div className="text-3xl font-bold font-anta text-gray-900 mb-1">
                        {card.value}
                    </div>
                    <div className="text-sm font-semibold text-gray-700 mb-1">
                        {card.title}
                    </div>
                    <div className="text-xs text-gray-500">
                        {card.description}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AnalyticsOverview;
