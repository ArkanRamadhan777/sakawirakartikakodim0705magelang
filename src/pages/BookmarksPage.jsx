import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bookmark, BookOpen, FileText, Trash2, ExternalLink } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { getUserBookmarks, removeBookmark } from '../services/bookmarkService';
import LoadingSpinner from '../components/LoadingSpinner';
import toast from 'react-hot-toast';

const BookmarksPage = () => {
  const { currentUser } = useAuth();
  const [bookmarks, setBookmarks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all'); // 'all', 'article', 'tkk'
  const [deleting, setDeleting] = useState(null);

  useEffect(() => {
    if (currentUser) {
      loadBookmarks();
    }
  }, [currentUser]);

  const loadBookmarks = async () => {
    setLoading(true);
    const result = await getUserBookmarks(currentUser.uid);
    if (result.success) {
      setBookmarks(result.bookmarks);
    }
    setLoading(false);
  };

  const handleRemoveBookmark = async (bookmarkId, title) => {
    if (!confirm(`Hapus "${title}" dari bookmark?`)) return;

    setDeleting(bookmarkId);
    const result = await removeBookmark(bookmarkId);
    
    if (result.success) {
      setBookmarks(bookmarks.filter(b => b.id !== bookmarkId));
      toast.success('Bookmark dihapus');
    } else {
      toast.error('Gagal menghapus bookmark');
    }
    setDeleting(null);
  };

  const filteredBookmarks = filter === 'all' 
    ? bookmarks 
    : bookmarks.filter(b => b.itemType === filter);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <LoadingSpinner size="lg" text="Memuat bookmark..." />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-yellow-100 rounded-xl">
              <Bookmark className="text-yellow-600" size={32} />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Bookmark Saya</h1>
              <p className="text-gray-600">Materi yang kamu simpan untuk dipelajari nanti</p>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-6 border-b border-gray-200">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 font-medium transition-colors border-b-2 ${
              filter === 'all'
                ? 'border-primary text-primary'
                : 'border-transparent text-gray-600 hover:text-gray-800'
            }`}
          >
            Semua ({bookmarks.length})
          </button>
          <button
            onClick={() => setFilter('article')}
            className={`px-4 py-2 font-medium transition-colors border-b-2 ${
              filter === 'article'
                ? 'border-primary text-primary'
                : 'border-transparent text-gray-600 hover:text-gray-800'
            }`}
          >
            <FileText size={16} className="inline mr-1" />
            Artikel ({bookmarks.filter(b => b.itemType === 'article').length})
          </button>
          <button
            onClick={() => setFilter('tkk')}
            className={`px-4 py-2 font-medium transition-colors border-b-2 ${
              filter === 'tkk'
                ? 'border-primary text-primary'
                : 'border-transparent text-gray-600 hover:text-gray-800'
            }`}
          >
            <BookOpen size={16} className="inline mr-1" />
            Materi TKK ({bookmarks.filter(b => b.itemType === 'tkk').length})
          </button>
        </div>

        {/* Bookmarks Grid */}
        {filteredBookmarks.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl shadow-sm">
            <Bookmark size={64} className="mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {filter === 'all' ? 'Belum ada bookmark' : `Belum ada ${filter === 'article' ? 'artikel' : 'materi TKK'} yang disimpan`}
            </h3>
            <p className="text-gray-600 mb-6">
              Simpan artikel atau materi favorit untuk akses cepat nanti
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/references" className="btn btn-primary">
                Jelajahi Artikel
              </Link>
              <Link to="/krida" className="btn btn-outline">
                Lihat Materi TKK
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBookmarks.map((bookmark) => (
              <div
                key={bookmark.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group hover-lift"
              >
                {/* Image */}
                {bookmark.imageUrl && (
                  <div className="h-48 overflow-hidden bg-gray-100">
                    <img
                      src={bookmark.imageUrl}
                      alt={bookmark.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                <div className="p-5">
                  {/* Type Badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                      bookmark.itemType === 'article'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-green-100 text-green-700'
                    }`}>
                      {bookmark.itemType === 'article' ? (
                        <>
                          <FileText size={12} />
                          Artikel
                        </>
                      ) : (
                        <>
                          <BookOpen size={12} />
                          Materi TKK
                        </>
                      )}
                    </span>
                    <span className="text-xs text-gray-500">
                      {bookmark.createdAt ? new Date(bookmark.createdAt).toLocaleDateString('id-ID', {
                        day: 'numeric',
                        month: 'short'
                      }) : ''}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {bookmark.title}
                  </h3>

                  {/* Description */}
                  {bookmark.description && (
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {bookmark.description}
                    </p>
                  )}

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Link
                      to={bookmark.itemType === 'article' 
                        ? `/references/${bookmark.itemId}` 
                        : `/tkk/${bookmark.itemId}`
                      }
                      className="flex-1 btn btn-primary btn-sm flex items-center justify-center gap-2"
                    >
                      <ExternalLink size={16} />
                      Buka
                    </Link>
                    <button
                      onClick={() => handleRemoveBookmark(bookmark.id, bookmark.title)}
                      disabled={deleting === bookmark.id}
                      className="btn btn-outline btn-sm p-2 text-red-600 hover:bg-red-50 hover:border-red-400"
                      title="Hapus bookmark"
                    >
                      {deleting === bookmark.id ? (
                        <LoadingSpinner size="sm" />
                      ) : (
                        <Trash2 size={16} />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookmarksPage;
