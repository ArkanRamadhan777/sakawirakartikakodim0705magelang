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
        ],
        syllabus: [
          {
            id: 'mod-pio-1-0',
            title: 'Pendahuluan & Teori Dasar',
            description: 'Pengantar Saka Wira Kartika, Matra Darat, dan Pionering.',
            articleCount: 2,
            quizCount: 0,
            duration: '1 Jam',
            items: [
              {
                id: 'art-pio-1-0-1',
                title: 'Pendahuluan Saka Wira Kartika',
                type: 'article',
                duration: '30 min',
                content: (
                  <div>
                    <h3>I. PENDAHULUAN</h3>
                    <h4>1. Umum</h4>
                    <p>Saka atau Satuan Karya Pramuka Wira Kartika merupakan salah satu Satuan Karya Pramuka yang bersifat Nasional. Saka yang dibentuk lewat kerja sama antara Kwartir Nasional Gerakan Pramuka dengan TNI Angkatan Darat ini bertujuan untuk mengembangkan pendidikan bela negara. Saka Wira Kartika adalah wadah kegiatan bagi Pramuka Penegak dan Pramuka Pandega untuk meningkatkan kesadaran bela negara melalui pengetahuan dan keterampilan di bidang matra darat. Tujuannya adalah membentuk patriot bangsa yang setia, berbakti, dan menjunjung tinggi nilai luhur bangsa serta tetap menjaga keutuhan Negara Kesatuan Republik Indonesia.</p>
                    <p>Matra darat sendiri dapat diartikan sebagai segala aktivitas dan kegiatan yang dilakukan secara terorganisir, perorangan ataupun kelompok yang memanfaatkan kondisi alam di darat seperti hutan, gunung, rawa, dan sungai. Untuk itu di dalam menghadapi segala bentuk kondisi alam dibutuhkan keterampilan yang berhubungan dengan tali-temali sebab tali-temali ini dapat digunakan untuk kegiatan seperti membuat jembatan, menara pandang /intai, rumah sementara, hingga sebuah benteng. Walau di jaman yang sudah modern seperti saat ini secara umum penggunaan tali-temali sudah sangat berkurang, namun tali-temali tetap diperlukan untuk hal-hal yang bersifat darurat.</p>
                    <p>Salah satu Krida dalam Pramuka Saka Wira Kartika adalah <strong>“Pionering”</strong>. Pionering sendiri diambil dari kata Pionir yang mempunyai arti “penganjur, pelopor; perintis jalan atau pembuka jalan”. Dalam Kepramukaan pionering merupakan keterampilan dalam pembuatan bangunan darurat dengan menggunakan bahan-bahan seadanya. Jenis bangunan yang dibuat semisal menara pandang atau menara jaga, tiang bendera, gapura atau pintu gerbang, jembatan, dan aneka perabotan perkemahan semacam meja makan, rak sepatu, dan lain-lain. Bahan yang digunakan untuk membuatnya biasanya terbatas pada kayu dan tali. Karena itu dalam pembuatan pionering sangat diperlukan penguasaan terhadap materi tali-temali termasuk aneka simpul dan ikatan.</p>
                    
                    <h4>2. Maksud dan Tujuan</h4>
                    <ul>
                      <li><strong>Maksud</strong>: Sebagai pedoman dalam pembinaan dan pengembangan Saka Wira Kartika di wilayah.</li>
                      <li><strong>Tujuan</strong>: Meningkatkan dan memperlancar pelaksanaan pembinaan dan pengembangan Saka Wira Kartika di wilayah.</li>
                    </ul>

                    <h4>3. Dasar Hukum</h4>
                    <ul className="list-disc pl-5">
                      <li>Undang-Undang Republik Indonesia Nomor 3 tahun 2002 tentang Pertahanan.</li>
                      <li>Undang-Undang Republik Indonesia Nomor 34 tahun 2004 tentang Tentara Nasional Indonesia (TNI).</li>
                      <li>Keputusan Presiden Republik Indonesia Nomor 238 Tahun 1961 tentang Gerakan Pramuka.</li>
                      <li>Keputusan Presiden RI Nomor 104 tahun 2004 tentang anggaran dasar Gerakan Pramuka.</li>
                      <li>Kesepakatan bersama antara Menteri Dalam Negeri, Menteri Pertahanan, Menteri Pendidikan Nasional, Menteri Agama, Menteri Pemuda dan Olahraga dan Kwartir Nasional Gerakan Pramuka Nomor 118 tahun 2006, Nomor KB / 05 / M / X / 2006, Nomor 51 / X / KB/ 2006 Nomor 52 tahun 2006, Nomor 0145 / MENPORA / X / 2006, Nomor 161 tahun 2006 tentang peningkatan upaya Bela Negara melalui Gerakan Pramuka.</li>
                      <li>Peraturan Bersama Kepala Staf Angkatan Darat dengan Kwartir Nasional Gerakan Pramuka Nomor Perkasad 182 / X / 2007 dan Nomor 199 tahun 2007 tentang kerjasama dalam usaha pembinaan dan pengembangan Pendidikan Bela Negara dan Kepramukaan.</li>
                      <li>Surat Keputusan Bersama Dirjen Pothan Dephan dan Ka Kwarnas Gerakan Pramuka Nomor SKEP/ 27 / VII / 2006 098 Tahun 2006 tanggal 14 Juli 2006 tentang Pengesahan Buku Panduan Pembinaan Kesadaran Bela Negara dalam Gerakan Pramuka.</li>
                      <li>Keputusan Ketua Kwartir Nasional Gerakan Pramuka Nomor 086 Tahun 2005 tentang Anggaran Rumah Tangga Gerakan Pramuka.</li>
                      <li>Keputusan Ketua Kwartir Nasional Gerakan Pramuka Nomor 182 tahun 2006 tentang petunjuk penyelenggaraan Pokok-pokok Organisasi Gerakan Pramuka.</li>
                      <li>Keputusan Ketua Kwartir Nasional Gerakan Pramuka Nomor 188 Tahun 2006 tentang Petunjuk Penyelenggaraan Majelis Pembimbing Gerakan Pramuka.</li>
                      <li>Keputusan Ketua Kwartir Nasional Gerakan Pramuka Nomor 221 Tahun 2009 tentang Petunjuk Penyelenggaraan Satuan Karya Pramuka.</li>
                    </ul>
                  </div>
                )
              },
              {
                id: 'art-pio-1-0-2',
                title: 'Target Kecakapan Tali Temali',
                type: 'article',
                duration: '15 min',
                content: (
                  <div>
                    <h3>Target Kecakapan untuk masing-masing golongan Pramuka</h3>
                    <ul>
                      <li><strong>Pramuka Siaga</strong>: (Tidak diadakan).</li>
                      <li><strong>Pramuka Penggalang Terap</strong>:
                        <ul className="list-disc pl-5">
                          <li>Mengerti dan dapat membuat minimal 2 (dua) Simpul.</li>
                          <li>Mengerti dan dapat membuat minimal 2 (dua ) Jerat.</li>
                          <li>Mengerti dan dapat membuat minimal 2 (dua) Ikatan.</li>
                        </ul>
                      </li>
                      <li><strong>Pramuka Penegak</strong>:
                        <ul className="list-disc pl-5">
                          <li>Memahami dan mampu membuat minimal 4 (empat) Simpul.</li>
                          <li>Memahami dan mampu membuat minimal 4 (empat) Jerat.</li>
                          <li>Memahami dan mampu membuat minimal 4 (empat) Ikatan.</li>
                          <li>Telah melatih sekurang-kurangnya seorang Pramuka Penggalang sehingga memperoleh TKK Tali Temali.</li>
                        </ul>
                      </li>
                      <li><strong>Pramuka Pandega</strong>:
                        <ul className="list-disc pl-5">
                          <li>Menguasai dan mahir membuat minimal 10 (sepuluh) Simpul.</li>
                          <li>Menguasai dan mahir membuat minimal 14 (empat belas ) Jerat.</li>
                          <li>Menguasai dan mahir membuat minimal 7 (tujuh) Ikatan.</li>
                          <li>Telah melatih sekurang-kurangnya 2 (dua) orang Pramuka Penggalang dan 2 (dua) orang Pramuka Penegak sehingga memperoleh TKK Tali Temali.</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                )
              }
            ]
          },
          {
            id: 'mod-pio-1-1',
            title: 'Simpul (Knots)',
            description: 'Pengertian simpul dan macam-macam simpul dasar hingga lanjutan.',
            articleCount: 2,
            quizCount: 0,
            duration: '2 Jam',
            items: [
              {
                id: 'art-pio-1-1-1',
                title: 'Pengertian & Simpul Dasar',
                type: 'article',
                duration: '45 min',
                content: (
                  <div>
                    <h3>1. Simpul</h3>
                    <p>Simpul adalah suatu bentukan tertentu (lilitan, tekukan) yang dibuat pada tali yang difungsikan untuk menambatkan tali pada <em>anchor</em>, maupun untuk keperluan tertentu. Pengetahuan tentang simpul dan kemampuan membuat simpul dengan mudah dan cepat adalah bagian penting yang harus dimiliki seorang anggota Pramuka. Menguasai dan memahami simpul yang penting saja (yang sering dipakai, dan dapat digunakan pada saat <em>emergency</em>) jauh lebih baik daripada hanya mengenal bermacam-macam simpul tanpa tahu fungsi dan kegunaannya. Seorang anggota Pramuka yang baik harus ingat seperti apa simpul yang baik, dan tahu cara meneliti lagi apakah simpul yang dibuat/akan dipergunakan sudah benar atau belum. Faktor keamanan yang dimaksud adalah kemampuan simpul tetap terikat kuat setelah dibebani. Beberapa simpul dalam bentuk dasarnya cenderung kehilangan fungsi kerjanya bila tidak diberi beban lilitannya.</p>
                    
                    <h4>Macam-macam simpul diantaranya:</h4>
                    <ul>
                      <li><strong>Simpul hidup (<em>overhand knot</em>)</strong>: Merupakan simpul paling dasar. Simpul hidup juga menjadi simpul yang mendasari pembuatan simpul-simpul lainnya seperti simpul mati dan simpul nelayan atau simpul kembar. Simpul hidup digunakan sebagai simpul pada ujung tali untuk menjaga agar jalinan tali di ujung tali tidak terurai serta menjaga tali dari pergeseran.
                        <br/><em>Cara membuatnya</em>: Buat simpul biasa pada kedua ujung tali. Tekuk/lipat kedua ujung simpul, sehingga ujung simpul sejajar dengan bagian tali yang panjang. Tarik kedua tali secara berlawanan, sehingga sambungan menjadi kencang.
                      </li>
                      <li><strong>Simpul hidup dengan sosok</strong>: Digunakan untuk menyambung tali yang sama besarnya, dengan tujuan agar sambungan tersebut mudah dilepaskan kembali.
                        <br/><em>Cara membuatnya</em>: Buat simpul hidup pada ujung tali. Salah satu ujung pendeknya putar ke yang berlawanan sehingga membentuk sosok baru. Tarik bagian tali yang panjang berlawanan arah dengan kuat-kuat, sehingga sambungan menjadi kencang.
                      </li>
                      <li><strong>Simpul tenun/simpul anyam (<em>sheet bend</em>)</strong>: Digunakan untuk menyambung dua buah utas tali kering yang ukurannya tidak sama besar.
                        <br/><em>Cara membuatnya</em>: Buat sosok pada ujung tali yang besar. Melalui sosok tersebut susupkan tali kecil dan putar sehingga melilit sosok dan membentuk mata. Tarik kedua ujung tali besar dan kedua ujung tali kecil secara berlawanan.
                      </li>
                      <li><strong>Simpul tenun berganda/simpul anyam rangkap (<em>double sheet bend</em>)</strong>: Merupakan pengembangan dari simpul anyam terutama untuk meningkatkan daya ikat (kekuatan) tali dalam menyimpul.
                        <br/><em>Cara membuatnya</em>: Buat sosok pada ujung tali yang besar. Buat mata pada ujung tali yang kecil, yang dililit sosok tali besar. Lilitkan sekali lagi tali kecil pada sosok tali besar, sehingga ujung tali kecil membentuk mata. Tarik kedua ujung tali secara berlawanan.
                      </li>
                      <li><strong>Simpul mati (<em>reef knot</em> atau <em>square knot</em>)</strong>: Kegunaan simpul mati adalah untuk menyambung dua buah tali yang sama besar dan dalam keadaan kering.
                        <br/><em>Cara membuatnya</em>: Letakkan ujung tali merah di atas ujung tali biru. Lingkarkan ujung tali merah ke bawah tali biru kemudian lingkarkan lagi ke atas. Balik arah ujung tali biru yang tadinya ke arah kanan menjadi ke arah kiri. Demikian juga dengan ujung tali merah, balik ke arah kanan dan letakkan ujungnya di atas ujung tali biru. Ulangi langkah pada nomor dua. Tarik masing-masing ujung tali sehingga simpul menjadi kencang.
                      </li>
                    </ul>
                  </div>
                )
              },
              {
                id: 'art-pio-1-1-2',
                title: 'Simpul Lanjutan',
                type: 'article',
                duration: '45 min',
                content: (
                  <div>
                    <h3>Simpul Lanjutan</h3>
                    <ul>
                      <li><strong>Simpul penarik</strong>: Digunakan untuk menambatkan benda/hewan pada patok.
                        <br/><em>Cara membuatnya</em>: Buat simpul biasa di tengah-tengah tali. Tarik lingkaran tengah simpul melalui sela-sela kaki simpul. Masukkan sosok dari hasil tarikan simpul tersebut pada patok yang telah disiapkan. Tarik kedua ujung tali sehingga simpul menjadi kuat kencang.
                      </li>
                      <li><strong>Simpul kelapa</strong>: Digunakan untuk menyambung tali, yang sama besar agar sambungan lebih kuat.
                        <br/><em>Cara membuatnya</em>: Buat mata pada salah satu ujung tali yang akan disambung. Buat mata satu lagi pada ujung tali yang lain, dengan jalan menyusupkan melalui sela-sela mata pada tali yang pertama secara bersilangan. Tarik kedua ujung tali secara berlawanan.
                      </li>
                      <li><strong>Simpul kursi</strong>: Digunakan untuk mengangkut orang sakit dari bawah ke atas atau sebaliknya.
                        <br/><em>Cara membuatnya</em>: Buat dua buah mata di tengah-tengah tali yang sejajar. Geser mata dengan jalan menganyamnya. Buat sosok yang besar dari kedua mata yang telah dianyam tersebut. Dari kedua ujung tali masing-masing buat mata yang melilit sosok yang baru dibuat.
                      </li>
                      <li><strong>Simpul Aceh</strong>: Digunakan untuk membawa atau mengikat tawanan.
                        <br/><em>Cara membuatnya</em>: Buat dua buah mata di tengah-tengah tali yang sejajar. Geserkan kedua mata dengan cara menganyam. Buat sosok yang besar dari kedua mata yang dianyam, masukkan ke bahu kanan atau bahu kiri tawanan. Tarik kedua ujung tali sehingga simpul mengikat dengan ketat pada bahu tawanan.
                      </li>
                      <li><strong>Simpul mata, dengan sosok</strong>: Digunakan untuk memperkuat ikatan.
                        <br/><em>Cara membuatnya</em>: Buat sosok pada ujung tali. Buat mata pada ujung tali yang pendek. Belitkan kaki mata pada bagian tali yang panjang dan susupkan melalui mata. Tarik bagian tali yang panjang dan tahan pada sosok sehingga simpul menjadi kuat.
                      </li>
                    </ul>
                  </div>
                )
              }
            ]
          },
          {
            id: 'mod-pio-1-2',
            title: 'Jerat (Hitches)',
            description: 'Macam-macam jerat dan cara pembuatannya.',
            articleCount: 2,
            quizCount: 0,
            duration: '1.5 Jam',
            items: [
              {
                id: 'art-pio-1-2-1',
                title: 'Jerat Dasar',
                type: 'article',
                duration: '45 min',
                content: (
                  <div>
                    <h3>2. Bentuk Jerat</h3>
                    <ul>
                      <li><strong>Jerat rangkap</strong>: Digunakan untuk membuat tangga dari tali, mencabut patok.
                        <br/><em>Cara membuatnya</em>: Buat mata yang sedang di tengah tali. Putarkan mata sehingga berhimpit dan kedudukan kedua ujung tali di antara kedua mata. Masukkan kedua mata pada balok. Tarik kedua ujung tali secara berlawanan.
                      </li>
                      <li><strong>Jerat tukang kayu</strong>: Digunakan untuk ikat permulaan pada balok.
                        <br/><em>Cara membuatnya</em>: Buat mata pada ujung tali yang melingkar balok, lipat ujung tali pendek melingkar pada tali panjang, lilitkan ujung tali tersebut pada mata secara berulang-ulang. Tarik ujung yang panjang sehingga jerat dengan kuat mengikat pada balok.
                      </li>
                      <li><strong>Jerat memperpendek tali</strong>: Digunakan untuk memperpendek tali yang terlalu panjang.
                        <br/><em>Cara membuatnya</em>: Buat dua buah sosok secara berurutan di tengah-tengah tali. Dari masing-masing ujung tali, buat mata yang membelit pada sosok yang telah dibuat tersebut. Tarik kedua ujung tali sehingga kencang.
                      </li>
                      <li><strong>Jerat rangkap berganda</strong>: Digunakan untuk mengikatkan tali pada balok.
                        <br/><em>Cara membuatnya</em>: Buat dua belitan pada balok. Buat belitan sekali lagi pada tali pendek di sisi tali yang panjang. Tarik ujung tali yang pendek dan ujung tali yang panjang.
                      </li>
                      <li><strong>Jerat mata kait</strong>: Digunakan untuk mengangkat benda dengan bantuan katrol.
                        <br/><em>Cara membuatnya</em>: Buat mata pada tali. Masukkan mata tersebut pada pengait katrol. Tarik katrol, sehingga jerat menjadi kencang.
                      </li>
                      <li><strong>Jerat tiang rangkap</strong>: Digunakan untuk menambatkan perahu atau hewan pada pohon atau patok.
                        <br/><em>Cara membuatnya</em>: Buat mata pada ujung tali. Buat dua buah sosok pada ujung tali pendek dan selipkan ke dalam mata. Tarik tali panjang dan ujung tali pendek secara berlawanan.
                      </li>
                    </ul>
                  </div>
                )
              },
              {
                id: 'art-pio-1-2-2',
                title: 'Jerat Lanjutan',
                type: 'article',
                duration: '45 min',
                content: (
                  <div>
                    <h3>Jerat Lanjutan</h3>
                    <ul>
                      <li><strong>Jerat tangga</strong>: Digunakan untuk membuat tangga dari tali.
                        <br/><em>Cara membuatnya</em>: Buat mata pada ujung tali. Belitkan ujung tali panjang pada ujung tali pendek, sehingga berlawanan. Selipkan tongkat pada mata dan tali panjang. Tarik ujung tali pendek dan tali panjang berlawanan.
                      </li>
                      <li><strong>Jerat sauh</strong>: Digunakan untuk mengikat cincin besi/ cincin kait.
                        <br/><em>Cara membuatnya</em>: Belitkan ujung tali dua kali pada cincin/balok atau sauh, buat mata pada ujung tali pendek dengan membelitkan pada tali panjang dan susupkan/selipkan pada sela-sela belitan tali dengan cincin. Belitkan ujung tali pendek pada tali panjang beberapa kali dan ujung terakhirnya ikat menjadi satu dengan bagian tali yang panjang.
                      </li>
                      <li><strong>Jerat setengah</strong>: Digunakan untuk mengikat tali pada pohon.
                        <br/><em>Cara membuatnya</em>: Belitkan tali pada balok/pohon. Belitkan ujung tali pendek pada bagian tali panjang secara berulang-ulang. Rapatkan ujung tali pendek dengan tali panjang dan ikat dengan ikat belit.
                      </li>
                      <li><strong>Jerat sosok berganda</strong>: Digunakan untuk mengaitkan katrol.
                        <br/><em>Cara membuatnya</em>: Buat sosok yang besar pada ujung tali. Buat dua buah sosok lagi dengan menarik dua kali sosok pertama secara berlawanan. Puntir sosok dari tali panjang sehingga membentuk mata.
                      </li>
                      <li><strong>Jerat penuh dan setengah</strong>: Digunakkan untuk mengikat tali pada pohon atau patok/cincin.
                        <br/><em>Cara membuatnya</em>: Belitkan ujung tali dua kali pada pohon/patok cincin. Belitkan kembali ujung tali yang pendek pada bagian tali yang panjang dengan bentuk mata beberapa kali. Ikat ujung tali pendek dengan tali panjang.
                      </li>
                      <li><strong>Jerat mata rangkap dengan sosok</strong>: Digunakan untuk mengaitkan tali pada katrol.
                        <br/><em>Cara membuatnya</em>: Lipat/tekuk tali menjadi dua bagian. Buat mata dan sosok pada tali yang ditekuk/ dilipat. Masukkan sosok kedalam mata dan tekuk keluar. Masukkan kaki sosok dan tali panjang ke sela-sela sosok yang ditekuk. Tarik tali panjang sehingga jerat menjadi kuat.
                      </li>
                      <li><strong>Jerat angka delapan dengan sosok</strong>: Digunakan untuk mengaitkan tali pada patok.
                        <br/><em>Cara membuatnya</em>: Buat mata pada ujung tali dan masukkan ke dalam patok. Tekuk ujung tali yang pendek dan buat angka 8. Selipkan sisi ujung tali yang pendek ke dalam mata dan angka delapan.
                      </li>
                      <li><strong>Jerat laso</strong>: Digunakan untuk mengikatkan tali pada patok.
                        <br/><em>Cara membuatnya</em>: Buat sosok pada ujung tali yang membelit patok. Buat simpul biasa pada ujung tali yang pendek pada sosok yang membelit tali panjang. Tarik tali panjang dan tahan tali pendek.
                      </li>
                    </ul>
                  </div>
                )
              }
            ]
          },
          {
            id: 'mod-pio-1-3',
            title: 'Ikat Belit (Lashings)',
            description: 'Teknik mengikat dua benda atau lebih.',
            articleCount: 1,
            quizCount: 0,
            duration: '1 Jam',
            items: [
              {
                id: 'art-pio-1-3-1',
                title: 'Macam-macam Ikat Belit',
                type: 'article',
                duration: '60 min',
                content: (
                  <div>
                    <h3>3. Bentuk Ikat Belit</h3>
                    <ul>
                      <li><strong>Ikat belit pokok</strong>: Digunakan untuk mengikat dua buah benda yang disambung lurus atau sejajar.
                        <br/><em>Cara membuatnya</em>: Sejajarkan balok yang akan disambung 30- 50 Cm. Buat jerat tukang kayu sebagai permulaan ikatan pada kedua ujung pokok. Belitkan tali panjang pada kedua balok, belitan tersebut harus rapat, arah belitan berlawanan dengan belitan tukang kayu. Selipkan ujung tali ke dalam belitan, buat jerat setengah.
                      </li>
                      <li><strong>Ikat belit pokok diubah</strong>: Digunakan untuk menyambung dua buah benda yang disambung lurus atau sejajar.
                        <br/><em>Cara membuatnya</em>: Sejajarkan balok yang akan disambung 30-50 Cm. Buat jerat tukang kayu sebagai permulaan pada kedua ujung balok. Buat belitan pada tali panjang beberapa kali pada kedua balok, belitan harus rapat satu sama lain. Rubah dengan membuat antara pada belitan pertama dan kedua, antara dibuat dengan membuat persilangan tali. Selipkan ujung tali pada belitan dan buat jerat setengah di ujungnya.
                      </li>
                      <li><strong>Ikat belit pokok dicekik</strong>: Digunakan untuk membuat ikatan yang kuat.
                        <br/><em>Cara membuatnya</em>: Buat jerat tukang kayu pada awal ikatan. Belitkan bagian tali yang panjang satu sama lain. Buat cekikan pada belitan dengan menggunakan sisa ujung tali, dengan cara menyelipkan tali di antara kedua benda. Lilitkan beberapa kali dan matikan ujung tali dengan jerat setengah atau jerat rangkap.
                      </li>
                      <li><strong>Ikat belit silang</strong>: Digunakan untuk menyambung dua buah benda yang tegak lurus.
                        <br/><em>Cara membuatnya</em>: Ikat Jerat tukang kayu. Belitkan tali panjang pada persilangan, empat atau lima kali. Buat cekikan di sela-sela sambungan dua atau tiga belitan, ujung tali ikat belit dan jerat tukang kayu eratkan.
                      </li>
                      <li><strong>Ikat belit puntir</strong>: Digunakan untuk mengeraskan ikatan atau klem penjepit.
                        <br/><em>Cara membuatnya</em>: Ikatkan tali pada gelagar dan menggapit dengan simpul mati. Masukkan kayu penusuk pada sela-sela tali dengan penggapit. Putar hingga ikatan kencang.
                      </li>
                      <li><strong>Ikat belit peneguh</strong>: Digunakan untuk memperkuat patok peneguh (dua buah patok atau lebih).
                        <br/><em>Cara membuatnya</em>: Buat jerat tukang kayu pada salah satu patok. Belitkan tali panjang pada kedua patok rapat-rapat. Lilitkan ujung tali pada tali di antara patok beberapa kali. Matikan ujung tali dengan jerat setengah.
                      </li>
                      <li><strong>Ikat belit hidup</strong>: Digunakan untuk menyambung dua buah benda yang disambung tegak lurus.
                        <br/><em>Cara membuatnya</em>: Buat jerat tukang kayu pada awal ikatan. Buat belitan dengan tali panjang pada pasak dengan balok mendatar beberapa kali. Buat cekikan antara balok dengan pasak. Matikan ujung jerat dengan ujung lilitan memakai simpul atau jerat rangkap.
                      </li>
                      <li><strong>Jerat penuh rangkap</strong>: Digunakan untuk mengaitkan katrol pada patok.
                        <br/><em>Cara membuatnya</em>: Belitkan tali dua kali pada patok/ pohon. Buat simpul pada kedua ujung tali yang membelit kedua belitan tali tersebut. Kaitkan katrol pada tali dan tarik hingga kencang.
                      </li>
                    </ul>
                  </div>
                )
              }
            ]
          }
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
        ],
        syllabus: [
          {
            id: 'mod-pio-2-1',
            title: 'Jembatan Sederhana',
            description: 'Jembatan Tepi Sederhana dan Jembatan Kuda-kuda.',
            articleCount: 2,
            quizCount: 0,
            duration: '2 Jam',
            items: [
              {
                id: 'art-pio-2-1-1',
                title: 'Jembatan Tepi Sederhana',
                type: 'article',
                duration: '60 min',
                content: (
                  <div>
                    <h3>1. Jembatan Tepi Sederhana</h3>
                    <p><strong>Pekerjaan awal</strong>:</p>
                    <ul>
                      <li>Pembersihan tempat/ lokasi yang akan dibangun jembatan.</li>
                      <li>Merambu yang meliputi pengukuran lebar jembatan, penentuan sumbu as jembatan dan kedalaman sungai serta memeriksa kondisi tanah.</li>
                      <li>Menentukan tempat kerja di daerah tepi dekat dan tepi jauh.</li>
                    </ul>
                    <p><strong>Pekerjaan pangkal jembatan</strong>:</p>
                    <ul>
                      <li>Menyiapkan tempat pangkal jembatan.</li>
                      <li>Gali tanah secukupnya untuk kedudukan balok penyangga.</li>
                      <li>Apabila kondisi tanah pada tebing pangkal jembatan mudah longsor, diperkuat dengan turapan.</li>
                      <li>Pasang balok penyangga melintang tegak lurus sumbu jembatan.</li>
                      <li>Disamping kanan dan kiri balok penyangga dipasang patok agar tidak goyah.</li>
                    </ul>
                    <p><strong>Pemasangan gelagar</strong>:</p>
                    <ul>
                      <li>Pasang gelagar di atas balok penyangga sejajar arah sumbu jembatan (panjang gelagar maksimal 6 M) apabila dari bambu atau batang kayu bulat minimal 10 Cm.</li>
                      <li>Gelagar yang bertumpu di atas balok penyangga diratakan dan dipaku/diikat dengan kawat.</li>
                      <li>Gelagar dipasang rapat apabila di atasnya ditimbun tanah.</li>
                      <li>Untuk jembatan yang dilalui kendaraan jumlah gelagar dibuat minimal 8 batang pohon kelapa/pohon yang berdiameter 25 - 30 Cm di susun berjajar rapat dengan pucuk dan pangkal batang satu dengan batang yang lain berlawanan.</li>
                      <li>Pada ujung-ujung gelagar dipasang balok penahan kemudian dipasang piket (patok) di sisi luar dan ujung-ujung balok penahan.</li>
                    </ul>
                    <p><strong>Pembuatan lantai</strong>:</p>
                    <ul>
                      <li>Lantai dibuat dari papan kayu bulat yang utuh atau dibelah.</li>
                      <li>Dipasang melintang di atas gelagar memanjang diikat dengan kawat atau dipaku.</li>
                      <li>Untuk memperkuat kedudukan lantai dipasang balok penutup atau penjepit lantai.</li>
                    </ul>
                    <p><strong>Pembuatan sandaran</strong>:</p>
                    <ul>
                      <li>Sandaran dibuat dari kayu persegi, kayu bulat atau bambu.</li>
                      <li>Tiang sandaran dipasang pada bagian ujung-ujung pangkal jembatan ditanam di tanah.</li>
                      <li>Kayu/bambu sandaran dihubungkan dengan tiang sandaran diikat kawat atau dipaku.</li>
                    </ul>
                  </div>
                )
              },
              {
                id: 'art-pio-2-1-2',
                title: 'Jembatan Kuda-kuda',
                type: 'article',
                duration: '60 min',
                content: (
                  <div>
                    <h3>2. Jembatan Kuda-kuda</h3>
                    <p><strong>Pekerjaan awal</strong>:</p>
                    <ul>
                      <li>Pembersihan tempat/ lokasi yang akan dibangun jembatan.</li>
                      <li>Merambu yang meliputi pengukuran lebar jembatan, kedalaman sungai serta kondisi tanah.</li>
                      <li>Menentukan tempat kerja di daerah tepi dekat dan tepi jauh.</li>
                    </ul>
                    <p><strong>Pekerjaan pangkal jembatan</strong>:</p>
                    <ul>
                      <li>Menyiapkan tempat pangkal jembatan.</li>
                      <li>Gali tanah secukupnya untuk kedudukan balok penyangga.</li>
                      <li>Apabila keadaan tanah tebing pada pangkal jembatan mudah longsor diperkuat dengan turapan.</li>
                      <li>Pasang balok penyangga melintang atau tegak lurus sumbu jembatan.</li>
                      <li>Disamping kiri dan kanan balok penyangga dipasang patok agar kedudukan balok tidak goyah.</li>
                    </ul>
                    <p><strong>Pembuatan kuda-kuda</strong>:</p>
                    <ul>
                      <li><strong>Kuda-kuda kaki sejajar</strong>:
                        <ul className="list-disc pl-5">
                          <li>Membuat mal kuda-kuda dari tali di atas tanah sesuai dengan lebar jembatan yang akan dibuat.</li>
                          <li>Buat kuda-kuda dari batang kayu bulat/bambu diameter 10 Cm sesuai dengan mal yang sudah dibuat.</li>
                          <li>Pasang batang kayu bulat/bambu diameter 10 Cm pada kaki kuda-kuda bagian bawah sebagai balok Lumpur.</li>
                          <li>Pasang penopang dari batang kayu/ bambu bersilangan di atas kedua kaki kuda-kuda dan semua sambungan diikat dengan belit silang.</li>
                        </ul>
                      </li>
                      <li><strong>Kuda-kuda kaki silang</strong>:
                        <ul className="list-disc pl-5">
                          <li>Dua buah batang kayu bulat/ bambu minimal diameter 10 Cm diikat dengan ikatan belit silang pada bagian persilangan bagian bawah sebagai kaki kuda-kuda.</li>
                          <li>Pasang batang kayu bulat/bambu diameter 10 Cm pada kaki kuda-kuda pada bagian bawah sebagai balok Lumpur.</li>
                        </ul>
                      </li>
                    </ul>
                    <p><strong>Pembuatan gelagar</strong>:</p>
                    <ul>
                      <li>Pasang gelagar dari batang kayu bulat/bambu diameter 10 Cm minimal 3 batang di atas kuda-kuda dan balok penyangga dengan diikat memakai ikat belit silang.</li>
                      <li>Pasang balok penahan pada ujung-ujung balok gelagar yang bertumpu pada balok penyangga.</li>
                    </ul>
                    <p><strong>Pembuatan lantai jembatan</strong>:</p>
                    <ul>
                      <li>Potong kayu bulat yang telah dibelah atau papan, sesuai dengan lebar jembatan yang telah direncanakan.</li>
                      <li>Pasang potongan papan, kayu bulat tersebut melintang di atas gelagar diikat dengan ikat silang atau dipaku.</li>
                      <li>Bila menggunakan bambu maka harus dianyam atau dibuat sasak.</li>
                    </ul>
                    <p><strong>Pembuatan sandaran</strong>:</p>
                    <ul>
                      <li>Sandaran dibuat dari kayu persegi, kayu bulat/bambu.</li>
                      <li>Tanam bambu/kayu bulat pada ujung jembatan setinggi 90-100 Cm sebagai tiang sandaran.</li>
                      <li>Pasang bambu/kayu bulat pada tiang sandaran tersebut sebagai titihan, untuk bagian tengah titihan diikatkan pada kaki kuda-kuda sebagai tiang sandaran.</li>
                    </ul>
                  </div>
                )
              }
            ]
          },
          {
            id: 'mod-pio-2-2',
            title: 'Jembatan Lanjutan',
            description: 'Jembatan Bambu Satu, Tarik, Kaki Delapan, dan Topang.',
            articleCount: 2,
            quizCount: 0,
            duration: '2 Jam',
            items: [
              {
                id: 'art-pio-2-2-1',
                title: 'Jembatan Bambu & Tarik',
                type: 'article',
                duration: '60 min',
                content: (
                  <div>
                    <h3>3. Jembatan Bambu Satu</h3>
                    <p><strong>Kebutuhan Bambu</strong>:</p>
                    <ul>
                      <li>Bambu besar: 4 potong (ukuran 3 M); 1 potong (ukuran 250 Cm).</li>
                      <li>Bambu sedang: 2 potong (ukuran 100 Cm, 60 Cm, 3 M).</li>
                    </ul>
                    <p><strong>Kebutuhan Tali</strong>:</p>
                    <ul>
                      <li>16 Gulung (ukuran panjang 6 M).</li>
                      <li>2 Gulung (ukuran panjang 4 M).</li>
                    </ul>

                    <h3>4. Jembatan Tarik</h3>
                    <p><strong>Kebutuhan Bambu</strong>:</p>
                    <ul>
                      <li>Bambu besar: 2 potong (ukuran 250 Cm); 2 potong (ukuran 160 Cm).</li>
                      <li>Bambu sedang: 4 potong (ukuran 3 M); 5 potong (ukuran 1 M); 2 potong (ukuran 2 M); 1 potong (ukuran 160 Cm); 20 potong (ukuran 120 Cm).</li>
                      <li>Bambu kecil: 14 potong (ukuran 50 Cm).</li>
                    </ul>
                    <p><strong>Kebutuhan Tali</strong>:</p>
                    <ul>
                      <li>21 Gulung (ukuran panjang 6 M).</li>
                      <li>1 Gulung (ukuran panjang 7 M).</li>
                      <li>2 Gulung (ukuran panjang 15 M).</li>
                    </ul>
                  </div>
                )
              },
              {
                id: 'art-pio-2-2-2',
                title: 'Jembatan Kaki Delapan & Topang',
                type: 'article',
                duration: '60 min',
                content: (
                  <div>
                    <h3>5. Jembatan Kaki Delapan Bersudut Dua</h3>
                    <p><strong>Kebutuhan Bambu</strong>:</p>
                    <ul>
                      <li>Bambu besar: 4 potong (ukuran 5 M); 4 potong (4 M).</li>
                      <li>Bambu sedang: 2 potong (ukuran 3 M); 6 potong (ukuran 2 M); 7 potong (ukuran 150 Cm); 60 buah (ukuran 150 Cm).</li>
                    </ul>
                    <p><strong>Kebutuhan Tali</strong>:</p>
                    <ul>
                      <li>26 Gulung (ukuran panjang 6 M).</li>
                      <li>6 Gulung (ukuran panjang 15 M).</li>
                    </ul>

                    <h3>6. Jembatan Topang</h3>
                    <p>Jembatan Topang hanya dapat digunakan untuk jembatan kelas 5 Ton dan biasanya hanya digunakan jika tidak terdapat bahan-bahan lain seperti tali-tali pengikat dan kayu bulat yang dapat ditebang di tempat itu. Jika di tepi-tepi terdapat peletak-peletak yang dapat digunakan, lebih baik digunakan jembatan topang lain.</p>
                    <ul>
                      <li><strong>Jembatan Topang Tunggal</strong>: Terdiri dari dua kuda-kuda yang diikat, yang duduk pada tebing-tebing rintangan dan ujung lainnya saling bertemu. Pada titik pertemuan ini kuda-kuda menyangga pemikul lintang, yang diatasnya terletak bangunan atas jembatan. Kuda-kuda harus dibuat sedemikian rupa, supaya satu dengan yang lainnya dapat tepat. Kemiringan kuda-kuda tidak boleh kurang dari 1:2 dan lantai jembatan harus dengan kemiringan 1:60. Tempat-tempat peletak dari kuda-kuda harus dapat tepat berhadap-hadapan dan pada ketinggian yang sama, dan harus diusahakan supaya kaki jembatan macam ini dapat dikerjakan pada bentangan 10 M oleh 30 orang, dalam waktu kurang lebih 2 jam, jika bahan – bahan sudah ada di tempat itu.</li>
                      <li><strong>Jembatan Topang Berganda</strong>: Dapat dibuat sampai bentangan 12 M. Kedua kuda-kuda tidak saling bertemu, tetapi dihubungkan dengan balok mendatar, dan oleh karenanya terdapat dua titik tumpu.</li>
                    </ul>
                  </div>
                )
              }
            ]
          }
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
        ],
        syllabus: [
          {
            id: 'mod-pio-3-1',
            title: 'Bangunan Berteduh',
            description: 'Pembuatan Sengkuap dan Barak.',
            articleCount: 2,
            quizCount: 0,
            duration: '2 Jam',
            items: [
              {
                id: 'art-pio-3-1-1',
                title: 'Sengkuap',
                type: 'article',
                duration: '60 min',
                content: (
                  <div>
                    <h3>1. Sengkuap</h3>
                    <h4>Sengkuap satu banjar tiang:</h4>
                    <ul>
                      <li>Lebar sengkuap kurang lebih 3 meter.</li>
                      <li>Panjang sengkuap tergantung jumlah personel yang menempatinya.</li>
                      <li>Panjang petak 2 s.d. 4 meter, menurut kekuatan bahan yang digunakan.</li>
                      <li>Tinggi tiang kurang lebih 2,5 meter dan ditanam 0,5 meter.</li>
                      <li>Belandar depan dipasang setinggi 1,8 meter.</li>
                      <li>Panjang kasau 4,25 meter dan dipasang dengan jarak 0,5 meter, kasau menggunakan bambu belah maka belahannya menghadap ke atas.</li>
                      <li>Ujung kasau bagian atas (depan) dilebihkan di atas belandar kurang lebih 0,6 meter.</li>
                      <li>Pada bagian belakang tidak harus menggunakan belandar, untuk itu ujung-ujung kasau ditancapkan ke tanah.</li>
                      <li>Bila penutup atas menggunakan daun pisang atau alang-alang maka lebih dulu dipasang reng di atas kasau dengan jarak 0,3 meter untuk mengikat atap.</li>
                      <li>Di sekeliling sengkuap dibuatkan parit, tanah bekas galiannya yang kering dapat digunakan untuk meninggikan lantai.</li>
                    </ul>
                    
                    <h4>Sengkuap dua banjar tiang:</h4>
                    <ul>
                      <li>Lebar sengkuap kurang lebih 3 meter.</li>
                      <li>Panjang sengkuap tergantung jumlah personel yang menempatinya.</li>
                      <li>Panjang petak 2 s.d. 4 meter.</li>
                      <li>Tinggi tiang depan kurang lebih 3 meter dan ditanam ke tanah 50 cm.</li>
                      <li>Tinggi tiang belakang kurang lebih 2,5 meter dan ditanam ke tanah 50 cm.</li>
                      <li>Panjang kasau 4,25 meter dengan jarak pemasangan 0,5 meter dan dilebihkan ke depan 0,6 meter serta dilebihkan ke belakang 0,75 meter.</li>
                    </ul>
                    <p><strong>Pemasangan bale-bale</strong>:</p>
                    <ul>
                      <li>Belandar depan menempel pada tiang depan atau di atas, tiang bale-bale setinggi 0,5 meter.</li>
                      <li>Belandar belakang menempel pada tiang belakang atau di atas tiang bale-bale setinggi 0,55 meter.</li>
                      <li>Tiang bale-bale ditanam 0,25 meter dengan jarak 1 meter.</li>
                      <li>Gelagar bale-bale diletakkan di atas belandar dengan jarak 0,2 s.d. 0,5 meter.</li>
                    </ul>

                    <h4>Sengkuap Dua Banjar Tiang dengan Serambi:</h4>
                    <p>Cara membuatnya sama dengan Sengkuap 2 banjar tiang hanya ditambah dengan serambi kurang lebih 1 meter dari depan, panjang tiang serambi 2,2 meter dan ditanam 0,5 meter.</p>
                    <ul>
                      <li>Ujung kaso atas dengan gelandar diikat satu per satu.</li>
                      <li>Ujung kaso bawah ± 20 Cm dari belandar bawah diikat satu per satu.</li>
                      <li><strong>Penutup atap dengan welit disusun sebagai berikut</strong>:
                        <ul className="list-disc pl-5">
                          <li>Disusun dari bawah ke atas dengan jarak 0,04 - 0,10 meter.</li>
                          <li>Menyambung kesamping dengan bertalipan 0,10 - 0,20 meter.</li>
                          <li>Tiap welit diikat pada kasau dan paling bawah dibalik.</li>
                        </ul>
                      </li>
                      <li>Bale-bale dipasang secara memanjang/melintang dengan menggunakan pelupuk.</li>
                      <li>Tinggi tiang bale-bale bagian depan 0,50 meter dan bagian belakang 0,55 meter.</li>
                      <li>Jarak tiang bale-bale 1,0 meter.</li>
                      <li>Antara tiang bale-bale depan dan belakang diberi tiang tambahan dan belandar.</li>
                      <li><strong>Pembuatan Parit penguras</strong>: Di sekeliling barak harus dibuat parit penguras, bekas galian parit yang digali tanahnya dapat dipakai mempertinggi lantai barak, kemiringan lantai 1 : 20.</li>
                    </ul>
                    <p><strong>Teknik menghitung kebutuhan bahan (panjang 11M / 3 Petak)</strong>:</p>
                    <ul>
                      <li><strong>Bahan yang dibutuhkan</strong>: Bambu Bitung panjang efektif 6 M diameter 15 Cm. Bambu Kaso panjang efektif 5 M diameter 7 Cm. Atap atau Welit panjang 1 M Jarak welit 20 Cm. Bahan pengikat dan penutup (Ijuk, Gedeg).</li>
                      <li><strong>Kebutuhan Bambu Bitung</strong>: Jumlah rangka = Jumlah petak + 1 = 3 + 1 = 4 rangka. Total Kebutuhan Bambu Bitung: $108 \text{ M} = 18 \text{ Batang}$. Keamanan 10 %: 20 Batang.</li>
                      <li><strong>Kebutuhan Bambu Kaso</strong>: Total Kebutuhan Bambu Kaso: $204 \text{ M} \approx 41 \text{ Batang}$. Keamanan 10 %: 46 Batang.</li>
                      <li><strong>Kebutuhan Atap / welit</strong>: Total Kebutuhan Atap / Welit: $360 \text{ Lembar}$. Keamanan 10 %: $396 \text{ Lembar}$.</li>
                    </ul>
                  </div>
                )
              },
              {
                id: 'art-pio-3-1-2',
                title: 'Barak',
                type: 'article',
                duration: '45 min',
                content: (
                  <div>
                    <h3>2. Barak</h3>
                    <h4>Barak Tionghoa:</h4>
                    <ul>
                      <li>Panjang barak disesuaikan dengan jumlah penghuninya, jarak antar tiang 2 meter.</li>
                      <li>Lebar kurang lebih 4 meter, dan tinggi 3 meter.</li>
                      <li>Tiang ditanam kurang lebih 0,5 meter.</li>
                      <li>Memasang kuda-kuda di atas tiang.</li>
                      <li>Memasang belandar di atas kaki kuda-kuda.</li>
                      <li>Memasang kaso dari kayu/ bambu dengan jarak kurang lebih 50 Cm.</li>
                      <li>Memasang atap welit/kajang.</li>
                      <li>Memasang dinding/bilik bambu.</li>
                      <li>Membuat parit keliling barak.</li>
                    </ul>
                    
                    <h4>Barak biasa:</h4>
                    <ul>
                      <li>Panjang barak kurang lebih 6 meter atau disesuaikan dengan penghuninya, jarak antar tiang 3 meter.</li>
                      <li>Lebar kurang lebih 4 meter, tinggi tiang 3 meter dan ander 1 meter.</li>
                      <li>Memasang tiang dengan belandar.</li>
                      <li>Memasang ander.</li>
                      <li>Memasang kaso dengan jarak kurang lebih 50 Cm.</li>
                      <li>Memasang bale-bale dengan pelupuh.</li>
                      <li>Memasang atap dengan welit/ jerami/ alang-alang.</li>
                      <li>Memasang dinding/bilik dari bambu.</li>
                      <li>Membuat parit sekeliling barak.</li>
                    </ul>
                  </div>
                )
              }
            ]
          },
          {
            id: 'mod-pio-3-2',
            title: 'Menara',
            description: 'Pembuatan Menara Tinjau.',
            articleCount: 1,
            quizCount: 0,
            duration: '1 Jam',
            items: [
              {
                id: 'art-pio-3-2-1',
                title: 'Menara Tinjau',
                type: 'article',
                duration: '60 min',
                content: (
                  <div>
                    <h3>3. Menara</h3>
                    <h4>Menara tinjau di atas pohon:</h4>
                    <ul>
                      <li>Memilih dahan yang baik letaknya.</li>
                      <li>Dahan yang sudah dipilih dipasang bambu-bambu mendatar sebagai gelagar dan diatasnya dipasang lantai yang terbuat dari belahan bambu atau bambu kecil.</li>
                      <li>Membuat sandaran/dinding pengaman dari bambu atau kayu.</li>
                      <li>Membuat tangga yang terbuat dari bambu atau tali.</li>
                    </ul>

                    <h4>Menara tinjau yang terbuat dari bambu berkaki tiga:</h4>
                    <ul>
                      <li>Tiga batang bambu betung yang lurus panjangnya kurang lebih 8 meter, dibagian atas diikat dengan kawat atau ijuk.</li>
                      <li>Ujung-ujung bambu kurang lebih 1 meter dari atas dipasang pasak besi atau kayu, masing-masing bambu bisa bergerak.</li>
                      <li>Hubungkan antar tiang dengan bambu sebagai gelagar lantai kurang lebih 2,5 meter dari pasak yang telah terpasang.</li>
                      <li>Pasang lantai di atas gelagar lantai dengan bambu yang telah dibelah/ bambu dengan diameter kecil.</li>
                      <li>Gali kurang lebih dalamnya 1 meter dan diameter lubangnya 30 Cm untuk menempatkan kaki menara dengan jarak kurang lebih 3 meter.</li>
                      <li>Dirikan menara pada lubang yang telah digali dan ditimbun kembali dengan tanah yang banyak batuan dan dipadatkan.</li>
                      <li>Hubungkan kaki menara yang satu dengan kaki yang lain dengan bambu sebagai skor/penguat.</li>
                    </ul>
                    <p><strong>Kebutuhan Bambu</strong>: Bambu besar: 3 potong (ukuran 5,5 M). Bambu sedang: 3 potong (ukuran 2 M), 3 potong (ukuran 115 Cm), 1 buah (ukuran 150, 40, 130, 120, 10, 100, 90, 80, 70, 60 Cm). Bambu kecil: 10 potong (ukuran 50 Cm).</p>
                    <p><strong>Kebutuhan Tali</strong>: 12 Gulung (ukuran panjang 6 M), 1 Gulung (ukuran panjang 8 M), 2 Gulung (ukuran panjang 12 M), 2 Gulung (ukuran panjang 15 M).</p>

                    <h4>Menara Tinjau / Pandang Berkaki Empat:</h4>
                    <p><strong>Kebutuhan Bambu</strong>: Bambu besar: 8 potong (ukuran 3 M). Bambu sedang: 4 potong (ukuran 2 M), 11 potong (ukuran 150 Cm), 4 potong (ukuran 60 Cm), 20 buah (ukuran 180 Cm). Bambu kecil: 14 potong (ukuran 50 Cm).</p>
                    <p><strong>Kebutuhan Tali</strong>: 42 Gulung (ukuran panjang 6 M), 2 Gulung (ukuran panjang 15 M), 2 Gulung (ukuran panjang 12 M).</p>
                  </div>
                )
              }
            ]
          }
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
        ],
        syllabus: [
          {
            id: 'mod-pio-4-1',
            title: 'Bekal Air',
            description: 'Sumber air, pencarian, dan penjernihan air.',
            articleCount: 2,
            quizCount: 0,
            duration: '1.5 Jam',
            items: [
              {
                id: 'art-pio-4-1-1',
                title: 'Sumber Air & Pencarian',
                type: 'article',
                duration: '45 min',
                content: (
                  <div>
                    <h3>1. Bekal Air</h3>
                    <h4>Macam-macam sumber air:</h4>
                    <ul>
                      <li><strong>Air permukaan</strong>: Rawa, Danau, Air sungai, Air Waduk.</li>
                      <li><strong>Air tanah</strong>: Mata Air, Sumur Artetis, Sumur Biasa.</li>
                    </ul>
                    
                    <h4>Penyediaan sumber air tanah:</h4>
                    <ul>
                      <li><strong>Mata air</strong>: Merupakan sumber perbekalan air. Sediakan tempat penampungan. Cegah pengotoran.</li>
                      <li><strong>Sumber Artetis</strong>: Sumur yang dibuat di atas saluran air tanah. Semburan tergantung pada tekanan air. Biasa terdapat di pegunungan batu.</li>
                      <li><strong>Sumur Biasa</strong>: Sebagian besar digunakan penduduk. Perlu perkuatan dinding agar tidak runtuh. Dapat digunakan pompa air.</li>
                      <li><strong>Sumur Bor</strong>: Pengeboran dengan alat. Baik di tanah yang kohesif (campuran tanah liat dan pasir).</li>
                    </ul>

                    <h4>Penyediaan sumber air permukaan:</h4>
                    <ul>
                      <li><strong>Pada air sungai yang dangkal</strong>: Gali dasarnya. Bekas galian isi koral. Tempatkan saringan pada koral.</li>
                      <li><strong>Pada waduk/ danau</strong>: Buat alat pembantu apung. Pasang ujung pipa/ saringan pengisap di atas pengapung. Alat pengapung dibuat dari balok dolken atau drum-drum.</li>
                      <li><strong>Sungai rembesan</strong>: Buat parit-parit disepanjang sungai. Isi batu koral biar tidak longsor.</li>
                    </ul>

                    <h4>Mencari sumber air:</h4>
                    <ul>
                      <li>Pelajari Peta.</li>
                      <li>Kenali lokasi tempatnya.</li>
                      <li>Tentukan sasaran (sungai, danau, mata air).</li>
                      <li>Cari dan cetak keterangan yang dapat dipercaya.</li>
                      <li><strong>Sasaran Danau</strong>: catat keadaan danau. Catat data umum (luas, dalam, warna air, perkiraan debit).</li>
                      <li><strong>Sasaran sungai</strong>: Catat data sungai (lebar, dalam, deras air, dan debet air). Catat jalan-jalan pendekat. Buat denah.</li>
                    </ul>
                  </div>
                )
              },
              {
                id: 'art-pio-4-1-2',
                title: 'Penjernihan Air',
                type: 'article',
                duration: '45 min',
                content: (
                  <div>
                    <h3>Penjernihan Air</h3>
                    <h4>Bahan penjernih air:</h4>
                    <ul>
                      <li><strong>Bahan alam</strong>: Pasir beton, Ijuk, batu, Kerikil, Batu apung, Karang aktif, Kain kasa/ kapas, Bambu.</li>
                      <li><strong>Bahan kimia</strong>: Tawas, Kaporit, Garam dapur, kapur tohor, Phenol red, Ph tablet, Kertas indikator, Soda.</li>
                    </ul>

                    <h4>Proses pengendapan:</h4>
                    <ul>
                      <li><strong>Secara alamiah</strong>: Tidak menggunakan bahan kimia. Mengendapkan kotoran-kotoran. Waktu relatif lama.</li>
                      <li><strong>Dengan bahan kimia</strong>: Hampir sama dengan alamiah. Di sini proses pengendapan dipercepat dengan mencampur bahan kimia berupa tawas. Pengendapan juga merupakan proses pendahuluan dalam penyaringan.</li>
                    </ul>

                    <h4>Penyaringan:</h4>
                    <ul>
                      <li><strong>Penyaringan dengan pasir lambat</strong>: Tanpa bahan pengawet. Dapat menghilangkan sel-sel amuba.</li>
                      <li><strong>Penyaringan dengan pasir cepat</strong>: Cara ini hampir sama dengan air lambat. Di sini diberi tekanan untuk mempercepat perembesan air. Biasanya kurang baik.</li>
                      <li><strong>Beberapa cara saringan pasir lambat</strong>: Cara petak, Cara langsung, Dengan tempat.</li>
                    </ul>

                    <h4>Pembunuhan kuman:</h4>
                    <ul>
                      <li>Secara ilmu alam: dipanaskan sampai mendidih.</li>
                      <li>Secara ilmu hayat: dengan memasukan baksil ke dalam saringan (jarang dilakukan).</li>
                      <li>Secara kimia: penyempurnaan chlor dengan air, dengan bahan amoniak.</li>
                    </ul>
                  </div>
                )
              }
            ]
          },
          {
            id: 'mod-pio-4-2',
            title: 'Listrik',
            description: 'Dasar-dasar pengetahuan tentang listrik dan alat pembangkit.',
            articleCount: 2,
            quizCount: 0,
            duration: '1.5 Jam',
            items: [
              {
                id: 'art-pio-4-2-1',
                title: 'Dasar Listrik & Alat Ukur',
                type: 'article',
                duration: '45 min',
                content: (
                  <div>
                    <h3>2. Dasar-Dasar Pengetahuan Tentang Listrik</h3>
                    <h4>Proses terjadinya listrik:</h4>
                    <ul>
                      <li>Karena gesekan dua buah benda: Ebonit digosok bulu kucing, Kaca digosok dengan sutera.</li>
                      <li>Karena proses kimia: Akumulator, Baterai.</li>
                      <li>Karena perpotongan konduktor dengan garis gaya listrik: Generator, Dinamo.</li>
                    </ul>

                    <h4>Istilah dalam listrik:</h4>
                    <ul>
                      <li><strong>Tegangan</strong>: Adalah besar muatan listrik pada suatu tempat. Simbolnya ”E”. Satuan Volt ”V”. Ada dua macam tegangan: Tegangan searah (DC) contohnya baterai, accu; Tegangan bolak-balik (AC) contohnya generator.</li>
                      <li><strong>Arus</strong>: Adalah aliran listrik yang mengalir pada penghantar. Simbolnya ”I”. Satuannya Amper (A).</li>
                      <li><strong>Tahanan</strong>: Adalah besar kemampuannya yang menghambat suatu bahan listrik. Simbolnya ”R”. Satuannya ”Ohm”.</li>
                      <li><strong>Daya</strong>: Kemampuan yang dihasilkan oleh alat listrik. Simbolnya ”P”. Satuannya ”Watt” (W).</li>
                    </ul>

                    <h4>Hubungan listrik:</h4>
                    <ul>
                      <li>Seri: Lampu, Baterai, Tahanan.</li>
                      <li>Paralel: Lampu, Baterai, Tahanan.</li>
                      <li>Kombinasi: Lampu, Baterai, Tahanan.</li>
                    </ul>

                    <h4>Alat Peralatan dan Instalasi Listrik:</h4>
                    <ul>
                      <li>Alat tukang listrik.</li>
                      <li>Bahan Instalasi listrik: Macam kawat, Instalasi lain.</li>
                      <li><strong>Alat ukur listrik</strong>:
                        <ul className="list-disc pl-5">
                          <li><strong>Avometer</strong>: Mengukur besarnya arus, Mengukur tegangan, Mengukur tegangan listrik.</li>
                          <li><strong>Watt meter</strong>: Mengukur daya listrik. Disambung seri dan paralel.</li>
                          <li><strong>Tang meter</strong>: Mengukur besarnya arus.</li>
                          <li><strong>Megger</strong>: Mengukur tahanan isolasi instalasi. Saluran bebas dari tegangan listrik. Semua lampu dilepas dan saklar pada kedudukan mati/ off.</li>
                          <li><strong>Frekuensi meter</strong>: Mengukur frekuensi. Pengukuran disambung paralel.</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                )
              },
              {
                id: 'art-pio-4-2-2',
                title: 'Pembangkit Listrik',
                type: 'article',
                duration: '45 min',
                content: (
                  <div>
                    <h3>Pengetahuan dasar tentang alat pembangkit listrik</h3>
                    <h4>Pembangkit listrik AC (Arus bolak-balik):</h4>
                    <ul>
                      <li><strong>Macam generator</strong>: Generator satu fasa, Generator dua fasa, Generator tiga fasa, tiga kawat (hubungan segitiga) dan empat kawat (hubungan bintang).</li>
                      <li><strong>Bahan generator</strong>: Stator (Merupakan bagian yang tidak bergerak, terdiri dari gardan, kutub utama, kutub bantu dan kumparan stator). Rotor (Merupakan bagian yang berputar, terdiri dari as penahan, komutator, kumparan rotor).</li>
                      <li><strong>Prinsip kerja</strong>: Belitan digerakkan pada medan magnet, sehingga timbul tegangan listrik.</li>
                      <li><strong>Besarnya tegangan tergantung</strong>: Putaran, Jumlah belitan, Besar medan magnet, Celah udara antara belitan dan medan magnet.</li>
                      <li><strong>Penggunaan generator</strong>: Untuk penerangan, Untuk tenaga perlatan listrik.</li>
                    </ul>

                    <h4>Pembangkit listrik arus searah (DC):</h4>
                    <ul>
                      <li><strong>Macamnya</strong>: Generator/ dinamo DC, Accumulator, Baterai.</li>
                      <li><strong>Prinsip kerja dinamo</strong>: Belitan konduktor digerakkan, gerakan pada medan magnet, Timbul tegangan.</li>
                      <li><strong>Penggunaan dinamo DC</strong>: Untuk penerangan, Untuk tenaga peralatan listrik.</li>
                      <li><strong>Penggunaan Accumulator dan baterai</strong>: Untuk penerangan, Untuk tenaga perlatan listrik DC.</li>
                    </ul>

                    <h4>Merawat & Mengoperasikan Generator:</h4>
                    <ul>
                      <li><strong>Merawat</strong>: Melumasi bantalan-bantalan. Usahakan generator selalu dalam keadaan kering, jangan sampai lembab. Kontrol baut-baut dan mur-mur pada generator. Jangan merubah hubungan yang sudah ada pada generator.</li>
                      <li><strong>Mengoperasikan</strong>: Beban yang terpasang pada generator dilepas dahulu. Jalankan mesin penggerak sesuai putaran yang sudah ditentukan. Lihat Volt meter untuk mengetahui tegangan yang harus dicapai. Setelah mesin penggerak dan generator berjalan normal, baru masukan sakelar beban. Apabila tegangan beban turun, tambah putaran generator.</li>
                    </ul>
                  </div>
                )
              }
            ]
          }
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
        ],
        syllabus: [
          {
            id: 'mod-pba-1-1',
            title: 'Dasar Penanggulangan Bencana',
            description: 'Memahami konsep, jenis, dan sifat bencana serta pentahapan penanggulangannya.',
            articleCount: 3,
            quizCount: 0,
            duration: '2 Jam',
            items: [
              {
                id: 'art-pba-1-1-1',
                title: 'Pengertian & Tujuan',
                type: 'article',
                duration: '15 min',
                content: (
                  <div>
                    <h3>Penanggulangan Bencana</h3>
                    <ul>
                      <li>Penanggulangan bencana merupakan salah satu wujud dari upaya untuk melindungi segenap bangsa Indonesia dari seluruh tumpah darah Indonesia.</li>
                      <li>Penanggulangan bencana adalah kewajiban bersama antara pemerintah dan masyarakat yang didasarkan pada partisipasi, didukung prakarsa masyarakat serta pemerintah daerah.</li>
                      <li>Penanggulangan bencana dititikberatkan pada tahap <strong>sebelum</strong> terjadinya bencana yang meliputi kegiatan pencegahan, penjinakan (mitigasi), dan kesiapsiagaan untuk memperkecil, mengurangi, dan memperlunak dampak yang ditimbulkan oleh bencana.</li>
                      <li>Penanggulangan bencana adalah bagian dari kegiatan pembangunan yang bertujuan untuk mengurangi penderitaan masyarakat dan meningkatkan kehidupan dan penghidupan masyarakat secara lahir batin.</li>
                    </ul>
                  </div>
                )
              },
              {
                id: 'art-pba-1-1-2',
                title: 'Jenis, Sifat & Tingkat Bencana',
                type: 'article',
                duration: '20 min',
                content: (
                  <div>
                    <h3>Jenis Bencana</h3>
                    <ul>
                      <li><strong>Bencana alam:</strong> Fenomena atau gejala alam yang disebabkan oleh keadaan geografis, biologis, seismis, hidrologis, dan meteorologis atau disebabkan suatu proses dalam lingkungan alam yang mengancam kehidupan dan perekonomian masyarakat serta menimbulkan malapetaka.
                        <br/><em>Contoh:</em> Wabah penyakit, gempa bumi, letusan gunung berapi, gelombang laut pasang (Tsunami), banjir, kekeringan, dan lain-lain.
                      </li>
                      <li><strong>Bencana ulah manusia:</strong> Peristiwa yang terjadi karena proses teknologi, integrasi manusia dengan lingkungannya atau interaksi manusia dengan manusia di dalam masyarakat itu sendiri yang menimbulkan dampak negatif terhadap kehidupan dan penghidupan masyarakat.
                        <br/><em>Contoh:</em> Pembuangan limbah pabrik dengan sembarangan, polusi pabrik dan kendaraan bermotor, kebakaran, kecelakaan lalu lintas, dan lain-lain.
                      </li>
                    </ul>
                    <h3>Sifat Bencana</h3>
                    <ul>
                      <li><strong>Terbatas:</strong> Apabila bencana yang terjadi hanya mengakibatkan rusak dan hilangnya sebagian harta benda atau timbulnya korban jiwa yang tidak banyak.</li>
                      <li><strong>Dahsyat (luar biasa):</strong> Apabila bencana yang terjadi sangat menakutkan, di mana mengakibatkan timbulnya korban jiwa yang sangat besar. Hilangnya harta benda serta menyebabkan kerusakan sarana prasarana lingkungan yang menyangkut kepentingan masyarakat.</li>
                    </ul>
                    <h3>Skala / Tingkat Bencana</h3>
                    <ul>
                      <li><strong>Setempat / Lokal:</strong> Bila bencana yang terjadi di suatu Daerah Kabupaten/Kota dan dampaknya terbatas pada masyarakat daerah setempat.</li>
                      <li><strong>Provinsi:</strong> Bila bencana yang terjadi di satu/beberapa daerah kabupaten/kota dalam wilayah Provinsi dan dampaknya dirasakan di Wilayah Provinsi tersebut.</li>
                      <li><strong>Nasional:</strong> Bila bencana yang terjadi di satu/beberapa daerah/Wilayah tertentu dan dampaknya dirasakan secara Nasional.</li>
                    </ul>
                  </div>
                )
              },
              {
                id: 'art-pba-1-1-3',
                title: 'Pentahapan Penanggulangan',
                type: 'article',
                duration: '25 min',
                content: (
                  <div>
                    <h3>1. Sebelum Bencana Terjadi (Pra-Bencana)</h3>
                    <ul>
                      <li><strong>Preventif (Pencegahan):</strong> Kegiatan yang lebih dititikberatkan pada upaya penyebarluasan tentang berbagai peraturan, perundang-undangan yang berdampak untuk mengurangi risiko bencana termasuk pembuatan peta rawan bencana.</li>
                      <li><strong>Mitigasi (Penjinakan):</strong> Kegiatan yang lebih dititikberatkan pada upaya secara fisik untuk mengurangi dampak yang ditimbulkan oleh bencana, seperti pembuatan <em>check dam</em>, rehabilitasi aliran sungai, pengawasan terhadap pelaksanaan RUTR, IMB, pemindahan penduduk ke daerah yang aman dari bencana, dan pemasangan tanda-tanda larangan di daerah yang rawan bencana.</li>
                      <li><strong>Kesiapsiagaan:</strong> Meliputi kegiatan untuk mengadakan latihan atau gladi Pramuka dan masyarakat yang tinggal di daerah rawan bencana, serta pendidikan dan pelatihan bagi personil yang tergabung dalam organisasi satlak maupun satgas PBP serta aparat pemerintah dan ormas lainnya.</li>
                    </ul>
                    <p>Kegiatan pada tahap ini amat penting karena usaha untuk menghindari bencana akan lebih efektif dan efisien daripada rehabilitasi dan rekonstruksi.</p>

                    <h3>2. Saat Bencana Terjadi (Tanggap Darurat)</h3>
                    <ul>
                      <li><strong>Peringatan dini:</strong> Upaya dan kegiatan yang sangat penting dan tidak boleh diabaikan, di mana untuk memberikan kesempatan kepada penduduk untuk menyelamatkan diri dari kemungkinan terlanda bencana alam.</li>
                      <li><strong>Tanggap darurat:</strong> Upaya dan kegiatan pengerahan unsur-unsur penanggulangan bencana guna mencari, menolong, dan menyelamatkan korban bencana serta memberikan bantuan kepada para pengungsi berupa makanan dan minuman, pakaian, obat, pembuatan barak-barak darurat sebagai tempat penampungan sementara.</li>
                    </ul>

                    <h3>3. Sesudah Bencana Terjadi (Pasca-Bencana)</h3>
                    <ul>
                      <li><strong>Rehabilitasi:</strong> Upaya dan kegiatan untuk memfungsikan dan memberdayakan kembali berbagai sarana prasarana umum yang mengalami kerusakan akibat bencana, guna mengurangi penderitaan masyarakat yang tertimpa musibah.</li>
                      <li><strong>Rekonstruksi:</strong> Upaya dan kegiatan untuk membangun kembali berbagai kerusakan yang diakibatkan oleh bencana secara lebih baik daripada keadaan sebelumnya untuk mengantisipasi kemungkinan terjadinya bencana di waktu yang akan datang.</li>
                    </ul>
                    <p>Kegiatan pada tahap rekonstruksi harus direncanakan dengan teliti dan saksama, dengan mengikutsertakan berbagai pihak yang terkait sesuai dengan bidang masing-masing secara terintegrasi dan terpadu.</p>
                  </div>
                )
              }
            ]
          }
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
        ],
        syllabus: [
          {
            id: 'mod-pba-2-1',
            title: 'Konsep Dasar PPGD',
            description: 'Memahami pengertian, kesiapan fisik & mental, serta pengetahuan kesehatan dalam PPGD.',
            articleCount: 2,
            quizCount: 0,
            duration: '1.5 Jam',
            items: [
              {
                id: 'art-pba-2-1-1',
                title: 'Pengertian & Kesiapan',
                type: 'article',
                duration: '20 min',
                content: (
                  <div>
                    <h3>Pengertian PPGD</h3>
                    <p>Perjalanan dan penanganan gawat darurat (PPGD) adalah hal-hal yang mencakup keadaan kesehatan pada suatu perjalanan/kegiatan meliputi kesiapan fisik, mental, dan pengetahuan tentang kesehatan dan gizi.</p>
                    
                    <h3>Cara Melaksanakan PPGD</h3>
                    <h4>1. Kesiapan Fisik</h4>
                    <ul>
                      <li>Kesiapan fisik penolong harus dalam kondisi yang prima.</li>
                      <li>Mengetahui teknik Pertolongan Pertama Pada Kecelakaan (P3K).</li>
                      <li>Dapat mengambil tindakan dengan cepat dan tepat dalam memberikan pertolongan kepada korban.</li>
                    </ul>
                    <h4>2. Kesiapan Mental</h4>
                    <ul>
                      <li>Memiliki rasa percaya diri dalam melakukan Pertolongan Pertama Pada Kecelakaan (P3K).</li>
                      <li>Memiliki kepekaan terhadap diri dan lingkungan.</li>
                      <li>Selalu mengedepankan akal sehat dalam mengambil setiap tindakan Pertolongan Pertama Pada Kecelakaan (P3K).</li>
                      <li>Mampu mengendalikan diri terhadap segala situasi.</li>
                    </ul>
                  </div>
                )
              },
              {
                id: 'art-pba-2-1-2',
                title: 'Pengetahuan Kesehatan & Gizi',
                type: 'article',
                duration: '20 min',
                content: (
                  <div>
                    <h3>Pengetahuan tentang Kesehatan dan Gizi</h3>
                    <ul>
                      <li>Mengerti tentang teknik Pertolongan Pertama Pada Kecelakaan (P3K).</li>
                      <li>Mengerti dan mengetahui tentang obat dan penggunaannya.</li>
                      <li>Memahami tentang berbagai macam penyakit dan gangguan kesehatan.</li>
                      <li>Mengetahui berbagai macam jenis makanan yang layak dikonsumsi.</li>
                      <li>Mengerti perimbangan nutrisi dan gizi dalam melaksanakan kegiatan dan perjalanan.</li>
                      <li>Mampu melaksanakan teknik evakuasi korban.</li>
                    </ul>
                  </div>
                )
              }
            ]
          }
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
        ],
        syllabus: [
          {
            id: 'mod-pba-3-1',
            title: 'Dasar Komunikasi Radio',
            description: 'Mengenal radio komunikasi, bagian-bagiannya, dan cara pengoperasiannya.',
            articleCount: 2,
            quizCount: 0,
            duration: '1 Jam',
            items: [
              {
                id: 'art-pba-3-1-1',
                title: 'Pengenalan & Bagian Radio',
                type: 'article',
                duration: '15 min',
                content: (
                  <div>
                    <h3>Kegunaan Radio Komunikasi</h3>
                    <p>Radio Komunikasi adalah alat yang digunakan untuk mengirim dan menerima berita dari pihak lain / lawan bicara.</p>
                    
                    <h3>Bagian-bagian Radio (Contoh: PRC - 1077)</h3>
                    <ul>
                      <li>Saklar Daya & Saklar Fungsi</li>
                      <li>Saklar kanal/Chanel & Pengatur frekuensi (MHz/KHz)</li>
                      <li>Penampil frekuensi</li>
                      <li>Pengatur volume</li>
                      <li>Konektor audio & Konektor antena</li>
                      <li>Dudukan antena / penghubung antena batang</li>
                    </ul>
                  </div>
                )
              },
              {
                id: 'art-pba-3-1-2',
                title: 'Mengoperasikan Radio',
                type: 'article',
                duration: '15 min',
                content: (
                  <div>
                    <h3>Cara Mengoperasikan</h3>
                    <ul>
                      <li><strong>Menghidupkan Radio:</strong> Putar saklar daya ke kanan hingga muncul frekuensi di layar/penampil frekuensi.</li>
                      <li><strong>Memilih frekuensi:</strong> Putar saklar pengatur frekuensi ke atas (<em>up</em>) untuk menaikkan frekuensi atau ke bawah (<em>down</em>) untuk menurunkan frekuensi sampai dengan frekuensi yang dikehendaki.</li>
                      <li><strong>Mengirim berita:</strong> Tekan saklar PTT pada <em>handset</em> untuk berbicara, lepas saklar PTT tersebut apabila kita akan menerima berita / mendengarkan lawan bicara.</li>
                      <li><strong>Mematikan Radio:</strong> Putar saklar daya ke kiri hingga frekuensi di layar hilang.</li>
                    </ul>
                  </div>
                )
              }
            ]
          },
          {
            id: 'mod-pba-3-2',
            title: 'Prosedur Komunikasi',
            description: 'Tata cara kirim terima berita dan abjad fonetik.',
            articleCount: 2,
            quizCount: 0,
            duration: '1 Jam',
            items: [
              {
                id: 'art-pba-3-2-1',
                title: 'Prosedur Kirim Terima (IKIT)',
                type: 'article',
                duration: '20 min',
                content: (
                  <div>
                    <h3>Prosedur Kirim Terima Berita</h3>
                    <p>Tata cara yang harus dipahami dan dilaksanakan oleh setiap operator / pelayan radio dalam melaksanakan kirim terima berita.</p>
                    <h4>Prinsip IKIT:</h4>
                    <ul>
                      <li><strong>Irama:</strong> Bagilah kalimat agar mudah diterima, untuk menghindari kesalahan.</li>
                      <li><strong>Kecepatan:</strong> Bicaralah pada kecepatan yang memadai, sehingga jelas didengar dan cukup waktu untuk mencatat.</li>
                      <li><strong>Isi suara:</strong> Lebih kuat sedikit dari percakapan biasa, tetapi jangan berteriak.</li>
                      <li><strong>Tinggi nada:</strong> Nada yang tinggi lebih jelas didengar.</li>
                    </ul>
                  </div>
                )
              },
              {
                id: 'art-pba-3-2-2',
                title: 'Abjad Fonetik',
                type: 'article',
                duration: '15 min',
                content: (
                  <div>
                    <h3>Abjad Fonetik (NATO)</h3>
                    <div className="grid grid-cols-3 gap-2 font-mono text-sm bg-gray-100 p-4 rounded">
                        <div>A = ALFA</div><div>J = JULIET</div><div>S = SIERA</div>
                        <div>B = BRAVO</div><div>K = KILO</div><div>T = TANGGO</div>
                        <div>C = CHARLIE</div><div>L = LIMA</div><div>U = UNIFORM</div>
                        <div>D = DELTA</div><div>M = MIKE</div><div>V = VICTOR</div>
                        <div>E = ECHO</div><div>N = NANCY</div><div>W = WISKY</div>
                        <div>F = FOXTROT</div><div>O = OSCAR</div><div>X = X-RAY</div>
                        <div>G = GOLF</div><div>P = PAPA</div><div>Y = YANKI</div>
                        <div>H = HOTEL</div><div>Q = QUEBECK</div><div>Z = ZULU</div>
                        <div>I = INDIA</div><div>R = ROMEO</div>
                    </div>
                  </div>
                )
              }
            ]
          }
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
        ],
        syllabus: [
          {
            id: 'mod-pba-4-1',
            title: 'Peralatan Dapur Lapangan',
            description: 'Mengenal Kompor Lapangan T-50 dan alat dapur lainnya secara mendalam.',
            articleCount: 2,
            quizCount: 0,
            duration: '2 Jam',
            items: [
              {
                id: 'art-pba-4-1-1',
                title: 'Kompor Lapangan T-50',
                type: 'article',
                duration: '45 min',
                content: (
                  <div>
                    <h3>Kompor Lapangan T-50</h3>
                    <p><strong>Komponen Kompor Lapangan T-50 terdiri dari:</strong></p>
                    <ul>
                      <li>1 Peti Kompor Lapangan T-50</li>
                      <li>1 Tangki Bahan Bakar.</li>
                      <li>2 Brander.</li>
                      <li>2 Tungku.</li>
                      <li>1 Pompa tangan.</li>
                    </ul>
                    <p><strong>Bahan Bakar:</strong> Minyak tanah.</p>
                    <p><strong>Kapasitas Tabung Bahan Bakar:</strong> 16 Liter.</p>

                    <h3>Cara Penggunaan</h3>
                    <ol>
                      <li>Berdiri searah dengan angin dan letakkan peti, sisi gembok berhadapan dengan kita.</li>
                      <li>Buka peti sampai tutup peti menyentuh tanah.</li>
                      <li>Keluarkan peralatan kompor dan letakkan pada tutup peti.</li>
                      <li>Keluarkan tungku dan pasang tatakan kaki tungku dengan cara seperti memasang baut. Tatakan kaki tungku berfungsi juga sebagai penyetel ketinggian brander terhadap alat masak.</li>
                      <li>Letakkan kedua tungku pada sebelah kiri dan kanan peti dengan jarak minimal 30 cm, posisi lubang tungku menghadap ke peti.</li>
                      <li>Letakkan brander di tengah-tengah tungku dengan tangki brander dan selang minyak mengarah ke sisi engsel peti.</li>
                      <li>Keluarkan tangki dan masukkan kembali peralatan cadangan yang tidak digunakan ke dalam peti, lalu peti ditutup. Isi tangki dengan minyak tanah maksimum 16 liter. Letakkan tangki di tengah-tengah sisi engsel peti, hubungkan selang kedua brander pada kran minyak pada tangki.</li>
                      <li>Peti dapat digunakan sebagai meja ringan maksimum beban 30 kg.</li>
                      <li>Pompa tangki hingga bertekanan maksimum $3 \text{ kg/cm}^2$.</li>
                      <li>Kran minyak dibuka sedikit demi sedikit agar minyak mengalir keluar dari <em>spuyer</em> brander dan perhatikan jangan ada udara keluar dari selang. Biarkan sedikit minyak tertampung pada mangkuk penyala brander, kemudian kran ditutup kembali sampai minyak berhenti mengalir.</li>
                      <li>Sebelum disulut, letakkanlah sumbu yang telah tersedia (kertas, ranting kering dapat digunakan dalam keadaan darurat) di atas mangkuk brander, kemudian sulut dengan api minyak tanah yang berada di mangkuk penyala brander, menggunakan alat penyulut api (penyala yang tersedia) hingga terbakar.</li>
                      <li>Biarkan api menyala pada mangkuk penyala brander sampai terlihat semburan api pada brander. Tunggulah sampai semburan api mulai mengecil kembali seperti akan mati yang merata.</li>
                      <li><strong>PERINGATAN:</strong> Jangan sekali-kali membuka kran minyak langsung besar.</li>
                      <li>Bila pada saat membuka kran, perhatikan <em>spuyer</em> brander apakah yang keluar berupa gas atau minyak yang belum menjadi gas. Jika terlihat belum menjadi gas, maka semburan api yang akan terjadi seperti kebakaran. Jangan panik/takut, langsung saja kran ditutup kembali, tunggu dan biarkan api mengecil sendiri. Berarti brander belum cukup panas.</li>
                      <li>Apabila semburan sudah berupa gas dan nyala api mulai stabil, kran dibuka perlahan-lahan sampai menghasilkan nyala api yang terbaik.</li>
                      <li>Setelah nyala api baik, kompor siap digunakan.</li>
                    </ol>

                    <h3>Gangguan dan Mengatasi Gangguan</h3>
                    <ul>
                      <li><strong>Gangguan tiba-tiba api mati:</strong> Langsung kran ditutup. Periksa minyak dalam selang, bila terlihat selang masih dipenuhi minyak dan tidak terlihat udara di dalamnya, maka nyalakan alat penyulut, dekatkan api penyulut ke <em>spuyer</em> brander sambil menyogok lubang <em>spuyer</em> brander.</li>
                      <li><strong>Gangguan tiba-tiba api brander menyala seperti kebakaran:</strong> Penyebabnya adalah kran terlalu besar dibuka yang mengakibatkan aliran minyak ke brander dan keluar dari <em>spuyer</em> brander tidak menjadi gas. Kran langsung ditutup dan tunggu api menjadi kecil kembali, lalu buka kran minyak sedikit demi sedikit sampai mendapatkan nyala api yang terbaik/yang diinginkan.</li>
                      <li><strong>Gangguan semburan api tidak rata atau api tidak dapat sempurna:</strong> Penyebabnya adalah bila lubang <em>spuyer</em> rusak. Matikan kompor lalu ganti <em>spuyer</em> dengan yang baru menggunakan kunci <em>spuyer</em>.</li>
                      <li><strong>Langkah pertama dalam menghadapi gangguan apapun adalah menutup kran pada tabung</strong>, dengan demikian kebakaran akan terhindari.</li>
                      <li>Jangan sekali-kali menyiram kebakaran kompor dengan air. Usahakan dalam memasak menyiapkan karung/kain yang dibasahi oleh air untuk menutupi api saat terjadi kebakaran pada kompor.</li>
                    </ul>

                    <h3>Pengaturan Ketinggian Tatakan Kaki Tungku</h3>
                    <ul>
                      <li><strong>Merebus (air minum/nasi dalam jumlah banyak):</strong> Tatakan kaki tungku distel rapat terhadap kaki tungku agar jarak api terhadap kuali/dandang lebih dekat (jarak terdekat sesuai yang dirancang 5 cm), sehingga panas cepat dan waktu mematangkan masakan lebih cepat.</li>
                      <li><strong>Merebus sayur-sayuran/kacang-kacangan:</strong> Api brander harus dikecilkan dan/atau selalu mengaduk masakan agar masakan yang berada di dasar kuali tidak hangus, karena sayuran dan kacang-kacangan selalu mengendap di dasar kuali.</li>
                      <li><strong>Menggoreng:</strong> Kedudukan tatakan kaki tungku distel berjarak 2 atau 3 cm dari kaki tungku (dengan cara memutar tatakan kaki tungku seperti membuka baut), agar jarak api terhadap kuali atau wajan tidak terlalu dekat. Tujuannya adalah agar panas yang diterima oleh minyak goreng tidak terlalu tinggi sehingga yang dimasak matang secara merata atau tidak terjadi gosong luar dan mentah di dalam.</li>
                    </ul>
                  </div>
                )
              },
              {
                id: 'art-pba-4-1-2',
                title: 'Alat Dapur Lapangan',
                type: 'article',
                duration: '15 min',
                content: (
                  <div>
                    <h3>Alat Dapur Lapangan</h3>
                    <ul>
                      <li><strong>Ketel 100:</strong> Bahan terbuat dari aluminium dengan kapasitas memasak ± 18 Kg/beras untuk melayani 100 orang.</li>
                      <li><strong>Ketel 50:</strong> Bahan terbuat dari aluminium untuk memasak sayur.</li>
                      <li><strong>Ketel 40:</strong> Bahan terbuat dari aluminium untuk masak air atau untuk mengangkut hasil masakan.</li>
                    </ul>
                  </div>
                )
              }
            ]
          },
          {
            id: 'mod-pba-4-2',
            title: 'Teknik Memasak & Menyajikan',
            description: 'Teknik dasar memasak nasi, lauk, sayur, dan cara penyajian.',
            articleCount: 2,
            quizCount: 0,
            duration: '2 Jam',
            items: [
              {
                id: 'art-pba-4-2-1',
                title: 'Teknik Memasak',
                type: 'article',
                duration: '45 min',
                content: (
                  <div>
                    <h3>Teknik Dasar Memasak</h3>
                    <p>Memasak meliputi kegiatan penanganan (<em>handling</em>) dan pemasakan (<em>cooking</em>). Memasak yang benar dan baik mempunyai pengaruh penting sekali dalam penyajian suatu menu.</p>
                    <ul>
                      <li><strong>Sumber Hidrat Arang:</strong> Molekul-molekul hidrat arang dan molekul air bila dipanaskan akan saling mengikat dan mengkanji. Setelah masak dan dibiarkan dalam jangka waktu tertentu ada kecenderungan untuk memisah (mendekati tingkat basi). Oleh karena itu, bila memasak nasi harus betul-betul diperhitungkan jumlahnya agar habis sekali makan.</li>
                      <li><strong>Sumber Protein:</strong> Dapat kita golongkan dalam hewani dan nabati. Protein adalah zat makanan yang paling lekas busuk karena sangat diperlukan oleh bakteri-bakteri. Makanan yang mengandung protein tinggi sebaiknya segera dimakan setelah selesai dimasak. Khusus protein yang terdapat pada jaringan-jaringan otot memerlukan perlakuan khusus waktu memasak. Telur merupakan sumber protein yang paling mudah dimasak.</li>
                      <li><strong>Sumber Lemak:</strong> Baik hewani maupun nabati akan menjadi tengik bila disimpan lama. Sumber lemak harus diperlakukan baik agar sumber kalori paling besar ini tidak mudah rusak. Pada umumnya sumber lemak ini tidak kita makan langsung tetapi untuk memasak makanan lain baik berupa minyak maupun santan.</li>
                      <li><strong>Sumber Vitamin dan Mineral:</strong> Harus diperhatikan sejak mengerjakan mencuci, sampai memasak, sebab Vitamin banyak yang larut/rusak dalam air dan panas.</li>
                    </ul>

                    <h3>Tata Cara Memasak</h3>
                    <h4>1. Nasi</h4>
                    <ul>
                      <li>Beras dibersihkan dari kotoran dan barang-barang asing lainnya.</li>
                      <li>Beras dicuci untuk menghilangkan sisa-sisa kotoran. Mencuci beras tidak boleh direndam agar Vitamin B1 yang diperlukan tidak larut.</li>
                      <li>Beras dimasukkan ke dalam ketel/wajan yang telah disiapkan (air mendidih) atau diaron.</li>
                      <li>Apabila mengaron menggunakan wajan, beras harus terendam dan air ± 2-3 Cm di atas permukaan beras.</li>
                      <li>Setelah setengah matang, masukkan ke dalam dandang yang telah dipersiapkan kemudian aduk dan tunggu sampai matang.</li>
                    </ul>

                    <h4>2. Lauk</h4>
                    <p><strong>Memasak Daging:</strong></p>
                    <ul>
                      <li>Daging dicuci dahulu untuk membersihkan kotorannya.</li>
                      <li>Buang serat-serat yang alotnya.</li>
                      <li>Daging direbus sampai matang dengan temperatur rendah.</li>
                      <li>Porsi miring memotong serat.</li>
                      <li>Masak sesuai resep yang diinginkan.</li>
                    </ul>
                    <p><strong>Memasak Ikan:</strong></p>
                    <ul>
                      <li>Potong semua duri yang sekiranya akan mengganggu dalam proses pemasakan.</li>
                      <li>Ikan yang bersisik supaya dibuang sisiknya.</li>
                      <li>Buang insang dan isi perutnya kemudian dicuci.</li>
                      <li>Bubuhkan cuka/kunyit untuk menghilangkan bau amis/anyir.</li>
                      <li>Masak sesuai resep yang diinginkan.</li>
                    </ul>

                    <h4>3. Sayur</h4>
                    <ul>
                      <li>Semua bahan sayuran harus dibersihkan dari kotoran/dicuci sebelum diporsi/diracik.</li>
                      <li>Sayuran yang telah diracik tidak boleh direndam dalam air kecuali jenis bahan sayuran yang tidak mengandung Vitamin B dan C.</li>
                      <li>Masak sesuai resep yang diinginkan/direncanakan.</li>
                      <li>Masak lebih awal dari bahan-bahan sayuran yang memerlukan waktu pemotongan lebih lama.</li>
                      <li>Untuk menghasilkan warna alami, cerah, dan menarik selera, bahan sayuran yang berwarna sebelum dimasak supaya direndam dahulu dalam air garam.</li>
                    </ul>
                  </div>
                )
              },
              {
                id: 'art-pba-4-2-2',
                title: 'Tata Menyajikan',
                type: 'article',
                duration: '30 min',
                content: (
                  <div>
                    <h3>Tata Menyajikan</h3>
                    <h4>1. Cara Barat</h4>
                    <p>Urut-urutannya secara umum adalah sebagai berikut:</p>
                    <ul>
                      <li><strong>Hidangan Pembuka:</strong> Ada 2 macam (panas dan dingin). Maksud dan tujuan hidangan pembuka adalah untuk merangsang selera makan. Dapat berupa sop kuah atau berupa makanan ringan.</li>
                      <li><strong>Hidangan Pokok:</strong> Hidangan yang menyenangkan, terdiri dari hidangan ikan atau masakan daging/unggas beserta lauk-pauknya.</li>
                      <li><strong>Hidangan Selingan:</strong> Dapat berupa hidangan sayuran atau buah-buahan berupa selada dan dapat juga berupa hidangan manis seperti puding, agar-agar dan lain sebagainya.</li>
                      <li><strong>Hidangan Penutup:</strong> Yang termasuk ke dalam hidangan penutup adalah hidangan manis (<em>Nyamikan / Sweet Dessert</em>), antara lain Es krim, dan hidangan buah-buahan serta sebagai penutup dihidangkan kopi.</li>
                    </ul>

                    <h4>2. Cara China</h4>
                    <ul>
                      <li><strong>Menghidangkan:</strong> Urutan hidangan mulai dengan makanan pembuka, tetapi tidak diakhiri dengan <em>dessert</em> dan Sop tidak dihidangkan pada awal santapan. Santapan khas China dimulai dengan 4 (empat) macam makanan dingin sebagai pembuka, dilanjutkan dengan hidangan udang yang diasinkan atau ginjal yang diiris-iris. Kemudian disusul oleh delapan macam masakan sebagai hidangan pokok antara lain terdiri dari: Masakan daging kepiting, masakan daging itik, masakan ikan lengkap dan nasi putih. Sesudah hidangan pokok terakhir dihidangkan dua macam hidangan manis antara lain potongan apel bergula atau Pangsit/Bakso kuah yang lekat.</li>
                      <li><strong>Cara Bersantap:</strong> Melihat kepada hidangan pokok dengan jumlah delapan macam, berarti cara menyantapnya pun dilakukan secara khusus yakni dengan mengambil porsi kecil-kecil dari tiap hidangan. Oleh karena itu yang terlihat di atas meja hidangan adalah sebuah piring kecil, sebuah sendok porselin, sebuah mangkok kecil, tempat kecap atau sambal dan sepasang sumpit.</li>
                    </ul>

                    <h4>3. Cara Menghidangkan</h4>
                    <p><strong>Di Pangkalan/di rumah/di gedung:</strong></p>
                    <ul>
                      <li><strong>Sistem Prasmanan:</strong> Suatu cara penghidangan yang diatur pada beberapa meja baik alat makan, makanan maupun minuman. Urut-urutannya adalah piring dan sendok garpu, nasi, ikan dan lauk-pauk, sayur, sambal, lalapan, kerupuk, buah, dan yang terakhir adalah minuman.</li>
                      <li><strong>Sistem Kafetaria:</strong> Suatu cara penghidangan yang diatur dalam satu garis. Urut-urutannya adalah: Piring dan sendok garpu, Nasi, Lauk-pauk, sayur, sambal, lalapan, kerupuk, dan yang terakhir adalah minuman.</li>
                      <li><strong>Dihidangkan di meja:</strong> Dalam sistem ini peserta makan dibagi dalam kelompok-kelompok meja yang terdiri dari 6 orang, 8 orang, atau 10 orang sesuai kapasitas meja.</li>
                    </ul>
                    <p><strong>Di lapangan:</strong></p>
                    <ul>
                      <li>Fasilitas dan alat peralatan khusus/khas lapangan. Menggunakan alat makan dan minum perorangan yang dibawa. Bila keadaan memungkinkan, dapat pula menggunakan alat makan lapangan (<em>Lunchtray</em>).</li>
                      <li><strong>Sistem Kafetaria:</strong> Sama dengan uraian di atas, hanya alat untuk menghidangkan dan alat makan menggunakan peralatan lapangan.</li>
                      <li><strong>Sistem Semi Kafetaria:</strong> Suatu cara penghidangan Kafetaria, hanya seluruh perlengkapan menggunakan alat lapangan dan makanan dibagikan oleh petugas penyaji lapangan.</li>
                    </ul>
                  </div>
                )
              }
            ]
          }
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
