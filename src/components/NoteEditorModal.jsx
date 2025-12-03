import React, { useState, useEffect } from 'react';
import { X, Save, Tag } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { createNote, updateNote } from '../services/notesService';
import { kridas } from '../data/kridas';
import LoadingSpinner from '../components/LoadingSpinner';
import toast from 'react-hot-toast';

const NoteEditorModal = ({ note, tkkId, tkkTitle, onClose, onSave }) => {
  const { currentUser } = useAuth();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState('');
  const [saving, setSaving] = useState(false);
  const [selectedTkkId, setSelectedTkkId] = useState('');
  const [selectedTkkTitle, setSelectedTkkTitle] = useState('');
  const [allTkk, setAllTkk] = useState([]);

  useEffect(() => {
    // Flatten all TKK from kridas
    const tkkList = [];
    kridas.forEach(krida => {
      krida.tkk.forEach(tkk => {
        tkkList.push({
          id: tkk.id,
          title: tkk.title,
          kridaTitle: krida.title
        });
      });
    });
    setAllTkk(tkkList);
  }, []);

  useEffect(() => {
    if (note) {
      // Editing existing note
      setTitle(note.title);
      setContent(note.content);
      setTags(note.tags || []);
      setSelectedTkkId(note.tkkId);
      setSelectedTkkTitle(note.tkkTitle);
    } else if (tkkId && tkkTitle) {
      // New note from TKK page
      setSelectedTkkId(tkkId);
      setSelectedTkkTitle(tkkTitle);
    }
  }, [note, tkkId, tkkTitle]);

  const handleAddTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddTag();
    }
  };

  const handleSave = async () => {
    if (!title.trim()) {
      toast.error('Judul catatan tidak boleh kosong');
      return;
    }

    if (!content.trim()) {
      toast.error('Isi catatan tidak boleh kosong');
      return;
    }

    if (!selectedTkkId || !selectedTkkTitle) {
      toast.error('TKK harus dipilih');
      return;
    }

    setSaving(true);

    const noteData = {
      title: title.trim(),
      content: content.trim(),
      tags,
      tkkId: selectedTkkId,
      tkkTitle: selectedTkkTitle
    };

    let result;
    if (note) {
      // Update existing note
      result = await updateNote(note.id, noteData);
    } else {
      // Create new note
      result = await createNote(currentUser.uid, noteData);
    }

    setSaving(false);

    if (result.success) {
      toast.success(note ? 'Catatan diperbarui' : 'Catatan berhasil dibuat');
      onSave();
    } else {
      toast.error('Gagal menyimpan catatan');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col animate-scale-in">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">
            {note ? 'Edit Catatan' : 'Buat Catatan Baru'}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {/* TKK Selection (if creating new note without pre-selected TKK) */}
          {!note && !tkkId && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pilih TKK *
              </label>
              <select
                value={selectedTkkId}
                onChange={(e) => {
                  const selected = allTkk.find(t => t.id === e.target.value);
                  setSelectedTkkId(e.target.value);
                  setSelectedTkkTitle(selected ? `${selected.kridaTitle} - ${selected.title}` : '');
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              >
                <option value="">-- Pilih TKK --</option>
                {allTkk.map(tkk => (
                  <option key={tkk.id} value={tkk.id}>
                    {tkk.kridaTitle} - {tkk.title}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* TKK Info (if creating from TKK page or editing) */}
          {selectedTkkTitle && (tkkId || note) && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="text-sm text-blue-800">
                <span className="font-semibold">TKK:</span> {selectedTkkTitle}
              </p>
            </div>
          )}

          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Judul Catatan *
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Masukkan judul catatan..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              autoFocus
            />
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Isi Catatan *
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Tulis catatan kamu di sini..."
              rows={12}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none font-mono text-sm"
            />
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
              <Tag size={16} />
              Tag (opsional)
            </label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Tambah tag..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
              <button
                onClick={handleAddTag}
                className="btn btn-outline"
              >
                Tambah
              </button>
            </div>
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {tag}
                    <button
                      onClick={() => handleRemoveTag(tag)}
                      className="hover:text-red-600 transition-colors"
                    >
                      <X size={14} />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-200 bg-gray-50">
          <button
            onClick={onClose}
            className="btn btn-outline"
            disabled={saving}
          >
            Batal
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="btn btn-primary gap-2"
          >
            {saving ? (
              <>
                <LoadingSpinner size="sm" />
                Menyimpan...
              </>
            ) : (
              <>
                <Save size={20} />
                Simpan
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteEditorModal;
