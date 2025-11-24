import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

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

  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Tentang Kami', path: '/about' },
    { name: 'Krida', path: '/krida' },
    { name: 'Galeri', path: '/gallery' },
  ];

  return (
    <div className={`navbar fixed top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md text-white shadow-xl border-b border-primary' : 'bg-black/30 backdrop-blur-md text-white'}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <Menu />
          </div>
          {isMobileMenuOpen && (
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-black border border-gray-800 rounded-box w-52 text-white font-bold">
              {navLinks.map((link) => (
                <li key={link.name}><Link to={link.path} onClick={() => setIsMobileMenuOpen(false)} className={`hover:text-primary hover:bg-gray-900 ${location.pathname === link.path ? '!text-primary' : ''}`}>{link.name}</Link></li>
              ))}
            </ul>
          )}
        </div>
        <Link to="/" className="btn btn-ghost text-xl font-anta flex items-center gap-3 hover:bg-white/10 h-auto py-2">
          <img src="/swk.webp" alt="Logo" className="h-14 w-14 drop-shadow-md" onError={(e) => e.target.style.display = 'none'} />
          <div className="flex flex-col items-start leading-none">
            <span className="font-bold font-anta text-lg text-primary tracking-wide uppercase">Saka Wira Kartika</span>
            <span className="font-bold font-anta text-lg text-white tracking-wider mt-1 uppercase">Kodim 0705 Magelang</span>
          </div>
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                to={link.path} 
                className={`font-bold uppercase tracking-wide text-sm hover:text-primary transition-colors duration-200 ${location.pathname === link.path ? '!text-primary' : 'text-white'}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
