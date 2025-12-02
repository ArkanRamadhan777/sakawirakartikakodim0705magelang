import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getAnnouncementById, incrementAnnouncementViews } from '../services/announcementService';
import { ArrowLeft, Calendar, User, Eye, Megaphone, Info, AlertTriangle } from 'lucide-react';

const AnnouncementDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [announcement, setAnnouncement] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAnnouncement();
  }, [id]);

  const loadAnnouncement = async () => {
    setLoading(true);
    const result = await getAnnouncementById(id);
    if (result.success) {
      setAnnouncement(result.data);
      // Increment views
      incrementAnnouncementViews(id);
    } else {
      alert('Pengumuman tidak ditemukan');
      navigate('/');
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!announcement) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Pengumuman tidak ditemukan</p>
          <button onClick={() => navigate('/')} className="btn btn-primary mt-4">
            Kembali ke Beranda
          </button>
        </div>
      </div>
    );
  }

  const typeConfig = {
    urgent: {
      badge: 'badge-error',
      bg: 'bg-error/10',
      text: 'text-error',
      icon: AlertTriangle,
      label: 'Urgent'
    },
    info: {
      badge: 'badge-info',
      bg: 'bg-info/10',
      text: 'text-info',
      icon: Info,
      label: 'Informasi'
    },
    general: {
      badge: 'badge-ghost',
      bg: 'bg-gray-100',
      text: 'text-gray-700',
      icon: Megaphone,
      label: 'Umum'
    }
  };

  const config = typeConfig[announcement.type] || typeConfig.general;
  const Icon = config.icon;

  const formatDate = (timestamp) => {
    if (!timestamp) return '';
    const date = timestamp.toDate();
    return date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="btn btn-ghost gap-2 mb-6"
        >
          <ArrowLeft size={20} />
          Kembali
        </button>

        {/* Announcement Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Header with Type Badge */}
          <div className={`${config.bg} p-6 border-b border-gray-100`}>
            <div className="flex items-center gap-2 mb-4">
              <Icon className={config.text} size={20} />
              <span className={`badge ${config.badge}`}>{config.label}</span>
            </div>
            <h1 className="text-3xl font-bold font-anta text-gray-900">
              {announcement.title}
            </h1>
          </div>

          {/* Metadata */}
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>{announcement.authorName}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{formatDate(announcement.createdAt)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye size={16} />
                <span>{announcement.views || 0} views</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="prose max-w-none">
              <p className="text-gray-800 whitespace-pre-wrap leading-relaxed">
                {announcement.content}
              </p>
            </div>
          </div>

          {/* Footer */}
          {announcement.updatedAt && announcement.updatedAt !== announcement.createdAt && (
            <div className="px-6 py-3 bg-gray-50 border-t border-gray-100">
              <p className="text-xs text-gray-500">
                Terakhir diperbarui: {formatDate(announcement.updatedAt)}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementDetail;
