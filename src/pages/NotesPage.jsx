import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { StickyNote, Plus, Trash2, Edit, Clock, Search, X, BookOpen } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { getUserNotes, deleteNote, searchNotes } from '../services/notesService';
import LoadingSpinner from '../components/LoadingSpinner';
import NoteEditorModal from '../components/NoteEditorModal';
import toast from 'react-hot-toast';

const NotesPage = () => {
  const { currentUser } = useAuth();
  const [notes, setNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showEditor, setShowEditor] = useState(false);
  const [editingNote, setEditingNote] = useState(null);

  useEffect(() => {
    if (currentUser) {
      loadNotes();
    }
  }, [currentUser]);

  useEffect(() => {
    if (searchTerm.trim()) {
      performSearch();
    } else {
      setFilteredNotes(notes);
    }
  }, [searchTerm, notes]);

  const loadNotes = async () => {
    setLoading(true);
    const result = await getUserNotes(currentUser.uid);
    if (result.success) {
      setNotes(result.notes);
      setFilteredNotes(result.notes);
    }
    setLoading(false);
  };

  const performSearch = async () => {
    const result = await searchNotes(currentUser.uid, searchTerm);
    if (result.success) {
      setFilteredNotes(result.notes);
    }
  };

  const handleDeleteNote = async (noteId, title) => {
    if (!confirm(`Hapus catatan "${title}"?`)) return;

    setDeleting(noteId);
    const result = await deleteNote(noteId);
    
    if (result.success) {
      setNotes(notes.filter(n => n.id !== noteId));
      toast.success('Catatan dihapus');
    } else {
      toast.error('Gagal menghapus catatan');
    }
    setDeleting(null);
  };

  const handleEditNote = (note) => {
    setEditingNote(note);
    setShowEditor(true);
  };

  const handleNewNote = () => {
    setEditingNote(null);
    setShowEditor(true);
  };

  const handleNoteSaved = () => {
    loadNotes();
    setShowEditor(false);
    setEditingNote(null);
  };

  const stripHtml = (html) => {
    const tmp = document.createElement('DIV');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <LoadingSpinner size="lg" text="Memuat catatan..." />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-100 rounded-xl">
                <StickyNote className="text-blue-600" size={32} />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-800">Catatan Saya</h1>
                <p className="text-gray-600">Buat dan kelola catatan belajar pribadi</p>
              </div>
            </div>
            <button
              onClick={handleNewNote}
              className="btn btn-primary gap-2 hover-lift"
            >
              <Plus size={20} />
              Buat Catatan
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Cari catatan..."
              className="w-full pl-12 pr-12 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X size={20} />
              </button>
            )}
          </div>
        </div>

        {/* Notes Grid */}
        {filteredNotes.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl shadow-sm">
            <StickyNote size={64} className="mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {searchTerm ? 'Tidak ada catatan yang ditemukan' : 'Belum ada catatan'}
            </h3>
            <p className="text-gray-600 mb-6">
              {searchTerm 
                ? `Coba kata kunci lain untuk mencari catatan` 
                : 'Mulai membuat catatan untuk membantu proses belajar kamu'
              }
            </p>
            {!searchTerm && (
              <button onClick={handleNewNote} className="btn btn-primary gap-2">
                <Plus size={20} />
                Buat Catatan Pertama
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNotes.map((note) => (
              <div
                key={note.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group hover-lift"
              >
                <div className="p-5">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800 mb-1 line-clamp-2">
                        {note.title}
                      </h3>
                      <Link 
                        to={`/tkk/${note.tkkId}`}
                        className="text-xs text-primary hover:underline flex items-center gap-1"
                      >
                        <BookOpen size={12} />
                        {note.tkkTitle}
                      </Link>
                    </div>
                  </div>

                  {/* Content Preview */}
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {stripHtml(note.content)}
                  </p>

                  {/* Tags */}
                  {note.tags && note.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-4">
                      {note.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                      {note.tags.length > 3 && (
                        <span className="px-2 py-1 text-gray-500 text-xs">
                          +{note.tags.length - 3}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock size={12} />
                      {note.updatedAt ? new Date(note.updatedAt).toLocaleDateString('id-ID', {
                        day: 'numeric',
                        month: 'short'
                      }) : ''}
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEditNote(note)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="Edit catatan"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={() => handleDeleteNote(note.id, note.title)}
                        disabled={deleting === note.id}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Hapus catatan"
                      >
                        {deleting === note.id ? (
                          <LoadingSpinner size="sm" />
                        ) : (
                          <Trash2 size={16} />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Note Editor Modal */}
      {showEditor && (
        <NoteEditorModal
          note={editingNote}
          onClose={() => {
            setShowEditor(false);
            setEditingNote(null);
          }}
          onSave={handleNoteSaved}
        />
      )}
    </div>
  );
};

export default NotesPage;
