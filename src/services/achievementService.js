import { collection, getDocs, query, where, orderBy } from 'firebase/firestore';
import { db } from '../config/firebase';
import { achievements } from '../data/achievements';

// Check user achievements based on their quiz results
export const checkUserAchievements = async (userId) => {
  try {
    // Get all user's quiz results
    const q = query(
      collection(db, 'quiz_results'),
      where('userId', '==', userId)
    );
    const querySnapshot = await getDocs(q);
    
    const results = [];
    querySnapshot.forEach((doc) => {
      results.push(doc.data());
    });
    
    // Calculate stats
    const stats = {
      quizCount: results.length,
      totalScore: results.reduce((sum, r) => sum + (r.finalScore || r.scoreValue || 0), 0),
      perfectScores: results.filter(r => {
        const correctPercentage = (r.correctAnswers / r.totalQuestions) * 100;
        return correctPercentage === 100;
      }).length,
      fastestTime: Math.min(...results.map(r => r.timeUsed || Infinity)),
      averageAccuracy: results.length > 0 
        ? results.reduce((sum, r) => sum + (r.correctAnswers / r.totalQuestions) * 100, 0) / results.length 
        : 0
    };
    
    // Check which achievements are unlocked
    const unlockedAchievements = achievements.filter(achievement => {
      const { type, value } = achievement.requirement;
      
      switch (type) {
        case 'quizCount':
          return stats.quizCount >= value;
        
        case 'totalScore':
          return stats.totalScore >= value;
        
        case 'perfectScore':
          return stats.perfectScores >= value;
        
        case 'fastCompletion':
          return stats.fastestTime <= value;
        
        case 'accuracy':
          return stats.averageAccuracy >= value;
        
        default:
          return false;
      }
    });
    
    return {
      success: true,
      achievements: unlockedAchievements,
      stats,
      totalAchievements: achievements.length,
      unlockedCount: unlockedAchievements.length
    };
    
  } catch (error) {
    console.error('Error checking achievements:', error);
    return { success: false, error: error.message };
  }
};

// Check leaderboard position achievement
export const checkLeaderboardAchievement = async (userId) => {
  try {
    const querySnapshot = await getDocs(collection(db, 'quiz_results'));
    const userScores = {};

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const key = data.userId;

      if (!userScores[key]) {
        userScores[key] = {
          userId: data.userId,
          totalScore: 0
        };
      }

      userScores[key].totalScore += (data.finalScore || data.scoreValue || 0);
    });

    let leaderboard = Object.values(userScores);
    leaderboard.sort((a, b) => b.totalScore - a.totalScore);
    
    const userRank = leaderboard.findIndex(user => user.userId === userId) + 1;
    
    // Check leaderboard achievements
    const leaderboardAchievements = achievements
      .filter(a => a.requirement.type === 'leaderboardRank')
      .filter(a => userRank > 0 && userRank <= a.requirement.value);
    
    return {
      success: true,
      rank: userRank,
      achievements: leaderboardAchievements
    };
    
  } catch (error) {
    console.error('Error checking leaderboard achievement:', error);
    return { success: false, error: error.message };
  }
};

// Get newly unlocked achievements (to show notification)
export const getNewlyUnlockedAchievements = (previousAchievements, currentAchievements) => {
  const previousIds = new Set(previousAchievements.map(a => a.id));
  return currentAchievements.filter(a => !previousIds.has(a.id));
};
