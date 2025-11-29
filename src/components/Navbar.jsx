import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, LogIn, User, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { currentUser } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Tentang Kami', path: '/about' },
    { name: 'Krida', path: '/krida' },
    { name: 'Galeri', path: '/gallery' },
    ...(currentUser ? [{ name: 'Leaderboard', path: '/leaderboard' }] : []),
  ];

  return (
    <div
      style={{ borderBottom: isScrolled ? '2px solid #DC2626' : 'none' }}
      className={`navbar fixed top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black text-white shadow-xl' : 'bg-black text-white'}`}
    >
      <div className="navbar-start">
        <Link to="/" onClick={scrollToTop} className="btn btn-ghost text-xl font-anta flex items-center gap-3 hover:bg-white/10 h-auto py-2">
          <img src="/swk.webp" alt="Logo" className="h-14 w-14 drop-shadow-md" onError={(e) => e.target.style.display = 'none'} />
          <div className="flex flex-col items-start leading-none">
            <span className="font-bold font-anta text-lg text-primary tracking-wide uppercase">Saka Wira Kartika</span>
            <span className="font-bold font-anta text-lg text-white tracking-wider mt-1 uppercase">Kodim 0705 Magelang</span>
          </div>
        </Link>
      </div>
      <div className="navbar-end">
        <button
          className="btn btn-ghost"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu />
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-black/60" onClick={() => setIsMobileMenuOpen(false)}>
          <aside
            className="fixed top-0 right-0 h-full w-72 bg-black shadow-xl p-6 flex flex-col gap-4 text-white z-[101] border-l border-white/10"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <span className="text-primary font-bold uppercase tracking-wider text-xl">Menu</span>
              <button
                className="btn btn-ghost btn-circle text-white hover:bg-white/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex-1">
              <ul className="flex flex-col gap-2">
                {navLinks.map(link => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }}
                      className={`block px-4 py-2 rounded-lg font-bold uppercase tracking-wide text-sm hover:bg-primary/20 transition-colors duration-200 ${location.pathname === link.path ? 'bg-primary/30 text-primary' : 'text-white'}`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-auto">
              {currentUser ? (
                <Link
                  to="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20"
                >
                  <User size={16} />
                  {currentUser.displayName || currentUser.email}
                </Link>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white"
                >
                  <LogIn size={16} />
                  Masuk
                </Link>
              )}
            </div>
          </aside>
        </div>
      )}
    </div>
  );
};

export default Navbar;