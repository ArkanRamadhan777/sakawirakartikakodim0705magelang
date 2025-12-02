import React, { useEffect, useState } from 'react';
import { tierStyles } from '../data/achievements';

const AchievementUnlockedModal = ({ achievement, onClose }) => {
  const [show, setShow] = useState(false);
  
  useEffect(() => {
    // Trigger animation
    setTimeout(() => setShow(true), 100);
    
    // Auto close after 5 seconds
    const timer = setTimeout(() => {
      handleClose();
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleClose = () => {
    setShow(false);
    setTimeout(onClose, 300);
  };
  
  if (!achievement) return null;
  
  const tier = tierStyles[achievement.tier];
  
  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] transition-opacity duration-300 ${show ? 'opacity-100' : 'opacity-0'}`}
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
        <div 
          className={`
            bg-white rounded-2xl shadow-2xl max-w-md w-full pointer-events-auto
            transition-all duration-500
            ${show ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}
          `}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Confetti Background */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
            <div className="confetti">
              {[...Array(50)].map((_, i) => (
                <div
                  key={i}
                  className="confetti-piece"
                  style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    backgroundColor: ['#f59e0b', '#ef4444', '#8b5cf6', '#3b82f6', '#10b981'][Math.floor(Math.random() * 5)]
                  }}
                />
              ))}
            </div>
          </div>
          
          {/* Content */}
          <div className="relative p-8 text-center">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                🎉 Achievement Unlocked! 🎉
              </h2>
              <p className="text-gray-600 text-sm">
                Selamat! Kamu mendapatkan pencapaian baru
              </p>
            </div>
            
            {/* Achievement Badge */}
            <div className="flex justify-center mb-6">
              <div
                className={`
                  w-32 h-32 rounded-2xl border-4 ${tier.border} ${tier.bg}
                  flex items-center justify-center
                  animate-bounce
                `}
              >
                <span className="text-6xl">{achievement.icon}</span>
              </div>
            </div>
            
            {/* Achievement Info */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {achievement.title}
              </h3>
              <p className="text-gray-600">
                {achievement.description}
              </p>
              <div className="mt-3">
                <span className={`badge ${tier.badge} badge-lg`}>
                  {achievement.tier.toUpperCase()}
                </span>
              </div>
            </div>
            
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="btn btn-primary btn-wide"
            >
              Lanjutkan
            </button>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes confetti-fall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
        
        .confetti-piece {
          position: absolute;
          width: 10px;
          height: 10px;
          animation: confetti-fall 3s linear infinite;
        }
      `}</style>
    </>
  );
};

export default AchievementUnlockedModal;
