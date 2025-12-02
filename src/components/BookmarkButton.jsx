import React, { useState, useEffect } from 'react';
import { Bookmark, BookmarkCheck } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { addBookmark, removeBookmark, isBookmarked } from '../services/bookmarkService';
import toast from 'react-hot-toast';

const BookmarkButton = ({ item, itemType, size = 'md', showLabel = true }) => {
  const { currentUser } = useAuth();
  const [bookmarked, setBookmarked] = useState(false);
  const [bookmarkId, setBookmarkId] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (currentUser && item.id) {
      checkBookmarkStatus();
    }
  }, [currentUser, item.id]);

  const checkBookmarkStatus = async () => {
    const result = await isBookmarked(currentUser.uid, item.id);
    if (result.success) {
      setBookmarked(result.isBookmarked);
      setBookmarkId(result.bookmarkId);
    }
  };

  const handleToggleBookmark = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!currentUser) {
      toast.error('Silakan login terlebih dahulu');
      return;
    }

    setLoading(true);

    if (bookmarked) {
      // Remove bookmark
      const result = await removeBookmark(bookmarkId);
      if (result.success) {
        setBookmarked(false);
        setBookmarkId(null);
        toast.success('Bookmark dihapus');
      } else {
        toast.error('Gagal menghapus bookmark');
      }
    } else {
      // Add bookmark
      const bookmarkData = {
        itemId: item.id,
        itemType: itemType, // 'article' or 'tkk'
        title: item.title || item.name,
        description: item.excerpt || item.description || '',
        imageUrl: item.imageUrl || item.image || ''
      };

      const result = await addBookmark(currentUser.uid, bookmarkData);
      if (result.success) {
        setBookmarked(true);
        setBookmarkId(result.bookmarkId);
        toast.success('Ditambahkan ke bookmark!');
      } else {
        toast.error('Gagal menambahkan bookmark');
      }
    }

    setLoading(false);
  };

  const sizeClasses = {
    sm: 'p-1.5',
    md: 'p-2',
    lg: 'p-3'
  };

  const iconSize = {
    sm: 16,
    md: 20,
    lg: 24
  };

  if (!currentUser) {
    return null; // Don't show bookmark button if not logged in
  }

  return (
    <button
      onClick={handleToggleBookmark}
      disabled={loading}
      className={`
        ${sizeClasses[size]}
        inline-flex items-center gap-2
        rounded-lg border-2 transition-all duration-300
        ${bookmarked 
          ? 'bg-yellow-50 border-yellow-400 text-yellow-600 hover:bg-yellow-100' 
          : 'bg-white border-gray-300 text-gray-600 hover:border-yellow-400 hover:text-yellow-600'
        }
        ${loading ? 'opacity-50 cursor-not-allowed' : 'hover-lift'}
        disabled:opacity-50 disabled:cursor-not-allowed
      `}
      title={bookmarked ? 'Hapus dari bookmark' : 'Tambahkan ke bookmark'}
    >
      {bookmarked ? (
        <BookmarkCheck size={iconSize[size]} className="fill-current" />
      ) : (
        <Bookmark size={iconSize[size]} />
      )}
      {showLabel && (
        <span className="text-sm font-medium">
          {bookmarked ? 'Tersimpan' : 'Simpan'}
        </span>
      )}
    </button>
  );
};

export default BookmarkButton;
