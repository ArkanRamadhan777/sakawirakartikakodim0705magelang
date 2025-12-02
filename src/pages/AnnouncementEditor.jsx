import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useAdmin } from '../contexts/AdminContext';
import { 
  createAnnouncement, 
  updateAnnouncement, 
  getAnnouncementById 
} from '../services/announcementService';
import { Save, Send, Loader2, ArrowLeft, Megaphone } from 'lucide-react';

const AnnouncementEditor = () => {
  const { id } = useParams();
  const { currentUser } = useAuth();
  const { isAdmin, loading: adminLoading } = useAdmin();
  const navigate = useNavigate();
  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [type, setType] = useState('general'); // general, info, urgent
  const [loading, setLoading] = useState(false);
  const [loadingData, setLoadingData] = useState(false);

  const isEditMode = Boolean(id);

  useEffect(() => {
    if (!adminLoading && !isAdmin) {
      navigate('/');
    }
  }, [isAdmin, adminLoading, navigate]);

  useEffect(() => {
    if (isEditMode && isAdmin) {
      loadAnnouncement();
    }
  }, [id, isAdmin]);

  const loadAnnouncement = async () => {
    setLoadingData(true);
    const result = await getAnnouncementById(id);
    if (result.success) {
      const announcement = result.data;
      setTitle(announcement.title || '');
      setContent(announcement.content || '');
      setType(announcement.type || 'general');
    } else {
      alert('Gagal memuat pengumuman');
      navigate('/admin/announcements');
    }
    setLoadingData(false);
  };

  const handleSave = async (published = false) => {
    if (!title.trim()) {
      alert('Judul harus diisi');
      return;
    }

    if (!content.trim()) {
      alert('Isi pengumuman harus diisi');
      return;
    }

    setLoading(true);

    const announcementData = {
      title: title.trim(),
      content: content.trim(),
      type,
      published
    };

    let result;
    if (isEditMode) {
      result = await updateAnnouncement(id, announcementData);
    } else {
      result = await createAnnouncement(
        announcementData,
        currentUser.uid,
        currentUser.displayName || currentUser.email
      );
    }

    setLoading(false);

    if (result.success) {
      alert(`Pengumuman berhasil ${published ? 'dipublish' : 'disimpan'}!`);
      navigate('/admin/announcements');
    } else {
      alert('Gagal menyimpan pengumuman: ' + result.message);
    }
  };

  if (adminLoading || loadingData) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 flex items-center justify-center">
        <Loader2 className="animate-spin" size={40} />
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-6">
          <button
            onClick={() => navigate('/admin/announcements')}
            className="btn btn-ghost gap-2 mb-4"
          >
            <ArrowLeft size={20} />
            Kembali
          </button>
          
          <h1 className="text-3xl font-bold font-anta text-gray-900 flex items-center gap-3">
            <Megaphone className="text-primary" size={32} />
            {isEditMode ? 'Edit Pengumuman' : 'Buat Pengumuman Baru'}
          </h1>
        </div>

        {/* Form */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="space-y-6">
            {/* Title */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Judul Pengumuman</span>
                <span className="label-text-alt text-error">*</span>
              </label>
              <input
                type="text"
                placeholder="Masukkan judul pengumuman..."
                className="input input-bordered w-full"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                maxLength={150}
              />
              <label className="label">
                <span className="label-text-alt text-gray-500">
                  {title.length}/150 karakter
                </span>
              </label>
            </div>

            {/* Type */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Tipe Pengumuman</span>
              </label>
              <select
                className="select select-bordered w-full"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="general">📢 Umum</option>
                <option value="info">ℹ️ Informasi</option>
                <option value="urgent">🚨 Urgent/Penting</option>
              </select>
            </div>

            {/* Content */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Isi Pengumuman</span>
                <span className="label-text-alt text-error">*</span>
              </label>
              <textarea
                placeholder="Tulis isi pengumuman..."
                className="textarea textarea-bordered w-full h-64"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              <label className="label">
                <span className="label-text-alt text-gray-500">
                  {content.length} karakter
                </span>
              </label>
            </div>

            {/* Actions */}
            <div className="flex gap-3 justify-end pt-4 border-t">
              <button
                onClick={() => navigate('/admin/announcements')}
                className="btn btn-ghost"
                disabled={loading}
              >
                Batal
              </button>
              <button
                onClick={() => handleSave(false)}
                className="btn btn-outline gap-2"
                disabled={loading}
              >
                {loading ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
                Simpan sebagai Draft
              </button>
              <button
                onClick={() => handleSave(true)}
                className="btn btn-primary gap-2"
                disabled={loading}
              >
                {loading ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
                Publish Pengumuman
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementEditor;
