import { collection, addDoc, query, where, getDocs, limit } from 'firebase/firestore';
import { db } from '../config/firebase';

// Save quiz result
export const saveQuizResult = async (userId, quizData) => {
  try {
    const quizResult = {
      userId,
      userName: quizData.userName || 'Anonymous',
      userEmail: quizData.userEmail || '',
      tkkId: quizData.tkkId,
      quizTitle: quizData.quizTitle,
      score: quizData.score,
      totalQuestions: quizData.totalQuestions,
      correctAnswers: quizData.correctAnswers,
      timeUsed: quizData.timeUsed,
      timestamp: new Date().toISOString()
    };

    const docRef = await addDoc(collection(db, 'quiz_results'), quizResult);
    console.log('Quiz result saved:', docRef.id);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error saving quiz result:', error);
    return { success: false, error: error.message };
  }
};

// Get user's quiz history
export const getUserQuizHistory = async (userId, limitCount = 10) => {
  try {
    const q = query(
      collection(db, 'quiz_results'),
      where('userId', '==', userId),
      limit(limitCount)
    );

    const querySnapshot = await getDocs(q);
    const results = [];
    
    querySnapshot.forEach((doc) => {
      results.push({
        id: doc.id,
        ...doc.data()
      });
    });

    // Sort by timestamp manually (newest first)
    results.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    return { success: true, data: results };
  } catch (error) {
    console.error('Error fetching quiz history:', error);
    return { success: false, error: error.message };
  }
};

// Get leaderboard for specific TKK
export const getTkkLeaderboard = async (tkkId, limitCount = 10) => {
  try {
    const q = query(
      collection(db, 'quiz_results'),
      where('tkkId', '==', tkkId)
    );

    const querySnapshot = await getDocs(q);
    const results = [];
    
    querySnapshot.forEach((doc) => {
      results.push({
        id: doc.id,
        ...doc.data()
      });
    });

    // Sort manually: highest score first, then fastest time
    results.sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }
      return a.timeUsed - b.timeUsed;
    });

    return results.slice(0, limitCount);
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    return { success: false, error: error.message };
  }
};

// Get user statistics
export const getUserStats = async (userId) => {
  try {
    const q = query(
      collection(db, 'quiz_results'),
      where('userId', '==', userId)
    );

    const querySnapshot = await getDocs(q);
    let totalQuizzes = 0;
    let totalScore = 0;
    let totalCorrect = 0;
    let totalQuestions = 0;

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      totalQuizzes++;
      totalScore += data.score;
      totalCorrect += data.correctAnswers;
      totalQuestions += data.totalQuestions;
    });

    const avgScore = totalQuizzes > 0 ? (totalScore / totalQuizzes).toFixed(1) : 0;
    const accuracy = totalQuestions > 0 ? ((totalCorrect / totalQuestions) * 100).toFixed(1) : 0;

    return {
      success: true,
      data: {
        totalQuizzes,
        avgScore,
        accuracy,
        totalScore
      }
    };
  } catch (error) {
    console.error('Error fetching user stats:', error);
    return { success: false, error: error.message };
  }
};
