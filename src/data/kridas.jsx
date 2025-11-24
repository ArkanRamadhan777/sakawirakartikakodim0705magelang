import React from 'react';
import { Map, Compass, MapPin, Crosshair, Globe, Satellite, Brain, AlertTriangle, Droplets, Utensils, Tent, Bug, Footprints, Flame, Briefcase, ShieldAlert, Mountain, Activity, Shield, Hammer, Anchor, Snowflake, MoveUp, Construction, Link, CheckCircle, Box, Flag, Siren, HeartPulse, ShieldCheck, Radio, Users, Stethoscope, LifeBuoy, Megaphone, Award } from 'lucide-react';

export const kridas = [
  {
    id: 1,
    title: 'Krida Navigasi Darat',
    image: '/navrat.webp',
    description: 'Pengetahuan tentang peta, kompas, dan cara menentukan arah serta posisi di medan sebenarnya.',
    details: 'Materi meliputi pembacaan peta topografi, penggunaan kompas prisma dan silva, teknik resection dan intersection, serta orientasi peta. Anggota akan dilatih untuk dapat bernavigasi di hutan gunung maupun medan sulit lainnya. Kemampuan ini sangat vital untuk operasi pencarian dan penyelamatan serta penjelajahan alam.',
    materi: [
      'Pengenalan Peta Topografi',
      'Penggunaan Kompas (Prisma & Silva)',
      'Resection & Intersection',
      'Orientasi Peta & Medan',
      'Global Positioning System (GPS)'
    ],
    tkk: [
      {
        id: 'navrat-1',
        title: 'TKK Pengetahuan Peta dan Medan',
        image: '/tkk navrat/TKK PNEGETAHUAN PETA DAN MEDAN.webp',
        requirements: [
          'Memahami dan dapat menentukan koordinat peta.',
          'Memahami dan mampu cara menyambung peta.',
          'Mengetahui bagian-bagian dan pengertian peta Topografi.',
          'Mengetahui bagian-bagian dan pengertian peta Tematik.',
          'Telah melatih sekurang-kurangnya seorang pramuka penggalang sehingga memperoleh TKK Kompas Siang dan Kompas Malam.'
        ]
      },
      {
        id: 'navrat-2',
        title: 'TKK Kompas Siang dan Malam',
        image: '/tkk navrat/TKK JALAN KOMPAS SIANG DAN MALAM.webp',
        requirements: [
          'Memahami bagian-bagian kompas prisma.',
          'Memahami dan mampu melaksanakan orientasi peta dengan kompas.',
          'Mampu menjelaskan kegunaan kompas prisma.',
          'Dapat menentukan besaran sudut jurusan pada kompas prisma.',
          'Telah melatih sekurang-kurangnya seorang pramuka penggalang sehingga memperoleh TKK Kompas Siang dan Kompas Malam.'
        ]
      },
      {
        id: 'navrat-3',
        title: 'TKK Pengetahuan Resection dan Intersection',
        image: '/tkk navrat/TKK RESECTION DAN INTERSECTION.webp',
        requirements: [
          'Memahami dan mampu menjelaskan Resection (mengikat ke depan) dan Intersection (mengikat ke belakang).',
          'Dapat melaksanakan Resection dan Intersection.',
          'Telah melatih sekurang-kurangnya seorang Pramuka Penggalang sehingga memperoleh TKK Pengetahuan Resection dan Intersection.'
        ]
      },
      {
        id: 'navrat-4',
        title: 'TKK Pengetahuan GPS',
        image: '/tkk navrat/TKK PENGETAHUAN GPS.webp',
        requirements: [
          'Memahami kegunaan alat GPS.',
          'Memahami dan mampu menjelaskan bagian-bagian alat GPS.',
          'Memahami dan mampu mengoperasikan alat GPS.',
          'Telah melatih sekurang-kurangnya seorang Pramuka Penggalang sehingga memperoleh TKK GPS.'
        ]
      }
    ],
    richContent: (
      <div className="space-y-12 font-gabarito text-gray-700">
        <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-8">
          <p className="leading-relaxed">
            <strong>Navigasi darat</strong> adalah keterampilan menentukan posisi dan arah lintasan di peta maupun di medan nyata. Kemampuan ini wajib dimiliki oleh siapa saja yang gemar beraktivitas di alam terbuka. Dengan menguasainya, perjalanan ke wilayah yang belum dikenal akan lebih aman dan terarah. Selain itu, navigasi darat sangat penting dalam operasi pencarian korban kecelakaan, orang tersesat, maupun bencana alam.
          </p>
          <p className="mt-4 font-bold text-primary">
            Untuk menguasai navigasi darat, ada tiga hal utama yang harus dipahami: peta, kompas, dan teknik penggunaannya.
          </p>
        </div>

        {/* A. Peta */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-primary/10 rounded-xl text-primary">
              <Map size={32} />
            </div>
            <h2 className="text-3xl font-bold font-anta text-gray-900">A. Peta</h2>
          </div>
          <div className="space-y-6 pl-4 md:pl-16 border-l-2 border-gray-100">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Hakikat Peta</h3>
              <p>Peta adalah gambaran permukaan bumi yang dituangkan ke bidang datar dengan ukuran diperkecil. Informasi yang ditampilkan bisa dipertanggungjawabkan secara visual maupun matematis.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Jenis Peta</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Peta Topografi:</strong> Berasal dari kata Yunani <em>topos</em> (tempat) dan <em>graphi</em> (menggambar). Menampilkan posisi mendatar dan tegak dari objek di permukaan bumi. Isi utama: relief (ketinggian), perairan, vegetasi, serta hasil budaya manusia.</li>
                <li><strong>Peta Tematik:</strong> Menyajikan unsur tertentu sesuai tema, misalnya peta geologi, peta kependudukan, atau peta penggunaan lahan.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Keterangan Tepi Peta</h3>
              <p>Judul peta, Nama daerah, Nomor helai, Petunjuk letak, Pembagian wilayah, Arah utara, dan Legenda.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Arah Peta</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Utara Sebenarnya (US):</strong> arah menuju kutub utara bumi.</li>
                <li><strong>Utara Magnetis (UM):</strong> arah jarum kompas menunjuk kutub magnet.</li>
                <li><strong>Utara Grid (UG/UP):</strong> garis vertikal pada peta.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Skala & Kontur</h3>
              <p className="mb-2"><strong>Skala:</strong> Perbandingan jarak di peta dengan jarak di medan (Angka & Garis).</p>
              <p><strong>Kontur:</strong> Garis khayal yang menghubungkan titik dengan ketinggian sama. Kontur rapat menandakan medan terjal.</p>
            </div>
          </div>
        </section>

        {/* B. Kompas */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-primary/10 rounded-xl text-primary">
              <Compass size={32} />
            </div>
            <h2 className="text-3xl font-bold font-anta text-gray-900">B. Kompas</h2>
          </div>
          <div className="space-y-6 pl-4 md:pl-16 border-l-2 border-gray-100">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Bagian & Jenis</h3>
              <p>Terdiri dari badan, jarum (selalu menunjuk utara magnetis), dan skala penunjuk. Jenisnya ada Kompas Silva (praktis) dan Kompas Bidik (akurasi tinggi).</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Azimuth & Back Azimuth</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Azimuth:</strong> sudut antara arah utara dengan tanda medan yang dibidik.</li>
                <li><strong>Back Azimuth:</strong> kebalikannya. Jika azimuth &gt; 180°, kurangi 180°. Jika &lt; 180°, tambah 180°.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* C. Resection */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-primary/10 rounded-xl text-primary">
              <MapPin size={32} />
            </div>
            <h2 className="text-3xl font-bold font-anta text-gray-900">C. Resection</h2>
          </div>
          <div className="pl-4 md:pl-16 border-l-2 border-gray-100">
            <p className="mb-4">Teknik menentukan posisi di peta dengan bantuan dua atau lebih tanda medan.</p>
            <ol className="list-decimal pl-5 space-y-1">
              <li>Orientasikan peta.</li>
              <li>Bidik tanda medan, catat azimuth dan back azimuth.</li>
              <li>Tarik garis back azimuth di peta.</li>
              <li>Titik perpotongan = posisi kita.</li>
            </ol>
          </div>
        </section>

        {/* D. Intersection */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-primary/10 rounded-xl text-primary">
              <Crosshair size={32} />
            </div>
            <h2 className="text-3xl font-bold font-anta text-gray-900">D. Intersection</h2>
          </div>
          <div className="pl-4 md:pl-16 border-l-2 border-gray-100">
            <p className="mb-4">Digunakan untuk menentukan posisi suatu obyek di medan.</p>
            <ol className="list-decimal pl-5 space-y-1">
              <li>Tentukan posisi kita di titik A dengan resection.</li>
              <li>Bidik obyek, catat azimuth.</li>
              <li>Pindah ke titik B, lakukan hal sama.</li>
              <li>Perpotongan garis azimuth dari A dan B = posisi obyek.</li>
            </ol>
          </div>
        </section>

        {/* E. Menentukan Arah Tanpa Kompas */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-primary/10 rounded-xl text-primary">
              <Globe size={32} />
            </div>
            <h2 className="text-3xl font-bold font-anta text-gray-900">E. Arah Tanpa Kompas</h2>
          </div>
          <div className="pl-4 md:pl-16 border-l-2 border-gray-100">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-center gap-2"><div className="w-2 h-2 bg-primary rounded-full"></div>Kuburan Islam → menghadap utara</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 bg-primary rounded-full"></div>Masjid → menghadap kiblat</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 bg-primary rounded-full"></div>Tumbuhan berlumut tebal → sisi timur</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 bg-primary rounded-full"></div>Matahari → terbit timur, tenggelam barat</li>
            </ul>
          </div>
        </section>

        {/* F. GPS */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-primary/10 rounded-xl text-primary">
              <Satellite size={32} />
            </div>
            <h2 className="text-3xl font-bold font-anta text-gray-900">F. GPS</h2>
          </div>
          <div className="space-y-6 pl-4 md:pl-16 border-l-2 border-gray-100">
            <p><strong>Global Positioning System</strong> adalah sistem navigasi satelit buatan Departemen Pertahanan AS.</p>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Cara Kerja</h3>
              <p>Satelit memancarkan sinyal, perangkat GPS menerima dan menghitung posisi. Minimal 3 satelit untuk posisi 2D, 4 satelit untuk 3D.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Keterbatasan</h3>
              <p>Sinyal lemah di ruangan tertutup, hutan lebat, atau area gedung tinggi.</p>
            </div>
          </div>
        </section>
      </div>
    )
  },
  {
    id: 2,
    title: 'Krida Pioneering',
    image: '/pioneering.webp',
    description: 'Keterampilan tali-temali, pembuatan jembatan darurat, dan bangunan perkemahan.',
    details: 'Fokus pada keterampilan tali temali (knots and lashing), pembuatan jembatan darurat, menara pandang, dan gapura perkemahan menggunakan tongkat dan tali. Melatih kerjasama tim, kreativitas, dan kemampuan konstruksi sederhana dalam kondisi darurat.',
    materi: [
      'Simpul & Ikatan Dasar',
      'Konstruksi Menara Pandang',
      'Jembatan Darurat',
      'Bangunan Perkemahan',
      'Penyelamatan Menggunakan Tali'
    ],
    tkk: [
      {
        id: 'pioneering-1',
        title: 'TKK Tali Temali',
        image: '/tkk pioneering/TKK TALI TEMALI.webp',
        requirements: [
          'Memahami dan mampu membuat minimal 4 simpul.',
          'Memahami dan mampu membuat minimal 4 jerat.',
          'Memahami dan mampu membuat minimal 4 ikatan.',
          'Telah melatih seorang Penggalang sehingga memperoleh TKK Tali Temali.'
        ]
      },
      {
        id: 'pioneering-2',
        title: 'TKK Pembuatan Jembatan Improvisasi',
        image: '/tkk pioneering/TKK JEMBATAN IMPROVISASI.webp',
        requirements: [
          'Memahami dan mampu membuat jembatan tepi sederhana.',
          'Memahami dan mampu membuat jembatan kuda-kuda.',
          'Memahami dan mampu membuat jembatan bambu satu.',
          'Memahami dan mampu membuat jembatan tarik.',
          'Memahami dan mampu membuat jembatan kaki delapan bersudut dua.',
          'Telah melatih seorang Penggalang sehingga memperoleh TKK Pembuatan Jembatan.'
        ]
      },
      {
        id: 'pioneering-3',
        title: 'TKK Pembuatan Perkemahan',
        image: '/tkk pioneering/TKK PERKEMAHAN.webp',
        requirements: [
          'Memahami dan mampu membuat minimal 2 macam Sengkuap.',
          'Memahami dan mampu membuat minimal 1 Barak.',
          'Memahami dan mampu membuat minimal 1 Menara.',
          'Telah melatih seorang Penggalang sehingga memperoleh TKK Pembuatan Perkemahan.'
        ]
      },
      {
        id: 'pioneering-4',
        title: 'TKK Bekal Air dan Listrik',
        image: '/tkk pioneering/TKK BEKAL AIR DAN LISTRIK.webp',
        requirements: [
          'Memahami dan mampu mencari sumber air bersih dan menentukan titik kebutuhan listrik.',
          'Memahami dan mampu membuat penjernih air, sambungan seri & paralel.',
          'Memahami dan mampu menentukan pH air dan mengukur tegangan listrik.',
          'Memahami dan mampu membedakan sumber air dan sumber arus.',
          'Memahami dan mampu menyiapkan instalasi air sederhana & listrik perkemahan.',
          'Telah melatih seorang Penggalang sehingga memperoleh TKK Bekal Air dan Listrik.'
        ]
      }
    ],
    richContent: (
      <div className="space-y-12 font-gabarito text-gray-700">
        <div className="bg-amber-50 p-6 rounded-2xl border border-amber-200 mb-8">
          <h2 className="text-2xl font-bold font-anta text-amber-900 mb-4">Krida Pioneering (Tali Temali & Konstruksi)</h2>
          <p className="leading-relaxed mb-4">
            <strong>Pioneering</strong> adalah keterampilan membuat bangunan sederhana dari bahan alam (kayu, bambu, tali) dengan teknik simpul dan ikatan.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white p-3 rounded-lg border border-amber-100">
              <strong>Tali:</strong> Benda utamanya.
            </div>
            <div className="bg-white p-3 rounded-lg border border-amber-100">
              <strong>Simpul:</strong> Hubungan tali dengan tali.
            </div>
            <div className="bg-white p-3 rounded-lg border border-amber-100">
              <strong>Ikatan:</strong> Hubungan tali dengan benda lain.
            </div>
          </div>
        </div>

        {/* Simpul */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-primary/10 rounded-xl text-primary">
              <Link size={32} />
            </div>
            <h2 className="text-3xl font-bold font-anta text-gray-900">Macam Simpul (Knots)</h2>
          </div>
          <div className="pl-4 md:pl-16 border-l-2 border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              <ul className="space-y-2 list-disc pl-5">
                <li><strong>Simpul ujung tali:</strong> Mencegah ujung tali terurai.</li>
                <li><strong>Simpul mati:</strong> Menyambung dua tali sama besar, tidak licin.</li>
                <li><strong>Simpul anyam:</strong> Menyambung dua tali beda besar (kering).</li>
                <li><strong>Simpul anyam berganda:</strong> Menyambung dua tali beda besar (basah).</li>
                <li><strong>Simpul erat:</strong> Memendekkan tali tanpa dipotong.</li>
              </ul>
              <ul className="space-y-2 list-disc pl-5">
                <li><strong>Simpul kembar:</strong> Menyambung dua tali sama besar (licin).</li>
                <li><strong>Simpul kursi:</strong> Mengangkat/menurunkan orang.</li>
                <li><strong>Simpul penarik:</strong> Menarik benda besar.</li>
                <li><strong>Simpul laso:</strong> Membuat jerat.</li>
              </ul>
            </div>
            <p className="mt-4 text-sm italic bg-gray-50 p-3 rounded-lg">👉 Catatan: Simpul harus rapat, tidak mudah lepas, dan sesuai fungsi.</p>
          </div>
        </section>

        {/* Ikatan */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-primary/10 rounded-xl text-primary">
              <Anchor size={32} />
            </div>
            <h2 className="text-3xl font-bold font-anta text-gray-900">Macam Ikatan (Lashings)</h2>
          </div>
          <div className="pl-4 md:pl-16 border-l-2 border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              <ul className="space-y-2 list-disc pl-5">
                <li><strong>Ikatan pangkal:</strong> Mengikat pada tiang, awal ikatan lain.</li>
                <li><strong>Ikatan tiang:</strong> Mengikat leher binatang (tetap longgar).</li>
                <li><strong>Ikatan jangkar:</strong> Mengikat pada ring/jangkar.</li>
                <li><strong>Ikatan tambat:</strong> Menambatkan tali erat tapi mudah lepas.</li>
                <li><strong>Ikatan tarik:</strong> Untuk turun tebing/pohon.</li>
              </ul>
              <ul className="space-y-2 list-disc pl-5">
                <li><strong>Ikatan turki:</strong> Mengikat sapu lidi/setangan leher.</li>
                <li><strong>Ikatan palang:</strong> Menyatukan dua kayu menyilang (90°).</li>
                <li><strong>Ikatan canggah:</strong> Menyatukan kayu lurus/sambung.</li>
                <li><strong>Ikatan silang:</strong> Memperkuat sambungan silang (X).</li>
                <li><strong>Ikatan kaki tiga:</strong> Membuat tripod.</li>
              </ul>
            </div>
            <p className="mt-4 text-sm italic bg-gray-50 p-3 rounded-lg">👉 Catatan: Biasanya diawali ikatan pangkal dan diakhiri simpul mati.</p>
          </div>
        </section>

        {/* Aplikasi & Prinsip */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-primary/10 rounded-xl text-primary">
              <Construction size={32} />
            </div>
            <h2 className="text-3xl font-bold font-anta text-gray-900">Aplikasi & Prinsip</h2>
          </div>
          <div className="space-y-8 pl-4 md:pl-16 border-l-2 border-gray-100">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Contoh Bangunan</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-xl border border-gray-200 text-center hover:border-primary transition-colors">
                  <Box className="mx-auto mb-2 text-amber-600" />
                  <span className="font-bold block">Rak Barang</span>
                  <span className="text-xs text-gray-500">Pangkal + Silang</span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-200 text-center hover:border-primary transition-colors">
                  <Construction className="mx-auto mb-2 text-amber-600" />
                  <span className="font-bold block">Menara Pandu</span>
                  <span className="text-xs text-gray-500">Tripod + Palang</span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-200 text-center hover:border-primary transition-colors">
                  <Flag className="mx-auto mb-2 text-amber-600" />
                  <span className="font-bold block">Tiang Bendera</span>
                  <span className="text-xs text-gray-500">Sambung Tongkat</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="font-bold text-green-900 mb-3 flex items-center gap-2"><CheckCircle size={20}/> Prinsip Pioneering</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Gunakan bahan alam sekitar (ramah lingkungan).</li>
                  <li>Ikatan kuat tapi mudah dilepas.</li>
                  <li>Bangunan aman (safety first).</li>
                  <li>Kerja sama tim (holding, lashing, testing).</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2"><Hammer size={20}/> Tips Teknis</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Basahi tali agar lentur & kencang saat kering.</li>
                  <li>Pilih kayu/bambu lurus & kuat.</li>
                  <li>Kunci dengan simpul mati.</li>
                  <li>Uji beban sebelum digunakan.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  },
  {
    id: 3,
    title: 'Krida Mountaineering',
    image: '/mountaineering.webp',
    description: 'Teknik mendaki gunung, panjat tebing, dan penyeberangan basah maupun kering.',
    details: 'Pelatihan teknik panjat tebing (rock climbing), rappelling, prusiking, dan penyeberangan basah/kering. Menekankan pada aspek keamanan (safety procedure), keberanian, dan ketahanan fisik dalam menghadapi medan vertikal.',
    materi: [
      'Pengenalan Alat Panjat',
      'Teknik Simpul Panjat',
      'Rappelling & Prusiking',
      'Penyeberangan Basah & Kering',
      'Safety Procedure'
    ],
    tkk: [
      {
        id: 'mountaineering-1',
        title: 'TKK Panjat Tebing',
        image: '/tkk mountaineering/TKK PANJAT TEBING.webp',
        requirements: [
          'Memahami kegunaan panjat bebas, dengan alat bantu, kompetisi.',
          'Memahami dan mampu menjelaskan tata cara panjat.',
          'Mampu melakukan ketiganya.',
          'Mengetahui alat dan prasarana.',
          'Telah melatih seorang Penggalang sehingga memperoleh TKK Panjat Tebing.'
        ]
      },
      {
        id: 'mountaineering-2',
        title: 'TKK Turun Tebing',
        image: '/tkk mountaineering/TKK TURUN TEBING.webp',
        requirements: [
          'Memahami kegunaan turun hesty & rappelling.',
          'Memahami dan mampu menjelaskan tata cara keduanya.',
          'Mampu melaksanakan keduanya.',
          'Mengetahui alat dan prasarana.',
          'Telah melatih seorang Penggalang sehingga memperoleh TKK Turun Tebing.'
        ]
      },
      {
        id: 'mountaineering-3',
        title: 'TKK Pelintasan Kering',
        image: '/tkk mountaineering/TKK PERLINTASAN KERING.webp',
        requirements: [
          'Memahami kegunaan.',
          'Memahami dan mampu menjelaskan tata cara.',
          'Memahami dan mampu melaksanakan.',
          'Memahami dan mampu menggunakan alat & prasarana.',
          'Telah melatih seorang Penggalang sehingga memperoleh TKK Travesing.'
        ]
      },
      {
        id: 'mountaineering-4',
        title: 'TKK Pelintasan Basah',
        image: '/tkk mountaineering/TKK PERLINTASAN TEBING.webp',
        requirements: [
          'Memahami & mampu merencanakan, mempersiapkan, dan melintasi rawa.',
          'Memahami & mampu melintasi sungai.',
          'Memahami dan mampu menggunakan alat & prasarana.',
          'Mengetahui alat dan prasarana Travesing.',
          'Telah melatih seorang Penggalang sehingga memperoleh TKK Travesing.'
        ]
      }
    ],
    richContent: (
      <div className="space-y-12 font-gabarito text-gray-700">
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mb-8">
          <h2 className="text-2xl font-bold font-anta text-slate-800 mb-4">Krida Mountaineering</h2>
          <p className="leading-relaxed">
            Secara bahasa, <strong>mountaineering</strong> berarti teknik mendaki gunung. Namun dalam praktiknya, ruang lingkup mountaineering mencakup berbagai kegiatan di alam pegunungan dengan tingkat kesulitan berbeda. Mulai dari hiking ringan hingga panjat tebing ekstrem.
          </p>
        </div>

        {/* Jenis Kegiatan */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-primary/10 rounded-xl text-primary">
              <Mountain size={32} />
            </div>
            <h2 className="text-3xl font-bold font-anta text-gray-900">Jenis Kegiatan</h2>
          </div>
          <div className="space-y-8 pl-4 md:pl-16 border-l-2 border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2"><Footprints size={20} className="text-green-600"/> 1. Hill Walking / Hiking</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Menjelajah perbukitan (kemiringan &lt; 45°).</li>
                  <li>Hanya mengandalkan kaki, sesekali tongkat.</li>
                  <li>Sederhana, cocok untuk pemula.</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2"><Activity size={20} className="text-yellow-600"/> 2. Scrambling</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Pegunungan terjal (kemiringan &gt; 45°).</li>
                  <li>Tangan digunakan untuk keseimbangan.</li>
                  <li>Tali mulai digunakan demi keamanan.</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2"><MoveUp size={20} className="text-red-600"/> 3. Climbing</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Level ekstrem, tebing batu &gt; 80°.</li>
                  <li>Wajib alat khusus (harness, tali, karabiner).</li>
                  <li>Butuh fisik & mental tangguh.</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2"><Snowflake size={20} className="text-blue-400"/> 4. Ice & Snow Climbing</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Panjat medan es atau salju.</li>
                  <li>Sangat berbahaya, butuh teknik khusus.</li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl">
              <h3 className="font-bold text-gray-800 mb-2">Varian Lain:</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li><strong>Wall Climbing:</strong> Panjat tebing buatan atau alami vertikal. Termasuk rappelling & prusiking.</li>
                <li><strong>Rock Climbing:</strong> Olahraga fisik & mental pada tebing batu.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Peralatan Climbing */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-primary/10 rounded-xl text-primary">
              <Hammer size={32} />
            </div>
            <h2 className="text-3xl font-bold font-anta text-gray-900">Peralatan Climbing</h2>
          </div>
          <div className="pl-4 md:pl-16 border-l-2 border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div>
                <h3 className="font-bold text-gray-800 mb-1">1. Tali Pendakian</h3>
                <p className="text-sm text-gray-600 mb-1">Fungsi: pengaman jatuh. Panjang ±50m.</p>
                <ul className="list-disc pl-5 text-sm">
                  <li><strong>Static:</strong> Kaku, untuk rappelling.</li>
                  <li><strong>Dynamic:</strong> Lentur, untuk panjat.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">2. Carabiner</h3>
                <p className="text-sm text-gray-600">Cincin kait (Screw Gate & Non Screw Gate).</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">3. Sling</h3>
                <p className="text-sm text-gray-600">Webbing penghubung, mengurangi gesekan.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">4. Descender (Figure 8)</h3>
                <p className="text-sm text-gray-600">Alat pengereman saat turun tebing.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">5. Ascender</h3>
                <p className="text-sm text-gray-600">Alat bantu naik tali (mekanisme gigit).</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">6. Harness</h3>
                <p className="text-sm text-gray-600">Pengaman tubuh (Seat & Body Harness).</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">7. Sepatu</h3>
                <p className="text-sm text-gray-600">Fleksibel (celah kecil) atau Kaku (tonjolan).</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">8. Anchor (Jangkar)</h3>
                <p className="text-sm text-gray-600">Natural (pohon/batu) & Artificial (piton/bolt).</p>
              </div>
            </div>
          </div>
        </section>

        {/* Persiapan */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-primary/10 rounded-xl text-primary">
              <Shield size={32} />
            </div>
            <h2 className="text-3xl font-bold font-anta text-gray-900">Persiapan</h2>
          </div>
          <div className="pl-4 md:pl-16 border-l-2 border-gray-100">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <div><strong>Fisik:</strong> Tubuh sehat, stamina kuat.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <div><strong>Mental:</strong> Bebas phobia ketinggian, siap risiko.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <div><strong>Alat Dasar:</strong> Ransel, sepatu gunung, tenda, kompas, P3K.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <div><strong>Alat Khusus:</strong> Tali kernmantel, karabiner, harness, figure 8.</div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  },
  {
    id: 4,
    title: 'Krida Survival',
    image: '/survival.webp',
    description: 'Kemampuan bertahan hidup di alam bebas dengan memanfaatkan sumber daya alam yang ada.',
    details: 'Teknik bertahan hidup di alam bebas dengan logistik terbatas. Meliputi identifikasi tumbuhan dan hewan yang bisa dimakan (botani & zoologi praktis), pembuatan bivak alam, cara mendapatkan air bersih, dan membuat api tanpa korek.',
    materi: [
      'Botani & Zoologi Praktis',
      'Pembuatan Bivak (Shelter)',
      'Teknik Mendapatkan Air & Api',
      'Jebakan (Trap) Hewan',
      'Psikologi Survival'
    ],
    tkk: [
      {
        id: 'survival-1',
        title: 'TKK Jenis–Jenis Tumbuhan',
        image: '/tkk survival/TKK JENIS-JENIS TUMBUHAN.webp',
        requirements: [
          'Memahami, memanfaatkan, dan menjelaskan tumbuhan yang dapat dimakan.',
          'Memahami tumbuhan berair yang dapat diminum.',
          'Mengetahui cara mengambilnya.',
          'Telah melatih seorang Penggalang sehingga memperoleh TKK Jenis Tumbuhan.'
        ]
      },
      {
        id: 'survival-2',
        title: 'TKK Jenis–Jenis Binatang',
        image: '/tkk survival/TKK JENIS-JENIS BINATANG.webp',
        requirements: [
          'Memahami jenis-jenis binatang hutan.',
          'Memahami dan mampu membuat perangkap binatang darat.',
          'Memahami dan mampu membuat perangkap binatang air.',
          'Memahami dan mampu membuat api tanpa korek.',
          'Telah melatih seorang Penggalang sehingga memperoleh TKK Jenis Binatang.'
        ]
      },
      {
        id: 'survival-3',
        title: 'TKK Survival Hutan Gunung',
        image: '/tkk survival/TKK SURVIVAL HUTAN GUNUNG.webp',
        requirements: [
          'Memahami & mampu merencanakan dan melaksanakan survival Hutan Gunung.',
          'Mampu survival satu hari satu malam.',
          'Telah melatih seorang Penggalang sehingga memperoleh TKK Survival Hutan Gunung.'
        ]
      },
      {
        id: 'survival-4',
        title: 'TKK Survival Rawa Laut',
        image: '/tkk survival/TKK SURVIVAL RAWA LAUT.webp',
        requirements: [
          'Memahami & mampu merencanakan dan melaksanakan survival Rawa Laut.',
          'Mampu survival satu hari satu malam.',
          'Telah melatih seorang Penggalang sehingga memperoleh TKK Survival Rawa Laut.'
        ]
      },
      {
        id: 'survival-5',
        title: 'TKK Survival Kit',
        image: '/tkk survival/TKK SURVIVAL KIT.webp',
        requirements: [
          'Memahami & dapat menyebutkan macam alat Survival Kit.',
          'Memahami & dapat menjelaskan alat Survival Kit.',
          'Memahami & dapat menjelaskan bagian alat Survival Kit.',
          'Telah melatih seorang Penggalang sehingga memperoleh TKK Survival Kit.'
        ]
      },
      {
        id: 'survival-6',
        title: 'TKK Mengesan Jejak (Sanjak)',
        image: '/tkk survival/TKK SANJAK.webp',
        requirements: [
          'Memahami dan mampu mengenal jejak.',
          'Memahami dan mampu mencari jejak.',
          'Memahami dan mampu menentukan usia jejak.',
          'Telah melatih seorang Penggalang sehingga memperoleh TKK Mengesan Jejak.'
        ]
      }
    ],
    richContent: (
      <div className="space-y-12 font-gabarito text-gray-700">
        <div className="bg-green-50 p-6 rounded-2xl border border-green-100 mb-8">
          <h2 className="text-2xl font-bold font-anta text-green-800 mb-4">Panduan Lengkap Bertahan Hidup di Alam Terbuka</h2>
          <ul className="space-y-2">
            <li><strong>Survival:</strong> Kemampuan mempertahankan hidup dalam kondisi darurat.</li>
            <li><strong>Survivor:</strong> Orang yang sedang menghadapi situasi kritis dan berusaha keluar dari kesulitan.</li>
            <li><strong>Faktor Utama:</strong> Mental (80% keberhasilan survival ditentukan oleh kesiapan mental).</li>
          </ul>
        </div>

        {/* Prinsip Survival */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-primary/10 rounded-xl text-primary">
              <Brain size={32} />
            </div>
            <h2 className="text-3xl font-bold font-anta text-gray-900">Prinsip Survival</h2>
          </div>
          <div className="space-y-6 pl-4 md:pl-16 border-l-2 border-gray-100">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Internasional (SURVIVAL)</h3>
              <p>Size up, Undue haste, Remember, Vanquish fear, Improve, Value living, Act native, Learn skills.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Lokal (SURVIVAL)</h3>
              <p>Sadar, Usahakan tenang, Rasa takut hilang, Vitalitas naik, Ingin hidup, Variasi alam, Asal tahu caranya, Lancar selamat.</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-100">
              <p className="text-sm"><strong>Catatan:</strong> Akronim ini bukan sekadar hafalan, tapi pedoman praktis. Misalnya, "Size up the situation" berarti jangan langsung panik, tapi analisis dulu kondisi sekitar.</p>
            </div>
          </div>
        </section>

        {/* Prinsip STOP */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-primary/10 rounded-xl text-primary">
              <ShieldAlert size={32} />
            </div>
            <h2 className="text-3xl font-bold font-anta text-gray-900">Prinsip STOP Saat Tersesat</h2>
          </div>
          <div className="pl-4 md:pl-16 border-l-2 border-gray-100">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="bg-gray-50 p-4 rounded-xl"><strong>Stop:</strong> Berhenti, jangan panik.</li>
              <li className="bg-gray-50 p-4 rounded-xl"><strong>Think:</strong> Gunakan akal sehat.</li>
              <li className="bg-gray-50 p-4 rounded-xl"><strong>Observe:</strong> Amati lingkungan (sumber air, arah matahari, tanda manusia).</li>
              <li className="bg-gray-50 p-4 rounded-xl"><strong>Planning:</strong> Buat rencana realistis (bertahan atau mencari jalan).</li>
            </ul>
          </div>
        </section>

        {/* Kebutuhan & Langkah */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-primary/10 rounded-xl text-primary">
              <AlertTriangle size={32} />
            </div>
            <h2 className="text-3xl font-bold font-anta text-gray-900">Kebutuhan & Langkah Darurat</h2>
          </div>
          <div className="space-y-8 pl-4 md:pl-16 border-l-2 border-gray-100">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">6 Kebutuhan Survival</h3>
              <ol className="list-decimal pl-5 space-y-1">
                <li><strong>Mental:</strong> Semangat hidup, percaya diri, akal sehat, disiplin.</li>
                <li><strong>Fisik:</strong> Tubuh fit, tidak mudah sakit.</li>
                <li><strong>Pengetahuan:</strong> Cara membuat bivak, air, makanan, api, orientasi.</li>
                <li><strong>Pengalaman:</strong> Latihan lapangan, mengenali tanaman, perangkap.</li>
                <li><strong>Peralatan:</strong> Kotak survival, pisau jungle, peluit, senter.</li>
                <li><strong>Kemauan belajar:</strong> Selalu terbuka menambah ilmu baru.</li>
              </ol>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Langkah Saat Tersesat</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Koordinasi anggota tim & pertolongan pertama.</li>
                <li>Menilai kemampuan fisik & orientasi medan.</li>
                <li>Penjatahan makanan & air.</li>
                <li>Membuat rencana, pembagian tugas, & tanda jejak.</li>
                <li>Usaha komunikasi (peluit, api, cermin) & cari pertolongan.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Bahaya Survival */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-primary/10 rounded-xl text-primary">
              <Bug size={32} />
            </div>
            <h2 className="text-3xl font-bold font-anta text-gray-900">Bahaya Survival</h2>
          </div>
          <div className="pl-4 md:pl-16 border-l-2 border-gray-100">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 list-disc pl-5">
              <li><strong>Panik & ketegangan:</strong> Cegah dengan latihan, berpikir positif.</li>
              <li><strong>Panas matahari:</strong> Waspada heat stroke. Aklimatisasi, cukup air.</li>
              <li><strong>Penyakit:</strong> Malaria, typus, disentri.</li>
              <li><strong>Kemerosotan mental:</strong> Gejala lemah, histeris.</li>
              <li><strong>Binatang beracun:</strong> Lipan, kalajengking, ular.</li>
              <li><strong>Keracunan:</strong> Gejala muntah, kejang.</li>
              <li><strong>Keletihan ekstrem:</strong> Cegah dengan makanan berkalori.</li>
              <li><strong>Kelaparan/Kedinginan:</strong> Suhu tubuh turun drastis bisa fatal.</li>
            </ul>
          </div>
        </section>

        {/* Air & Makanan */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-primary/10 rounded-xl text-primary">
              <Droplets size={32} />
            </div>
            <h2 className="text-3xl font-bold font-anta text-gray-900">Air & Makanan</h2>
          </div>
          <div className="space-y-6 pl-4 md:pl-16 border-l-2 border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-blue-900 mb-3 flex items-center gap-2"><Droplets size={20}/> Air</h3>
                <p className="mb-2 text-sm">Tanpa makan: 20–30 hari. Tanpa air: 3–5 hari.</p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li><strong>Langsung minum:</strong> Hujan, rotan, kantung semar, lumut.</li>
                  <li><strong>Harus dimurnikan:</strong> Sungai besar, pasir pantai (gali 5m), batang pisang.</li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-green-900 mb-3 flex items-center gap-2"><Utensils size={20}/> Makanan</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li><strong>Tumbuhan:</strong> Batang pisang, rebung, pakis, sagu, selada air, jamur merang.</li>
                  <li><strong>Hewan:</strong> Belalang, jangkrik, cacing, burung, laron, siput, kadal.</li>
                  <li><strong>Beracun:</strong> Warna mencolok, bau tak sedap, getah putih.</li>
                </ul>
              </div>
            </div>
            <p className="text-sm italic">👉 Tips: Coba dulu makanan dengan cara dioleskan ke kulit/lidah. Jika aman, baru dimakan.</p>
          </div>
        </section>

        {/* Bivak & Api */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-primary/10 rounded-xl text-primary">
              <Tent size={32} />
            </div>
            <h2 className="text-3xl font-bold font-anta text-gray-900">Bivak & Api</h2>
          </div>
          <div className="space-y-6 pl-4 md:pl-16 border-l-2 border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Bivak (Shelter)</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Alami:</strong> Gua, lubang pohon, celah batu.</li>
                  <li><strong>Buatan:</strong> Tenda, ponco, daun/ranting.</li>
                  <li><strong>Syarat:</strong> Hindari aliran air, dahan rapuh, sarang nyamuk.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2"><Flame size={20} className="text-orange-500"/> Api</h3>
                <p className="mb-2">Manfaat: Penerangan, memasak, hangat, usir hewan, tanda.</p>
                <p><strong>Cara buat:</strong> Lensa, gesekan kayu, busur & gurdi.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Gangguan Binatang & Perangkap */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-primary/10 rounded-xl text-primary">
              <Footprints size={32} />
            </div>
            <h2 className="text-3xl font-bold font-anta text-gray-900">Gangguan & Jejak</h2>
          </div>
          <div className="pl-4 md:pl-16 border-l-2 border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Penanganan Gangguan</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li><strong>Nyamuk:</strong> Asap bunga kluwih, garam.</li>
                  <li><strong>Laron:</strong> Gantung cabe.</li>
                  <li><strong>Lebah:</strong> Bawang merah, tanah basah.</li>
                  <li><strong>Lintah:</strong> Tembakau, garam, jeruk mentah.</li>
                  <li><strong>Kalajengking:</strong> Pijat luka, ikat pangkal, garam.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Perangkap & Jejak</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Trap:</strong> Gantung, tali sederhana, lubang jerat.</li>
                  <li><strong>Jejak alami:</strong> Kotoran, ranting patah, tanah tercecer (tanda jenis/arah hewan).</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Survival Kit */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-primary/10 rounded-xl text-primary">
              <Briefcase size={32} />
            </div>
            <h2 className="text-3xl font-bold font-anta text-gray-900">Survival Kit</h2>
          </div>
          <div className="pl-4 md:pl-16 border-l-2 border-gray-100">
            <div className="bg-gray-900 text-gray-300 p-6 rounded-2xl">
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <li className="flex items-center gap-2">✅ Peralatan memancing</li>
                <li className="flex items-center gap-2">✅ Pisau</li>
                <li className="flex items-center gap-2">✅ Tali kecil</li>
                <li className="flex items-center gap-2">✅ Senter</li>
                <li className="flex items-center gap-2">✅ Cermin kecil</li>
                <li className="flex items-center gap-2">✅ Peluit</li>
                <li className="flex items-center gap-2">✅ Korek api kedap air</li>
                <li className="flex items-center gap-2">✅ Tablet garam/norit</li>
                <li className="flex items-center gap-2">✅ Obat pribadi</li>
                <li className="flex items-center gap-2">✅ Jarum, benang, peniti</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    )
  },
  {
    id: 5,
    title: 'Krida Penanggulangan Bencana',
    image: '/pba.webp',
    description: 'Pengetahuan pertolongan pertama, evakuasi, dan manajemen penanggulangan bencana alam.',
    details: 'Materi pertolongan pertama gawat darurat (PPGD), manajemen posko bencana, evakuasi korban, dan dapur umum. Mempersiapkan anggota untuk terjun langsung membantu masyarakat saat terjadi bencana alam seperti banjir, gempa bumi, atau tanah longsor.',
    materi: [
      'Pertolongan Pertama (PPGD)',
      'Manajemen Posko Bencana',
      'Teknik Evakuasi Korban',
      'Dapur Umum',
      'Mitigasi Bencana'
    ],
    tkk: [
      {
        id: 'pba-1',
        title: 'TKK Manajemen Penanggulangan Bencana',
        image: '/tkk pba/TKK MANAJEMEN PENANGGULANGAN BENCANA.webp',
        requirements: [
          'Memahami jenis-jenis bencana.',
          'Memahami jenis alat penanggulangan bencana.',
          'Memahami tindakan pencegahan & pengamanan diri.',
          'Telah melatih seorang Penggalang sehingga memperoleh SKK Manajemen PB.'
        ]
      },
      {
        id: 'pba-2',
        title: 'TKK Perjalanan & Pertolongan Pertama Gawat Darurat (PPGD)',
        image: '/tkk pba/TKK PERJALANAN DAN PENANGANAN GAWAT DARURAT.webp',
        requirements: [
          'Mampu menjelaskan PPGD.',
          'Mampu melaksanakan PPGD.',
          'Telah melatih seorang Penggalang sehingga memperoleh SKK PPGD.'
        ]
      },
      {
        id: 'pba-3',
        title: 'TKK Pengetahuan Komunikasi Radio',
        image: '/tkk pba/TKK KOMUNIKASI RADIO.webp',
        requirements: [
          'Memahami kegunaan radio komunikasi.',
          'Memahami bagian-bagian radio.',
          'Memahami prosedur kirim-terima berita.',
          'Telah melatih seorang Penggalang sehingga memperoleh SKK Komunikasi Radio.'
        ]
      },
      {
        id: 'pba-4',
        title: 'TKK Cara Memasak',
        image: '/tkk pba/TKK TATA CARA MEMASAK.webp',
        requirements: [
          'Memahami & mampu mengoperasikan Kompor Lapangan T-50.',
          'Memahami & mampu memasak nasi.',
          'Memahami & mampu memasak lauk-pauk.',
          'Memahami & mampu memasak sayur.',
          'Memahami & mampu menyajikan masakan.',
          'Telah melatih seorang Penggalang sehingga memperoleh TKK Tata Cara Memasak.'
        ]
      }
    ],
    richContent: (
      <div className="space-y-12 font-gabarito text-gray-700">
        <div className="bg-red-50 p-6 rounded-2xl border border-red-200 mb-8">
          <h2 className="text-2xl font-bold font-anta text-red-900 mb-4">Krida Penanggulangan Bencana Alam</h2>
          <p className="leading-relaxed mb-4">
            Usaha sistematis untuk <strong>mencegah, mengurangi, menanggulangi, dan memulihkan</strong> dampak bencana terhadap manusia, harta benda, dan lingkungan.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-center">
            <div className="bg-white p-3 rounded-lg border border-red-100">
              <strong>Menyelamatkan Jiwa</strong>
            </div>
            <div className="bg-white p-3 rounded-lg border border-red-100">
              <strong>Mengurangi Kerugian</strong>
            </div>
            <div className="bg-white p-3 rounded-lg border border-red-100">
              <strong>Memulihkan Kondisi</strong>
            </div>
            <div className="bg-white p-3 rounded-lg border border-red-100">
              <strong>Kesiapsiagaan</strong>
            </div>
          </div>
        </div>

        {/* Jenis Bencana */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-primary/10 rounded-xl text-primary">
              <AlertTriangle size={32} />
            </div>
            <h2 className="text-3xl font-bold font-anta text-gray-900">Jenis Bencana Alam</h2>
          </div>
          <div className="pl-4 md:pl-16 border-l-2 border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-xl border border-gray-200">
                <h3 className="font-bold text-gray-800 mb-2">1. Geologi</h3>
                <p className="text-sm text-gray-600">Gempa bumi, Gunung meletus, Tsunami.</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-200">
                <h3 className="font-bold text-gray-800 mb-2">2. Meteorologi</h3>
                <p className="text-sm text-gray-600">Banjir, Angin topan, Kekeringan.</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-200">
                <h3 className="font-bold text-gray-800 mb-2">3. Biologi</h3>
                <p className="text-sm text-gray-600">Wabah penyakit, Serangan hama.</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-200">
                <h3 className="font-bold text-gray-800 mb-2">4. Ekologi</h3>
                <p className="text-sm text-gray-600">Kebakaran hutan, Longsor.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tahapan Penanggulangan */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-primary/10 rounded-xl text-primary">
              <ShieldCheck size={32} />
            </div>
            <h2 className="text-3xl font-bold font-anta text-gray-900">Tahapan Penanggulangan</h2>
          </div>
          <div className="space-y-6 pl-4 md:pl-16 border-l-2 border-gray-100">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">1. Pra-Bencana (Mitigasi)</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Edukasi & Simulasi evakuasi.</li>
                <li>Pemetaan risiko & Sistem peringatan dini.</li>
                <li>Persiapan logistik darurat.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">2. Saat Bencana (Respon)</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Evakuasi korban & Pertolongan pertama (P3K).</li>
                <li>Penyelamatan harta benda penting.</li>
                <li>Komunikasi darurat & Pengamanan lokasi.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">3. Pasca-Bencana (Rehabilitasi)</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Trauma healing & Pemulihan fisik.</li>
                <li>Perbaikan sarana prasarana.</li>
                <li>Rehabilitasi lingkungan & Rekonstruksi.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Peralatan & P3K */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-primary/10 rounded-xl text-primary">
              <HeartPulse size={32} />
            </div>
            <h2 className="text-3xl font-bold font-anta text-gray-900">Peralatan & P3K</h2>
          </div>
          <div className="pl-4 md:pl-16 border-l-2 border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2"><Briefcase size={20}/> Peralatan</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li><strong>SAR:</strong> Tali, tandu, pelampung, perahu karet.</li>
                  <li><strong>Komunikasi:</strong> HT, radio, peluit.</li>
                  <li><strong>Medis:</strong> Kotak P3K, obat dasar.</li>
                  <li><strong>Darurat:</strong> Tenda, matras, kompor.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2"><Stethoscope size={20}/> Pertolongan Pertama</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li><strong>Tenggelam:</strong> Napas buatan, cek kesadaran.</li>
                  <li><strong>Luka Bakar:</strong> Dinginkan, tutup kain bersih.</li>
                  <li><strong>Patah Tulang:</strong> Bidai (imobilisasi).</li>
                  <li><strong>Pingsan:</strong> Longgarkan pakaian, udara segar.</li>
                  <li><strong>Perdarahan:</strong> Tekan luka, balut, tinggikan.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Peran & Checklist */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-primary/10 rounded-xl text-primary">
              <Users size={32} />
            </div>
            <h2 className="text-3xl font-bold font-anta text-gray-900">Peran & Aksi Nyata</h2>
          </div>
          <div className="space-y-6 pl-4 md:pl-16 border-l-2 border-gray-100">
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2"><Megaphone size={20}/> Peran Saka Wira Kartika</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Relawan muda evakuasi & logistik.</li>
                <li>Edukasi kesiapsiagaan masyarakat.</li>
                <li>Penghubung komunikasi lapangan.</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-800 mb-3">Checklist Tanggap Darurat</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                  <strong className="block mb-2 text-primary">Sebelum</strong>
                  <ul className="text-xs space-y-1">
                    <li>Latihan evakuasi</li>
                    <li>Tas darurat</li>
                    <li>Kenali jalur</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                  <strong className="block mb-2 text-primary">Saat</strong>
                  <ul className="text-xs space-y-1">
                    <li>Jangan panik</li>
                    <li>Ikuti jalur</li>
                    <li>Bantu sesama</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                  <strong className="block mb-2 text-primary">Sesudah</strong>
                  <ul className="text-xs space-y-1">
                    <li>Lapor posko</li>
                    <li>Rehabilitasi</li>
                    <li>Jaga kesehatan</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  },
];
