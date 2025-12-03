import React from 'react';
import Hero from '../components/Hero';
import AnimatedSection from '../components/AnimatedSection';
import AnnouncementBanner from '../components/AnnouncementBanner';
import { Shield, Target, BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-base-100">
      <Hero />

      {/* Announcement Banner */}
      <section className="py-4 px-4">
        <div className="max-w-7xl mx-auto">
          <AnnouncementBanner />
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Left Side: Slogan */}
            <AnimatedSection animation="slide-left" threshold={0.2}>
              <div className="text-center lg:text-left pl-0 lg:pl-12">
                <h1 className="font-anta text-black flex flex-col items-center lg:items-start leading-tight">
                  <span className="text-4xl md:text-6xl font-bold mb-2">Membentuk</span>
                  <span className="text-4xl md:text-6xl font-black text-red-600 tracking-wider uppercase py-2 drop-shadow-sm">
                    Patriot Bangsa
                  </span>
                  <span className="text-4xl md:text-6xl font-light text-gray-800 mt-2">
                    yang Berkarakter
                  </span>
                </h1>
                <div className="w-24 h-1 bg-primary mx-auto lg:mx-0 rounded-full mt-8"></div>
              </div>
            </AnimatedSection>

            {/* Right Side: Description */}
            <AnimatedSection animation="slide-right" threshold={0.2}>
              <div className="text-center lg:text-left px-4 lg:px-12">
                <h2 className="text-3xl md:text-5xl font-bold font-anta mb-6 text-black leading-tight">
                  <span className="block">Saka Wira Kartika</span>
                  <span className="block text-primary">Kodim 0705 Magelang</span>
                </h2>
                <p className="text-lg text-gray-600 font-gabarito leading-relaxed">
                  Saka Wira Kartika adalah wadah kegiatan bagi Pramuka Penegak dan Pandega untuk meningkatkan kesadaran bela negara melalui pengetahuan dan keterampilan di bidang matra darat. Di bawah pembinaan Kodim 0705 Magelang, kami berkomitmen mencetak generasi muda yang tangguh, disiplin, dan berwawasan kebangsaan.
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Buttons Section */}
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/gallery"
                className="btn btn-primary btn-lg text-white font-bold px-8 border-none hover:bg-red-700 shadow-lg hover:shadow-red-900/50 hover:scale-105 transition-all duration-300"
              >
                Jelajahi Kegiatan
              </Link>
              <Link
                to="/about"
                className="btn btn-outline btn-lg text-black border-2 border-black hover:bg-black hover:text-white font-bold px-8 hover:scale-105 transition-all duration-300"
              >
                Tentang Kami
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 px-4 bg-black text-white relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection animation="fade-up" threshold={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-anta mb-4">Nilai Utama Kami</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">Pondasi karakter yang kami tanamkan kepada setiap anggota.</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <AnimatedSection animation="fade-up" delay={0} threshold={0.2}>
              <div className="group relative bg-neutral rounded-2xl p-8 hover:bg-gray-900 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-red-900/30 border border-gray-800 hover:border-primary cursor-pointer">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Shield size={120} />
                </div>
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-red-900/50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Shield size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold font-anta mb-4 text-white">Disiplin</h3>
                <p className="font-gabarito text-gray-300 leading-relaxed">Membangun karakter yang taat aturan, tepat waktu, dan bertanggung jawab dalam setiap tindakan sebagai cerminan prajurit sejati.</p>
              </div>
            </AnimatedSection>

            {/* Card 2 */}
            <AnimatedSection animation="fade-up" delay={150} threshold={0.2}>
              <div className="group relative bg-neutral rounded-2xl p-8 hover:bg-gray-900 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-white/20 border border-gray-800 hover:border-white cursor-pointer">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Target size={120} />
                </div>
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-white/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Target size={32} className="text-black" />
                </div>
                <h3 className="text-2xl font-bold font-anta mb-4 text-white">Tangkas</h3>
                <p className="font-gabarito text-gray-300 leading-relaxed">Melatih ketangkasan fisik dan mental melalui kegiatan krida yang menantang, membentuk pribadi yang sigap dan trengginas.</p>
              </div>
            </AnimatedSection>

            {/* Card 3 */}
            <AnimatedSection animation="fade-up" delay={300} threshold={0.2}>
              <div className="group relative bg-neutral rounded-2xl p-8 hover:bg-gray-900 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-red-900/30 border border-gray-800 hover:border-primary cursor-pointer">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <BookOpen size={120} />
                </div>
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-red-900/50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <BookOpen size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold font-anta mb-4 text-white">Berwawasan</h3>
                <p className="font-gabarito text-gray-300 leading-relaxed">Memperluas wawasan kebangsaan, cinta tanah air, dan pengetahuan kepramukaan sebagai bekal pemimpin masa depan.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section Removed */}
    </div>
  );
};

export default Home;

