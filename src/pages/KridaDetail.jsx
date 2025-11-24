import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { kridas } from '../data/kridas';
import { ArrowLeft, CheckCircle, Award } from 'lucide-react';

const KridaDetail = () => {
  const { id } = useParams();
  const [selectedTkk, setSelectedTkk] = useState(null);
  const krida = kridas.find(k => k.id === parseInt(id));

  if (!krida) {
    return <Navigate to="/krida" replace />;
  }

  return (
    <div className="min-h-screen bg-base-100 pt-24 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/krida" className="btn btn-ghost gap-2 mb-8 hover:bg-base-200">
          <ArrowLeft size={20} />
          Kembali ke Daftar Krida
        </Link>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          {/* Header Section */}
          <div className="bg-black text-white p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-white/10 rounded-2xl p-4 backdrop-blur-sm border border-white/20 flex items-center justify-center shrink-0">
                <img 
                  src={krida.image} 
                  alt={krida.title} 
                  className="w-full h-full object-contain drop-shadow-lg"
                />
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-3xl md:text-5xl font-bold font-anta mb-4 text-primary">{krida.title}</h1>
                <p className="text-gray-300 text-lg font-gabarito max-w-2xl">{krida.description}</p>
              </div>
            </div>
          </div>

          {/* TKK Section */}
          {krida.tkk && (
            <div className="bg-gray-50 p-8 md:p-12 border-b border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-2xl font-bold font-anta text-gray-900">Tanda Kecakapan Khusus (TKK)</h2>
              </div>
              <p className="text-gray-600 mb-6 font-gabarito">Klik pada ikon TKK di bawah untuk melihat Syarat Kecakapan Khusus (SKK).</p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {krida.tkk.map((tkk) => (
                  <button 
                    key={tkk.id}
                    onClick={() => setSelectedTkk(tkk)}
                    className="flex flex-col items-center p-4 bg-white rounded-xl border border-gray-200 hover:border-primary hover:shadow-md transition-all group text-center h-full"
                  >
                    <div className="w-32 h-32 mb-3 bg-gray-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform overflow-hidden">
                      {tkk.image ? (
                        <img src={tkk.image} alt={tkk.title} className="w-full h-full object-contain" />
                      ) : (
                        <Award className="text-gray-400 group-hover:text-primary" size={32} />
                      )}
                    </div>
                    <span className="text-sm font-bold text-gray-800 group-hover:text-primary line-clamp-2">{tkk.title}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Content Section */}
          <div className="p-8 md:p-12">
            {krida.richContent ? (
              krida.richContent
            ) : (
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold font-anta mb-6 text-gray-800 border-b-2 border-primary/20 pb-2 inline-block">
                  Deskripsi Lengkap
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-12 font-gabarito">
                  {krida.details}
                </p>

                <h2 className="text-2xl font-bold font-anta mb-6 text-gray-800 border-b-2 border-primary/20 pb-2 inline-block">
                  Materi Pembelajaran
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {krida.materi && krida.materi.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-primary/30 transition-colors">
                      <CheckCircle className="text-primary shrink-0 mt-1" size={20} />
                      <span className="font-gabarito text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* TKK Modal */}
      {selectedTkk && (
        <dialog className="modal modal-open">
          <div className="modal-box w-11/12 max-w-2xl bg-white text-gray-800 no-scrollbar">
            <form method="dialog">
              <button 
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => setSelectedTkk(null)}
              >
                ✕
              </button>
            </form>
            <div className="flex flex-col items-center text-center mb-6">
              <div className="w-40 h-40 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary overflow-hidden">
                {selectedTkk.image ? (
                  <img src={selectedTkk.image} alt={selectedTkk.title} className="w-full h-full object-contain" />
                ) : (
                  <Award size={40} />
                )}
              </div>
              <h3 className="font-bold text-2xl font-anta text-gray-900">{selectedTkk.title}</h3>
              <div className="w-16 h-1 bg-primary rounded-full mt-4"></div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h4 className="font-bold text-gray-700 mb-4 flex items-center gap-2">
                <CheckCircle size={18} className="text-primary"/>
                Syarat Kecakapan Khusus (SKK):
              </h4>
              <ul className="space-y-3 text-left">
                {selectedTkk.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-600 font-gabarito">
                    <span className="bg-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border border-gray-200 shrink-0 mt-0.5">
                      {String.fromCharCode(97 + idx)}
                    </span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="modal-action justify-center mt-8">
              <button className="btn btn-primary px-8 text-white" onClick={() => setSelectedTkk(null)}>Tutup</button>
            </div>
          </div>
          <div className="modal-backdrop bg-black/50" onClick={() => setSelectedTkk(null)}></div>
        </dialog>
      )}
    </div>
  );
};

export default KridaDetail;
