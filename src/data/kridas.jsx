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
        ],
        syllabus: [
          {
            id: 'navrat-1-modul-1',
            title: 'Pengetahuan Peta dan Medan',
            items: [
              {
                id: 'navrat-1-article-1',
                title: 'Pengertian Peta dan Medan',
                content: `
* **Peta:** Gambaran unsur alam/buatan di atas/bawah permukaan bumi pada bidang datar dengan skala tertentu.
* **Medan:** Bagian permukaan bumi dengan segala benda tidak bergerak di atasnya.
* **Unsur Peta:** Judul, Nomor Peta, Koordinat, Kontur (garis ketinggian sama), Skala (perbandingan jarak peta dan lapangan), Legenda.
`
              },
              {
                id: 'navrat-1-article-2',
                title: 'Jenis-Jenis Peta',
                content: `
* **Peta Topografi:** Menggambarkan posisi mendatar dan tegak (relief) dengan garis kontur. Skala besar dan detail. Penting untuk militer dan penjelajah.
* **Peta Tematik:** Menyajikan tema khusus.
    * *Peta Jenis Tanah:* Variasi jenis tanah, pH, tekstur.
    * *Peta Perairan:* Menjelaskan unsur sungai, danau, rawa, waduk.
`
              },
              {
                id: 'navrat-1-article-3',
                title: 'Tanda-Tanda Peta (Simbol)',
                content: `
Dibedakan menurut warna:
* **Hitam:** Benda buatan manusia (jalan kereta, batas daerah) dan tumbuhan.
* **Biru:** Perairan (sungai, sawah, danau).
* **Merah:** Konstruksi batu/bangunan, jalan keras.
* **Hijau:** Daerah pemukiman/perkampungan.
* **Cokelat:** Ketinggian (kontur).
`
              },
              {
                id: 'navrat-1-article-4',
                title: 'Koordinat Peta',
                content: `
* **Koordinat Geografis:** Menggunakan Lintang (Utara/Selatan) dan Bujur (Barat/Timur). Satuan: Derajat, Menit, Detik.
* **Koordinat Grid (UTM):** Menggunakan sistem kotak (karvak). Pembacaan: **KIKA - BATAS** (Kiri ke Kanan [Timur], Bawah ke Atas [Utara]).
    * 4 Angka: Menunjukkan satu kotak grid (akurasi 1 km).
    * 6 Angka: Satu kotak dibagi 10 (akurasi 100 m).
    * 8 Angka: Satu kotak dibagi 100 (akurasi 10 m).
`
              },
              {
                id: 'navrat-1-article-5',
                title: 'Kedar Peta dan Sudut Tanjakan',
                content: `
* **Kedar Peta:** Perbandingan jarak di peta dengan jarak di medan.
    * *Rumus:* Kedar = Jarak Peta (JP) dibagi Jarak Medan (JM).
* **Sudut Tanjakan:** Tingkat kemiringan lereng.
    * *Rumus:* (Selisih Tinggi / Jarak Mendatar) x 57,3 derajat.
    * Tanda (+) untuk mendaki, tanda (-) untuk menurun.
`
              }
            ]
          }
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
        ],
        syllabus: [
          {
            id: 'navrat-2-modul-1',
            title: 'Kompas Siang dan Kompas Malam',
            items: [
              {
                id: 'navrat-2-article-1',
                title: 'Pengertian dan Jenis Kompas',
                content: `
Kompas adalah alat navigasi penunjuk arah magnetis.
* **Kompas Bidik (Prisma):** Dilengkapi prisma dan kawat pisir untuk membidik sasaran dan membaca derajat secara bersamaan. Akurat untuk navigasi.
* **Kompas Orienteering (Silva):** Badan transparan, memudahkan pembacaan langsung di atas peta. Ada jarum *travel arrow*.
* **Kompas Biasa:** Kompas dasar penunjuk arah mata angin.
`
              },
              {
                id: 'navrat-2-article-2',
                title: 'Orientasi Peta',
                content: `
Menyamakan kedudukan peta dengan medan sebenarnya (Utara Peta = Utara Magnetis).
* **Caranya:** Buka peta, letakkan kompas di atasnya. Himpitkan garis rambut kompas sejajar garis grid utara peta. Putar peta dan kompas bersamaan sampai jarum utara kompas menunjuk ke utara peta.
`
              },
              {
                id: 'navrat-2-article-3',
                title: 'Penggunaan Kompas Siang dan Malam',
                content: `
* **Kompas Siang:** Buka tutup tegak lurus, angkat prisma. Masukkan jempol ke cincin, telunjuk menahan tutup. Bidik sasaran lewat celah, baca angka derajat lewat prisma.
* **Kompas Malam:** Buka tutup hingga rata. Kendorkan sekrup, putar kaca kompas sesuai sudut yang diinginkan (azimuth). Kencangkan sekrup. Pegang di depan dada, putar badan sampai jarum bercahaya berimpit dengan tanda baca bercahaya. Arah garis rambut adalah arah perjalanan.
`
              }
            ]
          }
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
        ],
        syllabus: [
          {
            id: 'navrat-3-modul-1',
            title: 'Pengetahuan Resection dan Intersection',
            items: [
              {
                id: 'navrat-3-article-1',
                title: 'Resection dan Intersection',
                content: `
* **Resection (Mengikat ke Depan):** Menentukan posisi **sendiri** di peta menggunakan dua tanda medan yang dikenali.
    * *Cara:* Bidik tanda A dan B. Hitung *Back Azimuth* (Sudut Balik) dari masing-masing bidikan. Tarik garis di peta dari tanda A dan B sesuai sudut balik. Perpotongan garis adalah posisi kita.
* **Intersection (Mengikat ke Belakang):** Menentukan posisi **sasaran/musuh** di peta.
    * *Cara:* Kita harus berpindah tempat. Dari posisi 1, bidik sasaran. Pindah ke posisi 2, bidik sasaran yang sama. Tarik garis dari posisi 1 dan 2 di peta sesuai sudut bidikan. Perpotongan garis adalah lokasi sasaran.
`
              }
            ]
          }
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
        ],
        syllabus: [
          {
            id: 'navrat-4-modul-1',
            title: 'Pengetahuan Global Positioning System (GPS)',
            items: [
              {
                id: 'navrat-4-article-1',
                title: 'Kegunaan dan Bagian GPS',
                content: `
GPS menentukan posisi dengan bantuan satelit.
* **Bagian Fisik:** Antena (internal/eksternal), Tombol Interface (Zoom, Menu, Page, Enter, Rocker), Layar, Tempat Baterai, Slot Micro SD, Konektor Data USB.
`
              },
              {
                id: 'navrat-4-article-2',
                title: 'Pengoperasian GPS',
                content: `
* **Menghidupkan:** Tekan tombol Power (merah).
* **Sinyal:** Tunggu hingga alat menangkap sinyal satelit (muncul konfigurasi satelit dan kekuatan sinyal di layar).
* **Informasi Layar:** Menampilkan Koordinat (Location), Akurasi (Error), Arah (Heading Bug), dan Ketinggian.
* **Tombol Penting:**
    * *Mark/Enter:* Menyimpan lokasi saat ini (Waypoint).
    * *Page:* Mengganti tampilan menu.
    * *Rocker:* Menggeser kursor.
    * *Zoom:* Memperbesar/memperkecil tampilan peta.
`
              }
            ]
          }
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
            id: 'pioneering-1-modul-1',
            title: 'Tali Temali',
            items: [
              {
                id: 'pioneering-1-article-1',
                title: 'Simpul',
                content: `
### Pendahuluan
Tali temali adalah salah satu keterampilan dasar yang wajib dimiliki oleh seorang pramuka. Dalam kegiatan di alam terbuka, tali bukan sekadar alat pengikat, melainkan sarana vital untuk membuat bangunan darurat (pioneering), penyelamatan (rescue), hingga kegiatan sehari-hari di perkemahan.

### Pengertian Simpul, Ikatan, dan Jerat
Seringkali kita menyamakan istilah simpul, ikatan, dan jerat, padahal ketiganya memiliki perbedaan mendasar:
*   **Simpul:** Hubungan antara tali dengan tali.
*   **Ikatan:** Hubungan antara tali dengan benda lain (misalnya kayu, balok, bambu).
*   **Jerat:** Hubungan antara tali dengan benda lain (seperti ikatan), namun jerat memiliki sifat khusus yaitu dapat melonggar atau mempererat (misalnya jerat leher binatang).

![Macam-Macam Simpul](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Blue_Knot.jpg/640px-Blue_Knot.jpg)

### Macam-Macam Simpul dan Kegunaannya
Berikut adalah penjelasan mendalam mengenai beberapa simpul penting:

1.  **Simpul Hidup (Overhand Knot)**
    Simpul ini adalah simpul yang paling sederhana. Fungsinya bukan untuk menyambung tali yang putus, melainkan untuk menjaga ujung tali agar tidak terurai (sebagai simpul ujung tali). Simpul ini mudah dilepas kembali.

2.  **Simpul Mati (Reef Knot)**
    Simpul mati digunakan untuk menyambung dua utas tali yang **sama besarnya** dan dalam keadaan **kering**. Simpul ini sangat populer karena bentuknya yang rapi dan datar, sehingga sering digunakan dalam P3K untuk mengikat perban (mitela). Namun, simpul ini bisa menjadi sulit dilepas jika basah atau tertarik sangat kencang.

3.  **Simpul Anyam (Sheet Bend)**
    Digunakan untuk menyambung dua utas tali yang **tidak sama besarnya** dalam keadaan **kering**. Tali yang lebih kecil mengikat tali yang lebih besar.

4.  **Simpul Anyam Berganda (Double Sheet Bend)**
    Fungsinya sama dengan simpul anyam, yaitu menyambung dua tali beda ukuran. Bedanya, simpul ini digunakan jika tali dalam keadaan **basah** atau licin. Lilitan ganda memberikan cengkeraman yang lebih kuat.

5.  **Simpul Kembar (Fisherman's Knot)**
    Digunakan untuk menyambung dua utas tali yang **sama besarnya** dalam keadaan **licin** atau basah. Simpul ini sangat kuat dan aman, sering digunakan oleh pemancing untuk menyambung senar.

6.  **Simpul Kursi (Fireman's Chair Knot)**
    Simpul ini memiliki dua "mata" atau lingkaran yang bisa digunakan untuk mengangkat atau menurunkan orang (misalnya korban pingsan) dari ketinggian. Satu lingkaran untuk di bawah ketiak, dan satu lagi untuk di bawah lutut.

7.  **Simpul Laso (Bowline)**
    Simpul ini membentuk lingkaran yang tidak bisa membesar atau mengecil (tetap). Sangat berguna untuk mengikat leher binatang agar tidak tercekik, atau sebagai loop pengaman di pinggang pendaki.

8.  **Simpul Penarik (Manharness Hitch)**
    Digunakan untuk menarik benda yang berat bersama-sama. Simpul ini dibuat pada tali penarik sedemikian rupa sehingga orang dapat memasukkan bahunya ke dalam lingkaran simpul untuk membantu menarik.
`
              },
              {
                id: 'pioneering-1-article-2',
                title: 'Bentuk Jerat',
                content: `
### Pengertian Jerat
Jerat adalah salah satu bentuk ikatan tali pada benda lain (biasanya kayu atau tongkat) yang memiliki sifat khusus. Sifat ini bisa berupa cengkeraman yang semakin kuat jika ditarik, atau sebaliknya, mudah dilepas.

![Macam-Macam Jerat](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Blue_Knot.jpg/640px-Blue_Knot.jpg)

### Macam-Macam Jerat dan Kegunaannya

1.  **Jerat Pangkal (Clove Hitch)**
    Ini adalah jerat yang paling sering digunakan dalam pioneering. Hampir semua ikatan (seperti ikatan palang, silang, canggah) diawali dengan jerat pangkal. Jerat ini mengikat tali pada tiang dengan kuat namun mudah dibuka.

2.  **Jerat Tiang (Bowline)**
    Sering disebut juga simpul tiang. Jerat ini menghasilkan lingkaran yang tidak menjerat (tidak mengecil saat ditarik). Sangat aman digunakan untuk mengikat leher hewan atau mengikat pinggang orang saat rescue.

3.  **Jerat Tambat (Timber Hitch)**
    Digunakan untuk menyeret balok kayu atau batang pohon. Jerat ini juga sering digunakan untuk memulai ikatan silang. Sifatnya adalah semakin ditarik, cengkeramannya semakin kuat karena gesekan tali dengan kayu.

4.  **Jerat Tarik**
    Digunakan untuk menambatkan tali pada tiang yang sifatnya sementara dan ingin mudah dilepas. Cukup dengan menarik ujung tali yang aktif, maka jerat akan terlepas seluruhnya. Sangat berguna saat kita turun tebing dan ingin mengambil kembali tali kita dari bawah.

5.  **Jerat Kupu-Kupu (Butterfly Loop)**
    Digunakan untuk membuat loop (lingkaran) di tengah tali tanpa harus menggunakan ujung tali. Loop ini sangat kuat dan bisa dibebani ke tiga arah. Sering digunakan oleh pendaki gunung untuk mengikatkan diri pada tali utama.
`
              },
              {
                id: 'pioneering-1-article-3',
                title: 'Bentuk Ikat Belit',
                content: `
### Pengertian Ikatan
Ikatan adalah teknik menghubungkan tali dengan benda lain, biasanya dua tongkat atau lebih, untuk membentuk suatu konstruksi (bangunan darurat). Kunci dari bangunan yang kokoh adalah ikatan yang rapi dan kuat.

![Macam-Macam Ikatan](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Blue_Knot.jpg/640px-Blue_Knot.jpg)

### Macam-Macam Ikatan dan Kegunaannya

1.  **Ikatan Palang (Square Lashing)**
    Digunakan untuk mengikat dua tongkat yang posisinya **saling tegak lurus** (membentuk sudut 90 derajat).
    *   **Cara:** Dimulai dengan simpul pangkal pada salah satu tongkat, lalu lilitkan tali menyilang di antara kedua tongkat sebanyak 3-4 kali. Akhiri dengan "cekikan" (frapping) di antara tongkat untuk mengencangkan, dan tutup dengan simpul pangkal.

2.  **Ikatan Silang (Cross Lashing)**
    Digunakan untuk mengikat dua tongkat yang bersilangan namun **tidak membentuk sudut 90 derajat** (seperti huruf X).
    *   **Cara:** Dimulai dengan simpul tambat pada persilangan, lalu lilitkan tali secara diagonal bergantian. Akhiri dengan cekikan dan simpul pangkal.

3.  **Ikatan Canggah (Shear Lashing)**
    Digunakan untuk menyambung dua tongkat secara memanjang (agar menjadi lebih panjang) atau untuk membuat tiang bendera.
    *   **Cara:** Dua tongkat diimpitkan dengan overlap yang cukup. Mulai dengan simpul pangkal pada salah satu tongkat, lilitkan tali mengelilingi kedua tongkat dengan erat. Beri cekikan di sela-sela tongkat, dan akhiri dengan simpul pangkal.

4.  **Ikatan Kaki Tiga (Tripod Lashing)**
    Digunakan untuk menggabungkan tiga tongkat untuk membentuk kaki tiga (tripod), yang biasanya digunakan sebagai dasar menara pandang atau tiang bendera.
    *   **Cara:** Susun tiga tongkat sejajar. Mulai dengan simpul pangkal di salah satu tongkat pinggir. Anyam tali melewati atas-bawah tongkat-tongkat tersebut. Beri cekikan di sela-sela tongkat, lalu akhiri dengan simpul pangkal. Dirikan tongkat dan atur posisinya.
`
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
            id: 'pioneering-2-modul-1',
            title: 'Pembuatan Jembatan Improvisasi',
            items: [
              {
                id: 'pioneering-2-article-1',
                title: 'Jembatan Tepi Sederhana',
                content: `
### Pendahuluan
Dalam situasi darurat atau penjelajahan, seringkali kita dihadapkan pada rintangan alam seperti sungai yang deras, parit yang lebar, atau jurang. Kemampuan membuat jembatan darurat (improvisasi) menjadi sangat krusial untuk menjaga mobilitas tim. Jembatan ini dibuat dengan memanfaatkan bahan-bahan yang tersedia di alam (kayu, bambu, rotan) dan tali.

![Jembatan Darurat](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Blue_Knot.jpg/640px-Blue_Knot.jpg)

### Prinsip Dasar Pembuatan Jembatan
1.  **Kekuatan (Strength):** Jembatan harus mampu menahan beban orang atau barang yang melintas.
2.  **Kestabilan (Stability):** Jembatan tidak boleh goyang berlebihan saat dilintasi.
3.  **Efisiensi:** Menggunakan bahan dan tenaga seefisien mungkin.
4.  **Keamanan (Safety):** Faktor keselamatan adalah yang utama. Setiap ikatan harus dicek ulang.

### Macam-Macam Jembatan Darurat

1.  **Jembatan Tepi Sederhana (Log Bridge)**
    Ini adalah bentuk jembatan paling purba dan sederhana. Prinsipnya adalah meletakkan batang kayu atau bambu yang cukup panjang dan kuat melintasi sungai dari satu tepi ke tepi lainnya.
    *   **Konstruksi:** Jika sungai lebar, bisa menggunakan dua batang kayu sejajar. Untuk kenyamanan, di atasnya bisa diberi lantai papan atau anyaman bambu.
    *   **Pangkal Jembatan:** Tanah di kedua tepi harus digali dan dipadatkan untuk menahan ujung jembatan agar tidak bergeser.

2.  **Jembatan Kuda-Kuda (A-Frame Bridge)**
    Jika bentang sungai terlalu lebar untuk satu batang kayu, kita perlu membuat penyangga di tengah atau di tepi yang menjorok ke tengah. Penyangga ini berbentuk segitiga atau huruf A (kuda-kuda).
    *   **Cara Kerja:** Kuda-kuda berfungsi memperpendek bentang jembatan dan menyalurkan beban ke dasar sungai atau tebing.
    *   **Ikatan:** Menggunakan ikatan palang dan silang yang sangat kuat.

3.  **Jembatan Gantung (Suspension Bridge)**
    Digunakan jika sungai sangat lebar dan dalam, sehingga tidak memungkinkan memasang tiang penyangga di tengah.
    *   **Konstruksi:** Mengandalkan tali baja atau tali manila besar yang dibentangkan di antara dua pohon besar di kedua tepi sungai. Lantai jembatan digantungkan pada tali utama tersebut.
    *   **Kesulitan:** Membutuhkan teknik penarikan tali yang kuat (pulleys system) agar tali bentangan tidak melendut terlalu dalam.

4.  **Jembatan Tarik (Drawbridge)**
    Jembatan ini unik karena bisa diangkat atau ditarik. Biasanya digunakan untuk melintasi parit pertahanan atau sungai kecil yang juga dilalui perahu.
    *   **Mekanisme:** Menggunakan sistem katrol dan pemberat (counterweight) untuk mengangkat lantai jembatan.
`
              },
              {
                id: 'pioneering-2-article-2',
                title: 'Jembatan Kuda-kuda',
                content: `
### Detail Konstruksi Jembatan Kuda-Kuda
Jembatan kuda-kuda adalah solusi cerdas untuk mengatasi bentang sungai yang lebar tanpa harus mencari kayu utuh yang sangat panjang.

*   **Prinsip A-Frame:**
    Bentuk segitiga (A) adalah bentuk geometri yang paling stabil dan kaku. Beban vertikal dari atas akan disalurkan menjadi gaya tekan pada kaki-kaki segitiga.

*   **Langkah Pembuatan:**
    1.  **Siapkan Bahan:** Dua batang kayu panjang untuk kaki, satu batang pendek untuk palang bawah, dan satu batang pendek untuk palang atas.
    2.  **Rakit Kuda-Kuda:** Ikat kedua batang panjang di bagian atas dengan ikatan silang (shear lashing) sehingga membentuk huruf V terbalik. Pasang palang bawah dan atas dengan ikatan palang (square lashing) untuk membentuk huruf A.
    3.  **Dirikan:** Letakkan kaki kuda-kuda di dasar sungai (pastikan dasar sungai keras/berbatu).
    4.  **Pasang Gelagar:** Letakkan balok utama jembatan di atas palang segitiga tersebut.

*   **Tips Keamanan:**
    Pastikan sudut kaki kuda-kuda cukup lebar agar tidak mudah terguling ke samping. Jika arus sungai deras, kaki kuda-kuda harus ditanam atau diberi pemberat batu.
`
              },
              {
                id: 'pioneering-2-article-3',
                title: 'Jembatan Bambu Satu',
                content: `
### Jembatan Bambu Satu (Single Bamboo Bridge)
Jembatan ini sangat ringan dan cepat dibuat, cocok untuk penyeberangan perorangan dengan beban ringan.

*   **Konstruksi:**
    Hanya menggunakan satu batang bambu besar (betung) sebagai titian utama.
*   **Keseimbangan:**
    Karena pijakan sangat sempit (hanya selebar bambu), maka mutlak diperlukan **tali pegangan tangan** (handrail) yang dibentangkan sejajar di atas bambu titian setinggi pinggang.
*   **Penggunaan:**
    Penyeberang berjalan menyamping (seperti kepiting) sambil berpegangan pada tali tangan.
`
              },
              {
                id: 'pioneering-2-article-4',
                title: 'Jembatan Tarik',
                content: `
### Jembatan Tarik (Drawbridge)
Jembatan tarik adalah karya engineering klasik yang bisa diadopsi dalam skala kecil untuk pioneering.

*   **Fungsi Taktis:**
    Dalam konteks pertahanan, jembatan ini bisa ditarik ke atas untuk memutus akses musuh. Dalam konteks pramuka, ini adalah latihan mekanika (katrol dan tuas).
*   **Komponen Utama:**
    1.  **Lantai Jembatan:** Engsel di satu sisi (pangkal).
    2.  **Menara Penarik:** Tiang tinggi di pangkal jembatan untuk menempatkan katrol.
    3.  **Tali Penarik:** Tali yang menghubungkan ujung jembatan, melewati katrol di menara, ke tangan operator.
    4.  **Pemberat (Counterweight):** Opsional, untuk meringankan beban saat menarik.
`
              },
              {
                id: 'pioneering-2-article-5',
                title: 'Jembatan Kaki Delapan Bersudut Dua',
                content: `
### Jembatan Kompleks (Kaki Delapan)
Ini adalah proyek pioneering tingkat lanjut yang membutuhkan kerjasama tim yang solid.

*   **Struktur:**
    Menggunakan kombinasi beberapa kuda-kuda yang saling menopang, sehingga membentuk struktur yang terlihat seperti memiliki banyak kaki.
*   **Keunggulan:**
    Sangat stabil dan mampu menahan beban berat. Bisa digunakan untuk bentang yang cukup jauh tanpa tiang di tengah sungai (cantilever principle).
`
              },
              {
                id: 'pioneering-2-article-6',
                title: 'Jembatan Topang',
                content: `
### Jembatan Topang (Strut Bridge)
Jembatan ini menggunakan balok miring (topang/strut) yang menumpu pada tebing sungai untuk menahan gelagar jembatan dari bawah.

*   **Syarat Lokasi:**
    Tebing sungai harus curam dan keras (batu atau tanah padat) agar bisa menjadi tumpuan balok miring.
*   **Kelebihan:**
    Tidak perlu tiang di tengah sungai, sehingga aman dari hanyut akibat banjir bandang.
`
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
            id: 'pioneering-3-modul-1',
            title: 'Pembuatan Perkemahan',
            items: [
              {
                id: 'pioneering-3-article-1',
                title: 'Sengkuap',
                content: `
### Pendahuluan
Perkemahan adalah "rumah" bagi pramuka di alam bebas. Membuat perkemahan yang nyaman, aman, dan sehat adalah seni tersendiri. Bukan sekadar mendirikan tenda, tapi mengatur tata letak (layout) agar aktivitas berjalan lancar.

### Jenis-Jenis Bangunan Perkemahan (Shelter)

1.  **Sengkuap (Lean-to)**
    Tenda darurat paling sederhana yang terbuka di satu sisi.
    *   **Fungsi:** Melindungi dari angin dan hujan dari satu arah. Biasanya digunakan untuk istirahat sebentar atau dapur umum.
    *   **Konstruksi:** Dibuat dengan menyandarkan atap (ponco, daun, rumbia) pada sebatang kayu melintang yang diikatkan pada dua pohon.

![Sengkuap](https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Tarpaulin_fly_tent.jpg/640px-Tarpaulin_fly_tent.jpg)

2.  **Tenda Regu (Ridge Tent)**
    Tenda berbentuk prisma segitiga memanjang. Ini adalah tenda standar pramuka.
    *   **Bagian:** Terdiri dari tiang utama (tegak), tiang penyangga (ridge pole), dan pasak.
    *   **Tips:** Pastikan tali tenda ditarik kencang agar atap tidak menampung air hujan. Buat parit di sekeliling tenda untuk aliran air.

3.  **Menara Pandang (Watch Tower)**
    Bangunan tinggi yang ikonik dalam perkemahan.
    *   **Fungsi:** Untuk mengawasi area perkemahan, memantau bahaya (api, hewan liar), atau sekadar sebagai landmark.
    *   **Konstruksi:** Biasanya menggunakan kaki tiga (tripod) atau kaki empat (quadpod) sebagai dasar. Membutuhkan ikatan yang sangat presisi demi keselamatan pemanjat.

4.  **Gapura (Camp Gate)**
    Pintu gerbang masuk ke area perkemahan.
    *   **Fungsi:** Menunjukkan identitas regu atau pasukan, serta sebagai pos penjagaan.
    *   **Kreativitas:** Gapura adalah ajang pameran kemampuan tali-temali dan estetika.

### Sanitasi dan Higiene Perkemahan
*   **Latrine (Kakus):** Harus dibuat jauh dari sumber air dan dapur (minimal 10-20 meter).
*   **Lubang Sampah:** Pisahkan sampah organik (basah) dan anorganik (kering). Sampah organik bisa ditimbun, anorganik dibawa pulang.
*   **Dapur:** Harus memiliki sirkulasi udara yang baik dan terlindung dari hujan.
`
              },
              {
                id: 'pioneering-3-article-2',
                title: 'Barak',
                content: `
### Barak (Barracks)
Barak adalah bangunan penampungan yang lebih besar dan permanen dibandingkan tenda regu biasa. Biasanya digunakan untuk menampung satu pasukan atau pleton.

![Barak](https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Tarpaulin_fly_tent.jpg/640px-Tarpaulin_fly_tent.jpg)

*   **Barak Tionghoa:**
    Bentuknya memanjang dengan atap pelana. Konstruksinya menggunakan tiang-tiang bambu yang ditanam kuat. Dindingnya bisa dibuat dari anyaman bambu (bilik) atau terpal. Dilengkapi dengan parit keliling untuk drainase.

*   **Barak Biasa:**
    Mirip dengan tenda regu tapi ukurannya raksasa. Menggunakan tiang *Ander* (tiang vertikal pendek di tengah kuda-kuda) untuk memberikan ruang kepala yang lebih tinggi di bagian tengah.
`
              },
              {
                id: 'pioneering-3-article-3',
                title: 'Menara',
                content: `
### Menara Pandang (Observation Tower)
Menara pandang adalah puncak dari keterampilan pioneering. Membangun menara membutuhkan perhitungan beban dan simpul yang sempurna.

![Menara Pandang](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Blue_Knot.jpg/640px-Blue_Knot.jpg)

*   **Menara Kaki Tiga (Tripod Tower):**
    Paling mudah dibuat. Tiga batang bambu panjang diikat ujungnya (tripod lashing), lalu didirikan. Di antara kaki-kaki tersebut dipasang palang-palang untuk tangga dan lantai panggung.

*   **Menara Kaki Empat (Quadpod Tower):**
    Lebih stabil dan luas panggungnya. Menggunakan empat tiang utama. Konstruksinya mirip dengan membuat meja atau kursi raksasa.

*   **Menara Pohon:**
    Memanfaatkan pohon besar yang hidup sebagai tiang utama. Panggung dibuat menempel pada batang pohon. Sangat kokoh namun harus hati-hati agar tidak merusak pohon.
`
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
            id: 'pioneering-4-modul-1',
            title: 'Bekal Air dan Listrik',
            items: [
              {
                id: 'pioneering-4-article-1',
                title: 'Bekal Air',
                content: `
### Pendahuluan
Air dan listrik adalah dua kebutuhan vital yang seringkali langka di lokasi perkemahan. Kemampuan untuk mengelola sumber daya ini sangat menentukan kenyamanan dan kelangsungan hidup di alam bebas.

### Bekal Air (Water Supply)
Air bersih mutlak diperlukan untuk minum dan memasak.

1.  **Mencari Sumber Air:**
    *   **Mata Air:** Sumber terbaik. Biasanya ada di lereng bukit atau di bawah pohon besar.
    *   **Sungai:** Air sungai harus dijernihkan dan dimasak sebelum diminum.
    *   **Air Hujan:** Tampung air hujan langsung dari langit (bukan tetesan pohon) menggunakan ponco bersih.

2.  **Penjernihan Air (Water Purification):**
    *   **Penyaringan (Filtrasi):** Gunakan kain bersih atau buat saringan dari botol bekas yang diisi lapisan pasir, arang, dan kerikil.
    *   **Pengendapan:** Biarkan air keruh diam selama beberapa jam hingga kotoran turun ke dasar.
    *   **Disinfeksi:** Rebus air hingga mendidih (minimal 5-10 menit) untuk membunuh bakteri. Atau gunakan tablet penjernih air (water purification tablets).

### Bekal Listrik (Electricity)
Di era modern, listrik dibutuhkan untuk penerangan dan komunikasi.

1.  **Sumber Listrik Darurat:**
    *   **Baterai/Accu:** Sumber DC yang paling umum.
    *   **Genset (Generator Set):** Mengubah energi mekanik (bensin/solar) menjadi listrik AC.
    *   **Panel Surya (Solar Panel):** Ramah lingkungan, cocok untuk perkemahan jangka panjang di area terbuka.

2.  **Instalasi Sederhana:**
    *   **Seri:** Lampu disusun berderet. Jika satu mati, semua mati. Hemat kabel.
    *   **Paralel:** Lampu disusun sejajar. Jika satu mati, yang lain tetap menyala. Nyala lampu lebih terang merata.
`
              },
              {
                id: 'pioneering-4-article-2',
                title: 'Dasar-Dasar Pengetahuan Tentang Listrik',
                content: `
### Teori Dasar Listrik
Untuk dapat menangani listrik dengan aman, kita harus memahami konsep dasarnya.

*   **Tegangan (Voltage - V):** Beda potensial yang mendorong arus listrik. Ibarat tekanan water dalam pipa.
*   **Arus (Current - I):** Aliran muatan listrik. Ibarat debit air yang mengalir.
*   **Hambatan (Resistance - R):** Sesuatu yang menahan aliran arus. Ibarat sumbatan pada pipa.
*   **Daya (Power - P):** Energi yang digunakan per satuan waktu (Watt).

### Hukum Ohm
V = I x R
Tegangan berbanding lurus dengan Arus dan Hambatan.

### Keamanan Listrik (Safety)
*   Jangan pernah menyentuh kabel terbuka dengan tangan basah.
*   Gunakan alas kaki karet saat bekerja dengan listrik.
*   Selalu matikan sumber listrik sebelum memperbaiki instalasi.
`
              },
              {
                id: 'pioneering-4-article-3',
                title: 'Alat Peralatan dan Instalasi Listrik',
                content: `
### Alat Ukur Listrik
*   **Multimeter (Avometer):** Alat wajib punya. Bisa mengukur Ampere (arus), Volt (tegangan), dan Ohm (hambatan).
*   **Test Pen:** Alat sederhana berbentuk obeng untuk mengecek apakah ada tegangan listrik pada suatu kabel/stopkontak.

### Instalasi Perkemahan
*   **Kabel:** Gunakan kabel serabut (flexible) yang kuat dan tahan cuaca (outdoor cable).
*   **Fitting Lampu:** Gunakan fitting gantung yang kedap air (waterproof) jika dipasang di luar tenda.
*   **Saklar:** Pasang saklar di tempat yang mudah dijangkau namun terlindung dari hujan.
`
              },
              {
                id: 'pioneering-4-article-4',
                title: 'Pengetahuan dasar tentang alat pembangkit listrik',
                content: `
### Generator Set (Genset)
Genset adalah mesin pembangkit listrik portabel yang paling umum digunakan di lapangan.

*   **Cara Kerja:** Mesin berbahan bakar (bensin/solar) memutar dinamo (alternator) untuk menghasilkan listrik.
*   **Perawatan:** Cek oli mesin secara berkala. Jangan biarkan bahan bakar mengendap terlalu lama di tangki jika tidak digunakan.
*   **Pengoperasian:**
    1.  Pastikan beban (lampu/alat) dicabut dulu.
    2.  Nyalakan mesin, biarkan pemanasan sebentar.
    3.  Baru colokkan beban satu per satu.
    4.  Saat mematikan, cabut beban dulu, baru matikan mesin.
`
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
                <h3 className="font-bold text-green-900 mb-3 flex items-center gap-2"><CheckCircle size={20} /> Prinsip Pioneering</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Gunakan bahan alam sekitar (ramah lingkungan).</li>
                  <li>Ikatan kuat tapi mudah lepas.</li>
                  <li>Bangunan aman (safety first).</li>
                  <li>Kerja sama tim (holding, lashing, testing).</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2"><Hammer size={20} /> Tips Teknis</h3>
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
        ],
        syllabus: [
          {
            id: 'mountaineering-1-modul-1',
            title: 'Panjat Tebing',
            items: [
              {
                id: 'mountaineering-1-article-1',
                title: 'Panjat Bebas (Free Climbing)',
                content: `
### Pendahuluan
Panjat tebing (Rock Climbing) adalah seni menaklukkan ketinggian dengan mengandalkan kekuatan fisik, teknik, dan mental. Dalam konteks Saka Wira Kartika, kemampuan ini bukan hanya olahraga, tapi juga keterampilan taktis untuk melintasi medan vertikal yang sulit.

### Pengertian Free Climbing
Free Climbing atau Panjat Bebas adalah metode pemanjatan di mana seorang pendaki menggunakan kekuatan tubuhnya sendiri (tangan dan kaki) untuk mencari pegangan dan pijakan pada tebing guna menambah ketinggian.

![Free Climbing](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Climber_with_equipment.jpg/640px-Climber_with_equipment.jpg)

*   **Peran Alat:**
    Peralatan seperti tali, harness, carabiner, dan pengaman sisip (chock/friend) **tetap digunakan**, namun fungsinya semata-mata sebagai **pengaman keselamatan** (safety) apabila pendaki terjatuh. Alat-alat tersebut **tidak boleh** digunakan untuk menarik tubuh ke atas atau dijadikan pijakan (kecuali saat istirahat gantung).

*   **Prinsip Utama:**
    "Memanjat dengan otot, mengamankan dengan alat." Ini membutuhkan latihan fisik yang prima, kelenturan tubuh, dan teknik keseimbangan yang baik.
`
              },
              {
                id: 'mountaineering-1-article-2',
                title: 'Panjat dengan Alat Bantu (Artificial Climbing)',
                content: `
### Pengertian Artificial Climbing
Berbeda dengan Free Climbing, Artificial Climbing (Panjat Bantuan) adalah teknik memanjat tebing dengan **menggunakan peralatan secara aktif** untuk menambah ketinggian. Teknik ini biasanya digunakan pada tebing yang sangat sulit, licin (blank wall), atau overhang (menggantung) di mana tidak terdapat pegangan atau pijakan alami yang cukup.

![Artificial Climbing](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Rock_Climbing_using_Aid_Equipment.jpg/640px-Rock_Climbing_using_Aid_Equipment.jpg)

*   **Peralatan Khusus:**
    Selain alat standar, pemanjat menggunakan:
    *   **Tangga Gantung (Stirrup/Etrier):** Tangga tali pendek untuk pijakan kaki.
    *   **Paku Tebing (Piton) & Bor (Bolt):** Ditanam ke tebing sebagai tumpuan.
    *   **Skyhook:** Pengait kecil untuk celah batuan sempit.

*   **Cara Kerja:**
    Pendaki memasang alat pada tebing, mengaitkan tangga gantung pada alat tersebut, lalu menaiki tangga itu. Dari posisi tinggi itu, ia memasang alat berikutnya di atasnya, dan begitu seterusnya.
`
              },
              {
                id: 'mountaineering-1-article-3',
                title: 'Panjat Tanpa Alat Bantu (Free Soloing)',
                content: `
### Bahaya Free Soloing
Free Soloing adalah bentuk paling murni sekaligus paling berbahaya dari panjat tebing. Pendaki memanjat sendirian **tanpa menggunakan tali pengaman sama sekali**.

*   **Risiko Fatal:**
    Satu kesalahan kecil (terpleset, pegangan patah, kram otot) berarti jatuh bebas yang hampir pasti berakibat kematian.

*   **Syarat Mutlak:**
    Hanya boleh dilakukan oleh profesional dengan jam terbang sangat tinggi yang sudah menghafal mati setiap inci rute pemanjatan tersebut. Dalam kegiatan pendidikan kepramukaan, teknik ini **sangat tidak disarankan** dan biasanya dilarang karena faktor risiko yang tidak bisa ditoleransi.
`
              },
              {
                id: 'mountaineering-1-article-4',
                title: 'Teknik Melintasi Panjat Tebing',
                content: `
### Teknik Pergerakan di Tebing
Memanjat bukan sekadar menarik tubuh dengan tangan (pull up). Justru kaki yang memegang peranan utama.

![Teknik Panjat](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Climber_with_equipment.jpg/640px-Climber_with_equipment.jpg)

1.  **Prinsip Tiga Titik (Three Point Contact):**
    Selalu pertahankan tiga titik tumpuan pada tebing saat bergerak.
    *   Contoh: Dua kaki berpijak dan satu tangan memegang, sementara satu tangan lain mencari pegangan baru.
    *   Ini menjamin kestabilan jika salah satu pegangan meleset.

2.  **Manajemen Berat Badan:**
    *   Jaga tubuh tetap dekat dengan tebing, tapi pinggul jangan terlalu menempel agar kaki bisa melihat pijakan.
    *   Tumpukan berat badan pada kaki. Otot kaki jauh lebih kuat dan tahan lama dibanding otot lengan. Tangan hanya berfungsi sebagai penyeimbang dan penahan agar tidak jatuh ke belakang.

3.  **Membaca Jalur (Route Reading):**
    Sebelum memanjat, amati tebing dari bawah. Rencanakan di mana akan berpijak, di mana akan istirahat, dan di mana akan memasang pengaman. Ini menghemat tenaga saat sudah di atas.
`
              }
            ]
          }
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
        ],
        syllabus: [
          {
            id: 'mountaineering-2-modul-1',
            title: 'Turun Tebing',
            items: [
              {
                id: 'mountaineering-2-article-1',
                title: 'Turun Hesty',
                content: `
### Pendahuluan
Setelah mencapai puncak, seorang pendaki harus bisa turun kembali dengan aman. Turun tebing seringkali lebih berbahaya daripada naik karena faktor kelelahan dan gravitasi.

### Teknik Turun Hesty (Hesty Method)
Teknik ini digunakan untuk menuruni tebing yang tidak terlalu curam (kemiringan sekitar 45-60 derajat) tanpa menggunakan alat khusus seperti harness atau figure 8. Teknik ini sangat berguna dalam situasi darurat militer atau survival.

![Turun Tebing](https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Abseiling_Greece.jpg/640px-Abseiling_Greece.jpg)

*   **Prinsip Kerja:**
    Menggunakan gesekan tali yang dibelitkan pada tubuh sendiri untuk menahan laju turun.

*   **Cara Melakukan:**
    1.  Tali utama ditambatkan kuat di atas.
    2.  Pendaki berdiri membelakangi tebing.
    3.  Tali dilewatkan di antara kedua kaki dari depan ke belakang.
    4.  Tali ditarik menyilang ke dada, lalu dilewatkan ke bahu yang berlawanan.
    5.  Tangan memegang sisa tali untuk mengontrol pengereman.

*   **Peringatan:**
    Gesekan tali pada baju/kulit akan sangat panas. **Wajib** menggunakan pakaian tebal (jaket kanvas/PDL) dan sarung tangan kulit. Jangan gunakan baju berbahan nilon tipis karena bisa meleleh.
`
              },
              {
                id: 'mountaineering-2-article-2',
                title: 'Rappelling',
                content: `
### Teknik Rappelling (Abseiling)
Rappelling adalah teknik menuruni tebing tegak lurus (vertikal) atau menggantung (overhang) menggunakan tali dan alat pengereman mekanis. Ini adalah cara turun paling cepat, aman, dan terkontrol.

*   **Peralatan Wajib:**
    *   **Tali Statis:** Tali yang kaku dan minim kelenturan, agar tidak membal saat dipakai turun.
    *   **Harness:** Sabuk pengaman tubuh.
    *   **Descender:** Alat pengereman saat turun tebing.
    *   **Carabiner:** Pengait berulir (screw gate).
    *   **Helm & Sarung Tangan:** Pelindung kepala dari batu jatuh dan tangan dari panas gesekan.

*   **Prosedur Keamanan (Safety Procedure):**
    1.  **Cek Anchor:** Pastikan tambatan di atas (pohon/batu) 100% kuat. Gunakan minimal dua titik tambat (backup).
    2.  **Simpul Ujung Tali:** Wajib membuat simpul mati di ujung bawah tali. Ini mencegah pendaki meluncur keluar dari tali jika ternyata talinya kurang panjang sampai ke tanah.
    3.  **Posisi Tangan:**
        *   **Tangan Rem (Brake Hand):** Tangan kanan memegang tali di bawah alat descender. Posisi tangan ini menentukan laju turun. Jika tangan ditarik ke belakang pinggang, tali terkunci (berhenti). Jika tangan dilonggarkan ke depan, tali meluncur. **Tangan ini tidak boleh lepas!**
        *     **Tangan Pemandu (Guide Hand):** Tangan kiri memegang tali di atas alat, hanya untuk menjaga keseimbangan badan, jangan mencengkeram erat.

*   **Posisi Badan:**
    Kaki dibuka selebar bahu menapak pada tebing. Lutut sedikit ditekuk (mengeper). Badan condong ke belakang membentuk sudut L (duduk di udara). Pandangan ke bawah melihat jalur pendaratan.
`
              }
            ]
          }
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
        ],
        syllabus: [
          {
            id: 'mountaineering-3-modul-1',
            title: 'Pelintasan Kering',
            items: [
              {
                id: 'mountaineering-3-article-1',
                title: 'Rayapan Tali Satu',
                content: `
### Pendahuluan
Pelintasan kering (Dry Crossing) adalah teknik menyeberangi rintangan alam seperti jurang, sungai kering, atau celah antar tebing menggunakan instalasi tali, tanpa menyentuh dasar rintangan tersebut.

### Rayapan Tali Satu (One Rope Bridge)
Teknik menyeberang paling sederhana namun paling menguras tenaga karena hanya menggunakan seutas tali tunggal.

![Rayapan Tali Satu](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Scout_bridge_7965.jpg/640px-Scout_bridge_7965.jpg)

*   **Teknik Komando (Tiarap):**
    Tubuh tiarap di atas tali. Satu kaki dilipat di atas tali (sebagai pengait), kaki lain menjuntai ke bawah untuk penyeimbang (seperti ekor). Tangan menarik badan ke depan.
    *   *Kelebihan:* Lebih cepat.
    *   *Kekurangan:* Risiko terbalik (berputar) jika keseimbangan hilang.

*   **Teknik Kera (Menggantung):**
    Tubuh menggantung di bawah tali. Tangan memegang tali, kaki dikaitkan menyilang di atas tali.
    *   *Kelebihan:* Lebih stabil, tidak mungkin jatuh terbalik.
    *   *Kekurangan:* Sangat melelahkan otot tangan dan perut.
`
              },
              {
                id: 'mountaineering-3-article-2',
                title: 'Rayapan Tali Dua',
                content: `
### Rayapan Tali Dua (Double Rope Bridge)
Menggunakan dua utas tali yang dibentangkan sejajar mendatar dengan jarak sekitar 40-50 cm (selebar bahu).

![Rayapan Tali Dua](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Scout_bridge_7965.jpg/640px-Scout_bridge_7965.jpg)

*   **Cara Melintasi:**
    1.  Letakkan kedua tangan pada masing-masing tali (kiri dan kanan).
    2.  Kaitkan kedua kaki pada masing-masing tali.
    3.  Posisi badan menggantung di tengah-tengah.
    4.  Gerakkan tangan dan kaki secara bergantian untuk maju.

*   **Kegunaan:**
    Lebih stabil daripada tali satu, sering digunakan untuk evakuasi tandu korban (tandu diletakkan di atas dua tali tersebut).
`
              },
              {
                id: 'mountaineering-3-article-3',
                title: 'Titian Tali Dua',
                content: `
### Titian Tali Dua (Two Rope Bridge)
Instalasi jembatan tali yang terdiri dari satu tali di bawah (untuk pijakan kaki) dan satu tali di atas (untuk pegangan tangan). Jarak antar tali disesuaikan dengan tinggi rata-rata dada manusia (sekitar 120-150 cm).

![Titian Tali Dua](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Scout_bridge_7965.jpg/640px-Scout_bridge_7965.jpg)

*   **Cara Melintasi:**
    Berjalan menyamping (side step). Tangan memegang tali atas untuk menjaga keseimbangan, kaki melangkah geser di tali bawah.
`
              },
              {
                id: 'mountaineering-3-article-4',
                title: 'Titian Tali Tiga',
                content: `
### Titian Tali Tiga (Three Rope Bridge)
Jembatan tali yang paling nyaman dan stabil. Terdiri dari satu tali pijakan di bawah, dan dua tali pegangan di atas (kiri dan kanan), membentuk lorong segitiga (huruf V).

![Titian Tali Tiga](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Scout_bridge_7965.jpg/640px-Scout_bridge_7965.jpg)

*   **Cara Melintasi:**
    Berjalan biasa ke depan (bukan menyamping). Kedua tangan memegang tali kiri dan kanan. Badan condong sedikit ke depan. Sangat cocok untuk menyeberangkan pasukan dengan beban ransel tempur yang berat.
`
              },
              {
                id: 'mountaineering-3-article-5',
                title: 'Peluncuran',
                content: `
### Peluncuran (Flying Fox)
Teknik menyeberang dengan meluncur cepat dari tempat tinggi ke tempat rendah memanfaatkan gaya gravitasi.

![Peluncuran](https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Abseiling_Greece.jpg/640px-Abseiling_Greece.jpg)

*   **Fungsi Utama:**
    Evakuasi korban atau logistik dengan cepat. Juga untuk pendaratan pasukan secara cepat (misal dari helikopter - fast roping).

*   **Peralatan:**
    Membutuhkan katrol (pulley) khusus agar tidak terjadi gesekan panas yang merusak tali. Pengereman dilakukan di ujung lintasan menggunakan sistem *belay* atau jaring penahan.
`
              },
              {
                id: 'mountaineering-3-article-6',
                title: 'Hand Traverse',
                content: `
### Hand Traverse
Teknik bergerak menyamping (traverse) pada tebing batu hanya dengan mengandalkan pegangan tangan dan pijakan kaki pada celah tebing, tanpa bantuan tali jembatan.

![Hand Traverse](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Climber_with_equipment.jpg/640px-Climber_with_equipment.jpg)

*   **Kapan Digunakan?**
    Saat menyusuri tebing pantai (coasteering) atau menghindari rintangan air di bawah tebing.
`
              }
            ]
          }
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
        ],
        syllabus: [
          {
            id: 'mountaineering-4-modul-1',
            title: 'Pelintasan Basah',
            items: [
              {
                id: 'mountaineering-4-article-1',
                title: 'Melintasi Rawa',
                content: `
### Karakteristik Rawa
Rawa adalah daerah rendah yang tergenang air dan biasanya tertutup vegetasi lebat. Dasarnya bisa berupa lumpur dalam yang berbahaya (lumpur hisap).

![Melintasi Rawa](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Climber_with_equipment.jpg/640px-Climber_with_equipment.jpg)

*   **Teknik Melintas:**
    1.  **Tongkat Duga:** Selalu gunakan tongkat panjang untuk mengecek kedalaman lumpur di depan sebelum melangkah.
    2.  **Pijakan Akar:** Usahakan menginjak akar-akar pohon yang menjalar di permukaan lumpur.
    3.  **Merayap:** Jika lumpur sangat dalam, jangan berjalan tegak. Tiaraplah dan merayap (berenang di atas lumpur) untuk membagi berat badan agar tidak terperosok.
    4.  **Lumpur Hisap:** Jika terjebak, **JANGAN MERONTA**. Tenangkan diri, rebahkan badan ke belakang atau depan perlahan untuk memperluas permukaan, lalu gerakkan kaki pelan-pelan seperti mengayuh sepeda untuk naik ke permukaan.
`
              },
              {
                id: 'mountaineering-4-article-2',
                title: 'Melintasi Sungai (Tanpa Tali)',
                content: `
### Teknik Menyeberang Sungai Tanpa Tali
Menyeberang sungai beraus deras sangat berbahaya. Jangan pernah meremehkan kekuatan air.

![Melintasi Sungai](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Climber_with_equipment.jpg/640px-Climber_with_equipment.jpg)

*   **Membaca Sungai:**
    Cari bagian sungai yang **melebar** dan **dangkal**. Hindari tikungan luar sungai karena arusnya paling kuat dan dalam. Hindari bagian yang banyak batu besar licin.

*   **Teknik Perorangan:**
    Gunakan tongkat yang kuat sebagai "kaki ketiga". Tancapkan tongkat di bagian hulu (atas arus) untuk memecah arus sebelum menghantam kaki. Berjalanlah menyamping menghadap arus.

*   **Teknik Beregu (Kereta Manusia):**
    Berbaris memanjang ke belakang (banjar). Orang paling kuat di depan sebagai pemecah arus. Anggota di belakang memegang erat pinggang atau ransel teman di depannya. Bergerak bersamaan.
`
              },
              {
                id: 'mountaineering-4-article-3',
                title: 'Teknik Pelintasan Basah dengan Tali',
                content: `
### Penyeberangan Sungai dengan Tali
Jika arus terlalu deras untuk dilawan dengan berjalan, gunakan tali pengaman yang dibentangkan melintang sungai.

![Penyeberangan Tali](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Climber_with_equipment.jpg/640px-Climber_with_equipment.jpg)

*   **Persiapan:**
    Satu orang perenang kuat (belayer) harus menyeberang lebih dulu membawa ujung tali ke seberang. Setelah tali terpasang kuat di kedua tepi, anggota lain menyeberang.

*   **Teknik Melintas:**
    1.  Kaitkan carabiner (cincin kait) dari harness ke tali bentangan.
    2.  Posisi badan menghadap ke hulu (melawan arus).
    3.  Tangan memegang tali, kaki mengapung di air (jangan menjejak dasar jika dalam).
    4.  Tarik badan menyusuri tali. Arus akan mendorong badan, tapi tali menahannya.
`
              },
              {
                id: 'mountaineering-4-article-4',
                title: 'Penyeberangan dengan Ransel',
                content: `
### Ransel Sebagai Pelampung
Dalam keadaan darurat, ransel (carrier) bisa berfungsi sebagai pelampung yang sangat efektif.

![Ransel Pelampung](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/A_mini_survival_kit_kept_in_a_medium_tin_box.jpg/640px-A_mini_survival_kit_kept_in_a_medium_tin_box.jpg)

*   **Cara Membuat Ransel Pelampung:**
    1.  Kosongkan ransel.
    2.  Masukkan semua barang ke dalam kantong plastik besar (trash bag) yang tebal, ikat rapat agar kedap air.
    3.  Masukkan kembali ke dalam ransel. Udara yang terperangkap di dalam plastik akan membuat ransel mengapung.
    4.  Peluk ransel di dada, gunakan sebagai pelampung saat berenang menyeberang.
`
              },
              {
                id: 'mountaineering-4-article-5',
                title: 'Operasi Perahu Karet (LCR - Landing Craft Rubber)',
                content: `
Melintasi perairan luas atau pendaratan pantai (amfibi) menggunakan perahu karet.

![Perahu Karet](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Climber_with_equipment.jpg/640px-Climber_with_equipment.jpg)

*   **Tim Dayung:**
    Kekompakan adalah kunci. Komandan tim memberi aba-aba "Dayung... Maju!". Semua pendayung harus memasukkan dayung ke air secara bersamaan dan menariknya dengan kekuatan yang sama agar perahu melaju lurus.

*   **Teknik Pendaratan Pantai (Beach Landing):**
    Saat mendekati pantai, perhatikan ombak. Tunggu ombak besar lewat, lalu dayung sekuat tenaga mengikuti punggung ombak menuju pasir pantai. Segera lompat turun dan tarik perahu ke darat sebelum ombak berikutnya datang menyeret kembali ke laut.
`
              }
            ]
          }
        ]
      }
    ],
    richContent: (
      <div className="space-y-12 font-gabarito text-gray-700">
        <div className="bg-red-50 p-6 rounded-2xl border border-red-200 mb-8">
          <h2 className="text-2xl font-bold font-anta text-red-900 mb-4">Krida Mountaineering</h2>
          <p className="leading-relaxed">
            <strong>Mountaineering</strong> adalah kegiatan mendaki gunung dan menyusuri hutan yang membutuhkan fisik prima dan mental baja.
          </p>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: 'Krida Survival',
    image: '/survival.webp',
    description: 'Pengetahuan dan keterampilan bertahan hidup di alam bebas dalam kondisi darurat.',
    details: 'Krida Survival mengajarkan teknik-teknik bertahan hidup di berbagai medan (hutan, gunung, rawa, laut) dengan memanfaatkan sumber daya alam yang tersedia. Materi meliputi identifikasi flora dan fauna, pembuatan bivak, teknik mendapatkan air dan api, serta psikologi survival.',
    materi: [
      'Psikologi Survival',
      'Botani & Zoologi Praktis',
      'Teknik Bivak & Shelter',
      'Air & Api',
      'Survival Kit'
    ],
    tkk: [
      {
        id: 'survival-1',
        title: 'TKK Tumbuhan yang Dapat Dimakan',
        image: '/tkk survival/TKK JENIS-JENIS TUMBUHAN.webp',
        requirements: [
          'Mampu membedakan tumbuhan yang dapat dimakan dan yang beracun.',
          'Mengetahui tumbuhan obat tradisional.',
          'Mampu memanfaatkan tumbuhan untuk kebutuhan survival.'
        ],
        syllabus: [
          {
            id: 'survival-1-modul-1',
            title: 'Botani Praktis',
            items: [
              {
                id: 'survival-1-article-1',
                title: 'Botani Praktis',
                content: `
### Membedakan Tumbuhan
Membedakan tumbuhan beracun dan tidak.
*   **Ciri-ciri Umum Tumbuhan Beracun (Hindari):**
    *   Mengeluarkan getah putih seperti susu (kecuali nangka, sukun, sawo).
    *   Warna mencolok.
    *   Bau menyengat.
`
              },
              {
                id: 'survival-1-article-2',
                title: 'Bagian yang Dimakan',
                content: `
### Bagian Tumbuhan Pangan
*   **Umbi:** Talas, ubi jalar liar.
*   **Batang Muda (Rebung):** Bambu, pisang.
*   **Daun Muda (Pucuk):** Pakis, melinjo.
*   **Bunga:** Turi, pisang (jantung).
*   **Buah:** Arbei, markisa.
`
              },
              {
                id: 'survival-1-article-3',
                title: 'Contoh Tumbuhan',
                content: `
### Tumbuhan Survival Populer
*   **Pakis (Paku Sayur):** Daun muda yang melingkar bisa dimakan.
*   **Begonia:** Batang mengandung air dan rasanya asam segar.
*   **Pohon Pisang:** Bonggol (bagian putih di bawah) dan jantung pisang bisa dimakan.
*   **Rotan:** Pucuk muda (umbut) bisa dibakar atau direbus.
`
              },
              {
                id: 'survival-1-article-4',
                title: 'Uji Makan (Edibility Test)',
                content: `
### Prosedur Mencicipi Tumbuhan Asing
Jika terpaksa memakan tumbuhan yang tidak dikenal, lakukan langkah berikut:
1.  **Oles Kulit:** Oleskan getah/daun di kulit sensitif, tunggu reaksi gatal/panas.
2.  **Oles Bibir:** Oleskan sedikit di bibir.
3.  **Ujung Lidah:** Tempelkan di ujung lidah.
4.  **Telan Sedikit:** Makan sedikit saja.
5.  **Tunggu Reaksi:** Tunggu beberapa jam sebelum memakan lebih banyak.
`
              }
            ]
          }
        ]
      },
      {
        id: 'survival-2',
        title: 'TKK Jenis-Jenis Binatang',
        image: '/tkk survival/TKK JENIS-JENIS BINATANG.webp',
        requirements: [
          'Mampu mengidentifikasi jejak binatang.',
          'Mengetahui cara membuat perangkap.',
          'Memahami bahaya binatang berbisa.'
        ],
        syllabus: [
          {
            id: 'survival-2-modul-1',
            title: 'Zoologi Praktis',
            items: [
              {
                id: 'survival-2-article-1',
                title: 'Zoologi Praktis',
                content: `
### Mengenal Perilaku Binatang
Memahami kebiasaan binatang hutan membantu dalam berburu dan menghindari bahaya. Binatang biasanya aktif pada pagi dan sore hari, serta berkumpul di dekat sumber air.
`
              },
              {
                id: 'survival-2-article-2',
                title: 'Jejak (Tracks)',
                content: `
### Membaca Jejak
Membaca jejak kaki di tanah basah untuk mengetahui jenis binatang dan arah gerak.
*   **Jejak Kuku Belah:** Babi hutan, rusa, kancil.
*   **Jejak Bantalan:** Macan, kucing hutan (kuku tidak terlihat).
*   **Jejak Cakar:** Anjing hutan, beruang.
`
              },
              {
                id: 'survival-2-article-3',
                title: 'Perangkap (Trapping)',
                content: `
### Membuat Jerat Sederhana
Membuat jerat sederhana (snare) dari tali atau rotan untuk menangkap hewan kecil (ayam hutan, kelinci) guna survival.
*   **Jerat Leher:** Menggunakan simpul hidup yang mengencang saat ditarik.
*   **Pemicu:** Menggunakan ranting lentur sebagai pegas.
`
              },
              {
                id: 'survival-2-article-4',
                title: 'Binatang Berbahaya',
                content: `
### Menghindari Bahaya
*   **Ular Berbisa:** Waspada di semak-semak dan tumpukan kayu.
*   **Kalajengking & Lipan:** Periksa sepatu sebelum dipakai.
*   **Hewan Buas:** Hindari konfrontasi, jangan lari membelakangi.
`
              }
            ]
          }
        ]
      },
      {
        id: 'survival-3',
        title: 'TKK Survival Hutan Gunung',
        image: '/tkk survival/TKK SURVIVAL HUTAN GUNUNG.webp',
        requirements: [
          'Mampu mengatasi kepanikan (STOP).',
          'Mampu membuat bivak.',
          'Mampu membuat api dan mencari air.'
        ],
        syllabus: [
          {
            id: 'survival-3-modul-1',
            title: 'Teknik Bertahan Hidup',
            items: [
              {
                id: 'survival-3-article-1',
                title: 'Psikologi Survival',
                content: `
### STOP
Mengendalikan panik dengan prosedur **STOP**:
*   **S - Sit (Duduk):** Tenangkan diri, istirahat.
*   **T - Thinking (Berpikir):** Analisa situasi dan persediaan.
*   **O - Observe (Observasi):** Amati lingkungan sekitar.
*   **P - Plan (Rencana):** Buat rencana tindakan.
`
              },
              {
                id: 'survival-3-article-2',
                title: 'Bivak (Shelter)',
                content: `
### Tempat Berlindung Darurat
Membuat tempat berlindung darurat dari bahan alam (daun, ranting) atau ponco/flysheet.
*   **Bivak Alam:** Menggunakan rangka kayu dan atap daun lebar/ijuk.
*   **Bivak Ponco:** Menggunakan jas hujan ponco yang dibentangkan dengan tali.
`
              },
              {
                id: 'survival-3-article-3',
                title: 'Api',
                content: `
### Teknik Membuat Api
*   **Tanpa Korek:** Fire starter (magnesium), gesekan kayu (bow drill).
*   **Jenis Api:**
    *   *Api Masak:* Kecil dan terpusat.
    *   *Api Hangat:* Besar untuk malam hari.
    *   *Api Sinyal:* Menghasilkan asap tebal (siang) atau cahaya terang (malam).
`
              },
              {
                id: 'survival-3-article-4',
                title: 'Air',
                content: `
### Sumber Kehidupan
*   **Mencari Air:** Mata air, embun di daun, akar gantung (liana), batang pisang.
*   **Penjernihan:** Saring air keruh menggunakan kain, pasir, dan arang. Rebus hingga mendidih untuk membunuh bakteri.
`
              }
            ]
          }
        ]
      },
      {
        id: 'survival-4',
        title: 'TKK Survival Rawa Laut',
        image: '/tkk survival/TKK SURVIVAL RAWA LAUT.webp',
        requirements: [
          'Memahami karakteristik rawa dan laut.',
          'Mampu mendapatkan air tawar di pantai.',
          'Mengetahui biota laut berbahaya.'
        ],
        syllabus: [
          {
            id: 'survival-4-modul-1',
            title: 'Survival Pesisir',
            items: [
              {
                id: 'survival-4-article-1',
                title: 'Karakteristik Rawa/Laut',
                content: `
### Tantangan Pesisir
*   **Pasang Surut:** Perhatikan jadwal pasang surut agar tidak terjebak.
*   **Lumpur Hisap:** Hindari area lumpur yang dalam di muara sungai.
*   **Dehidrasi:** Panas matahari dan angin laut mempercepat penguapan cairan tubuh.
`
              },
              {
                id: 'survival-4-article-2',
                title: 'Air Tawar',
                content: `
### Air Tawar di Pantai
*   **Destilasi Air Laut:** Menguapkan air laut dan menampung embunnya.
*   **Menggali Pasir:** Menggali di batas pasang tertinggi (air payau yang tersaring pasir).
`
              },
              {
                id: 'survival-4-article-3',
                title: 'Makanan',
                content: `
### Sumber Makanan Laut
Mencari kerang, siput, kepiting, dan ikan di area pasang surut.
*   **Kerang/Siput:** Rebus matang.
*   **Ikan:** Pancing atau tombak.
`
              },
              {
                id: 'survival-4-article-4',
                title: 'Bahaya',
                content: `
### Biota Berbahaya
*   **Ubur-ubur:** Sengatan gatal/panas.
*   **Ikan Batu:** Duri beracun, menyamar di karang.
*   **Ular Laut:** Sangat berbisa.
*   **Buaya Muara:** Predator puncak di area rawa/muara.
`
              }
            ]
          }
        ]
      },
      {
        id: 'survival-5',
        title: 'TKK Survival Kit',
        image: '/tkk survival/TKK SURVIVAL KIT.webp',
        requirements: [
          'Mampu menyusun survival kit.',
          'Memahami fungsi alat survival.',
          'Mampu packing survival kit.'
        ],
        syllabus: [
          {
            id: 'survival-5-modul-1',
            title: 'Perlengkapan Survival',
            items: [
              {
                id: 'survival-5-article-1',
                title: 'Peralatan Wajib',
                content: `
### Alat Penyelamat
*   **Pisau Lipat:** Serbaguna.
*   **Korek Api:** Waterproof/anti air.
*   **Peluit:** Sinyal suara.
*   **Cermin Sinyal:** Sinyal cahaya (heliograph).
*   **Obat-obatan Pribadi:** P3K mini.
*   **Jarum Benang:** Perbaikan pakaian/luka darurat.
`
              },
              {
                id: 'survival-5-article-2',
                title: 'Packing',
                content: `
### Pengemasan
Cara mengemas survival kit dalam wadah kecil dan kedap air (kaleng/kotak plastik) yang selalu dibawa di badan (saku/ikat pinggang), bukan di dalam tas besar (carrier), agar tetap ada jika tas hilang.
`
              },
              {
                id: 'survival-5-article-3',
                title: 'Fungsi',
                content: `
### Penggunaan Kreatif
Menggunakan alat sederhana untuk berbagai kebutuhan darurat. Contoh: Kondom untuk wadah air, cermin untuk sinyal, benang gigi untuk tali pancing yang kuat.
`
              }
            ]
          }
        ]
      },
      {
        id: 'survival-6',
        title: 'TKK Sanjak',
        image: '/tkk survival/TKK SANJAK.webp',
        requirements: [
          'Mampu membaca tanda alam.',
          'Menguasai navigasi alami.',
          'Memahami isyarat SAR.'
        ],
        syllabus: [
          {
            id: 'survival-6-modul-1',
            title: 'Seni Membaca Alam',
            items: [
              {
                id: 'survival-6-article-1',
                title: 'Seni Membaca Alam',
                content: `
### Prediksi Cuaca
Memprediksi cuaca dari tanda-tanda alam:
*   **Awan:** Awan gelap bergulung (Cumulonimbus) pertanda badai.
*   **Perilaku Hewan:** Burung terbang rendah, semut naik ke tempat tinggi.
*   **Arah Angin:** Perubahan arah angin mendadak.
`
              },
              {
                id: 'survival-6-article-2',
                title: 'Navigasi Alami',
                content: `
### Arah Tanpa Kompas
Menentukan arah mata angin tanpa kompas:
*   **Matahari:** Terbit di Timur, terbenam di Barat.
*   **Rasi Bintang:** Pari/Crux (Selatan), Orion (Barat/Timur).
*   **Lumut:** Lumut di pohon biasanya lebih tebal di sisi Timur (terkena sinar pagi) atau sisi yang lembab.
`
              },
              {
                id: 'survival-6-article-3',
                title: 'Isyarat SAR',
                content: `
### Sinyal Darurat
Membuat tanda sinyal darurat untuk pesawat penyelamat:
*   **Asap:** Tiga kepulan asap (tanda bahaya).
*   **Cermin:** Pantulan cahaya matahari.
*   **Simbol Tanah:** Membuat tulisan "SOS" atau "X" (butuh medis) yang besar dan kontras di tanah lapang.
`
              }
            ]
          }
        ]
      }
    ],
    richContent: (
      <div className="space-y-12 font-gabarito text-gray-700">
        <div className="bg-red-50 p-6 rounded-2xl border border-red-200 mb-8">
          <h2 className="text-2xl font-bold font-anta text-red-900 mb-4">Krida Survival</h2>
          <p className="leading-relaxed">
            <strong>Survival</strong> bukan hanya tentang bertahan hidup, tapi tentang semangat pantang menyerah. "Jungle survival" adalah kemampuan wajib bagi setiap anggota Saka Wira Kartika.
          </p>
        </div>
      </div>
    )
  },
  {
    id: 5,
    title: 'Krida Penanggulangan Bencana',
    image: '/pba.webp',
    description: 'Kesiapsiagaan dan keterampilan dalam penanggulangan bencana serta pertolongan pertama.',
    details: 'Krida Penanggulangan Bencana (PBA) melatih anggota untuk menjadi relawan yang tanggap dan terampil dalam situasi bencana. Materi mencakup manajemen bencana, pertolongan pertama gawat darurat (PPGD), evakuasi, dapur umum, dan komunikasi radio.',
    materi: [
      'Manajemen Penanggulangan Bencana',
      'Pertolongan Pertama (PPGD)',
      'Evakuasi & Transportasi Korban',
      'Dapur Umum',
      'Komunikasi Radio'
    ],
    tkk: [
      {
        id: 'pba-1',
        title: 'TKK Manajemen Penanggulangan Bencana',
        image: '/tkk pba/TKK MANAJEMEN PENANGGULANGAN BENCANA.webp',
        requirements: [
          'Memahami siklus penanggulangan bencana (pra, saat, pasca).',
          'Mengetahui potensi bencana di daerahnya.',
          'Mampu melakukan kaji cepat (rapid assessment).'
        ],
        syllabus: [
          {
            id: 'pba-1-modul-1',
            title: 'Manajemen Penanggulangan Bencana',
            items: [
              {
                id: 'pba-1-article-1',
                title: 'Penanggulangan Bencana',
                content: `
Penanggulangan bencana adalah kewajiban bersama antara pemerintah dan masyarakat yang didasarkan pada partisipasi dan dukungan. Fokus utamanya ada pada tahap sebelum terjadinya bencana (pencegahan, penjinakan, kesiapsiagaan) untuk memperkecil dampak. Tujuannya adalah mengurangi penderitaan dan meningkatkan kehidupan masyarakat secara lahir batin.
`
              },
              {
                id: 'pba-1-article-2',
                title: 'Jenis, Sifat, dan Tingkat Bencana',
                content: `
* **Jenis Bencana:**
    * **Bencana Alam:** Disebabkan oleh fenomena alam (geografis, biologis, seismik, hidrologis). Contoh: Gempa bumi, tsunami, letusan gunung berapi, banjir, kekeringan, wabah penyakit.
    * **Bencana Ulah Manusia:** Disebabkan oleh proses teknologi atau interaksi manusia yang berdampak negatif. Contoh: Limbah pabrik, polusi, kebakaran, kecelakaan lalu lintas.
* **Sifat Bencana:**
    * **Terbatas:** Kerusakan harta benda sebagian atau korban jiwa tidak banyak.
    * **Dahsyat (Luar Biasa):** Menimbulkan korban jiwa sangat besar, hilangnya harta benda, dan kerusakan sarana prasarana luas.
* **Tingkat Bencana:**
    * **Lokal (Setempat):** Terjadi di Kabupaten/Kota, dampak terbatas pada masyarakat setempat.
    * **Provinsi:** Terjadi di beberapa daerah dalam satu provinsi, dampak dirasakan satu wilayah provinsi.
    * **Nasional:** Terjadi di beberapa wilayah, dampak dirasakan secara nasional.
`
              },
              {
                id: 'pba-1-article-3',
                title: 'Pentahapan Penanggulangan Bencana',
                content: `
1.  **Sebelum Bencana:**
    * **Preventif (Pencegahan):** Penyebarluasan peraturan perundang-undangan dan pembuatan peta rawan bencana.
    * **Mitigasi (Penjinakan):** Upaya fisik mengurangi dampak, seperti pembuatan cek dam, rehabilitasi sungai, pengawasan IMB, dan relokasi penduduk.
    * **Kesiapsiagaan:** Latihan/gladi Pramuka dan masyarakat, serta pelatihan personil Satlak/Satgas PBP.
2.  **Saat Bencana:**
    * **Peringatan Dini:** Memberi kesempatan penduduk menyelamatkan diri.
    * **Tanggap Darurat:** Pengerahan unsur penanggulangan untuk pencarian, pertolongan (SAR), penyelamatan korban, dan pemberian bantuan (pangan, sandang, obat, barak darurat).
3.  **Sesudah Bencana:**
    * **Rehabilitasi:** Memfungsikan kembali sarana umum yang rusak.
    * **Rekonstruksi:** Membangun kembali kerusakan menjadi lebih baik dari sebelumnya untuk antisipasi bencana masa depan.
`
              }
            ]
          }
        ]
      },
      {
        id: 'pba-2',
        title: 'TKK Perjalanan dan Penanganan Gawat Darurat',
        image: '/tkk pba/TKK PERJALANAN DAN PENANGANAN GAWAT DARURAT.webp',
        requirements: [
          'Menguasai teknik Bantuan Hidup Dasar (BHD).',
          'Mampu menangani pendarahan, patah tulang, dan syok.',
          'Mampu melakukan transportasi korban.'
        ],
        syllabus: [
          {
            id: 'pba-2-modul-1',
            title: 'Perjalanan dan Penanganan Gawat Darurat (PPGD)',
            items: [
              {
                id: 'pba-2-article-1',
                title: 'Pengertian dan Persiapan PPGD',
                content: `
PPGD mencakup kesiapan kesehatan dalam perjalanan yang meliputi fisik, mental, dan pengetahuan gizi.
* **Kesiapan Fisik:** Penolong harus prima, mengetahui teknik P3K, dan mampu bertindak cepat/tepat.
* **Kesiapan Mental:** Percaya diri, peka lingkungan, mengedepankan akal sehat, dan mampu mengendalikan diri.
* **Pengetahuan Kesehatan:** Memahami teknik P3K, penggunaan obat, jenis penyakit, makanan layak konsumsi, nutrisi, dan teknik evakuasi korban.
`
              }
            ]
          }
        ]
      },
      {
        id: 'pba-3',
        title: 'TKK Tata Cara Memasak',
        image: '/tkk pba/TKK TATA CARA MEMASAK.webp',
        requirements: [
          'Mampu memasak untuk orang banyak (dapur umum).',
          'Mengetahui gizi dan kebersihan makanan darurat.',
          'Mampu menggunakan peralatan dapur lapangan.'
        ],
        syllabus: [
          {
            id: 'pba-3-modul-1',
            title: 'Tata Cara Memasak',
            items: [
              {
                id: 'pba-3-article-1',
                title: 'Kompor Lapangan T-50',
                content: `
Kompor berbahan bakar minyak tanah dengan kapasitas tangki 16 liter.
* **Komponen:** Peti, Tangki bahan bakar, 2 Brander, 2 Tungku, 1 Pompa tangan.
* **Cara Menyalakan:**
    1.  Isi tangki (maks 16 liter), hubungkan selang ke brander.
    2.  Pompa tangki hingga tekanan 3 kg/cm².
    3.  Buka kran sedikit untuk mengalirkan minyak ke mangkuk penyala brander, lalu tutup kembali.
    4.  Bakar minyak di mangkuk penyala (pemanasan awal/pre-heating) sampai api mengecil.
    5.  Buka kran perlahan. Pastikan yang keluar adalah **gas**, bukan minyak cair. Jika minyak cair keluar (api menyembur besar), tutup kran dan ulangi pemanasan.
* **Mengatasi Gangguan:**
    * *Api Mati:* Tutup kran, periksa minyak, nyalakan ulang dengan penyulut sambil menyogok lubang spuyer.
    * *Api Menyembur Besar:* Kran dibuka terlalu besar saat brander belum panas. Tutup kran, tunggu api mengecil, buka perlahan.
    * *Api Tidak Rata:* Spuyer rusak, harus diganti.
    * *Kebakaran:* Tutup kran utama. Jangan siram air, gunakan karung basah.
`
              },
              {
                id: 'pba-3-article-2',
                title: 'Alat Dapur Lapangan',
                content: `
* **Ketel 100:** Aluminium, kapasitas masak nasi 18 kg (untuk 100 orang).
* **Ketel 50:** Aluminium, untuk memasak sayur.
* **Ketel 40:** Aluminium, untuk memasak air atau mengangkut masakan.
`
              },
              {
                id: 'pba-3-article-3',
                title: 'Teknik Dasar Memasak',
                content: `
* **Hidrat Arang (Nasi):** Saat dipanaskan molekul mengikat air (mengkanji). Jika dibiarkan lama akan memisah (basi). Masak sesuai kebutuhan sekali makan.
* **Protein:** Paling cepat busuk. Harus segera dimakan setelah dimasak.
* **Lemak:** Mudah tengik. Sumber kalori terbesar.
* **Vitamin/Mineral:** Perhatikan saat mencuci dan memasak agar tidak larut atau rusak oleh panas berlebih.
`
              },
              {
                id: 'pba-3-article-4',
                title: 'Tata Cara Memasak (Nasi, Lauk, Sayur)',
                content: `
* **Nasi:** Cuci beras (jangan direndam agar Vitamin B1 tidak hilang). Masukkan ke air mendidih atau diaron dulu. Jika diaron, air 2-3 cm di atas beras. Kukus di dandang sampai matang.
* **Daging:** Cuci, buang serat alot, rebus dengan temperatur rendah, potong miring memotong serat.
* **Ikan:** Buang sisik, insang, dan isi perut. Beri cuka/kunyit untuk hilangkan amis.
* **Sayur:** Cuci sebelum diracik/dipotong. Jangan rendam sayuran yang sudah dipotong (kecuali untuk mempertahankan warna dengan air garam). Masukkan sayuran keras terlebih dahulu.
`
              },
              {
                id: 'pba-3-article-5',
                title: 'Cara Menyajikan',
                content: `
* **Cara Barat:** Pembuka (Appetizer) -> Pokok (Main Course) -> Selingan -> Penutup (Dessert/Kopi).
* **Cara China:** 4 Makanan dingin -> Udang/Ginjal -> 8 Hidangan Pokok (Kepiting, Itik, Ikan, Nasi) -> Hidangan Manis.
* **Sistem Penghidangan:**
    * *Prasmanan:* Mengambil sendiri di meja panjang.
    * *Kafetaria:* Satu garis antrean mengambil makanan.
    * *Meja:* Peserta dibagi kelompok meja (6-10 orang).
    * *Lapangan:* Menggunakan alat makan perorangan (mestin) atau *lunch tray*.
`
              }
            ]
          }
        ]
      },
      {
        id: 'pba-4',
        title: 'TKK Komunikasi Radio',
        image: '/tkk pba/TKK KOMUNIKASI RADIO.webp',
        requirements: [
          'Mampu mengoperasikan radio komunikasi (HT/Rig).',
          'Memahami prosedur komunikasi radio.',
          'Mampu menyampaikan berita keadaan darurat.'
        ],
        syllabus: [
          {
            id: 'pba-4-modul-1',
            title: 'Pengetahuan Komunikasi Radio',
            items: [
              {
                id: 'pba-4-article-1',
                title: 'Radio Komunikasi (Carima PRC-1077)',
                content: `
Radio komunikasi adalah alat untuk mengirim dan menerima berita.
* **Bagian-Bagian Panel Depan:** Saklar Daya, Saklar Fungsi, Saklar Kanal/Channel, Saklar pengatur frekuensi (MHz dan KHz), Tombol pengatur kanal, Penampil frekuensi, Pengatur volume, Konektor audio, Dudukan antena, Konektor antena 50 Ohm, dan Konektor daya.
* **Perlengkapan:** Tas pembawa (ST-138), Antena (AT-271), Kotak baterai, Handset (H-250/U), Tas perlengkapan (CW-503).
`
              },
              {
                id: 'pba-4-article-2',
                title: 'Mengoperasikan Radio Komunikasi',
                content: `
1.  **Menghidupkan:** Putar saklar daya ke kanan hingga frekuensi muncul di layar.
2.  **Memilih Frekuensi:** Putar saklar pengatur frekuensi ke atas (up) atau bawah (down) sesuai keinginan.
3.  **Mengirim Berita:** Tekan saklar PTT (*Push To Talk*) pada handset untuk berbicara. Lepas PTT untuk mendengarkan lawan bicara.
4.  **Mematikan:** Putar saklar daya ke kiri hingga layar mati.
`
              },
              {
                id: 'pba-4-article-3',
                title: 'Prosedur Kirim Terima Berita',
                content: `
Tata cara komunikasi harus memperhatikan prinsip **IKIT**:
* **I**rama: Bagi kalimat agar mudah diterima.
* **K**ecepatan: Bicara dengan kecepatan memadai agar jelas dicatat.
* **I**si Suara: Bicara lebih kuat dari percakapan biasa, tapi jangan berteriak.
* **T**inggi Nada: Nada tinggi biasanya lebih jelas didengar.
* **Abjad Fonetik:** Menggunakan standar (A=Alfa, B=Bravo, C=Charlie, dst) untuk mengeja kata agar tidak salah tafsir.
`
              }
            ]
          }
        ]
      }
    ],
    richContent: (
      <div className="space-y-12 font-gabarito text-gray-700">
        <div className="bg-red-50 p-6 rounded-2xl border border-red-200 mb-8">
          <h2 className="text-2xl font-bold font-anta text-red-900 mb-4">Krida PBA</h2>
          <p className="leading-relaxed">
            <strong>Bencana</strong> adalah urusan bersama. Saka Wira Kartika hadir sebagai garda terdepan relawan muda yang siap diterjunkan kapan saja.
          </p>
        </div>
      </div>
    )
  }
];
