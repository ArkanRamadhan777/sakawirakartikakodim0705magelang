import React from 'react';
import { achievements, tierStyles } from '../data/achievements';

const AchievementBadge = ({ achievement, unlocked = false, size = 'md' }) => {
  const tier = tierStyles[achievement.tier];
  
  const sizeClasses = {
    sm: 'w-16 h-16 text-2xl',
    md: 'w-24 h-24 text-4xl',
    lg: 'w-32 h-32 text-5xl'
  };
  
  const textSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };
  
  return (
    <div className="relative group">
      <div
        className={`
          ${sizeClasses[size]} rounded-xl border-4 ${tier.border}
          ${unlocked ? tier.bg : 'bg-gray-100 opacity-40'}
          flex flex-col items-center justify-center
          transition-all duration-300
          ${unlocked ? 'hover:scale-110 cursor-pointer' : 'cursor-not-allowed'}
          relative overflow-hidden
        `}
      >
        {/* Icon */}
        <div className={`${unlocked ? '' : 'grayscale'}`}>
          {achievement.icon}
        </div>
        
        {/* Lock overlay for locked achievements */}
        {!unlocked && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <span className="text-3xl">🔒</span>
          </div>
        )}
        
        {/* Shine effect for unlocked */}
        {unlocked && (
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}
      </div>
      
      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10 pointer-events-none">
        <div className="font-bold mb-1">{achievement.title}</div>
        <div className={textSizeClasses[size]}>{achievement.description}</div>
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
      </div>
    </div>
  );
};

export default AchievementBadge;
