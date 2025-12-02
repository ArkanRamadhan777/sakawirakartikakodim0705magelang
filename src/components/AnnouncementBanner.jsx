import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getLatestAnnouncement, incrementAnnouncementViews } from '../services/announcementService';
import { X, Megaphone, Info, AlertTriangle } from 'lucide-react';

const AnnouncementBanner = () => {
  const [announcement, setAnnouncement] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    loadLatestAnnouncement();
  }, []);

  const loadLatestAnnouncement = async () => {
    console.log('🔍 Loading latest announcement...');
    const result = await getLatestAnnouncement();
    console.log('📢 Announcement result:', result);
    setLoading(false);
    if (result.success && result.data) {
      console.log('✅ Announcement found:', result.data);
      const dismissedIds = JSON.parse(localStorage.getItem('dismissedAnnouncements') || '[]');
      console.log('🚫 Dismissed IDs:', dismissedIds);
      if (!dismissedIds.includes(result.data.id)) {
        console.log('✨ Showing announcement modal');
        setAnnouncement(result.data);
        // Show modal after short delay
        setTimeout(() => setShowModal(true), 500);
        // Increment views
        incrementAnnouncementViews(result.data.id);
      } else {
        console.log('⏭️ Announcement already dismissed');
      }
    } else {
      console.log('❌ No announcement or error:', result);
    }
  };

  const handleDismiss = () => {
    const dismissedIds = JSON.parse(localStorage.getItem('dismissedAnnouncements') || '[]');
    dismissedIds.push(announcement.id);
    localStorage.setItem('dismissedAnnouncements', JSON.stringify(dismissedIds));
    setShowModal(false);
  };

  const handleReadMore = () => {
    setShowModal(false);
    navigate(`/announcement/${announcement.id}`);
  };

  if (loading || !announcement || !showModal) {
    return null;
  }

  const typeConfig = {
    urgent: {
      bg: 'bg-error',
      gradient: 'from-error to-red-700',
      text: 'text-error',
      icon: AlertTriangle,
      label: 'Urgent'
    },
    info: {
      bg: 'bg-info',
      gradient: 'from-info to-blue-700',
      text: 'text-info',
      icon: Info,
      label: 'Informasi'
    },
    general: {
      bg: 'bg-primary',
      gradient: 'from-primary to-red-700',
      text: 'text-primary',
      icon: Megaphone,
      label: 'Pengumuman'
    }
  };

  const config = typeConfig[announcement.type] || typeConfig.general;
  const Icon = config.icon;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] animate-fade-in"
        onClick={handleDismiss}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
        <div 
          className="bg-white rounded-2xl shadow-2xl max-w-lg w-full pointer-events-auto animate-scale-in overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header with gradient */}
          <div className={`bg-gradient-to-r ${config.gradient} p-6 text-white relative`}>
            <button
              onClick={handleDismiss}
              className="absolute top-4 right-4 btn btn-ghost btn-sm btn-circle text-white hover:bg-white/20"
            >
              <X size={20} />
            </button>
            <div className="flex items-center gap-3 mb-2">
              <Icon size={28} />
              <span className="badge badge-lg bg-white/20 border-0 text-white">
                {config.label}
              </span>
            </div>
            <h2 className="text-2xl font-bold font-anta pr-10">
              {announcement.title}
            </h2>
          </div>

          {/* Content */}
          <div className="p-6">
            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap mb-6">
              {announcement.content.length > 300 
                ? announcement.content.substring(0, 300) + '...'
                : announcement.content
              }
            </p>

            {/* Actions */}
            <div className="flex gap-3 justify-end">
              <button
                onClick={handleDismiss}
                className="btn btn-ghost"
              >
                Tutup
              </button>
              {announcement.content.length > 300 && (
                <button
                  onClick={handleReadMore}
                  className={`btn ${config.bg} text-white hover:opacity-90`}
                >
                  Baca Selengkapnya
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-in {
          from { 
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to { 
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default AnnouncementBanner;
