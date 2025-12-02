import { db } from '../config/firebase';
import { 
  collection, 
  addDoc, 
  updateDoc,
  getDocs, 
  getDoc,
  query, 
  where, 
  doc,
  serverTimestamp
} from 'firebase/firestore';

const FLASHCARDS_COLLECTION = 'user_flashcards';

/**
 * Generate flashcards from quiz questions
 */
export const generateFlashcardsFromQuiz = (quiz, tkkId, tkkTitle) => {
  return quiz.questions.map((question, index) => ({
    tkkId,
    tkkTitle,
    question: question.question,
    answer: question.options[question.correctAnswer],
    options: question.options,
    correctAnswer: question.correctAnswer,
    questionIndex: index,
    difficulty: 'medium' // Default difficulty
  }));
};

/**
 * Save user's flashcard progress
 */
export const saveFlashcardProgress = async (userId, flashcardData) => {
  try {
    const flashcardsRef = collection(db, FLASHCARDS_COLLECTION);
    
    // Check if flashcard already exists
    const q = query(
      flashcardsRef,
      where('userId', '==', userId),
      where('tkkId', '==', flashcardData.tkkId),
      where('questionIndex', '==', flashcardData.questionIndex)
    );
    
    const existingDocs = await getDocs(q);
    
    if (!existingDocs.empty) {
      // Update existing flashcard
      const docRef = doc(db, FLASHCARDS_COLLECTION, existingDocs.docs[0].id);
      await updateDoc(docRef, {
        timesReviewed: flashcardData.timesReviewed || 1,
        lastReviewedAt: serverTimestamp(),
        nextReviewAt: flashcardData.nextReviewAt,
        confidence: flashcardData.confidence || 3, // 1-5 scale
        updatedAt: serverTimestamp()
      });
      
      return { 
        success: true, 
        flashcardId: existingDocs.docs[0].id,
        isUpdate: true
      };
    } else {
      // Create new flashcard
      const flashcard = {
        userId,
        tkkId: flashcardData.tkkId,
        tkkTitle: flashcardData.tkkTitle,
        questionIndex: flashcardData.questionIndex,
        timesReviewed: 1,
        lastReviewedAt: serverTimestamp(),
        nextReviewAt: flashcardData.nextReviewAt,
        confidence: flashcardData.confidence || 3,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      };
      
      const docRef = await addDoc(flashcardsRef, flashcard);
      
      return { 
        success: true, 
        flashcardId: docRef.id,
        isUpdate: false
      };
    }
  } catch (error) {
    console.error('Error saving flashcard progress:', error);
    return { 
      success: false, 
      error: error.message 
    };
  }
};

/**
 * Get user's flashcard progress for a TKK
 */
export const getFlashcardProgress = async (userId, tkkId = null) => {
  try {
    const flashcardsRef = collection(db, FLASHCARDS_COLLECTION);
    let q;
    
    if (tkkId) {
      q = query(
        flashcardsRef,
        where('userId', '==', userId),
        where('tkkId', '==', tkkId)
      );
    } else {
      q = query(
        flashcardsRef,
        where('userId', '==', userId)
      );
    }
    
    const querySnapshot = await getDocs(q);
    
    const flashcards = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      lastReviewedAt: doc.data().lastReviewedAt?.toDate(),
      nextReviewAt: doc.data().nextReviewAt?.toDate(),
      createdAt: doc.data().createdAt?.toDate(),
      updatedAt: doc.data().updatedAt?.toDate()
    }));
    
    return { 
      success: true, 
      flashcards 
    };
  } catch (error) {
    console.error('Error getting flashcard progress:', error);
    return { 
      success: false, 
      error: error.message,
      flashcards: []
    };
  }
};

/**
 * Calculate next review date using spaced repetition algorithm (SM-2)
 */
export const calculateNextReview = (confidence, timesReviewed) => {
  // confidence: 1 (hard) to 5 (easy)
  // SM-2 algorithm simplified
  
  let interval;
  
  if (confidence < 3) {
    // Hard - review soon
    interval = 1; // 1 day
  } else if (timesReviewed === 1) {
    interval = confidence === 5 ? 3 : 2; // 2-3 days
  } else if (timesReviewed === 2) {
    interval = confidence === 5 ? 7 : 5; // 5-7 days
  } else {
    // After 3+ reviews, increase exponentially
    const factor = confidence === 5 ? 2.5 : confidence === 4 ? 2 : 1.5;
    interval = Math.round(Math.pow(factor, timesReviewed - 2) * 7);
  }
  
  // Cap at 90 days
  interval = Math.min(interval, 90);
  
  const nextReview = new Date();
  nextReview.setDate(nextReview.getDate() + interval);
  
  return nextReview;
};

/**
 * Get flashcards due for review
 */
export const getDueFlashcards = async (userId) => {
  try {
    const result = await getFlashcardProgress(userId);
    
    if (!result.success) {
      return result;
    }
    
    const now = new Date();
    const dueCards = result.flashcards.filter(card => {
      if (!card.nextReviewAt) return true; // Never reviewed
      return card.nextReviewAt <= now;
    });
    
    return {
      success: true,
      flashcards: dueCards,
      totalCards: result.flashcards.length,
      dueCount: dueCards.length
    };
  } catch (error) {
    console.error('Error getting due flashcards:', error);
    return {
      success: false,
      error: error.message,
      flashcards: []
    };
  }
};

/**
 * Get flashcard statistics
 */
export const getFlashcardStats = async (userId) => {
  try {
    const result = await getFlashcardProgress(userId);
    
    if (!result.success) {
      return { success: false, error: result.error };
    }
    
    const flashcards = result.flashcards;
    const totalCards = flashcards.length;
    const now = new Date();
    
    const dueCards = flashcards.filter(card => 
      !card.nextReviewAt || card.nextReviewAt <= now
    ).length;
    
    const masteredCards = flashcards.filter(card => 
      card.confidence >= 4 && card.timesReviewed >= 3
    ).length;
    
    const averageConfidence = totalCards > 0
      ? flashcards.reduce((sum, card) => sum + (card.confidence || 0), 0) / totalCards
      : 0;
    
    return {
      success: true,
      stats: {
        totalCards,
        dueCards,
        masteredCards,
        averageConfidence: averageConfidence.toFixed(1),
        reviewedToday: flashcards.filter(card => {
          if (!card.lastReviewedAt) return false;
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          return card.lastReviewedAt >= today;
        }).length
      }
    };
  } catch (error) {
    console.error('Error getting flashcard stats:', error);
    return {
      success: false,
      error: error.message
    };
  }
};
