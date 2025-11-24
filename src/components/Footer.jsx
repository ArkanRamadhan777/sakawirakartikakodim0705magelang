import React from 'react';
import { Instagram, Youtube, MapPin, Phone, Mail, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <div className="bg-neutral text-neutral-content border-t-4 border-primary">
      <footer className="footer p-10 max-w-7xl mx-auto">
        <aside className="max-w-xs">
          <div className="flex items-center gap-4 mb-6">
              <a href="https://www.scout.org/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" title="WOSM">
              <img src="/wosm.webp" alt="WOSM" className="h-12 w-auto" />
            </a>
            <a href="https://pramuka.or.id/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" title="Gerakan Pramuka">
              <img src="/tunaskelapa.webp" alt="Pramuka" className="h-12 w-auto" />
            </a>
            <a href="https://korem072.tni-ad.mil.id/category/kodim-0705-magelang/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" title="Korem 072/Pamungkas">
              <img src="/korem.webp" alt="Korem" className="h-12 w-auto" />
            </a>
            <a href="/" className="hover:scale-110 transition-transform" title="Saka Wira Kartika">
              <img src="/swk.webp" alt="SWK" className="h-12 w-auto" />
            </a>
          </div>
          <div className="flex flex-col items-start leading-none mb-2">
            <span className="font-bold font-anta text-lg text-primary tracking-wide uppercase">Saka Wira Kartika</span>
            <span className="font-bold font-anta text-lg text-white tracking-wider mt-1 uppercase">Kodim 0705 Magelang</span>
          </div>
          <p className="font-gabarito text-gray-400 leading-relaxed">
            Membentuk generasi muda yang berkarakter, disiplin, dan cinta tanah air melalui pendidikan kepramukaan matra darat.
          </p>
        </aside> 
        <nav>
          <h6 className="footer-title font-anta text-white opacity-100 mb-4 border-b-2 border-primary pb-2 inline-block">Alamat</h6> 
          <div className="flex items-start gap-3 mb-2 text-gray-300 hover:text-white transition-colors">
            <MapPin size={20} className="mt-1 text-primary" />
            <span>Jl. Ahmad Yani, Potrobangsan,<br />Kec. Magelang Utara,<br />Kota Magelang, Jawa Tengah 59155</span>
          </div>
        </nav> 
        <nav>
          <h6 className="footer-title font-anta text-white opacity-100 mb-4 border-b-2 border-primary pb-2 inline-block">Ikuti Kami</h6> 
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.instagram.com/wirakartika_mgl/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
              <Instagram size={20} />
            </a>
          </div>
        </nav>
      </footer>
      <footer className="footer px-10 py-6 border-t border-white/10 bg-black text-neutral-content">
        <aside className="items-center grid-flow-col">
          <p className="text-gray-500 text-sm">Copyright © {new Date().getFullYear()} - <span className="text-primary font-bold font-anta">Saka Wira Kartika</span> Kodim 0705 Magelang. All rights reserved.</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
