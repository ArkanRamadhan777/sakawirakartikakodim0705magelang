import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { kridas } from '../data/kridas';
import { quizzes } from '../data/quizzes';
import { ArrowLeft, ChevronDown, ChevronUp, FileText, FileSignature } from 'lucide-react';

const KridaDetail = () => {
  const { id } = useParams();
  const krida = kridas.find(k => k.id === parseInt(id));
  const [openTkkId, setOpenTkkId] = useState(null);

  if (!krida) {
    return <Navigate to="/krida" replace />;
  }

  const toggleTkk = (tkkId) => {
    setOpenTkkId(openTkkId === tkkId ? null : tkkId);
  };

  return (
    <div className="min-h-screen bg-base-100 pt-24 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/krida" className="btn btn-ghost gap-2 mb-8 hover:bg-base-200">
          <ArrowLeft size={20} />
          Kembali ke Daftar Krida
        </Link>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          {/* Header Section */}
          <div className="bg-primary/5 p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="w-40 h-40 bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-center shrink-0">
              <img 
                src={krida.image} 
                alt={krida.title} 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold font-anta text-gray-900 mb-2">{krida.title}</h1>
              <p className="text-gray-600 font-gabarito text-lg">{krida.description}</p>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8 md:p-12">
            {/* Description */}
            <div className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed font-gabarito">
                {krida.details}
              </p>
            </div>

            {/* TKK Section */}
            {krida.tkk && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold font-anta mb-6 text-gray-800">
                  Tanda Kecakapan Khusus (TKK)
                </h2>
                
                <div className="space-y-4">
                  {krida.tkk.map((tkk) => {
                    const quiz = quizzes.find(q => q.tkkId === tkk.id);
                    const totalArticles = tkk.syllabus ? tkk.syllabus.reduce((sum, module) => sum + (module.items?.length || 0), 0) : 0;
                    const hasQuiz = quiz ? 1 : 0;
                    
                    return (
                      <div key={tkk.id} className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                        <button 
                          onClick={() => toggleTkk(tkk.id)}
                          className="w-full text-left p-6 bg-white hover:bg-gray-50 transition-colors flex justify-between items-start gap-4"
                        >
                          <div className="flex gap-4 flex-grow">
                            <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center shrink-0 overflow-hidden">
                              {tkk.image && (
                                <img src={tkk.image} alt={tkk.title} className="w-full h-full object-contain" />
                              )}
                            </div>
                            <div className="flex-grow">
                              <h3 className="text-xl font-bold text-gray-900 mb-2 font-anta">{tkk.title}</h3>
                              
                              <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-gray-500 font-medium">
                                <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded">
                                  <FileText size={14} /> {totalArticles} Artikel
                                </span>
                                {hasQuiz > 0 && (
                                  <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded">
                                    <FileSignature size={14} /> {hasQuiz} Kuis
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="mt-1 text-gray-400">
                            {openTkkId === tkk.id ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                          </div>
                        </button>
                        
                        {openTkkId === tkk.id && (
                          <div className="border-t border-gray-100 bg-gray-50/50 p-6">
                            {/* Syllabus Content */}
                            {tkk.syllabus && tkk.syllabus.map((module, idx) => (
                              <div key={module.id} className={idx > 0 ? 'mt-6' : ''}>
                                <h4 className="font-bold text-gray-800 mb-3 font-anta">{module.title}</h4>
                                <div className="space-y-2">
                                  {module.items.map((item) => (
                                    <Link 
                                      key={item.id} 
                                      to={`/article/${item.id}`}
                                      className="flex items-center gap-3 p-3 hover:bg-white hover:shadow-sm rounded-lg border border-transparent hover:border-gray-200 transition-all group"
                                    >
                                      <div className="shrink-0 text-gray-400 group-hover:text-primary transition-colors">
                                        <FileText size={18} />
                                      </div>
                                      <div className="flex-grow min-w-0">
                                        <p className="font-medium text-gray-700 group-hover:text-primary transition-colors">
                                          {item.title}
                                        </p>
                                      </div>
                                    </Link>
                                  ))}
                                  {quiz && idx === tkk.syllabus.length - 1 && (
                                    <Link 
                                      to={`/quiz/${tkk.id}`}
                                      className="flex items-center gap-3 p-3 hover:bg-white hover:shadow-sm rounded-lg border border-transparent hover:border-gray-200 transition-all group"
                                    >
                                      <div className="shrink-0 text-gray-400 group-hover:text-primary transition-colors">
                                        <FileSignature size={18} />
                                      </div>
                                      <div className="flex-grow min-w-0">
                                        <p className="font-medium text-gray-700 group-hover:text-primary transition-colors">
                                          {quiz.title.replace('Quiz', 'Kuis')}
                                        </p>
                                      </div>
                                    </Link>
                                  )}
                                </div>
                              </div>
                            ))}
                            
                            {/* View Details Button */}
                            <div className="mt-6 pt-4 border-t border-gray-200">
                              <Link 
                                to={`/tkk/${tkk.id}`}
                                className="btn btn-primary btn-block"
                              >
                                Lihat Detail TKK
                              </Link>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KridaDetail;
