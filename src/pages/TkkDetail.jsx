import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { kridas } from '../data/kridas';
import { quizzes } from '../data/quizzes';
import { ArrowLeft, BookOpen, FileText, CheckCircle, Clock, ChevronDown, ChevronUp, CheckCircle2, Circle, PlayCircle, HelpCircle, ChevronRight, ChevronLeft, Share2, Brain, Award, RefreshCw, XCircle, Timer } from 'lucide-react';

const TkkDetail = () => {
  const { id } = useParams();
  const [openModuleId, setOpenModuleId] = useState(null);
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds

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
  
  // Helper to find TKK and its parent Krida
  let foundTkk = null;
  let parentKrida = null;

  for (const krida of kridas) {
    if (krida.tkk) {
      const tkk = krida.tkk.find(t => t.id === id);
      if (tkk) {
        foundTkk = tkk;
        parentKrida = krida;
        break;
      }
    }
  }

  if (!foundTkk) {
    return <Navigate to="/krida" replace />;
  }

  const quiz = quizzes.find(q => q.tkkId === id);

  const toggleModule = (moduleId) => {
    setOpenModuleId(openModuleId === moduleId ? null : moduleId);
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

    // Record user answer
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    setUserAnswers([
      ...userAnswers,
      {
        question: currentQuestion.question,
        userSelected: selectedOption.text,
        correctAnswer: currentQuestion.options.find(o => o.isCorrect).text,
        isCorrect: isCorrect
      }
    ]);

    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < shuffledQuestions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
    setUserAnswers([]);
    setShuffledQuestions([]);
  };

  // Logic for next and previous TKK
  let nextTkkLink = null;
  let prevTkkLink = null;
  if (parentKrida && foundTkk) {
    const currentTkkIndex = parentKrida.tkk.findIndex(t => t.id === foundTkk.id);
    if (currentTkkIndex < parentKrida.tkk.length - 1) {
      nextTkkLink = `/tkk/${parentKrida.tkk[currentTkkIndex + 1].id}`;
    }
    if (currentTkkIndex > 0) {
      prevTkkLink = `/tkk/${parentKrida.tkk[currentTkkIndex - 1].id}`;
    }
  }

  return (
    <div className="min-h-screen bg-base-100 pt-24 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb / Back Button */}
        <div className="mb-8">
            <Link to={`/krida/${parentKrida.id}`} className="btn btn-ghost gap-2 hover:bg-base-200">
            <ArrowLeft size={20} />
            Kembali ke {parentKrida.title}
            </Link>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          {/* Header */}
          <div className="bg-primary/5 p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
             <div className="w-40 h-40 bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-center shrink-0">
                <img 
                  src={foundTkk.image} 
                  alt={foundTkk.title} 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold font-anta text-gray-900 mb-2">{foundTkk.title}</h1>
                <p className="text-gray-500 font-gabarito text-lg">Bagian dari {parentKrida.title}</p>
              </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            
            {/* Existing Requirements (SKK) */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold font-anta mb-6 text-gray-800 flex items-center gap-3">
                    <CheckCircle className="text-primary" />
                    Syarat Kecakapan Khusus (SKK)
                </h2>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                    <ul className="space-y-4">
                        {foundTkk.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-4 text-gray-700 font-gabarito">
                            <span className="bg-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border border-gray-200 shrink-0 shadow-sm text-primary">
                            {idx + 1}
                            </span>
                            <span className="mt-1">{req}</span>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Syllabus Section */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold font-anta mb-6 text-gray-800 flex items-center gap-3">
                    <BookOpen className="text-primary" />
                    Silabus & Modul Pembelajaran
                </h2>
                
                {foundTkk.syllabus ? (
                  <div className="space-y-4">
                    {foundTkk.syllabus.map((module) => (
                      <div key={module.id} className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                        <button 
                          onClick={() => toggleModule(module.id)}
                          className="w-full text-left p-6 bg-white hover:bg-gray-50 transition-colors flex justify-between items-start gap-4"
                        >
                          <div className="flex-grow">
                            <h3 className="text-xl font-bold text-gray-900 mb-2 font-anta">{module.title}</h3>
                            <p className="text-gray-600 mb-4 font-gabarito text-sm md:text-base">{module.description}</p>
                            
                            <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-gray-500 font-medium">
                              <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded">
                                <FileText size={14} /> {module.articleCount} Artikel
                              </span>
                            </div>
                          </div>
                          <div className="mt-1 text-gray-400">
                            {openModuleId === module.id ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                          </div>
                        </button>
                        
                        {openModuleId === module.id && (
                          <div className="border-t border-gray-100 bg-gray-50/50">
                            {module.items.map((item, idx) => (
                              <Link 
                                key={idx} 
                                to={item.id ? `/article/${item.id}` : '#'}
                                className="flex items-center gap-4 p-4 hover:bg-white hover:shadow-sm border-b border-gray-100 last:border-0 transition-all group"
                              >
                                <div className="shrink-0 text-gray-400 group-hover:text-primary transition-colors">
                                  {item.type === 'quiz' ? <HelpCircle size={20} /> : <FileText size={20} />}
                                </div>
                                <div className="flex-grow min-w-0">
                                  <p className="font-medium text-gray-700 group-hover:text-primary transition-colors truncate">
                                    {item.title}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="alert alert-info bg-blue-50 border-blue-100 text-blue-900">
                      <FileText size={24} />
                      <span>Materi silabus dan modul pembelajaran untuk TKK ini akan segera tersedia.</span>
                  </div>
                )}
            </div>

            {/* Quiz Section */}
            {quiz && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold font-anta mb-6 text-gray-800 flex items-center gap-3">
                  <Brain className="text-primary" />
                  Quiz
                </h2>

                {!quizStarted ? (
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                    <p className="text-gray-700 font-gabarito mb-4">
                      Quiz ini terdiri dari 10 pertanyaan acak. Setiap soal bernilai 10 poin. Anda memiliki waktu 5 menit. Siap untuk memulai?
                    </p>
                    <button 
                      onClick={startQuiz} 
                      className="btn btn-primary gap-2"
                    >
                      <PlayCircle size={20} />
                      Mulai Quiz
                    </button>
                  </div>
                ) : (
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                    {showScore ? (
                      <div className="text-center">
                        <h3 className="text-xl font-semibold mb-4">Skor Anda</h3>
                        <p className="text-4xl font-bold text-primary mb-6">{score} / {shuffledQuestions.length * 10}</p>
                        
                        {/* Review Answers */}
                        <div className="text-left mb-8 space-y-4">
                          <h4 className="font-bold text-gray-800 border-b pb-2">Review Jawaban:</h4>
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

                        <button 
                          onClick={resetQuiz} 
                          className="btn btn-primary gap-2"
                        >
                          <RefreshCw size={20} />
                          Ulangi Quiz
                        </button>
                      </div>
                    ) : (
                      <div>
                        <div className="flex justify-between items-center mb-4">
                          <div className="text-sm text-gray-500">
                            Pertanyaan {currentQuestionIndex + 1} dari {shuffledQuestions.length}
                          </div>
                          <div className="flex items-center gap-4">
                            <div className={`flex items-center gap-2 font-mono font-bold ${timeLeft < 60 ? 'text-red-600' : 'text-gray-700'}`}>
                              <Timer size={18} />
                              {formatTime(timeLeft)}
                            </div>
                            <div className="text-sm font-medium text-gray-700">
                              Skor: {score}
                            </div>
                          </div>
                        </div>

                        {/* Question and Answers */}
                        <div className="mb-4">
                          <h3 className="text-lg font-semibold mb-2">{shuffledQuestions[currentQuestionIndex].question}</h3>
                          <div className="space-y-2">
                            {shuffledQuestions[currentQuestionIndex].options.map((option, idx) => (
                              <button 
                                key={idx} 
                                onClick={() => handleAnswerOptionClick(option)} 
                                className="w-full text-left p-4 rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow hover:bg-gray-50"
                              >
                                {option.text}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex justify-between">
                          <button 
                            onClick={() => setQuizStarted(false)} 
                            className="btn btn-ghost gap-2"
                          >
                            <ChevronLeft size={20} />
                            Kembali
                          </button>
                          <button 
                            onClick={resetQuiz} 
                            className="btn btn-primary gap-2"
                          >
                            <RefreshCw size={20} />
                            Ulangi
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

          </div>

          {/* Footer / Actions */}
          <div className="bg-gray-50 p-8 border-t border-gray-100 flex justify-between items-center">
            {/* Previous Button */}
            {prevTkkLink ? (
              <Link to={prevTkkLink} className="btn btn-circle btn-ghost" title="Sebelumnya">
                <ChevronLeft size={24} />
              </Link>
            ) : (
              <div className="w-12"></div>
            )}

            {/* Center Content */}
            <div className="flex items-center gap-2">
              <div className="text-sm text-gray-500 text-center hidden sm:block">
                Bagian dari <span className="font-bold text-gray-900">{parentKrida.title}</span>
              </div>
              <button 
                className="btn btn-ghost btn-circle btn-sm" 
                title="Bagikan"
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: foundTkk.title,
                      text: `Pelajari ${foundTkk.title} di Saka Wira Kartika`,
                      url: window.location.href,
                    })
                    .catch((error) => console.log('Error sharing', error));
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Link TKK berhasil disalin!');
                  }
                }}
              >
                <Share2 size={18} />
              </button>
            </div>

            {/* Next Button */}
            {nextTkkLink ? (
              <Link to={nextTkkLink} className="btn btn-circle btn-ghost" title="Selanjutnya">
                <ChevronRight size={24} />
              </Link>
            ) : (
              <div className="w-12"></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TkkDetail;