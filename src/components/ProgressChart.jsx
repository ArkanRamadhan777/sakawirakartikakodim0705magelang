import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const ProgressChart = ({ quizResults }) => {
    // Prepare data for chart
    const chartData = quizResults
        .slice(0, 20) // Last 20 quizzes
        .reverse() // Oldest first
        .map((result, index) => ({
            name: `#${index + 1}`,
            nilai: result.score,
            tanggal: new Date(result.timestamp?.toDate()).toLocaleDateString('id-ID', {
                day: 'numeric',
                month: 'short'
            })
        }));

    if (chartData.length === 0) {
        return (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center">
                <p className="text-gray-500">Belum ada data untuk ditampilkan</p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Perkembangan Nilai</h3>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey="tanggal"
                        tick={{ fontSize: 12 }}
                        angle={-45}
                        textAnchor="end"
                        height={60}
                    />
                    <YAxis
                        domain={[0, 100]}
                        tick={{ fontSize: 12 }}
                    />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: '#fff',
                            border: '1px solid #ccc',
                            borderRadius: '8px'
                        }}
                    />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="nilai"
                        stroke="#DC2626"
                        strokeWidth={2}
                        dot={{ fill: '#DC2626', r: 4 }}
                        activeDot={{ r: 6 }}
                        name="Nilai (%)"
                    />
                </LineChart>
            </ResponsiveContainer>
            <p className="text-sm text-gray-500 mt-4 text-center">
                Menampilkan {chartData.length} kuis terakhir
            </p>
        </div>
    );
};

export default ProgressChart;
