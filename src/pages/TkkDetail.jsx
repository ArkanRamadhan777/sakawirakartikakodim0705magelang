import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { kridas } from '../data/kridas';
import { quizzes } from '../data/quizzes';
import { ArrowLeft, BookOpen, FileText, CheckCircle, ChevronDown, ChevronUp, HelpCircle, ChevronRight, ChevronLeft, Share2, FileSignature, StickyNote } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import BookmarkButton from '../components/BookmarkButton';
import NoteEditorModal from '../components/NoteEditorModal';
import { useAuth } from '../contexts/AuthContext';

const TkkDetail = () => {
  const { id } = useParams();
  const { currentUser } = useAuth();
  const [openModuleId, setOpenModuleId] = useState(null);
  const [showNoteEditor, setShowNoteEditor] = useState(false);
  
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
        <Breadcrumbs 
          items={[
            { label: 'Krida', path: '/krida' },
            { label: parentKrida.title, path: `/krida/${parentKrida.id}` },
            { label: foundTkk.name }
          ]} 
        />
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
              <div className="text-center md:text-left flex-1">
                <h1 className="text-3xl md:text-4xl font-bold font-anta text-gray-900 mb-2">{foundTkk.title}</h1>
                <p className="text-gray-500 font-gabarito text-lg">Bagian dari {parentKrida.title}</p>
              </div>
              <div className="md:ml-auto flex gap-2">
                {currentUser && (
                  <button
                    onClick={() => setShowNoteEditor(true)}
                    className="btn btn-outline gap-2 hover-lift"
                    title="Buat catatan"
                  >
                    <StickyNote size={20} />
                    <span className="hidden sm:inline">Buat Catatan</span>
                  </button>
                )}
                <BookmarkButton 
                  item={{
                    id: foundTkk.id,
                    name: foundTkk.title,
                    description: foundTkk.description,
                    image: foundTkk.image
                  }}
                  itemType="tkk"
                  size="md"
                />
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
                                <FileText size={14} /> {module.items?.length || 0} Artikel
                              </span>
                              {quiz && (
                                <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded">
                                  <FileSignature size={14} /> 1 Kuis
                                </span>
                              )}
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
                                  {item.type === 'quiz' ? <FileSignature size={20} /> : <FileText size={20} />}
                                </div>
                                <div className="flex-grow min-w-0">
                                  <p className="font-medium text-gray-700 group-hover:text-primary transition-colors truncate">
                                    {item.title}
                                  </p>
                                </div>
                              </Link>
                            ))}
                            {quiz && (
                              <Link 
                                to={`/quiz/${id}`}
                                className="flex items-center gap-4 p-4 hover:bg-white hover:shadow-sm border-b border-gray-100 last:border-0 transition-all group"
                              >
                                <div className="shrink-0 text-gray-400 group-hover:text-primary transition-colors">
                                  <FileSignature size={20} />
                                </div>
                                <div className="flex-grow min-w-0">
                                  <p className="font-medium text-gray-700 group-hover:text-primary transition-colors truncate">
                                    {quiz.title.replace('Quiz', 'Kuis')}
                                  </p>
                                </div>
                              </Link>
                            )}
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

          {/* Footer / Actions */}
          <div className="bg-gray-50 p-8 border-t border-gray-100">
            {/* Action Buttons */}
            {quiz && (
              <div className="flex gap-4 mb-6">
                <Link
                  to={`/quiz/${id}`}
                  className="flex-1 btn btn-primary gap-2"
                >
                  <HelpCircle size={20} />
                  Mulai Kuis
                </Link>
                <Link
                  to={`/flashcard/${id}`}
                  className="flex-1 btn btn-outline gap-2"
                >
                  <FileText size={20} />
                  Flashcard Mode
                </Link>
              </div>
            )}
            
            {/* Navigation */}
            <div className="flex justify-between items-center">
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

      {/* Note Editor Modal */}
      {showNoteEditor && (
        <NoteEditorModal
          tkkId={id}
          tkkTitle={foundTkk.title}
          onClose={() => setShowNoteEditor(false)}
          onSave={() => {
            setShowNoteEditor(false);
          }}
        />
      )}
    </div>
  );
};

export default TkkDetail;