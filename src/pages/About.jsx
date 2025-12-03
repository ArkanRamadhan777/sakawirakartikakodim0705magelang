import React, { useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import AnimatedSection from '../components/AnimatedSection';
import { Users, Target, Award, Shield, Heart, TrendingUp, MapPin, Phone, Mail } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('sejarah');

  const stats = [
    { icon: <Users size={32} />, value: '500+', label: 'Anggota Aktif', color: 'text-blue-600' },
    { icon: <Award size={32} />, value: '50+', label: 'Kegiatan/Tahun', color: 'text-yellow-600' },
    { icon: <Target size={32} />, value: '5', label: 'Krida Unggulan', color: 'text-red-600' },
    { icon: <TrendingUp size={32} />, value: '10+', label: 'Tahun Berpengalaman', color: 'text-green-600' },
  ];

  const values = [
    {
      icon: <Shield size={40} />,
      title: 'Disiplin',
      description: 'Membangun karakter yang taat aturan dan bertanggung jawab',
      color: 'bg-red-50 text-red-600'
    },
    {
      icon: <Target size={40} />,
      title: 'Tangkas',
      description: 'Melatih ketangkasan fisik dan mental yang sigap',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: <Heart size={40} />,
      title: 'Peduli',
      description: 'Menumbuhkan kepedulian sosial dan lingkungan',
      color: 'bg-green-50 text-green-600'
    },
    {
      icon: <Award size={40} />,
      title: 'Prestasi',
      description: 'Mendorong pencapaian dan pengembangan diri',
      color: 'bg-yellow-50 text-yellow-600'
    },
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <Breadcrumbs items={[{ label: 'Tentang Kami' }]} />
        
        {/* Hero Section */}
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold font-anta mb-4 text-black">
              Tentang <span className="text-primary">Kami</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Membentuk generasi muda yang tangguh, disiplin, dan berwawasan kebangsaan
            </p>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
          </div>
        </AnimatedSection>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-full p-2 shadow-lg inline-flex gap-2">
            <button
              onClick={() => setActiveTab('sejarah')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === 'sejarah'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Sejarah
            </button>
            <button
              onClick={() => setActiveTab('visi-misi')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === 'visi-misi'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Visi & Misi
            </button>
            <button
              onClick={() => setActiveTab('nilai')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === 'nilai'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Nilai Kami
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="mb-16">
          {/* Sejarah Tab */}
          {activeTab === 'sejarah' && (
            <AnimatedSection animation="fade-up" key="sejarah">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className="order-2 md:order-1">
                  <h2 className="text-3xl font-bold font-anta mb-6 text-primary">Sejarah Saka Wira Kartika</h2>
                  <div className="space-y-4 text-gray-700">
                    <p className="font-gabarito leading-relaxed">
                      Saka Wira Kartika dibentuk lewat kerjasama antara <span className="font-bold">Kwartir Nasional Gerakan Pramuka</span> dengan <span className="font-bold">TNI Angkatan Darat</span>. Tujuannya adalah untuk menumbuhkan dan mengembangkan kesadaran bela negara serta kepedulian terhadap lingkungan di kalangan Pramuka Penegak dan Pandega.
                    </p>
                    <p className="font-gabarito leading-relaxed">
                      Di wilayah Magelang, Saka Wira Kartika dibina langsung oleh <span className="font-bold">Kodim 0705 Magelang</span>, menjadi wadah strategis dalam pembinaan generasi muda yang berkarakter kebangsaan.
                    </p>
                    <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-r-lg mt-6">
                      <p className="font-gabarito text-sm italic text-gray-800">
                        "Mencetak generasi muda yang tangguh, disiplin, dan siap membela negara dengan jiwa patriotisme yang tinggi."
                      </p>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-red-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                    <img 
                      src="/galeri swk/28.webp" 
                      alt="Tentang SWK" 
                      className="relative rounded-2xl shadow-2xl w-full h-auto object-cover transform group-hover:scale-[1.02] transition duration-300" 
                    />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          )}

          {/* Visi Misi Tab */}
          {activeTab === 'visi-misi' && (
            <AnimatedSection animation="fade-up" key="visi-misi">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-primary to-red-700 p-8 rounded-2xl shadow-xl text-white hover:scale-105 transition-transform">
                  <div className="bg-white/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <Target size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 font-anta">Visi</h3>
                  <p className="font-gabarito leading-relaxed">
                    Terwujudnya Pramuka Penegak dan Pandega yang memiliki jiwa patriotisme, nasionalisme, dan wawasan kebangsaan yang tinggi serta memiliki keterampilan kepramukaan matra darat.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-gray-200 hover:border-primary hover:scale-105 transition-all">
                  <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <Shield size={32} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 font-anta text-primary">Misi</h3>
                  <ul className="space-y-3 font-gabarito">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span>Menyelenggarakan pendidikan dan latihan kepramukaan matra darat</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span>Menanamkan nilai-nilai kedisiplinan dan kepemimpinan</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span>Melaksanakan kegiatan bakti sosial dan peduli lingkungan</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span>Meningkatkan kemanunggalan TNI dengan Rakyat melalui Pramuka</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          )}

          {/* Nilai Tab */}
          {activeTab === 'nilai' && (
            <AnimatedSection animation="fade-up" key="nilai">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
                  >
                    <div className={`${value.color} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                      {value.icon}
                    </div>
                    <h3 className="text-2xl font-bold font-anta mb-3 text-gray-800">{value.title}</h3>
                    <p className="font-gabarito text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          )}
        </div>

        {/* Kodim Section */}
        <AnimatedSection animation="fade-up">
          <div className="bg-black text-white rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-80 lg:h-auto">
                <img 
                  src="/galeri swk/4.webp" 
                  alt="Kodim 0705" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/80 to-transparent"></div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4 w-fit">
                  Pembina Kami
                </div>
                <h3 className="text-3xl font-bold font-anta mb-4">Kodim 0705 Magelang</h3>
                <p className="font-gabarito text-gray-300 mb-4 leading-relaxed">
                  Komando Distrik Militer 0705/Magelang merupakan satuan kewilayahan yang berada di bawah Korem 072/Pamungkas. Kodim 0705/Magelang memiliki tugas pokok menyelenggarakan pembinaan kemampuan, kekuatan dan gelar kekuatan untuk menjaga keamanan wilayahnya.
                </p>
                <p className="font-gabarito text-gray-300 leading-relaxed">
                  Sebagai pembina Saka Wira Kartika, Kodim 0705 aktif memberikan materi krida, wawasan kebangsaan, dan pelatihan fisik kepada anggota pramuka.
                </p>
                <div className="mt-6 space-y-3">
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection animation="fade-up" delay={200}>
          <div className="mt-16 bg-gradient-to-r from-primary to-red-700 rounded-3xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-3xl font-bold font-anta mb-4">Siap Bergabung Bersama Kami?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Mari bersama-sama mengembangkan jiwa patriotisme dan keterampilan kepramukaan yang unggul
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a 
                href="/krida" 
                className="btn btn-lg bg-white text-primary hover:bg-gray-100 border-none font-bold px-8"
              >
                Jelajahi Krida
              </a>
              <a 
                href="/gallery" 
                className="btn btn-lg btn-outline text-white border-white hover:bg-white hover:text-primary font-bold px-8"
              >
                Lihat Galeri
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default About;
