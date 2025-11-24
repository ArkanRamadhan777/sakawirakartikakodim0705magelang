import React from 'react';

const About = () => {
  return (
    <div className="pt-20 min-h-screen bg-base-100">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold font-anta text-center mb-10 text-primary">Tentang Kami</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <img src="/galeri swk/28.webp" alt="Tentang SWK" className="rounded-lg shadow-2xl w-full h-auto object-cover" />
          </div>
          <div>
            <h2 className="text-2xl font-bold font-anta mb-4">Sejarah Saka Wira Kartika</h2>
            <p className="font-gabarito text-gray-700 mb-4">
              Saka Wira Kartika dibentuk lewat kerjasama antara Kwartir Nasional Gerakan Pramuka dengan TNI Angkatan Darat. Tujuannya adalah untuk menumbuhkan dan mengembangkan kesadaran bela negara serta kepedulian terhadap lingkungan di kalangan Pramuka Penegak dan Pandega.
            </p>
            <p className="font-gabarito text-gray-700">
              Di wilayah Magelang, Saka Wira Kartika dibina langsung oleh Kodim 0705 Magelang, menjadi wadah strategis dalam pembinaan generasi muda yang berkarakter kebangsaan.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-xl shadow-md mb-16">
          <h2 className="text-2xl font-bold font-anta mb-6 text-center">Visi & Misi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-2 text-primary">Visi</h3>
              <p className="font-gabarito">Terwujudnya Pramuka Penegak dan Pandega yang memiliki jiwa patriotisme, nasionalisme, dan wawasan kebangsaan yang tinggi serta memiliki keterampilan kepramukaan matra darat.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-primary">Misi</h3>
              <ul className="list-disc list-inside font-gabarito space-y-2">
                <li>Menyelenggarakan pendidikan dan latihan kepramukaan matra darat.</li>
                <li>Menanamkan nilai-nilai kedisiplinan dan kepemimpinan.</li>
                <li>Melaksanakan kegiatan bakti sosial dan peduli lingkungan.</li>
                <li>Meningkatkan kemanunggalan TNI dengan Rakyat melalui Pramuka.</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold font-anta mb-6 text-center">Kodim 0705 Magelang</h2>
          <div className="card lg:card-side bg-base-100 shadow-xl border border-gray-200">
            <figure className="lg:w-1/3"><img src="/galeri swk/4.webp" alt="Kodim 0705" className="p-4 w-full object-cover h-80" /></figure>
            <div className="card-body lg:w-2/3">
              <h3 className="card-title font-anta">Komando Distrik Militer 0705/Magelang</h3>
              <p className="font-gabarito">
                Kodim 0705/Magelang merupakan satuan kewilayahan yang berada di bawah Korem 072/Pamungkas. Kodim 0705/Magelang memiliki tugas pokok menyelenggarakan pembinaan kemampuan, kekuatan dan gelar kekuatan, menyelenggarakan pembinaan teritorial untuk menyiapkan wilayah pertahanan di darat dan menjaga keamanan wilayahnya.
              </p>
              <p className="font-gabarito mt-2">
                Sebagai pembina Saka Wira Kartika, Kodim 0705 aktif memberikan materi krida, wawasan kebangsaan, dan pelatihan fisik kepada anggota pramuka.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
