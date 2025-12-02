import { db } from '../config/firebase';
import { 
  collection, 
  getDocs, 
  query, 
  where
} from 'firebase/firestore';
import { kridas } from '../data/kridas';
import { quizzes } from '../data/quizzes';

/**
 * Analyze user's quiz performance and detect weak topics
 */
export const analyzeUserPerformance = async (userId) => {
  try {
    const quizResultsRef = collection(db, 'quiz_results');
    const q = query(
      quizResultsRef,
      where('userId', '==', userId)
    );
    
    const querySnapshot = await getDocs(q);
    const results = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      completedAt: doc.data().completedAt?.toDate()
    }));
    
    if (results.length === 0) {
      return {
        success: true,
        analysis: {
          totalQuizzes: 0,
          averageScore: 0,
          weakTkks: [],
          strongTkks: [],
          needsImprovement: [],
          recommendations: []
        }
      };
    }
    
    // Calculate performance by TKK
    const tkkPerformance = {};
    
    results.forEach(result => {
      if (!tkkPerformance[result.tkkId]) {
        tkkPerformance[result.tkkId] = {
          tkkId: result.tkkId,
          tkkTitle: result.quizTitle,
          attempts: 0,
          scores: [],
          totalCorrect: 0,
          totalQuestions: 0
        };
      }
      
      const perf = tkkPerformance[result.tkkId];
      perf.attempts++;
      perf.scores.push(result.scoreValue || 0);
      perf.totalCorrect += result.correctAnswers || 0;
      perf.totalQuestions += result.totalQuestions || 20;
    });
    
    // Calculate statistics
    const tkkStats = Object.values(tkkPerformance).map(perf => {
      const avgScore = perf.scores.reduce((a, b) => a + b, 0) / perf.scores.length;
      const accuracy = perf.totalQuestions > 0 
        ? (perf.totalCorrect / perf.totalQuestions) * 100 
        : 0;
      
      return {
        ...perf,
        averageScore: Math.round(avgScore),
        accuracy: Math.round(accuracy),
        bestScore: Math.max(...perf.scores),
        worstScore: Math.min(...perf.scores)
      };
    });
    
    // Identify weak and strong TKKs
    const weakTkks = tkkStats
      .filter(t => t.averageScore < 60 || t.accuracy < 70)
      .sort((a, b) => a.averageScore - b.averageScore);
    
    const strongTkks = tkkStats
      .filter(t => t.averageScore >= 80 && t.accuracy >= 85)
      .sort((a, b) => b.averageScore - a.averageScore);
    
    // Calculate overall stats
    const totalQuizzes = results.length;
    const averageScore = Math.round(
      results.reduce((sum, r) => sum + (r.scoreValue || 0), 0) / totalQuizzes
    );
    
    return {
      success: true,
      analysis: {
        totalQuizzes,
        averageScore,
        weakTkks,
        strongTkks,
        tkkStats,
        needsImprovement: weakTkks.length > 0
      }
    };
  } catch (error) {
    console.error('Error analyzing user performance:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

/**
 * Generate personalized recommendations based on performance
 */
export const getPersonalizedRecommendations = async (userId) => {
  try {
    const analysisResult = await analyzeUserPerformance(userId);
    
    if (!analysisResult.success) {
      return analysisResult;
    }
    
    const { analysis } = analysisResult;
    const recommendations = [];
    
    // Get completed TKK IDs
    const quizResultsRef = collection(db, 'quiz_results');
    const q = query(
      quizResultsRef,
      where('userId', '==', userId)
    );
    
    const querySnapshot = await getDocs(q);
    const completedTkkIds = new Set(
      querySnapshot.docs.map(doc => doc.data().tkkId)
    );
    
    // 1. Recommend reviewing weak TKKs
    if (analysis.weakTkks.length > 0) {
      analysis.weakTkks.slice(0, 3).forEach(tkk => {
        recommendations.push({
          type: 'review',
          priority: 'high',
          tkkId: tkk.tkkId,
          title: `Review: ${tkk.tkkTitle}`,
          description: `Skor rata-rata kamu ${tkk.averageScore}%. Coba review materinya lagi untuk meningkatkan pemahaman.`,
          reason: 'Perlu diperkuat',
          icon: '📖',
          action: 'review'
        });
      });
    }
    
    // 2. Recommend new TKKs from same Krida as strong TKKs
    if (analysis.strongTkks.length > 0) {
      const strongTkkIds = analysis.strongTkks.map(t => t.tkkId);
      
      // Find Krida of strong TKKs
      for (const krida of kridas) {
        if (!krida.tkk) continue;
        
        const hasStrongTkk = krida.tkk.some(tkk => strongTkkIds.includes(tkk.id));
        
        if (hasStrongTkk) {
          // Recommend other TKKs in same Krida
          const uncompletedTkks = krida.tkk.filter(tkk => 
            !completedTkkIds.has(tkk.id)
          );
          
          if (uncompletedTkks.length > 0) {
            uncompletedTkks.slice(0, 2).forEach(tkk => {
              recommendations.push({
                type: 'explore',
                priority: 'medium',
                tkkId: tkk.id,
                title: `Coba: ${tkk.title}`,
                description: `Kamu bagus di ${krida.title}, coba materi ini selanjutnya!`,
                reason: 'Rekomendasi berdasarkan kekuatan',
                icon: '🎯',
                action: 'start'
              });
            });
          }
        }
      }
    }
    
    // 3. Recommend uncompleted TKKs
    const allTkks = [];
    kridas.forEach(krida => {
      if (krida.tkk) {
        krida.tkk.forEach(tkk => {
          if (!completedTkkIds.has(tkk.id)) {
            allTkks.push({
              ...tkk,
              kridaTitle: krida.title,
              kridaId: krida.id
            });
          }
        });
      }
    });
    
    if (allTkks.length > 0 && recommendations.length < 5) {
      // Randomly pick some uncompleted TKKs
      const shuffled = allTkks.sort(() => 0.5 - Math.random());
      shuffled.slice(0, 3 - recommendations.filter(r => r.type === 'explore').length)
        .forEach(tkk => {
          recommendations.push({
            type: 'new',
            priority: 'low',
            tkkId: tkk.id,
            title: `Pelajari: ${tkk.title}`,
            description: `Materi baru dari ${tkk.kridaTitle}`,
            reason: 'Belum dicoba',
            icon: '✨',
            action: 'start'
          });
        });
    }
    
    // 4. Recommend flashcard review for mastered topics
    if (analysis.strongTkks.length > 0) {
      analysis.strongTkks.slice(0, 2).forEach(tkk => {
        recommendations.push({
          type: 'flashcard',
          priority: 'low',
          tkkId: tkk.tkkId,
          title: `Flashcard: ${tkk.tkkTitle}`,
          description: `Pertahankan pemahaman dengan flashcard review`,
          reason: 'Maintenance',
          icon: '🎴',
          action: 'flashcard'
        });
      });
    }
    
    // Sort by priority
    const priorityOrder = { high: 0, medium: 1, low: 2 };
    recommendations.sort((a, b) => 
      priorityOrder[a.priority] - priorityOrder[b.priority]
    );
    
    return {
      success: true,
      recommendations: recommendations.slice(0, 6) // Top 6 recommendations
    };
  } catch (error) {
    console.error('Error generating recommendations:', error);
    return {
      success: false,
      error: error.message,
      recommendations: []
    };
  }
};

/**
 * Get study suggestions based on time of day and user's history
 */
export const getSmartStudySuggestions = async (userId) => {
  try {
    const hour = new Date().getHours();
    let timeBasedSuggestion = '';
    
    if (hour >= 6 && hour < 12) {
      timeBasedSuggestion = 'Pagi adalah waktu terbaik untuk belajar materi baru! 🌅';
    } else if (hour >= 12 && hour < 17) {
      timeBasedSuggestion = 'Review materi yang sudah dipelajari di siang hari 📚';
    } else if (hour >= 17 && hour < 21) {
      timeBasedSuggestion = 'Latihan kuis di sore hari untuk mengasah kemampuan 🎯';
    } else {
      timeBasedSuggestion = 'Istirahat yang cukup penting untuk proses belajar 😴';
    }
    
    const recommendationsResult = await getPersonalizedRecommendations(userId);
    
    return {
      success: true,
      suggestions: {
        timeBasedTip: timeBasedSuggestion,
        recommendations: recommendationsResult.recommendations || []
      }
    };
  } catch (error) {
    console.error('Error getting study suggestions:', error);
    return {
      success: false,
      error: error.message
    };
  }
};
