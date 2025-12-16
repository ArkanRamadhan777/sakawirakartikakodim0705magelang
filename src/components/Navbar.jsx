import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Tentang Kami', path: '/about' },
    { name: 'Krida', path: '/krida' },
    { name: 'Galeri', path: '/gallery' },
  ];

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

  return (
    <div
      style={{ borderBottom: isScrolled ? '2px solid #DC2626' : 'none' }}
      className={`navbar fixed top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'backdrop-blur-md bg-black/80 text-white shadow-2xl shadow-red-900/20'
          : 'bg-black text-white'
      }`}
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
          className="btn btn-ghost hover:scale-110 transition-transform"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu />
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm animate-fade-in" onClick={() => setIsMobileMenuOpen(false)}>
          <aside
            className="fixed top-0 right-0 h-screen w-72 bg-black shadow-2xl p-6 flex flex-col gap-4 text-white z-[101] border-l-2 border-primary animate-slide-right"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <span className="text-primary font-bold uppercase tracking-wider text-xl">Menu</span>
              <button
                className="btn btn-ghost btn-circle text-white hover:bg-white/20 hover:rotate-90 transition-all duration-300"
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
                      className={`block px-4 py-2 rounded-lg font-bold uppercase tracking-wide text-sm hover:bg-primary/20 hover:translate-x-2 transition-all duration-200 ${
                        location.pathname === link.path ? 'bg-primary/30 text-primary' : 'text-white'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      )}
    </div>
  );
};

export default Navbar;
