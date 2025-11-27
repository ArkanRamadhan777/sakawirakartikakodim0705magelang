import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { quizzes } from '../data/quizzes';
import { kridas } from '../data/kridas';
import { ArrowLeft, CheckCircle2, PlayCircle, RefreshCw, XCircle, Timer, FileSignature } from 'lucide-react';

const QuizPage = () => {
  const { tkkId } = useParams();
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds

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
      setShowScore(true);
    }
    return () => clearInterval(timer);
  }, [quizStarted, showScore, timeLeft]);

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

    // Shuffle questions and take up to 10
    const selectedQuestions = shuffleArray(preparedQuestions).slice(0, 10);

    setShuffledQuestions(selectedQuestions);
    setQuizStarted(true);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
    setUserAnswers([]);
    setTimeLeft(300); // Reset timer to 5 minutes
  };

  const handleAnswerOptionClick = (selectedOption) => {
    const isCorrect = selectedOption.isCorrect;
    if (isCorrect) {
      setScore(score + 10);
    }

    const nextQuestion = currentQuestionIndex + 1;
    
    // Save user answer
    setUserAnswers([...userAnswers, {
      question: shuffledQuestions[currentQuestionIndex].question,
      userSelected: selectedOption.text,
      isCorrect: isCorrect,
      correctAnswer: shuffledQuestions[currentQuestionIndex].options.find(o => o.isCorrect).text
    }]);

    if (nextQuestion < shuffledQuestions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setScore(0);
    setShowScore(false);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setTimeLeft(300);
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
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <div className="mb-8">
          <Link to={`/tkk/${tkkId}`} className="inline-flex items-center text-gray-600 hover:text-primary mb-4 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Kembali ke Materi {foundTkk ? foundTkk.title : ''}
          </Link>
          <h1 className="text-3xl font-bold font-anta text-gray-900 flex items-center gap-3">
            <FileSignature className="text-primary" size={32} />
            {quiz.title.replace('Quiz', 'Kuis')}
          </h1>
        </div>

        {/* Quiz Content */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {!quizStarted ? (
            <div className="p-8 text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileSignature className="text-primary" size={48} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Siap untuk memulai?</h2>
              <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                Kuis ini terdiri dari 10 pertanyaan acak seputar materi {foundTkk ? foundTkk.title : 'ini'}. 
                Setiap soal bernilai 10 poin. Anda memiliki waktu 5 menit untuk menyelesaikan semua soal.
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
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">Skor Akhir Anda</h3>
                    <div className="text-6xl font-bold text-primary mb-2">{score}</div>
                    <p className="text-gray-500">dari total {shuffledQuestions.length * 10} poin</p>
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
                      {shuffledQuestions[currentQuestionIndex].options.map((option, idx) => (
                        <button 
                          key={idx} 
                          onClick={() => handleAnswerOptionClick(option)} 
                          className="w-full text-left p-5 rounded-xl bg-white border-2 border-gray-100 hover:border-primary hover:bg-primary/5 transition-all duration-200 group"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center font-bold group-hover:bg-primary group-hover:text-white transition-colors">
                              {String.fromCharCode(65 + idx)}
                            </div>
                            <span className="text-gray-700 group-hover:text-gray-900 font-medium">{option.text}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;