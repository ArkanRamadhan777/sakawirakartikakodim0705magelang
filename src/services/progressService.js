import { collection, query, where, getDocs, orderBy } from 'firebase/firestore';
import { db } from '../config/firebase';
import { kridas } from '../data/kridas';

/**
 * Get all quiz results for a specific user
 */
export const getUserProgress = async (userId) => {
    try {
        const resultsRef = collection(db, 'quizResults', userId, 'results');
        const q = query(resultsRef, orderBy('timestamp', 'desc'));
        const querySnapshot = await getDocs(q);

        const results = [];
        querySnapshot.forEach((doc) => {
            results.push({
                id: doc.id,
                ...doc.data()
            });
        });

        return { success: true, data: results };
    } catch (error) {
        console.error('Error fetching user progress:', error);
        return { success: false, error: error.message };
    }
};

/**
 * Calculate progress for a specific TKK
 */
export const calculateTKKProgress = (quizResults, tkkId) => {
    const tkkResults = quizResults.filter(result => result.tkkId === tkkId);

    if (tkkResults.length === 0) {
        return {
            completed: false,
            attempts: 0,
            bestScore: 0,
            averageScore: 0,
            lastAttempt: null
        };
    }

    const scores = tkkResults.map(r => r.score);
    const bestScore = Math.max(...scores);
    const averageScore = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
    const lastAttempt = tkkResults[0]; // Already sorted by timestamp desc

    return {
        completed: bestScore >= 60, // Consider completed if score >= 60%
        attempts: tkkResults.length,
        bestScore,
        averageScore,
        lastAttempt
    };
};

/**
 * Get overall user statistics
 */
export const getUserStats = (quizResults) => {
    if (!quizResults || quizResults.length === 0) {
        return {
            totalQuizzes: 0,
            averageScore: 0,
            totalTime: 0,
            perfectScores: 0,
            completedTKKs: 0
        };
    }

    const scores = quizResults.map(r => r.score);
    const averageScore = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
    const totalTime = quizResults.reduce((sum, r) => sum + (r.timeUsed || 0), 0);
    const perfectScores = quizResults.filter(r => r.score === 100).length;

    // Count unique TKKs completed (score >= 60)
    const completedTKKIds = new Set(
        quizResults
            .filter(r => r.score >= 60)
            .map(r => r.tkkId)
    );

    return {
        totalQuizzes: quizResults.length,
        averageScore,
        totalTime,
        perfectScores,
        completedTKKs: completedTKKIds.size
    };
};

/**
 * Get progress grouped by Krida
 */
export const getProgressByKrida = (quizResults) => {
    const progressByKrida = [];

    kridas.forEach(krida => {
        if (!krida.tkk) return;

        const tkkProgress = krida.tkk.map(tkk => ({
            ...tkk,
            progress: calculateTKKProgress(quizResults, tkk.id)
        }));

        // Calculate overall krida completion
        const completedCount = tkkProgress.filter(t => t.progress.completed).length;
        const totalCount = tkkProgress.length;
        const completionPercentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

        progressByKrida.push({
            krida: krida.name,
            icon: krida.icon,
            tkkProgress,
            completedCount,
            totalCount,
            completionPercentage
        });
    });

    return progressByKrida;
};

/**
 * Calculate earned badges based on quiz results
 */
export const getUserBadges = (quizResults, stats) => {
    const badges = [
        {
            id: 'first_quiz',
            name: 'Langkah Pertama',
            description: 'Selesaikan kuis pertama Anda',
            icon: '🥇',
            earned: quizResults.length >= 1
        },
        {
            id: 'perfect_score',
            name: 'Nilai Sempurna',
            description: 'Dapatkan nilai 100% di kuis manapun',
            icon: '🎯',
            earned: stats.perfectScores > 0
        },
        {
            id: 'speed_demon',
            name: 'Kilat',
            description: 'Selesaikan kuis dalam waktu kurang dari 5 menit',
            icon: '⚡',
            earned: quizResults.some(r => r.timeUsed < 300)
        },
        {
            id: 'scholar',
            name: 'Pelajar Teladan',
            description: 'Pertahankan rata-rata nilai di atas 80%',
            icon: '📚',
            earned: stats.averageScore >= 80
        },
        {
            id: 'quiz_master',
            name: 'Master Kuis',
            description: 'Selesaikan semua kuis TKK',
            icon: '🔥',
            earned: stats.completedTKKs >= getTotalTKKCount()
        },
        {
            id: 'dedicated',
            name: 'Pembelajar Gigih',
            description: 'Selesaikan 10 kuis',
            icon: '💪',
            earned: quizResults.length >= 10
        }
    ];

    return badges;
};

/**
 * Helper: Get total number of TKKs across all Kridas
 */
const getTotalTKKCount = () => {
    return kridas.reduce((total, krida) => {
        return total + (krida.tkk ? krida.tkk.length : 0);
    }, 0);
};
