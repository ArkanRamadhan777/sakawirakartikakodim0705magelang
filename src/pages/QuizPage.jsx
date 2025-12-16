import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { quizzes } from '../data/quizzes';
import { kridas } from '../data/kridas';
import { ArrowLeft, CheckCircle2, PlayCircle, RefreshCw, XCircle, Timer, Trophy, Award, Target, Zap } from 'lucide-react';
import toast from 'react-hot-toast';
import Breadcrumbs from '../components/Breadcrumbs';

const QuizPage = () => {
  const { tkkId } = useParams();
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(600);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const quiz = quizzes.find(q => q.tkkId === tkkId);
  const krida = kridas.find(k => k.tkk && k.tkk.some(t => t.id === tkkId));
  const tkk = krida?.tkk.find(t => t.id === tkkId);

  const breadcrumbItems = [
    { label: 'Beranda', path: '/' },
    { label: 'Krida', path: '/krida' },
    { label: krida?.name || 'Krida', path: `/krida/${krida?.id}` },
    { label: tkk?.name || 'TKK', path: `/tkk/${tkkId}` },
    { label: 'Kuis' }
  ];

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const shuffleOptions = (question) => {
    // Simpan jawaban benar
    const correctAnswer = question.options[question.correctAnswer];

    // Acak opsi
    const shuffledOptions = shuffleArray([...question.options]);

    // Cari index baru dari jawaban benar
    const newCorrectIndex = shuffledOptions.indexOf(correctAnswer);

    return {
      ...question,
      options: shuffledOptions,
      correctAnswer: newCorrectIndex,
      originalCorrectAnswer: correctAnswer // Simpan jawaban asli untuk referensi
    };
  };

  const handleStartQuiz = () => {
    if (!quiz) return;

    // Acak pertanyaan dan ambil 20
    const shuffled = shuffleArray(quiz.questions).slice(0, 20);

    // Acak opsi untuk setiap pertanyaan
    const shuffledWithOptions = shuffled.map(q => shuffleOptions(q));

    setShuffledQuestions(shuffledWithOptions);
    setQuizStarted(true);
    setTimeLeft(600);
    setCurrentQuestionIndex(0);
    setScore(0);
    setUserAnswers([]);
    setSelectedAnswer(null);
  };

  useEffect(() => {
    let timer;
    if (quizStarted && !showScore && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            handleSubmitQuiz();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [quizStarted, showScore, timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerClick = (answerIndex) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(answerIndex);
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    const isCorrect = answerIndex === currentQuestion.correctAnswer;

    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestionIndex] = {
      question: currentQuestion.question,
      userAnswer: currentQuestion.options[answerIndex],
      correctAnswer: currentQuestion.originalCorrectAnswer,
      isCorrect
    };
    setUserAnswers(newUserAnswers);

    if (isCorrect) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestionIndex < shuffledQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
      } else {
        handleSubmitQuiz();
      }
    }, 1000);
  };

  const handleSubmitQuiz = () => {
    const timeUsed = 600 - timeLeft;
    const percentage = (score / shuffledQuestions.length) * 100;

    const quizResult = {
      quizId: quiz.id,
      tkkId: tkkId,
      tkkName: tkk?.name || 'Unknown',
      kridaName: krida?.name || 'Unknown',
      score: score,
      totalQuestions: shuffledQuestions.length,
      percentage: percentage.toFixed(1),
      timeUsed: timeUsed,
      timestamp: new Date().toISOString(),
      passed: percentage >= 70
    };

    const existingResults = JSON.parse(localStorage.getItem('quizResults') || '[]');
    existingResults.push(quizResult);
    localStorage.setItem('quizResults', JSON.stringify(existingResults));

    setShowScore(true);

    if (percentage >= 70) {
      toast.success('Keren! Kamu berhasil! 🎉');
    } else {
      toast('Terus semangat! Kamu pasti bisa! 💪', { icon: '🔥' });
    }
  };

  const handleRestartQuiz = () => {
    setQuizStarted(false);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
    setShuffledQuestions([]);
    setUserAnswers([]);
    setSelectedAnswer(null);
    setTimeLeft(600);
  };

  if (!quiz) {
    return (
      <div className="min-h-screen bg-black pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-white mb-4">Kuis tidak ditemukan</h2>
            <Link to="/krida" className="text-red-600 hover:text-red-700">
              Kembali ke Krida
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <Breadcrumbs items={breadcrumbItems} />

        {!quizStarted ? (
          <div className="bg-white rounded-3xl shadow-2xl p-8 mt-8 border-2 border-red-600">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-red-600 rounded-3xl mb-6 shadow-lg">
                <Trophy className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-black mb-3">{quiz.title}</h1>
              <p className="text-gray-700 mb-8 text-lg">{quiz.description}</p>

              <div className="bg-black rounded-2xl p-6 mb-8 border-2 border-red-600">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="group">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-red-600 rounded-xl mb-2">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-sm text-gray-400 mb-1">Jumlah Soal</p>
                    <p className="text-3xl font-bold text-white">20</p>
                  </div>
                  <div className="group">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-red-600 rounded-xl mb-2">
                      <Timer className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-sm text-gray-400 mb-1">Waktu</p>
                    <p className="text-3xl font-bold text-white">10 Menit</p>
                  </div>
                  <div className="group">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-red-600 rounded-xl mb-2">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-sm text-gray-400 mb-1">Target</p>
                    <p className="text-3xl font-bold text-white">70%</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-600 rounded-2xl p-5 mb-8">
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-white text-left">
                    <strong>Catatan:</strong> Soal dan opsi jawaban akan diacak setiap kali kuis dimulai.
                    Hasil kuis akan disimpan di browser kamu.
                  </p>
                </div>
              </div>

              <button
                onClick={handleStartQuiz}
                className="inline-flex items-center gap-3 px-10 py-5 bg-red-600 text-white rounded-2xl hover:bg-red-700 transition-all transform hover:scale-105 shadow-xl font-bold text-lg"
              >
                <PlayCircle className="w-6 h-6" />
                Mulai Kuis Sekarang
              </button>
            </div>
          </div>
        ) : showScore ? (
          <div className="bg-white rounded-3xl shadow-2xl p-8 mt-8 border-2 border-red-600">
            <div className="text-center">
              <div className={`inline-flex items-center justify-center w-24 h-24 rounded-3xl mb-6 shadow-lg ${(score / shuffledQuestions.length * 100) >= 70
                  ? 'bg-red-600'
                  : 'bg-black'
                }`}>
                {(score / shuffledQuestions.length * 100) >= 70 ? (
                  <Trophy className="w-12 h-12 text-white" />
                ) : (
                  <Target className="w-12 h-12 text-white" />
                )}
              </div>

              <h2 className="text-4xl font-bold text-black mb-3">
                {(score / shuffledQuestions.length * 100) >= 70 ? 'Keren Banget! 🎉' : 'Terus Semangat! 💪'}
              </h2>
              <p className="text-gray-700 mb-8 text-lg">
                {(score / shuffledQuestions.length * 100) >= 70
                  ? 'Kamu berhasil menyelesaikan kuis dengan baik!'
                  : 'Jangan menyerah, kamu pasti bisa lebih baik lagi!'}
              </p>

              <div className="bg-black rounded-2xl p-6 mb-8 border-2 border-red-600">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <p className="text-sm text-gray-400 mb-2">Skor</p>
                    <p className="text-4xl font-bold text-red-600">
                      {score}/{shuffledQuestions.length}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-2">Persentase</p>
                    <p className="text-4xl font-bold text-white">
                      {((score / shuffledQuestions.length) * 100).toFixed(1)}%
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-2">Waktu</p>
                    <p className="text-4xl font-bold text-white">
                      {formatTime(600 - timeLeft)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-left mb-8">
                <h3 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                  <Award className="w-6 h-6 text-red-600" />
                  Review Jawaban
                </h3>
                <div className="space-y-3 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                  {userAnswers.map((answer, index) => (
                    <div
                      key={index}
                      className={`p-5 rounded-2xl border-2 ${answer.isCorrect
                          ? 'border-red-600 bg-red-50'
                          : 'border-black bg-gray-100'
                        }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-bold ${answer.isCorrect ? 'bg-red-600 text-white' : 'bg-black text-white'
                          }`}>
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-black mb-2">
                            {answer.question}
                          </p>
                          <p className="text-sm text-gray-700">
                            <span className="font-medium">Jawabanmu:</span> {answer.userAnswer}
                          </p>
                        </div>
                        {answer.isCorrect ? (
                          <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" />
                        ) : (
                          <XCircle className="w-5 h-5 text-black flex-shrink-0" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleRestartQuiz}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 text-white rounded-2xl hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg font-bold"
                >
                  <RefreshCw className="w-5 h-5" />
                  Coba Lagi
                </button>
                <Link
                  to={`/tkk/${tkkId}`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white rounded-2xl hover:bg-gray-900 transition-all transform hover:scale-105 font-bold"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Kembali ke TKK
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-3xl shadow-2xl p-8 mt-8 border-2 border-red-600">
            <div className="flex justify-between items-center mb-8 pb-6 border-b-2 border-gray-200">
              <div className="flex-1">
                <p className="text-sm text-gray-600 mb-2">
                  Soal {currentQuestionIndex + 1} dari {shuffledQuestions.length}
                </p>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-red-600 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${((currentQuestionIndex + 1) / shuffledQuestions.length) * 100}%` }}
                  />
                </div>
              </div>
              <div className="flex items-center gap-3 ml-6 bg-black px-5 py-3 rounded-2xl">
                <Timer className="w-6 h-6 text-red-600" />
                <span className={`font-bold text-2xl ${timeLeft < 60 ? 'text-red-600' : 'text-white'}`}>
                  {formatTime(timeLeft)}
                </span>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-black mb-8 leading-relaxed">
                {shuffledQuestions[currentQuestionIndex]?.question}
              </h3>

              <div className="space-y-4">
                {shuffledQuestions[currentQuestionIndex]?.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerClick(index)}
                    disabled={selectedAnswer !== null}
                    className={`group w-full p-6 text-left rounded-2xl border-2 transition-all transform hover:scale-[1.02] ${selectedAnswer === index
                        ? index === shuffledQuestions[currentQuestionIndex].correctAnswer
                          ? 'border-red-600 bg-red-50'
                          : 'border-black bg-gray-100'
                        : 'border-gray-300 hover:border-red-600 hover:bg-red-50'
                      } ${selectedAnswer !== null ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-bold border-2 transition-all ${selectedAnswer === index
                          ? index === shuffledQuestions[currentQuestionIndex].correctAnswer
                            ? 'border-red-600 bg-red-600 text-white'
                            : 'border-black bg-black text-white'
                          : 'border-gray-400 bg-white text-black group-hover:border-red-600 group-hover:text-red-600'
                        }`}>
                        {String.fromCharCode(65 + index)}
                      </div>
                      <span className="font-medium text-black flex-1 text-lg">{option}</span>
                      {selectedAnswer === index && (
                        index === shuffledQuestions[currentQuestionIndex].correctAnswer ? (
                          <CheckCircle2 className="w-6 h-6 text-red-600" />
                        ) : (
                          <XCircle className="w-6 h-6 text-black" />
                        )
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizPage;
