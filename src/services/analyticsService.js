import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../config/firebase';
import { kridas } from '../data/kridas';
import { quizzes } from '../data/quizzes';

// Cache for analytics data (5 minutes)
const CACHE_DURATION = 5 * 60 * 1000;
let analyticsCache = {
    overallStats: { data: null, timestamp: 0 },
    quizAnalytics: { data: null, timestamp: 0 },
    userEngagement: { data: null, timestamp: 0 },
    popularTKK: { data: null, timestamp: 0 },
    difficultyAnalysis: { data: null, timestamp: 0 },
    failedQuestions: { data: null, timestamp: 0 }
};

/**
 * Check if cached data is still valid
 */
const isCacheValid = (cacheKey) => {
    const cached = analyticsCache[cacheKey];
    return cached.data && (Date.now() - cached.timestamp) < CACHE_DURATION;
};

/**
 * Set cache data
 */
const setCache = (cacheKey, data) => {
    analyticsCache[cacheKey] = {
        data,
        timestamp: Date.now()
    };
};

/**
 * Get all quiz results from all users
 */
const getAllQuizResults = async () => {
    try {
        const quizResultsRef = collection(db, 'quiz_results');
        const resultsSnapshot = await getDocs(quizResultsRef);

        const allResults = [];
        resultsSnapshot.forEach(doc => {
            allResults.push({
                id: doc.id,
                ...doc.data()
            });
        });

        console.log('Total quiz results fetched:', allResults.length);
        return allResults;
    } catch (error) {
        console.error('Error fetching all quiz results:', error);
        return [];
    }
};

/**
 * Get overall statistics
 * @returns {Object} Overall stats including total users, quizzes, average score
 */
export const getOverallStats = async () => {
    try {
        // Check cache
        if (isCacheValid('overallStats')) {
            return analyticsCache.overallStats.data;
        }

        const quizResultsRef = collection(db, 'quiz_results');
        const resultsSnapshot = await getDocs(quizResultsRef);

        let totalQuizzes = 0;
        let totalScore = 0;
        let uniqueUsers = new Set();
        let activeUsersLast7Days = new Set();
        let activeUsersLast30Days = new Set();

        const now = Date.now();
        const sevenDaysAgo = now - (7 * 24 * 60 * 60 * 1000);
        const thirtyDaysAgo = now - (30 * 24 * 60 * 60 * 1000);

        resultsSnapshot.forEach(doc => {
            const data = doc.data();
            totalQuizzes++;
            totalScore += data.score || 0;
            
            if (data.userId) {
                uniqueUsers.add(data.userId);
                
                const timestamp = new Date(data.timestamp).getTime();
                if (timestamp > sevenDaysAgo) activeUsersLast7Days.add(data.userId);
                if (timestamp > thirtyDaysAgo) activeUsersLast30Days.add(data.userId);
            }
        });

        const stats = {
            totalUsers: uniqueUsers.size,
            totalQuizzes,
            averageScore: totalQuizzes > 0 ? Math.round(totalScore / totalQuizzes) : 0,
            activeUsersLast7Days: activeUsersLast7Days.size,
            activeUsersLast30Days: activeUsersLast30Days.size
        };

        console.log('Overall stats:', stats);
        setCache('overallStats', stats);
        return stats;
    } catch (error) {
        console.error('Error getting overall stats:', error);
        return {
            totalUsers: 0,
            totalQuizzes: 0,
            averageScore: 0,
            activeUsersLast7Days: 0,
            activeUsersLast30Days: 0
        };
    }
};

/**
 * Get quiz analytics per TKK
 * @returns {Array} Array of TKK analytics
 */
export const getQuizAnalytics = async () => {
    try {
        // Check cache
        if (isCacheValid('quizAnalytics')) {
            return analyticsCache.quizAnalytics.data;
        }

        const allResults = await getAllQuizResults();

        // Group by TKK
        const tkkStats = {};

        allResults.forEach(result => {
            const tkkId = result.tkkId;
            if (!tkkStats[tkkId]) {
                tkkStats[tkkId] = {
                    tkkId,
                    tkkTitle: result.tkkTitle || tkkId,
                    attempts: 0,
                    completions: 0,
                    totalScore: 0,
                    scores: []
                };
            }

            tkkStats[tkkId].attempts++;
            tkkStats[tkkId].totalScore += result.score || 0;
            tkkStats[tkkId].scores.push(result.score || 0);

            if (result.score >= 60) {
                tkkStats[tkkId].completions++;
            }
        });

        // Calculate analytics
        const analytics = Object.values(tkkStats).map(tkk => ({
            tkkId: tkk.tkkId,
            tkkTitle: tkk.tkkTitle,
            attempts: tkk.attempts,
            completions: tkk.completions,
            completionRate: tkk.attempts > 0 ? Math.round((tkk.completions / tkk.attempts) * 100) : 0,
            averageScore: tkk.attempts > 0 ? Math.round(tkk.totalScore / tkk.attempts) : 0,
            medianScore: calculateMedian(tkk.scores)
        }));

        setCache('quizAnalytics', analytics);
        return analytics;
    } catch (error) {
        console.error('Error getting quiz analytics:', error);
        return [];
    }
};

/**
 * Get user engagement metrics
 * @returns {Object} User engagement data
 */
export const getUserEngagement = async () => {
    try {
        // Check cache
        if (isCacheValid('userEngagement')) {
            return analyticsCache.userEngagement.data;
        }

        const allResults = await getAllQuizResults();

        // Group by date
        const dailyActivity = {};

        allResults.forEach(result => {
            const timestamp = result.timestamp?.toMillis() || 0;
            const date = new Date(timestamp).toISOString().split('T')[0];

            if (!dailyActivity[date]) {
                dailyActivity[date] = {
                    date,
                    users: new Set(),
                    quizzes: 0
                };
            }

            dailyActivity[date].users.add(result.userId);
            dailyActivity[date].quizzes++;
        });

        // Convert to array and calculate metrics
        const engagement = Object.values(dailyActivity)
            .map(day => ({
                date: day.date,
                activeUsers: day.users.size,
                quizzes: day.quizzes
            }))
            .sort((a, b) => a.date.localeCompare(b.date))
            .slice(-30); // Last 30 days

        setCache('userEngagement', engagement);
        return engagement;
    } catch (error) {
        console.error('Error getting user engagement:', error);
        return [];
    }
};

/**
 * Get popular TKK
 * @returns {Array} Array of popular TKK
 */
export const getPopularTKK = async () => {
    try {
        // Check cache
        if (isCacheValid('popularTKK')) {
            return analyticsCache.popularTKK.data;
        }

        const analytics = await getQuizAnalytics();

        // Sort by attempts and get top 10
        const popular = analytics
            .sort((a, b) => b.attempts - a.attempts)
            .slice(0, 10)
            .map((tkk, index) => ({
                rank: index + 1,
                ...tkk
            }));

        setCache('popularTKK', popular);
        return popular;
    } catch (error) {
        console.error('Error getting popular TKK:', error);
        return [];
    }
};

/**
 * Get difficulty analysis
 * @returns {Array} Array of TKK with difficulty ratings
 */
export const getDifficultyAnalysis = async () => {
    try {
        // Check cache
        if (isCacheValid('difficultyAnalysis')) {
            return analyticsCache.difficultyAnalysis.data;
        }

        const analytics = await getQuizAnalytics();

        // Calculate difficulty based on average score and completion rate
        const difficultyData = analytics.map(tkk => {
            let difficulty = 'Medium';
            let difficultyScore = 50;

            // Lower average score = harder
            // Lower completion rate = harder
            const combinedScore = (tkk.averageScore + tkk.completionRate) / 2;

            if (combinedScore >= 75) {
                difficulty = 'Easy';
                difficultyScore = 25;
            } else if (combinedScore >= 60) {
                difficulty = 'Medium';
                difficultyScore = 50;
            } else if (combinedScore >= 45) {
                difficulty = 'Hard';
                difficultyScore = 75;
            } else {
                difficulty = 'Very Hard';
                difficultyScore = 90;
            }

            return {
                ...tkk,
                difficulty,
                difficultyScore
            };
        });

        setCache('difficultyAnalysis', difficultyData);
        return difficultyData;
    } catch (error) {
        console.error('Error getting difficulty analysis:', error);
        return [];
    }
};

/**
 * Get most failed questions
 * @returns {Array} Array of questions with high fail rates
 */
export const getFailedQuestions = async () => {
    try {
        // Check cache
        if (isCacheValid('failedQuestions')) {
            return analyticsCache.failedQuestions.data;
        }

        const allResults = await getAllQuizResults();

        // Aggregate wrong answers
        const questionStats = {};

        allResults.forEach(result => {
            if (result.answers && Array.isArray(result.answers)) {
                result.answers.forEach((answer, index) => {
                    const questionKey = `${result.tkkId}_${index}`;

                    if (!questionStats[questionKey]) {
                        questionStats[questionKey] = {
                            tkkId: result.tkkId,
                            tkkTitle: result.tkkTitle || result.tkkId,
                            questionIndex: index,
                            totalAttempts: 0,
                            wrongAttempts: 0,
                            question: answer.question || `Question ${index + 1}`
                        };
                    }

                    questionStats[questionKey].totalAttempts++;
                    if (!answer.correct) {
                        questionStats[questionKey].wrongAttempts++;
                    }
                });
            }
        });

        // Calculate fail rates and sort
        const failedQuestions = Object.values(questionStats)
            .map(q => ({
                ...q,
                failRate: q.totalAttempts > 0 ? Math.round((q.wrongAttempts / q.totalAttempts) * 100) : 0
            }))
            .filter(q => q.totalAttempts >= 5) // Only include questions with at least 5 attempts
            .sort((a, b) => b.failRate - a.failRate)
            .slice(0, 10); // Top 10 most failed

        setCache('failedQuestions', failedQuestions);
        return failedQuestions;
    } catch (error) {
        console.error('Error getting failed questions:', error);
        return [];
    }
};

/**
 * Get progress trends over time
 * @returns {Array} Array of progress data over time
 */
export const getProgressTrends = async () => {
    try {
        const allResults = await getAllQuizResults();

        // Group by month
        const monthlyProgress = {};

        allResults.forEach(result => {
            const timestamp = result.timestamp?.toMillis() || 0;
            const date = new Date(timestamp);
            const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;

            if (!monthlyProgress[monthKey]) {
                monthlyProgress[monthKey] = {
                    month: monthKey,
                    totalQuizzes: 0,
                    totalScore: 0,
                    users: new Set()
                };
            }

            monthlyProgress[monthKey].totalQuizzes++;
            monthlyProgress[monthKey].totalScore += result.score || 0;
            monthlyProgress[monthKey].users.add(result.userId);
        });

        // Convert to array and calculate averages
        const trends = Object.values(monthlyProgress)
            .map(month => ({
                month: month.month,
                quizzes: month.totalQuizzes,
                averageScore: month.totalQuizzes > 0 ? Math.round(month.totalScore / month.totalQuizzes) : 0,
                activeUsers: month.users.size
            }))
            .sort((a, b) => a.month.localeCompare(b.month));

        return trends;
    } catch (error) {
        console.error('Error getting progress trends:', error);
        return [];
    }
};

/**
 * Clear analytics cache
 */
export const clearAnalyticsCache = () => {
    analyticsCache = {
        overallStats: { data: null, timestamp: 0 },
        quizAnalytics: { data: null, timestamp: 0 },
        userEngagement: { data: null, timestamp: 0 },
        popularTKK: { data: null, timestamp: 0 },
        difficultyAnalysis: { data: null, timestamp: 0 },
        failedQuestions: { data: null, timestamp: 0 }
    };
};

/**
 * Helper: Calculate median
 */
const calculateMedian = (numbers) => {
    if (numbers.length === 0) return 0;

    const sorted = [...numbers].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
        return Math.round((sorted[mid - 1] + sorted[mid]) / 2);
    }

    return sorted[mid];
};
