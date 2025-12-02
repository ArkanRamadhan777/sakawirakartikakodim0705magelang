import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs = ({ items }) => {
  return (
    <nav className="flex items-center space-x-2 text-sm mb-6 px-4 py-3 bg-white rounded-lg shadow-sm border border-gray-100">
      <Link
        to="/"
        className="flex items-center gap-1 text-gray-600 hover:text-primary transition-colors duration-200 group"
      >
        <Home size={16} className="group-hover:scale-110 transition-transform duration-200" />
        <span className="hidden sm:inline">Beranda</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        
        return (
          <React.Fragment key={index}>
            <ChevronRight size={16} className="text-gray-400" />
            
            {isLast ? (
              <span className="text-gray-900 font-semibold truncate max-w-[200px] sm:max-w-none">
                {item.label}
              </span>
            ) : (
              <Link
                to={item.path}
                className="text-gray-600 hover:text-primary transition-colors duration-200 truncate max-w-[150px] sm:max-w-none"
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
