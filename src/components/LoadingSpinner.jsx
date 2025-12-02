import React from 'react';

const LoadingSpinner = ({ size = 'md', text = 'Loading...' }) => {
  const sizes = {
    sm: 'w-6 h-6',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };
  
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="relative">
        {/* Outer ring */}
        <div className={`${sizes[size]} border-4 border-gray-200 rounded-full`}></div>
        
        {/* Spinning ring */}
        <div className={`absolute inset-0 ${sizes[size]} border-4 border-primary border-t-transparent rounded-full animate-spin`}></div>
        
        {/* Inner pulse */}
        <div className={`absolute inset-0 ${sizes[size]} flex items-center justify-center`}>
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        </div>
      </div>
      
      {text && (
        <p className="text-gray-600 font-medium animate-pulse">{text}</p>
      )}
    </div>
  );
};

export default LoadingSpinner;
