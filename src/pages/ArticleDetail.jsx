import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { kridas } from '../data/kridas';
import { ArrowLeft, Clock, Calendar, Share2, Bookmark } from 'lucide-react';

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
                <Clock size={18} />
                <span>{foundArticle.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>Terakhir diperbarui: 25 Nov 2025</span>
              </div>
            </div>
          </div>

          {/* Content Body */}
          <div className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none font-gabarito text-gray-700">
              {foundArticle.content ? (
                foundArticle.content
              ) : (
                <div className="alert alert-warning">
                  <span>Konten belum tersedia.</span>
                </div>
              )}
            </div>
          </div>

          {/* Footer / Actions */}
          <div className="bg-gray-50 p-8 border-t border-gray-100 flex justify-between items-center">
            <div className="text-sm text-gray-500">
              Bagian dari <span className="font-bold text-gray-900">{foundTkk.title}</span>
            </div>
            <div className="flex gap-2">
              <button className="btn btn-ghost btn-circle" title="Simpan">
                <Bookmark size={20} />
              </button>
              <button className="btn btn-ghost btn-circle" title="Bagikan">
                <Share2 size={20} />
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ArticleDetail;
