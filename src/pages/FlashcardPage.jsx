import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, TrendingUp, BarChart3 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { quizzes } from '../data/quizzes';
import { kridas } from '../data/kridas';
import FlashcardItem from '../components/FlashcardItem';
import LoadingSpinner from '../components/LoadingSpinner';
import { 
  generateFlashcardsFromQuiz, 
  saveFlashcardProgress, 
  getFlashcardProgress,
  calculateNextReview 
} from '../services/flashcardService';
import toast from 'react-hot-toast';
import { fireConfetti } from '../utils/confetti';

const FlashcardPage = () => {
  const { tkkId } = useParams();
  const { currentUser } = useAuth();
  const [flashcards, setFlashcards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sessionProgress, setSessionProgress] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sessionComplete, setSessionComplete] = useState(false);
  const [userProgress, setUserProgress] = useState({});

  // Find TKK info
  let foundTkk = null;
  let parentKrida = null;
  for (const krida of kridas) {
    if (krida.tkk) {
      const tkk = krida.tkk.find(t => t.id === tkkId);
      if (tkk) {
        foundTkk = tkk;
        parentKrida = krida;
        break;
      }
    }
  }

  const quiz = quizzes.find(q => q.tkkId === tkkId);

  useEffect(() => {
    if (quiz && foundTkk) {
      loadFlashcards();
    }
  }, [quiz, foundTkk, currentUser]);

  const loadFlashcards = async () => {
    setLoading(true);
    
    // Generate flashcards from quiz
    const cards = generateFlashcardsFromQuiz(quiz, tkkId, foundTkk.title);
    
    // Load user progress if logged in
    if (currentUser) {
      const result = await getFlashcardProgress(currentUser.uid, tkkId);
      if (result.success) {
        const progressMap = {};
        result.flashcards.forEach(card => {
          progressMap[card.questionIndex] = card;
        });
        setUserProgress(progressMap);
      }
    }
    
    setFlashcards(cards);
    setLoading(false);
  };

  const handleRateCard = async (confidence) => {
    const currentCard = flashcards[currentIndex];
    const progressData = userProgress[currentCard.questionIndex];
    const timesReviewed = progressData ? progressData.timesReviewed + 1 : 1;
    
    // Calculate next review date
    const nextReviewAt = calculateNextReview(confidence, timesReviewed);
    
    // Save progress if logged in
    if (currentUser) {
      const result = await saveFlashcardProgress(currentUser.uid, {
        tkkId: currentCard.tkkId,
        tkkTitle: currentCard.tkkTitle,
        questionIndex: currentCard.questionIndex,
        confidence,
        timesReviewed,
        nextReviewAt
      });
      
      if (result.success) {
        // Update local progress
        setUserProgress(prev => ({
          ...prev,
          [currentCard.questionIndex]: {
            confidence,
            timesReviewed,
            nextReviewAt
          }
        }));
      }
    }
    
    // Track session progress
    setSessionProgress(prev => [...prev, {
      questionIndex: currentCard.questionIndex,
      confidence
    }]);
    
    // Move to next card or complete session
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      toast.success('Kartu disimpan!');
    } else {
      setSessionComplete(true);
      fireConfetti();
      toast.success('🎉 Sesi review selesai!');
    }
  };

  const resetSession = () => {
    setCurrentIndex(0);
    setSessionProgress([]);
    setSessionComplete(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <LoadingSpinner size="lg" text="Menyiapkan flashcard..." />
        </div>
      </div>
    );
  }

  if (!quiz || !foundTkk) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Flashcard tidak tersedia
          </h2>
          <Link to="/krida" className="btn btn-primary">
            Kembali ke Krida
          </Link>
        </div>
      </div>
    );
  }

  if (sessionComplete) {
    const averageConfidence = sessionProgress.reduce((sum, p) => sum + p.confidence, 0) / sessionProgress.length;
    
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={48} className="text-green-600" />
            </div>
            
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Sesi Review Selesai! 🎉
            </h1>
            <p className="text-gray-600 mb-8">
              Kamu telah menyelesaikan {flashcards.length} flashcard
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-blue-50 rounded-xl p-4">
                <TrendingUp className="text-blue-600 mx-auto mb-2" size={32} />
                <p className="text-2xl font-bold text-gray-800">
                  {flashcards.length}
                </p>
                <p className="text-sm text-gray-600">Kartu Direview</p>
              </div>
              <div className="bg-green-50 rounded-xl p-4">
                <BarChart3 className="text-green-600 mx-auto mb-2" size={32} />
                <p className="text-2xl font-bold text-gray-800">
                  {averageConfidence.toFixed(1)}/5
                </p>
                <p className="text-sm text-gray-600">Rata-rata</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-4">
                <CheckCircle className="text-purple-600 mx-auto mb-2" size={32} />
                <p className="text-2xl font-bold text-gray-800">
                  {sessionProgress.filter(p => p.confidence >= 4).length}
                </p>
                <p className="text-sm text-gray-600">Mudah</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 justify-center">
              <button
                onClick={resetSession}
                className="btn btn-outline"
              >
                Review Lagi
              </button>
              <Link
                to={`/tkk/${tkkId}`}
                className="btn btn-primary"
              >
                Kembali ke Materi
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentCard = flashcards[currentIndex];
  const progressPercentage = ((currentIndex) / flashcards.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Link
            to={`/tkk/${tkkId}`}
            className="inline-flex items-center text-gray-600 hover:text-primary mb-4 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Kembali ke {foundTkk.title}
          </Link>
          
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Flashcard Mode
          </h1>
          <p className="text-gray-600">
            Review materi dengan flashcard interaktif
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">
              Kartu {currentIndex + 1} dari {flashcards.length}
            </span>
            <span className="text-sm font-medium text-primary">
              {Math.round(progressPercentage)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-primary h-full transition-all duration-300 rounded-full"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {/* Flashcard */}
        <FlashcardItem
          flashcard={currentCard}
          onRate={handleRateCard}
        />

        {/* Navigation Hint */}
        <div className="text-center mt-8 text-sm text-gray-500">
          <p>Klik kartu untuk membalik • Rate untuk lanjut ke kartu berikutnya</p>
        </div>
      </div>
    </div>
  );
};

export default FlashcardPage;
