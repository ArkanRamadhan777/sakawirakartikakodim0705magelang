import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { kridas } from '../data/kridas';
import { ArrowLeft, ArrowRight, Calendar, Share2, Link2, Check } from 'lucide-react';
import toast from 'react-hot-toast';

const ArticleDetail = () => {
  const { id } = useParams();
  const [copied, setCopied] = React.useState(false);

  // Find article across all kridas
  let foundArticle = null;
  let parentTkk = null;
  let parentKrida = null;
  let allArticles = [];
  let currentArticleIndex = -1;

  for (const krida of kridas) {
    if (krida.tkk) {
      for (const tkk of krida.tkk) {
        if (tkk.syllabus) {
          for (const module of tkk.syllabus) {
            if (module.items) {
              // Collect all articles from this TKK
              module.items.forEach(item => {
                allArticles.push({
                  ...item,
                  tkkId: tkk.id,
                  tkkTitle: tkk.title,
                  kridaTitle: krida.title
                });
              });

              const article = module.items.find(item => item.id === id);
              if (article) {
                foundArticle = article;
                parentTkk = tkk;
                parentKrida = krida;
              }
            }
          }
        }
      }
    }
  }

  // Find current article index in the same TKK
  if (foundArticle && parentTkk) {
    const tkkArticles = allArticles.filter(a => a.tkkId === parentTkk.id);
    currentArticleIndex = tkkArticles.findIndex(a => a.id === id);
    allArticles = tkkArticles; // Use only articles from same TKK
  }

  if (!foundArticle) {
    return <Navigate to="/krida" replace />;
  }

  const prevArticle = currentArticleIndex > 0 ? allArticles[currentArticleIndex - 1] : null;
  const nextArticle = currentArticleIndex < allArticles.length - 1 ? allArticles[currentArticleIndex + 1] : null;

  // If this is the last article, check if there's a quiz for this TKK
  const isLastArticle = currentArticleIndex === allArticles.length - 1;
  const quizLink = isLastArticle && parentTkk ? `/quiz/${parentTkk.id}` : null;

  // Share functions
  const shareUrl = window.location.href;
  const shareTitle = foundArticle.title;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      toast.success('Link berhasil disalin!');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error('Gagal menyalin link');
    }
  };

  const handleShareWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(shareTitle + ' - ' + shareUrl)}`, '_blank');
  };

  const handleShareInstagram = () => {
    // Instagram doesn't have direct share URL, so copy link and show instruction
    navigator.clipboard.writeText(shareUrl);
    toast.success('Link disalin! Buka Instagram dan paste di bio/story/DM', { duration: 4000 });
  };

  const handleShareTelegram = () => {
    window.open(`https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`, '_blank');
  };

  // Convert markdown content to HTML
  const formatContent = (content) => {
    if (!content) return '<p class="text-gray-500">Konten artikel akan segera ditambahkan.</p>';

    return content
      // Convert headings
      .replace(/### (.+)/g, '<h3 class="font-bold text-2xl mt-8 mb-4 text-gray-900">$1</h3>')
      .replace(/## (.+)/g, '<h2 class="font-bold text-3xl mt-10 mb-5 text-gray-900">$2</h2>')
      // Convert bold
      .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
      // Convert italic
      .replace(/\*(.+?)\*/g, '<em class="italic">$1</em>')
      // Convert numbered lists
      .replace(/^(\d+)\.\s+(.+)$/gm, '<li class="ml-6 mb-2 text-gray-700"><span class="font-semibold text-red-600">$1.</span> $2</li>')
      // Convert bullet lists
      .replace(/^\* (.+)$/gm, '<li class="ml-6 mb-2 text-gray-700">• $1</li>')
      // Convert line breaks
      .replace(/\n\n/g, '</p><p class="mb-4 text-gray-700 leading-relaxed">')
      .replace(/\n/g, '<br/>');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Article Header */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-red-600 to-red-700 px-8 py-12 text-white">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium uppercase tracking-wide">
                {parentKrida.title.replace('TKK ', '')}
              </span>
              <span className="text-white/80">•</span>
              <span className="text-white/90 font-medium">ARTIKEL</span>
            </div>
            <h1 className="text-4xl font-bold font-anta mb-4">
              {foundArticle.title}
            </h1>
            <div className="flex items-center gap-4 text-white/80 text-sm">
              <span className="flex items-center gap-2">
                <Calendar size={16} />
                Terakhir diperbarui: 25 Nov 2025
              </span>
            </div>
          </div>

          {/* Article Content */}
          <div className="px-8 py-12">
            <div className="prose prose-lg max-w-none font-gabarito">
              <div
                className="article-content"
                dangerouslySetInnerHTML={{ __html: formatContent(foundArticle.content) }}
              />
            </div>
          </div>
        </div>

        {/* Share Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <Share2 className="w-5 h-5 text-red-600" />
              <span className="font-bold text-gray-900">Bagikan Artikel:</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handleShareWhatsApp}
                className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-xl transition-all transform hover:scale-105 font-medium shadow-lg"
                title="Bagikan ke WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span>WhatsApp</span>
              </button>
              <button
                onClick={handleShareInstagram}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl transition-all transform hover:scale-105 font-medium shadow-lg"
                title="Bagikan ke Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>Instagram</span>
              </button>
              <button
                onClick={handleShareTelegram}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-all transform hover:scale-105 font-medium shadow-lg"
                title="Bagikan ke Telegram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
                <span>Telegram</span>
              </button>
              <button
                onClick={handleCopyLink}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-xl transition-all transform hover:scale-105 font-medium shadow-lg"
                title="Salin Tautan"
              >
                {copied ? <Check className="w-5 h-5" /> : <Link2 className="w-5 h-5" />}
                <span>{copied ? 'Tersalin!' : 'Salin Tautan'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Buttons - Simple Side by Side */}
        <div className="flex items-center justify-between gap-4 mb-8">
          {prevArticle ? (
            <Link
              to={`/article/${prevArticle.id}`}
              className="flex items-center gap-3 px-6 py-4 bg-white hover:bg-red-600 border-2 border-red-600 text-red-600 hover:text-white rounded-xl transition-all shadow-lg hover:shadow-xl group"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-bold">Sebelumnya</span>
            </Link>
          ) : (
            <div></div>
          )}

          {nextArticle ? (
            <Link
              to={`/article/${nextArticle.id}`}
              className="flex items-center gap-3 px-6 py-4 bg-white hover:bg-red-600 border-2 border-red-600 text-red-600 hover:text-white rounded-xl transition-all shadow-lg hover:shadow-xl group"
            >
              <span className="font-bold">Selanjutnya</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          ) : quizLink ? (
            <Link
              to={quizLink}
              className="flex items-center gap-3 px-6 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl transition-all shadow-lg hover:shadow-xl group"
            >
              <span className="font-bold">Mulai Kuis</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
