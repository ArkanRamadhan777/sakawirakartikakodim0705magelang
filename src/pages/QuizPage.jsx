import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { quizzes } from '../data/quizzes';
import { kridas } from '../data/kridas';
import { ArrowLeft, CheckCircle2, PlayCircle, RefreshCw, XCircle, Timer, FileSignature } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { saveQuizResult } from '../services/quizService';
import { checkUserAchievements, getNewlyUnlockedAchievements } from '../services/achievementService';
import AchievementUnlockedModal from '../components/AchievementUnlockedModal';
import { fireFireworks, fireCelebration, fireConfetti } from '../utils/confetti';
import toast, { Toaster } from 'react-hot-toast';
import Breadcrumbs from '../components/Breadcrumbs';
import LoadingSpinner from '../components/LoadingSpinner';

const QuizPage = () => {
  const { tkkId } = useParams();
  const { currentUser } = useAuth();
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds for 20 questions
  const [timeUsed, setTimeUsed] = useState(0); // Track time used by user
  const [saving, setSaving] = useState(false);
  const [newAchievements, setNewAchievements] = useState([]);
  const [showAchievementModal, setShowAchievementModal] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Track selected answer for visual feedback

  // Find TKK info for context (title, etc.)
  let foundTkk = null;
  for (const krida of kridas) {
    if (krida.tkk) {
      const tkk = krida.tkk.find(t => t.id === tkkId);
      if (tkk) {
        foundTkk = tkk;
        break;
      }
    }
  }

  const quiz = quizzes.find(q => q.tkkId === tkkId);

  // Find parent Krida for breadcrumbs
  let parentKrida = null;
  for (const krida of kridas) {
    if (krida.tkk) {
      const tkk = krida.tkk.find(t => t.id === tkkId);
      if (tkk) {
        parentKrida = krida;
        break;
      }
    }
  }

  // Helper to shuffle array
  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  // Timer Effect
  useEffect(() => {
    let timer;
    if (quizStarted && !showScore && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0 && quizStarted && !showScore) {
      setTimeUsed(600); // Full time used if timer runs out
      setShowScore(true);
    }
    return () => clearInterval(timer);
  }, [quizStarted, showScore, timeLeft]);

  // Recovery mechanism - restore quiz state from localStorage if needed
  useEffect(() => {
    if (quizStarted && shuffledQuestions.length === 0) {
      console.log('Attempting to recover quiz state from localStorage...');
      try {
        const savedQuestions = localStorage.getItem(`quiz_${tkkId}_questions`);
        if (savedQuestions) {
          const questions = JSON.parse(savedQuestions);
          console.log('Recovered questions:', questions.length);
          setShuffledQuestions(questions);
        }
      } catch (error) {
        console.error('Failed to recover quiz state:', error);
      }
    }
  }, [quizStarted, shuffledQuestions.length, tkkId]);

  // Format time as MM:SS
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const startQuiz = () => {
    if (!quiz) return;

    // Prepare questions: shuffle options and mark the correct one
    const preparedQuestions = quiz.questions.map(q => {
      const optionsWithMeta = q.options.map((opt, index) => ({
        text: opt,
        isCorrect: index === q.correctAnswer
      }));
      return {
        ...q,
        options: shuffleArray(optionsWithMeta)
      };
    });

    // Shuffle questions and take up to 20
    const selectedQuestions = shuffleArray(preparedQuestions).slice(0, 20);

    // Save to localStorage as backup
    try {
      localStorage.setItem(`quiz_${tkkId}_questions`, JSON.stringify(selectedQuestions));
      localStorage.setItem(`quiz_${tkkId}_startTime`, Date.now().toString());
    } catch (error) {
      console.warn('Failed to save quiz to localStorage:', error);
    }

    setShuffledQuestions(selectedQuestions);
    setQuizStarted(true);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
    setUserAnswers([]);
    setTimeLeft(600); // Reset timer to 10 minutes for 20 questions
    setSelectedAnswer(null);
  };

  const handleAnswerOptionClick = (selectedOption) => {
    // Prevent multiple clicks
    if (selectedAnswer !== null) return;

    // Debug logging
    console.log('Current question index:', currentQuestionIndex);
    console.log('Total questions:', shuffledQuestions.length);
    console.log('Current question exists:', !!shuffledQuestions[currentQuestionIndex]);

    setSelectedAnswer(selectedOption);

    const isCorrect = selectedOption.isCorrect;
    const newScore = score + (isCorrect ? 5 : 0); // Skor nilai murni: benar × 5
    const nextQuestion = currentQuestionIndex + 1;

    // Save user answer
    const newUserAnswers = [...userAnswers, {
      question: shuffledQuestions[currentQuestionIndex].question,
      userSelected: selectedOption.text,
      isCorrect: isCorrect,
      correctAnswer: shuffledQuestions[currentQuestionIndex].options.find(o => o.isCorrect).text
    }];

    // Update score if correct
    if (isCorrect) {
      setScore(newScore);
    }
    
    setUserAnswers(newUserAnswers);

    // Delay before moving to next question to show visual feedback
    setTimeout(() => {
      setSelectedAnswer(null);

      // Safety check before updating index
      if (nextQuestion < shuffledQuestions.length && shuffledQuestions[nextQuestion]) {
        setCurrentQuestionIndex(nextQuestion);
      } else if (nextQuestion >= shuffledQuestions.length) {
        console.log('Quiz finished! Showing results...');
        console.log('Final score:', newScore);
        console.log('Total answers:', newUserAnswers.length);
        
        // Calculate time used when quiz finishes
        const totalTimeUsed = 600 - timeLeft;
        setTimeUsed(totalTimeUsed);

        // Calculate final score with time bonus
        const timeBonus = totalTimeUsed >= 600 ? 0 : (1 - (totalTimeUsed / 600)) * 20;
        const finalScore = newScore + timeBonus;
        const maxScore = shuffledQuestions.length * 5 + 20;
        const scorePercentage = (finalScore / maxScore) * 100;
        
        // Trigger confetti based on score
        setTimeout(() => {
          if (scorePercentage === 100) {
            // Perfect score - Fireworks!
            fireFireworks();
            toast.success('🎊 PERFECT SCORE! Luar biasa! 🎊', {
              duration: 5000,
              style: {
                background: '#10b981',
                color: '#fff',
                fontWeight: 'bold',
                fontSize: '16px'
              }
            });
          } else if (scorePercentage >= 90) {
            // Excellent - Celebration
            fireCelebration();
            toast.success('🌟 Excellent! Skor sangat bagus!', {
              duration: 4000,
              style: {
                background: '#3b82f6',
                color: '#fff',
                fontWeight: 'bold'
              }
            });
          } else if (scorePercentage >= 75) {
            // Good - Basic confetti
            fireConfetti();
            toast.success('👏 Good Job! Pertahankan!', {
              duration: 3000
            });
          } else if (scorePercentage >= 60) {
            toast('💪 Tidak buruk! Terus belajar!', {
              duration: 3000
            });
          } else {
            toast('📚 Jangan menyerah! Coba lagi!', {
              icon: '💪',
              duration: 3000
            });
          }
        }, 500);

        // Save to Firebase if user is logged in
        if (currentUser) {
          handleSaveResult(newScore, totalTimeUsed, newUserAnswers.filter(a => a.isCorrect).length);
        }

        // Clear localStorage after quiz completion
        try {
          localStorage.removeItem(`quiz_${tkkId}_questions`);
          localStorage.removeItem(`quiz_${tkkId}_startTime`);
        } catch (error) {
          console.warn('Failed to clear quiz localStorage:', error);
        }

        setShowScore(true);
      }
    }, 800); // 800ms delay for visual feedback
  };

  // Save quiz result to Firebase
  const handleSaveResult = async (scoreValue, timeUsed, correctCount) => {
    if (!currentUser) return;

    // Get achievements before saving
    const beforeAchievements = await checkUserAchievements(currentUser.uid);

    setSaving(true);
    const result = await saveQuizResult(currentUser.uid, {
      userName: currentUser.displayName || currentUser.email,
      userEmail: currentUser.email,
      tkkId,
      quizTitle: quiz.title,
      scoreValue: scoreValue, // Skor nilai murni
      totalQuestions: shuffledQuestions.length,
      correctAnswers: correctCount,
      timeUsed
    });

    if (!result.success) {
      console.error('Failed to save quiz result:', result.error);
      toast.error('Gagal menyimpan hasil quiz');
    } else {
      toast.success('Hasil quiz berhasil disimpan!');
      
      // Check for new achievements after saving
      const afterAchievements = await checkUserAchievements(currentUser.uid);
      
      if (beforeAchievements.success && afterAchievements.success) {
        const newlyUnlocked = getNewlyUnlockedAchievements(
          beforeAchievements.achievements,
          afterAchievements.achievements
        );
        
        if (newlyUnlocked.length > 0) {
          setNewAchievements(newlyUnlocked);
          // Show first achievement after a delay
          setTimeout(() => {
            setShowAchievementModal(true);
          }, 1000);
        }
      }
    }
    setSaving(false);
  };

  const resetQuiz = () => {
    // Clear localStorage
    try {
      localStorage.removeItem(`quiz_${tkkId}_questions`);
      localStorage.removeItem(`quiz_${tkkId}_startTime`);
    } catch (error) {
      console.warn('Failed to clear quiz localStorage:', error);
    }

    setQuizStarted(false);
    setScore(0);
    setShowScore(false);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setTimeLeft(600); // Reset to 10 minutes
    setTimeUsed(0); // Reset time used
    setSelectedAnswer(null);
    setShuffledQuestions([]); // Clear shuffled questions
    
    // Restart the quiz immediately
    setTimeout(() => {
      startQuiz();
    }, 100);
  };

  if (!quiz) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Kuis tidak ditemukan</h2>
        <Link to={`/tkk/${tkkId}`} className="btn btn-primary">Kembali ke Materi</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <div className="mb-4">
          <Link to={`/tkk/${tkkId}`} className="inline-flex items-center text-gray-600 hover:text-primary mb-4 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Kembali ke Materi {foundTkk ? foundTkk.title : ''}
          </Link>
        </div>

        <Breadcrumbs 
          items={[
            { label: 'Krida', path: '/krida' },
            ...(parentKrida ? [{ label: parentKrida.title, path: `/krida/${parentKrida.id}` }] : []),
            ...(foundTkk ? [{ label: foundTkk.name, path: `/tkk/${tkkId}` }] : []),
            { label: 'Kuis' }
          ]} 
        />

        <h1 className="text-3xl font-bold font-anta text-gray-900 flex items-center gap-3 mb-8">
          <FileSignature className="text-primary" size={32} />
          {quiz.title.replace('Quiz', 'Kuis')}
        </h1>

        {/* Quiz Content */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {!quizStarted ? (
            <div className="p-8 text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileSignature className="text-primary" size={48} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Siap untuk memulai?</h2>
              <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                Kuis ini terdiri dari 20 pertanyaan acak seputar materi {foundTkk ? foundTkk.title : 'ini'}.
                Setiap soal bernilai 5 poin. Anda memiliki waktu 10 menit untuk menyelesaikan semua soal.
              </p>
              <button
                onClick={startQuiz}
                className="btn btn-primary btn-lg gap-2 px-8"
              >
                <PlayCircle size={24} />
                Mulai Kuis Sekarang
              </button>
            </div>
          ) : (
            <div className="p-6 md:p-8">
              {showScore ? (
                <div className="text-center">
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-600 mb-4">Hasil Kuis Anda</h3>
                    
                    {/* Score Breakdown */}
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 mb-6 space-y-4">
                      {/* Skor Nilai */}
                      <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                        <div>
                          <p className="text-sm text-gray-600 font-medium">Skor Nilai</p>
                          <p className="text-xs text-gray-500">Benar: {userAnswers.filter(a => a.isCorrect).length} × 5</p>
                        </div>
                        <div className="text-3xl font-bold text-gray-700">{score}</div>
                      </div>
                      
                      {/* Bonus Waktu */}
                      <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                        <div>
                          <p className="text-sm text-gray-600 font-medium">Bonus Waktu</p>
                          <p className="text-xs text-gray-500">Waktu: {formatTime(timeUsed)}</p>
                        </div>
                        <div className="text-3xl font-bold text-blue-600">
                          +{timeUsed >= 600 ? '0.00' : ((1 - (timeUsed / 600)) * 20).toFixed(2)}
                        </div>
                      </div>
                      
                      {/* Skor Akhir */}
                      <div className="flex justify-between items-center pt-2">
                        <p className="text-lg text-gray-800 font-bold">Skor Akhir</p>
                        <div className="text-5xl font-black text-primary">
                          {timeUsed >= 600 ? score.toFixed(2) : (score + ((1 - (timeUsed / 600)) * 20)).toFixed(2)}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-500 text-center">Skor maksimal: {(shuffledQuestions.length * 5) + 20} poin</p>
                  </div>

                  {/* Review Answers */}
                  <div className="text-left mb-8 space-y-4 bg-gray-50 p-6 rounded-xl">
                    <h4 className="font-bold text-gray-800 border-b border-gray-200 pb-3 mb-4">Review Jawaban:</h4>
                    {userAnswers.map((ans, idx) => (
                      <div key={idx} className={`p-4 rounded-lg border ${ans.isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                        <div className="flex items-start gap-3">
                          <div className="mt-1 shrink-0">
                            {ans.isCorrect ? <CheckCircle2 className="text-green-600" size={20} /> : <XCircle className="text-red-600" size={20} />}
                          </div>
                          <div>
                            <p className="font-medium text-gray-900 mb-1">{idx + 1}. {ans.question}</p>
                            <p className={`text-sm ${ans.isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                              Jawaban Anda: {ans.userSelected}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center gap-4">
                    <Link to={`/tkk/${tkkId}`} className="btn btn-outline">
                      Selesai & Kembali
                    </Link>
                    <button
                      onClick={resetQuiz}
                      className="btn btn-primary gap-2"
                    >
                      <RefreshCw size={20} />
                      Ulangi Kuis
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  {/* Safety check */}
                  {!shuffledQuestions || shuffledQuestions.length === 0 || !shuffledQuestions[currentQuestionIndex] ? (
                    <div className="text-center py-12">
                      <div className="mb-4">
                        <LoadingSpinner size="md" text="Loading question..." />
                      </div>
                      <p className="text-sm text-gray-600 mb-4">
                        Debug: Questions={shuffledQuestions?.length || 0}, Index={currentQuestionIndex}
                      </p>
                      <button 
                        onClick={() => {
                          console.error('Quiz state error - resetting');
                          resetQuiz();
                        }}
                        className="btn btn-outline btn-sm"
                      >
                        Reset Quiz
                      </button>
                    </div>
                  ) : (
                    <>
                      {/* Progress Bar */}
                      <div className="mb-6">
                        <div className="flex justify-between text-sm font-medium text-gray-500 mb-2">
                          <span>Pertanyaan {currentQuestionIndex + 1} dari {shuffledQuestions.length}</span>
                          <span>{Math.round(((currentQuestionIndex) / shuffledQuestions.length) * 100)}% Selesai</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2.5">
                          <div
                            className="bg-primary h-2.5 rounded-full transition-all duration-300"
                            style={{ width: `${((currentQuestionIndex) / shuffledQuestions.length) * 100}%` }}
                          ></div>
                        </div>
                      </div>

                      {/* Timer & Score Header */}
                      <div className="flex justify-between items-center mb-8 bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <div className={`flex items-center gap-2 font-mono font-bold text-lg ${timeLeft < 60 ? 'text-red-600 animate-pulse' : 'text-gray-700'}`}>
                          <Timer size={20} />
                          {formatTime(timeLeft)}
                        </div>
                      </div>

                      {/* Question */}
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-900 mb-6 leading-relaxed">
                          {shuffledQuestions[currentQuestionIndex].question}
                        </h3>
                        <div className="space-y-3">
                          {shuffledQuestions[currentQuestionIndex].options.map((option, idx) => {
                            // Determine styling based on selection state
                            const isSelected = selectedAnswer === option;
                            let buttonClass = "w-full text-left p-5 rounded-xl bg-white border-2 border-gray-100 md:hover:border-primary md:hover:bg-primary/5 transition-all duration-200 group";
                            let circleClass = "w-8 h-8 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center font-bold md:group-hover:bg-primary md:group-hover:text-white transition-colors";
                            let textClass = "text-gray-700 md:group-hover:text-gray-900 font-medium";

                            if (isSelected) {
                              buttonClass = "w-full text-left p-5 rounded-xl bg-primary/10 border-2 border-primary transition-all duration-200 group";
                              circleClass = "w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold transition-colors";
                              textClass = "text-gray-900 font-medium";
                            }

                            return (
                              <button
                                key={idx}
                                onClick={() => handleAnswerOptionClick(option)}
                                className={buttonClass}
                              >
                                <div className="flex items-center gap-3">
                                  <div className={circleClass}>
                                    {String.fromCharCode(65 + idx)}
                                  </div>
                                  <span className={textClass}>{option.text}</span>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      
      {/* Achievement Unlocked Modal */}
      {showAchievementModal && newAchievements.length > 0 && (
        <AchievementUnlockedModal
          achievement={newAchievements[0]}
          onClose={() => {
            setShowAchievementModal(false);
            // Show next achievement if any
            if (newAchievements.length > 1) {
              setNewAchievements(prev => prev.slice(1));
              setTimeout(() => setShowAchievementModal(true), 500);
            }
          }}
        />
      )}
    </div>
  );
};

export default QuizPage;