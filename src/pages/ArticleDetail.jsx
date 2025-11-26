import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { kridas } from '../data/kridas';
import { ArrowLeft, Clock, Calendar, Share2, ChevronRight, ChevronLeft } from 'lucide-react';

const ArticleDetail = () => {
  const { articleId } = useParams();

  // Helper to find the article and its context
  let foundArticle = null;
  let foundModule = null;
  let foundTkk = null;
  let foundKrida = null;

  // Search through the data structure
  outerLoop:
  for (const krida of kridas) {
    if (krida.tkk) {
      for (const tkk of krida.tkk) {
        if (tkk.syllabus) {
          for (const module of tkk.syllabus) {
            const article = module.items.find(item => item.id === articleId);
            if (article) {
              foundArticle = article;
              foundModule = module;
              foundTkk = tkk;
              foundKrida = krida;
              break outerLoop;
            }
          }
        }
      }
    }
  }

  // Logic to find next and previous article
  let nextArticleLink = null;
  let prevArticleLink = null;

  if (foundTkk && foundModule && foundArticle) {
    const currentModuleIndex = foundTkk.syllabus.findIndex(m => m.id === foundModule.id);
    const currentArticleIndex = foundModule.items.findIndex(a => a.id === foundArticle.id);

    // Next Article Logic
    if (currentArticleIndex < foundModule.items.length - 1) {
      nextArticleLink = `/article/${foundModule.items[currentArticleIndex + 1].id}`;
    } else if (currentModuleIndex < foundTkk.syllabus.length - 1) {
      const nextModule = foundTkk.syllabus[currentModuleIndex + 1];
      if (nextModule.items && nextModule.items.length > 0) {
        nextArticleLink = `/article/${nextModule.items[0].id}`;
      }
    }

    // Previous Article Logic
    if (currentArticleIndex > 0) {
      prevArticleLink = `/article/${foundModule.items[currentArticleIndex - 1].id}`;
    } else if (currentModuleIndex > 0) {
      const prevModule = foundTkk.syllabus[currentModuleIndex - 1];
      if (prevModule.items && prevModule.items.length > 0) {
        prevArticleLink = `/article/${prevModule.items[prevModule.items.length - 1].id}`;
      }
    }
  }

  if (!foundArticle) {
    return <Navigate to="/krida" replace />;
  }

  return (
    <div className="min-h-screen bg-base-100 pt-24 pb-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Breadcrumb / Back Button */}
        <div className="mb-8">
          <Link to={`/tkk/${foundTkk.id}`} className="btn btn-ghost gap-2 hover:bg-base-200">
            <ArrowLeft size={20} />
            Kembali ke Materi
          </Link>
        </div>

        <article className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          {/* Header */}
          <div className="p-8 md:p-12 border-b border-gray-100">
            <div className="flex items-center gap-3 text-sm font-bold text-primary mb-4 uppercase tracking-wider">
              <span className="bg-primary/10 px-3 py-1 rounded-full">{foundModule.title}</span>
              <span className="text-gray-400">•</span>
              <span>{foundArticle.type === 'quiz' ? 'Kuis' : 'Artikel'}</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold font-anta text-gray-900 mb-6 leading-tight">
              {foundArticle.title}
            </h1>

            <div className="flex items-center gap-6 text-gray-500 font-gabarito">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>Terakhir diperbarui: 25 Nov 2025</span>
              </div>
            </div>
          </div>

          {/* Content Body */}
          <div className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none font-gabarito text-gray-700 prose-headings:font-anta prose-headings:text-gray-900 prose-p:leading-relaxed prose-li:marker:text-primary prose-img:rounded-xl prose-a:text-primary hover:prose-a:text-primary/80">
              {foundArticle.content ? (
                <ReactMarkdown>{foundArticle.content}</ReactMarkdown>
              ) : (
                <div className="alert alert-warning">
                  <span>Konten belum tersedia.</span>
                </div>
              )}
            </div>
          </div>

          {/* Footer / Actions */}
          <div className="bg-gray-50 p-8 border-t border-gray-100 flex justify-between items-center">
            {/* Previous Button */}
            {prevArticleLink ? (
              <Link to={prevArticleLink} className="btn btn-circle btn-ghost" title="Sebelumnya">
                <ChevronLeft size={24} />
              </Link>
            ) : (
              <button className="btn btn-circle btn-ghost btn-disabled">
                <ChevronLeft size={24} className="text-gray-300" />
              </button>
            )}

            {/* Center Content */}
            <div className="flex items-center gap-2">
              <div className="text-sm text-gray-500 text-center hidden sm:block">
                Bagian dari <span className="font-bold text-gray-900">{foundTkk.title}</span>
              </div>
              <button 
                className="btn btn-ghost btn-circle btn-sm" 
                title="Bagikan"
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: foundArticle.title,
                      text: `Baca artikel ${foundArticle.title} di Saka Wira Kartika`,
                      url: window.location.href,
                    })
                    .catch((error) => console.log('Error sharing', error));
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Link artikel berhasil disalin!');
                  }
                }}
              >
                <Share2 size={18} />
              </button>
            </div>

            {/* Next Button */}
            {nextArticleLink ? (
              <Link to={nextArticleLink} className="btn btn-circle btn-ghost" title="Selanjutnya">
                <ChevronRight size={24} />
              </Link>
            ) : (
              <button className="btn btn-circle btn-ghost btn-disabled">
                <ChevronRight size={24} className="text-gray-300" />
              </button>
            )}
          </div>
        </article>
      </div>
    </div>
  );
};

export default ArticleDetail;
