import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Book, ExternalLink } from 'lucide-react';

const References = () => {
  const references = [
    {
      title: "Materi Krida Navigasi Darat",
      source: "Saka Wira Kartika 6105 TRK (WordPress)",
      url: "https://sakawirakartika6105trk.wordpress.com/navrat/"
    },
    {
      title: "Materi Krida Survival",
      source: "Saka Wira Kartika 6105 TRK (WordPress)",
      url: "https://sakawirakartika6105trk.wordpress.com/survival/"
    },
    {
      title: "Materi Krida Penanggulangan Bencana Alam",
      source: "Saka Wira Kartika 6105 TRK (WordPress)",
      url: "https://sakawirakartika6105trk.wordpress.com/pba/"
    },
    {
      title: "Materi Krida Mountaineering",
      source: "Saka Wira Kartika 6105 TRK (WordPress)",
      url: "https://sakawirakartika6105trk.wordpress.com/mounteenering/"
    },
    {
      title: "Materi Krida Pioneering",
      source: "Saka Wira Kartika 6105 TRK (WordPress)",
      url: "https://sakawirakartika6105trk.wordpress.com/pionering/"
    },
    {
      title: "Buku Panduan SKK Saka Wira Kartika - Krida Navigasi Darat",
      source: "Scribd",
      url: "https://id.scribd.com/document/372009774/krida-navigasi-darat-pdf"
    },
    {
      title: "Buku Panduan SKK Saka Wira Kartika - Krida Mountaineering",
      source: "Scribd",
      url: "https://www.scribd.com/document/411696436/1-Buku-Panduan-SKK-Saka-Wira-Kartika-Krida-MOUNTENERING"
    },
    {
      title: "Buku Panduan SKK Saka Wira Kartika - Krida Penanggulangan Bencana",
      source: "Scribd",
      url: "https://www.scribd.com/document/456809276/5-5-KRIDA-PENANGGULANGAN-BENCANA-1-pdf"
    },
    {
      title: "Buku Panduan SKK Saka Wira Kartika - Krida Pioneering",
      source: "Scribd",
      url: "https://www.scribd.com/document/456809565/5-2-KRIDA-PIONEERING-doc-pdf"
    },
    {
      title: "Buku Panduan SKK Saka Wira Kartika - Krida Survival",
      source: "Scribd",
      url: "https://www.scribd.com/document/442752272/KRIDA-SURVIVAL-docx"
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-base-100">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <Link to="/krida" className="btn btn-ghost gap-2 mb-8 hover:bg-base-200">
          <ArrowLeft size={20} />
          Kembali ke Daftar Krida
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-anta mb-4 text-primary">Daftar Referensi</h1>
          <p className="text-gray-600 font-gabarito text-lg">
            Sumber materi dan panduan yang digunakan dalam penyusunan kurikulum Saka Wira Kartika.
          </p>
        </div>

        <div className="grid gap-4">
          {references.map((ref, index) => (
            <a 
              key={index} 
              href={ref.url}
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-primary hover:shadow-md transition-all flex items-center gap-4 group cursor-pointer text-left"
            >
              <div className="bg-primary/10 p-3 rounded-lg text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                <Book size={24} />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold font-anta text-gray-900 group-hover:text-primary transition-colors">{ref.title}</h3>
              </div>
              <div className="text-gray-400 group-hover:text-primary transition-colors">
                <ExternalLink size={20} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default References;
