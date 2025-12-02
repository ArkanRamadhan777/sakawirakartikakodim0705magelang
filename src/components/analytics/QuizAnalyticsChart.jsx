import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

const QuizAnalyticsChart = ({ data, loading }) => {
    if (loading) {
        return (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
                <div className="h-8 bg-gray-200 rounded w-1/3 mb-6 animate-pulse"></div>
                <div className="h-80 bg-gray-100 rounded animate-pulse"></div>
            </div>
        );
    }

    if (!data || data.length === 0) {
        return (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
                <h3 className="text-xl font-bold font-anta text-gray-900 mb-6">📊 Analisis Kuis per TKK</h3>
                <div className="text-center py-12 text-gray-500">
                    Belum ada data kuis
                </div>
            </div>
        );
    }

    // Sort by attempts and take top 15
    const topData = [...data]
        .sort((a, b) => b.attempts - a.attempts)
        .slice(0, 15)
        .map(item => ({
            name: item.tkkTitle.length > 30 ? item.tkkTitle.substring(0, 30) + '...' : item.tkkTitle,
            'Completion Rate': item.completionRate,
            'Average Score': item.averageScore,
            attempts: item.attempts
        }));

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
            <h3 className="text-xl font-bold font-anta text-gray-900 mb-6">📊 Analisis Kuis per TKK (Top 15)</h3>

            {/* Completion Rate Chart */}
            <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-700 mb-4">Tingkat Penyelesaian (%)</h4>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={topData} margin={{ top: 5, right: 30, left: 20, bottom: 80 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis
                            dataKey="name"
                            angle={-45}
                            textAnchor="end"
                            height={100}
                            interval={0}
                            tick={{ fontSize: 12 }}
                        />
                        <YAxis domain={[0, 100]} />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Completion Rate" fill="#10b981" name="Completion Rate (%)" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* Average Score Chart */}
            <div>
                <h4 className="text-lg font-semibold text-gray-700 mb-4">Rata-rata Nilai (%)</h4>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={topData} margin={{ top: 5, right: 30, left: 20, bottom: 80 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis
                            dataKey="name"
                            angle={-45}
                            textAnchor="end"
                            height={100}
                            interval={0}
                            tick={{ fontSize: 12 }}
                        />
                        <YAxis domain={[0, 100]} />
                        <Tooltip />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey="Average Score"
                            stroke="#3b82f6"
                            strokeWidth={2}
                            name="Average Score (%)"
                            dot={{ r: 4 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default QuizAnalyticsChart;
