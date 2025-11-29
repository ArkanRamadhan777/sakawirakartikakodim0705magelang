import { collection, query, orderBy, getDocs, where } from 'firebase/firestore';
import { db } from '../config/firebase';

/**
 * Get user's rank in overall leaderboard
 */
export const getUserRank = async (userId) => {
    try {
        // Get all users' best scores
        const usersRef = collection(db, 'quizResults');
        const usersSnapshot = await getDocs(usersRef);

        const userScores = [];

        // Calculate total score for each user
        for (const userDoc of usersSnapshot.docs) {
            const resultsRef = collection(db, 'quizResults', userDoc.id, 'results');
            const resultsSnapshot = await getDocs(resultsRef);

            let totalScore = 0;
            let quizCount = 0;

            resultsSnapshot.forEach(doc => {
                const data = doc.data();
                totalScore += data.score || 0;
                quizCount++;
            });

            if (quizCount > 0) {
                userScores.push({
                    userId: userDoc.id,
                    averageScore: Math.round(totalScore / quizCount),
                    totalQuizzes: quizCount
                });
            }
        }

        // Sort by average score (descending)
        userScores.sort((a, b) => b.averageScore - a.averageScore);

        // Find user's rank
        const userIndex = userScores.findIndex(u => u.userId === userId);

        if (userIndex === -1) {
            return { success: true, rank: null, total: userScores.length };
        }

        return {
            success: true,
            rank: userIndex + 1,
            total: userScores.length,
            percentile: Math.round(((userScores.length - userIndex) / userScores.length) * 100)
        };
    } catch (error) {
        console.error('Error getting user rank:', error);
        return { success: false, error: error.message };
    }
};
