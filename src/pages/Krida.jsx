
import React from 'react';
import { Link } from 'react-router-dom';
import { kridas } from '../data/kridas';

const Krida = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-anta mb-4 text-black">5 Krida <span className="text-primary">Saka Wira Kartika</span></h1>
          <p className="text-gray-600 max-w-2xl mx-auto font-gabarito text-lg">
            Spesialisasi keterampilan matra darat yang menjadi inti pendidikan kami.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {kridas.map((krida) => (
            <div key={krida.id} className="group bg-black rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-800 hover:border-primary w-full flex flex-col items-center text-center">
              <div className="flex justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                <img src={krida.image} alt={krida.title} className="w-40 h-40 object-contain drop-shadow-lg" />
              </div>
              <h2 className="text-2xl font-bold font-anta mb-3 text-white group-hover:text-primary transition-colors">{krida.title}</h2>
              <p className="font-gabarito text-gray-400 leading-relaxed mb-6">{krida.description}</p>
              <Link 
                to={`/krida/${krida.id}`}
                className="btn btn-sm btn-outline text-white border-gray-600 hover:bg-primary hover:border-primary hover:text-white w-full mt-auto"
              >
                Pelajari Lebih Lanjut
              </Link>
            </div>
          ))}
          
          {/* Info Card */}
          <div className="rounded-2xl p-8 bg-black shadow-2xl flex flex-col items-center justify-center text-center group hover:scale-105 transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500"></div>
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-primary to-red-900 flex items-center justify-center mb-6 shadow-lg shadow-primary/30 group-hover:shadow-primary/50 transition-all duration-300 relative z-10">
              <span className="text-4xl font-bold text-white">i</span>
            </div>
            <h3 className="text-2xl font-bold font-anta text-white mb-4 relative z-10">Informasi Krida</h3>
            <p className="font-gabarito text-gray-400 leading-relaxed relative z-10">
              Setiap anggota Saka Wira Kartika wajib memilih dan mendalami salah satu Krida sebagai spesialisasi untuk mendapatkan Tanda Kecakapan Khusus (TKK).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Krida;
