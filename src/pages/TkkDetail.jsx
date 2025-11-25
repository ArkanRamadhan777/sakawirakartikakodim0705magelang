import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { kridas } from '../data/kridas';
import { ArrowLeft, BookOpen, FileText, CheckCircle, Clock, ChevronDown, ChevronUp, CheckCircle2, Circle, PlayCircle, HelpCircle } from 'lucide-react';

const TkkDetail = () => {
  const { id } = useParams();
  const [openModuleId, setOpenModuleId] = useState(null);
  
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

  const toggleModule = (moduleId) => {
    setOpenModuleId(openModuleId === moduleId ? null : moduleId);
  };

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
                              <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded">
                                <HelpCircle size={14} /> {module.quizCount} Ujian
                              </span>
                              <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded">
                                <Clock size={14} /> {module.duration}
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
                                <div className="text-sm text-gray-400 whitespace-nowrap font-mono flex items-center gap-2">
                                  <Clock size={14} />
                                  {item.duration}
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

          </div>
        </div>
      </div>
    </div>
  );
};

export default TkkDetail;