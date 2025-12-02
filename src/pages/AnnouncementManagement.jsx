import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useAdmin } from '../contexts/AdminContext';
import { getAllAnnouncements, deleteAnnouncement } from '../services/announcementService';
import { Plus, Edit, Trash2, Eye, EyeOff, Loader2, Megaphone, Calendar, User as UserIcon } from 'lucide-react';

const AnnouncementManagement = () => {
  const { currentUser } = useAuth();
  const { isAdmin, loading: adminLoading } = useAdmin();
  const navigate = useNavigate();
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all'); // all, published, draft

  useEffect(() => {
    if (!adminLoading && !isAdmin) {
      navigate('/');
    }
  }, [isAdmin, adminLoading, navigate]);

  useEffect(() => {
    if (isAdmin) {
      loadAnnouncements();
    }
  }, [isAdmin]);

  const loadAnnouncements = async () => {
    setLoading(true);
    const result = await getAllAnnouncements();
    if (result.success) {
      setAnnouncements(result.data);
    }
    setLoading(false);
  };

  const handleDelete = async (announcementId) => {
    if (window.confirm('Yakin ingin menghapus pengumuman ini?')) {
      const result = await deleteAnnouncement(announcementId);
      if (result.success) {
        loadAnnouncements();
        alert('Pengumuman berhasil dihapus');
      } else {
        alert('Gagal menghapus pengumuman: ' + result.message);
      }
    }
  };

  const filteredAnnouncements = announcements.filter(announcement => {
    if (filter === 'published') return announcement.published;
    if (filter === 'draft') return !announcement.published;
    return true;
  });

  if (adminLoading || !isAdmin) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 flex items-center justify-center">
        <Loader2 className="animate-spin" size={40} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold font-anta text-gray-900 flex items-center gap-3">
                <Megaphone className="text-primary" size={32} />
                Kelola Pengumuman
              </h1>
              <p className="text-gray-600 mt-2">Buat dan kelola pengumuman untuk user</p>
            </div>
            <button
              onClick={() => navigate('/admin/announcement/new')}
              className="btn btn-primary gap-2"
            >
              <Plus size={20} />
              Buat Pengumuman Baru
            </button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-6">
          <div className="flex gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`btn btn-sm ${filter === 'all' ? 'btn-primary' : 'btn-ghost'}`}
            >
              Semua ({announcements.length})
            </button>
            <button
              onClick={() => setFilter('published')}
              className={`btn btn-sm ${filter === 'published' ? 'btn-primary' : 'btn-ghost'}`}
            >
              Published ({announcements.filter(a => a.published).length})
            </button>
            <button
              onClick={() => setFilter('draft')}
              className={`btn btn-sm ${filter === 'draft' ? 'btn-primary' : 'btn-ghost'}`}
            >
              Draft ({announcements.filter(a => !a.published).length})
            </button>
          </div>
        </div>

        {/* Announcements List */}
        {loading ? (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
            <Loader2 className="animate-spin mx-auto mb-4" size={40} />
            <p className="text-gray-600">Memuat pengumuman...</p>
          </div>
        ) : filteredAnnouncements.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
            <Megaphone size={48} className="mx-auto text-gray-400 mb-4" />
            <p className="text-gray-600 text-lg mb-4">Belum ada pengumuman</p>
            <button
              onClick={() => navigate('/admin/announcement/new')}
              className="btn btn-primary gap-2"
            >
              <Plus size={20} />
              Buat Pengumuman Pertama
            </button>
          </div>
        ) : (
          <div className="grid gap-4">
            {filteredAnnouncements.map((announcement) => (
              <div
                key={announcement.id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{announcement.title}</h3>
                      {announcement.published ? (
                        <span className="badge badge-success gap-1">
                          <Eye size={14} />
                          Published
                        </span>
                      ) : (
                        <span className="badge badge-warning gap-1">
                          <EyeOff size={14} />
                          Draft
                        </span>
                      )}
                      {announcement.type && (
                        <span className={`badge ${
                          announcement.type === 'urgent' ? 'badge-error' :
                          announcement.type === 'info' ? 'badge-info' :
                          'badge-ghost'
                        }`}>
                          {announcement.type === 'urgent' ? '🚨 Urgent' :
                           announcement.type === 'info' ? 'ℹ️ Info' :
                           '📢 Umum'}
                        </span>
                      )}
                    </div>
                    
                    <div className="text-sm text-gray-600 mb-3 flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <UserIcon size={14} />
                        {announcement.authorName}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {new Date(announcement.createdAt?.toDate()).toLocaleDateString('id-ID')}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye size={14} />
                        {announcement.views || 0} views
                      </span>
                    </div>

                    {announcement.content && (
                      <p className="text-gray-700 line-clamp-2">{announcement.content}</p>
                    )}
                  </div>

                  <div className="flex gap-2 ml-4">
                    <button
                      onClick={() => navigate(`/admin/announcement/edit/${announcement.id}`)}
                      className="btn btn-sm btn-outline btn-primary gap-2"
                    >
                      <Edit size={16} />
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(announcement.id)}
                      className="btn btn-sm btn-outline btn-error gap-2"
                    >
                      <Trash2 size={16} />
                      Hapus
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

export default AnnouncementManagement;
