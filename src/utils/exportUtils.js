/**
 * Export data to CSV file
 * @param {Array} data - Array of objects to export
 * @param {string} filename - Name of the CSV file
 */
export const exportToCSV = (data, filename) => {
    if (!data || data.length === 0) {
        alert('Tidak ada data untuk diekspor');
        return;
    }

    // Get headers from first object
    const headers = Object.keys(data[0]);

    // Create CSV content
    let csvContent = headers.join(',') + '\n';

    data.forEach(row => {
        const values = headers.map(header => {
            const value = row[header];
            // Escape commas and quotes
            if (typeof value === 'string' && (value.includes(',') || value.includes('"'))) {
                return `"${value.replace(/"/g, '""')}"`;
            }
            return value;
        });
        csvContent += values.join(',') + '\n';
    });

    // Create blob and download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);

    link.setAttribute('href', url);
    link.setAttribute('download', `${filename}.csv`);
    link.style.visibility = 'hidden';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

/**
 * Export quiz analytics data
 * @param {Array} analyticsData - Quiz analytics data
 */
export const exportQuizAnalytics = (analyticsData) => {
    const exportData = analyticsData.map(item => ({
        'TKK ID': item.tkkId,
        'TKK Title': item.tkkTitle,
        'Total Attempts': item.attempts,
        'Completions': item.completions,
        'Completion Rate (%)': item.completionRate,
        'Average Score (%)': item.averageScore,
        'Median Score (%)': item.medianScore || 0,
        'Difficulty': item.difficulty || 'N/A'
    }));

    const timestamp = new Date().toISOString().split('T')[0];
    exportToCSV(exportData, `quiz-analytics-${timestamp}`);
};

/**
 * Export user engagement data
 * @param {Array} engagementData - User engagement data
 */
export const exportUserEngagement = (engagementData) => {
    const exportData = engagementData.map(item => ({
        'Date': item.date,
        'Active Users': item.activeUsers,
        'Quizzes Completed': item.quizzes
    }));

    const timestamp = new Date().toISOString().split('T')[0];
    exportToCSV(exportData, `user-engagement-${timestamp}`);
};

/**
 * Export failed questions data
 * @param {Array} failedQuestionsData - Failed questions data
 */
export const exportFailedQuestions = (failedQuestionsData) => {
    const exportData = failedQuestionsData.map(item => ({
        'TKK Title': item.tkkTitle,
        'Question': item.question,
        'Total Attempts': item.totalAttempts,
        'Wrong Attempts': item.wrongAttempts,
        'Fail Rate (%)': item.failRate
    }));

    const timestamp = new Date().toISOString().split('T')[0];
    exportToCSV(exportData, `failed-questions-${timestamp}`);
};

/**
 * Export overall statistics
 * @param {Object} stats - Overall statistics
 */
export const exportOverallStats = (stats) => {
    const exportData = [{
        'Metric': 'Total Users',
        'Value': stats.totalUsers
    }, {
        'Metric': 'Total Quizzes',
        'Value': stats.totalQuizzes
    }, {
        'Metric': 'Average Score (%)',
        'Value': stats.averageScore
    }, {
        'Metric': 'Active Users (Last 7 Days)',
        'Value': stats.activeUsersLast7Days
    }, {
        'Metric': 'Active Users (Last 30 Days)',
        'Value': stats.activeUsersLast30Days
    }];

    const timestamp = new Date().toISOString().split('T')[0];
    exportToCSV(exportData, `overall-stats-${timestamp}`);
};
