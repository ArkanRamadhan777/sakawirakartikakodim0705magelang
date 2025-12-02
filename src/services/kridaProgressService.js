import { db } from '../config/firebase';
import { 
  collection, 
  getDocs, 
  query, 
  where
} from 'firebase/firestore';
import { kridas } from '../data/kridas';

/**
 * Calculate user's progress for a specific Krida
 */
export const getKridaProgress = async (userId, kridaId) => {
  try {
    const krida = kridas.find(k => k.id === kridaId);
    
    if (!krida || !krida.tkk) {
      return {
        success: false,
        error: 'Krida not found'
      };
    }

    const tkkList = krida.tkk;
    const totalTkk = tkkList.length;
    
    // Get quiz results for this user
    const quizResultsRef = collection(db, 'quiz_results');
    const q = query(
      quizResultsRef,
      where('userId', '==', userId)
    );
    
    const querySnapshot = await getDocs(q);
    const completedTkkIds = new Set();
    
    querySnapshot.docs.forEach(doc => {
      completedTkkIds.add(doc.data().tkkId);
    });
    
    const completedTkk = completedTkkIds.size;
    const completionPercentage = totalTkk > 0 ? (completedTkk / totalTkk) * 100 : 0;
    
    return {
      success: true,
      progress: {
        kridaId,
        kridaTitle: krida.title,
        totalTkk,
        completedTkk,
        completionPercentage: Math.round(completionPercentage),
        tkkList: tkkList.map(tkk => ({
          id: tkk.id,
          title: tkk.title,
          completed: completedTkkIds.has(tkk.id)
        }))
      }
    };
  } catch (error) {
    console.error('Error getting Krida progress:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

/**
 * Calculate user's overall progress across all Kridas
 */
export const getOverallProgress = async (userId) => {
  try {
    const kridaProgressList = [];
    let totalTkk = 0;
    let totalCompleted = 0;
    
    // Get all quiz results for user
    const quizResultsRef = collection(db, 'quiz_results');
    const q = query(
      quizResultsRef,
      where('userId', '==', userId)
    );
    
    const querySnapshot = await getDocs(q);
    const completedTkkIds = new Set();
    
    querySnapshot.docs.forEach(doc => {
      completedTkkIds.add(doc.data().tkkId);
    });
    
    // Calculate progress for each Krida
    for (const krida of kridas) {
      if (krida.tkk && krida.tkk.length > 0) {
        const kridaTkkCount = krida.tkk.length;
        const kridaCompletedCount = krida.tkk.filter(tkk => 
          completedTkkIds.has(tkk.id)
        ).length;
        
        totalTkk += kridaTkkCount;
        totalCompleted += kridaCompletedCount;
        
        kridaProgressList.push({
          kridaId: krida.id,
          kridaTitle: krida.title,
          totalTkk: kridaTkkCount,
          completedTkk: kridaCompletedCount,
          completionPercentage: Math.round((kridaCompletedCount / kridaTkkCount) * 100)
        });
      }
    }
    
    const overallPercentage = totalTkk > 0 ? (totalCompleted / totalTkk) * 100 : 0;
    
    return {
      success: true,
      progress: {
        totalTkk,
        completedTkk: totalCompleted,
        overallPercentage: Math.round(overallPercentage),
        kridaProgress: kridaProgressList
      }
    };
  } catch (error) {
    console.error('Error getting overall progress:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

/**
 * Get learning streak (consecutive days)
 */
export const getLearningStreak = async (userId) => {
  try {
    const quizResultsRef = collection(db, 'quiz_results');
    const q = query(
      quizResultsRef,
      where('userId', '==', userId)
    );
    
    const querySnapshot = await getDocs(q);
    const dates = querySnapshot.docs
      .map(doc => {
        const completedAt = doc.data().completedAt?.toDate();
        if (!completedAt) return null;
        
        const dateStr = completedAt.toISOString().split('T')[0];
        return dateStr;
      })
      .filter(d => d !== null);
    
    const uniqueDates = [...new Set(dates)].sort().reverse();
    
    if (uniqueDates.length === 0) {
      return {
        success: true,
        streak: {
          currentStreak: 0,
          longestStreak: 0,
          lastActivityDate: null
        }
      };
    }
    
    let currentStreak = 0;
    let longestStreak = 0;
    let tempStreak = 1;
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayStr = today.toISOString().split('T')[0];
    
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split('T')[0];
    
    // Check current streak
    if (uniqueDates[0] === todayStr || uniqueDates[0] === yesterdayStr) {
      currentStreak = 1;
      
      for (let i = 1; i < uniqueDates.length; i++) {
        const prevDate = new Date(uniqueDates[i - 1]);
        const currDate = new Date(uniqueDates[i]);
        const diffDays = Math.floor((prevDate - currDate) / (1000 * 60 * 60 * 24));
        
        if (diffDays === 1) {
          currentStreak++;
          tempStreak++;
        } else {
          break;
        }
      }
    }
    
    // Calculate longest streak
    tempStreak = 1;
    for (let i = 1; i < uniqueDates.length; i++) {
      const prevDate = new Date(uniqueDates[i - 1]);
      const currDate = new Date(uniqueDates[i]);
      const diffDays = Math.floor((prevDate - currDate) / (1000 * 60 * 60 * 24));
      
      if (diffDays === 1) {
        tempStreak++;
        longestStreak = Math.max(longestStreak, tempStreak);
      } else {
        tempStreak = 1;
      }
    }
    
    longestStreak = Math.max(longestStreak, currentStreak);
    
    return {
      success: true,
      streak: {
        currentStreak,
        longestStreak,
        lastActivityDate: new Date(uniqueDates[0])
      }
    };
  } catch (error) {
    console.error('Error getting learning streak:', error);
    return {
      success: false,
      error: error.message
    };
  }
};
