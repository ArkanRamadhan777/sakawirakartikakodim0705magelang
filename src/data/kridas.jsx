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
        syllabus: []
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
        syllabus: []
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
        syllabus: []
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
        syllabus: []
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
                title: 'Macam-Macam Simpul dan Jerat',
                content: `
# BAB II: SYARAT KECAKAPAN KHUSUS TALI-TEMALI

## Pokok Bahasan: Simpul

Simpul adalah suatu bentukan tertentu (lilitan, tekukan) yang dibuat pada tali yang difungsikan untuk menambatkan tali pada anchor, maupun untuk keperluan tertentu. Pengetahuan tentang simpul dan kemampuan membuat simpul dengan mudah dan cepat adalah bagian penting yang harus dimiliki seorang anggota Pramuka. Menguasai dan memahami simpul yang penting saja (yang sering dipakai, dan dapat digunakan pada saat emergency) jauh lebih baik daripada hanya mengenal bermacam-macam simpul tanpa tahu fungsi dan kegunaannya.

Seorang anggota Pramuka yang baik harus ingat seperti apa simpul yang baik, dan tahu cara meneliti lagi apakah simpul yang dibuat/akan dipergunakan sudah benar atau belum. Faktor keamanan yang dimaksud adalah kemampuan simpul tetap terikat kuat setelah dibebani. Beberapa simpul dalam bentuk dasarnya cenderung kehilangan fungsi kerjanya bila tidak diberi beban lilitannya.

### Macam-macam Simpul

#### 1. Simpul Hidup (Overhand Knot)
Digunakan sebagai simpul pada ujung tali untuk menjaga agar jalinan tali di ujung tali tidak terurai serta menjaga tali dari pergeseran. Simpul ini mendasari pembuatan simpul-simpul lainnya seperti simpul mati dan simpul nelayan atau simpul kembar.

**Cara membuatnya:**
1. Buat simpul biasa pada kedua ujung tali.
2. Tekuk/lipat kedua ujung simpul, sehingga ujung simpul sejajar dengan bagian tali yang panjang.
3. Tarik kedua tali secara berlawanan, sehingga sambungan menjadi kencang.

#### 2. Simpul Hidup dengan Sosok
Digunakan untuk menyambung tali yang sama besarnya, dengan tujuan agar sambungan tersebut mudah dilepaskan kembali.

**Cara membuatnya:**
1. Buat simpul hidup pada ujung tali.
2. Salah satu ujung pendeknya putar ke yang berlawanan sehingga membentuk sosok baru.
3. Tarik bagian tali yang panjang berlawanan arah dengan kuat-kuat, sehingga sambungan menjadi kencang.

#### 3. Simpul Anyam (Sheet Bend)
Digunakan untuk menyambung dua buah utas tali kering yang ukurannya tidak sama besar.

**Cara membuatnya:**
*(Langkah-langkah pembuatan tidak tercantum dalam sumber dokumen)*

#### 4. Simpul Tenun Berganda / Simpul Anyam Rangkap (Double Sheet Bend)
Digunakan untuk menyambung dua buah utas tali kering yang ukurannya tidak sama besar, terutama jika perbedaan ukuran tersebut sangat mencolok (yang satu sangat besar dan satunya sangat kecil), untuk meningkatkan daya ikat (kekuatan) tali dalam menyimpul.

#### 5. Simpul Penarik
Digunakan untuk menambatkan benda/hewan pada patok.

**Cara membuatnya:**
*(Langkah-langkah pembuatan tidak tercantum dalam sumber dokumen)*

#### 6. Simpul Kelapa
Digunakan untuk menyambung tali yang sama besar agar sambungan lebih kuat.

**Cara membuatnya:**
1. Buat mata pada salah satu ujung tali yang akan disambung.
2. Buat mata satu lagi pada ujung tali yang lain, dengan jalan menyusupkan melalui sela-sela mata pada tali yang pertama secara bersilangan.
3. Tarik kedua ujung tali secara berlawanan.

**Alternatif cara:**
1. Buat dua buah mata di tengah-tengah tali yang sejajar.
2. Geser mata dengan jalan menganyamnya.
3. Buat sosok yang besar dari kedua mata yang telah dianyam tersebut.
4. Dari kedua ujung tali masing-masing buat mata yang melilit sosok yang baru dibuat.

#### 7. Simpul Aceh
Digunakan untuk membawa atau mengikat tawanan.

**Cara membuatnya:**
1. Buat dua buah mata di tengah-tengah tali yang sejajar.
2. Geserkan kedua mata dengan cara menganyam.
3. Buat sosok yang besar dari kedua mata yang dianyam, masukkan ke bahu kanan atau bahu kiri tawanan.
4. Tarik kedua ujung tali sehingga simpul mengikat dengan ketat pada bahu tawanan.

#### 8. Simpul Mati (Reef Knot / Square Knot)
Digunakan untuk menyambung tali yang basah atau licin, mengakhiri suatu ikatan, atau menali perban segi tiga (mitela) saat melakukan PPPK.

**Cara membuatnya:**
1. Letakkan ujung tali merah di atas ujung tali biru.
2. Lingkarkan ujung tali merah ke bawah tali biru kemudian lingkarkan lagi ke atas.
3. Balik arah ujung tali biru yang tadinya ke arah kanan menjadi ke arah kiri. Demikian juga dengan ujung tali merah, balik ke arah kanan dan letakkan ujungnya di atas ujung tali biru.
4. Ulangi langkah pada nomor dua.
5. Tarik masing-masing ujung tali sehingga simpul menjadi kencang.

#### 9. Simpul Mata dengan Sosok
Digunakan untuk memperkuat ikatan.

**Cara membuatnya:**
1. Buat sosok pada ujung tali.
2. Buat mata pada ujung tali yang pendek.
3. Belitkan kaki mata pada bagian tali yang panjang dan susupkan melalui mata.
4. Belitkan sekali lagi kaki mata pada kaki sosok dan susupkan ke mata lagi.

### Macam-macam Jerat

#### 10. Jerat Rangkap
Digunakan untuk membuat tangga dari tali, mencabut patok.

**Cara membuatnya:**
1. Buat mata yang sedang di tengah tali.
2. Putarkan mata sehingga berhimpit dan kedudukan kedua ujung tali di antara kedua mata.
3. Masukkan kedua mata pada balok.
4. Tarik kedua ujung tali secara berlawanan.

#### 11. Jerat Tukang Kayu
Digunakan untuk ikat permulaan pada balok.

**Cara membuatnya:**
1. Buat mata pada ujung tali yang melingkar balok, lipat ujung tali pendek melingkar pada tali panjang, lilitkan ujung tali tersebut pada mata secara berulang-ulang.
2. Tarik ujung yang panjang sehingga jerat dengan kuat mengikat pada balok.

#### 12. Jerat Memperpendek Tali
Digunakan untuk memperpendek tali yang terlalu panjang.

**Cara membuatnya:**
1. Buat dua buah sosok secara berurutan di tengah-tengah tali.
2. Dari masing-masing ujung tali, buat mata yang membelit pada sosok yang telah dibuat tersebut.
3. Tarik kedua ujung tali sehingga kencang.

#### 13. Jerat Rangkap Berganda
Digunakan untuk mengikatkan tali pada balok.

**Cara membuatnya:**
1. Buat dua belitan pada balok.
2. Buat belitan sekali lagi pada tali pendek di sisi tali yang panjang.
3. Tarik ujung tali yang pendek dan ujung tali yang panjang.

#### 14. Jerat Mata Kait
Digunakan untuk mengangkat benda dengan bantuan katrol.

**Cara membuatnya:**
1. Buat mata pada tali.
2. Masukkan mata tersebut pada pengait katrol.
3. Tarik katrol, sehingga jerat menjadi kencang.

#### 15. Jerat Tiang Rangkap
Digunakan untuk menambatkan perahu atau hewan pada pohon atau patok.

**Cara membuatnya:**
1. Buat mata pada ujung tali.
2. Buat dua buah sosok pada ujung tali pendek dan selipkan ke dalam mata.
3. Belitkan ujung sosok pada bagian tali yang panjang dan ujungnya selipkan pada mata lagi.

#### 16. Jerat Tangga
Digunakan untuk membuat tangga dari tali.

**Cara membuatnya:**
1. Buat mata pada ujung tali.
2. Belitkan ujung tali panjang pada ujung tali pendek, sehingga berlawanan.
3. Selipkan tongkat pada mata dan tali panjang.
4. Tarik ujung tali pendek dan tali panjang berlawanan.

#### 17. Jerat Sauh
Digunakan untuk mengikat cincin besi/cincin kait.

**Cara membuatnya:**
1. Belitkan ujung tali dua kali pada cincin/balok atau sauh, buat mata pada ujung tali pendek dengan membelitkan pada tali panjang dan susupkan/selipkan pada sela-sela belitan tali dengan cincin.
2. Belitkan ujung tali pendek pada tali panjang beberapa kali dan ujung terakhirnya ikat menjadi satu dengan bagian tali yang panjang.

#### 18. Jerat Setengah
Digunakan untuk mengikat tali pada pohon.

**Cara membuatnya:**
1. Belitkan tali pada balok/pohon.
2. Belitkan ujung tali pendek pada bagian tali panjang secara berulang-ulang.
3. Rapatkan ujung tali pendek dengan tali panjang dan ikat dengan ikat belit.

**Langkah tambahan:**
1. Buat dua buah sosok lagi dengan menarik dua kali sosok pertama secara berlawanan.
2. Puntir sosok dari tali panjang sehingga membentuk mata.
3. Rapatkan sosok dari tali pendek, puntir dan tekuk/lipat masukkan ke dalam mata tali yang panjang.

#### 19. Jerat Mata Rangkap dengan Sosok
Digunakan untuk mengaitkan tali pada katrol.

**Cara membuatnya:**
1. Lipat/tekuk tali menjadi dua bagian.
2. Buat mata dan sosok pada tali yang ditekuk/dilipat.
3. Masukkan sosok kedalam mata dan tekuk keluar.
4. Masukkan kaki sosok dan tali panjang ke sela-sela sosok yang ditekuk.

#### 20. Jerat Angka Delapan dengan Sosok
Digunakan untuk mengaitkan tali pada patok.

**Cara membuatnya:**
1. Buat mata pada ujung tali dan masukkan ke dalam patok.
2. Tekuk ujung tali yang pendek dan buat angka 8.
3. Selipkan sisi ujung tali yang pendek ke dalam mata dan angka delapan.
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
        syllabus: []
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
        syllabus: []
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
        syllabus: []
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
        ],
        syllabus: []
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
        syllabus: []
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
        syllabus: []
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
        syllabus: []
      }
    ],
    richContent: (
      <div className="space-y-12 font-gabarito text-gray-700">
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mb-8">
          <h2 className="text-2xl font-bold font-anta text-slate-800 mb-4">Pendahuluan</h2>
          <p className="leading-relaxed mb-4">
            <strong>Saka Wira Kartika</strong> adalah wadah kegiatan bagi Pramuka Penegak dan Pramuka Pandega untuk meningkatkan kesadaran bela negara melalui pengetahuan dan keterampilan di bidang matra darat. Tujuannya adalah membentuk patriot bangsa yang setia, berbakti, dan menjunjung tinggi nilai luhur bangsa serta tetap menjaga keutuhan Negara Kesatuan Republik Indonesia.
          </p>
          <p className="leading-relaxed mb-4">
            <strong>Matra darat</strong> dapat diartikan sebagai segala aktivitas dan kegiatan yang dilakukan secara terorganisir, perorangan ataupun kelompok yang memanfaatkan kondisi alam di darat seperti hutan, gunung, rawa, dan sungai.
          </p>
          <p className="leading-relaxed">
            Secara bahasa, arti kata <strong>mountaineering</strong> adalah teknik mendaki gunung. Kegiatan mountaineering cukup menantang untuk digeluti, selain wahana kegiatannya yang berada di daerah ketinggian pegunungan yang diwarnai dengan tebing, lembah, ngarai, ceruk, sungai, dan panorama. Untuk melakoni mountaineering ini tentu saja dibutuhkan kesiapan fisik yang mantap, yaitu tubuh dalam kondisi sehat, fit, dan stamina oke.
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
        ],
        syllabus: [
          {
            id: 'survival-1-modul-1',
            title: "SKK Jenis-Jenis Tumbuhan",
            items: [
              {
                id: 'survival-1-article-1',
                title: "Tumbuhan yang Dapat Dimakan",
                content: `**Daftar jenis tumbuhan yang dapat dimakan, dikelompokkan berdasarkan daerah tumbuh:**

**Tumbuhan Rawa Laut:**
* Daun api-api muda
* Jeruk rawa
* Daging buah nipah
* Bunga gebang yang muda
* Buah tanjau

**Tumbuhan Pesisir Pantai:**
* Kelapa
* Ketapang
* Daun beluntas
* Tangkai bunga pohon bumi
* Daun buah putri

**Tumbuhan Rawa Sungai:**
* Nipah
* Sagu
* Aren
* Rebung Bambu
* Macam-macam jamur

**Tumbuhan Rimba Sekunder:**
* Daun ki cemang
* Daun Haria
* Umbut balaka toa
* Umbut Tepuis
* Buah komdang
* Daun Kaliandra
* Daun Simtrong

**Tumbuhan Daerah Pegunungan:**
*(Tidak ada rincian spesifik di bagian ini dalam dokumen)*

**Daftar tambahan tumbuh-tumbuhan dan buah-buahan rimba yang dapat dimakan:**
* Melinjo (tangkil) - Daun-daun.
* Keluwek atau pangi (Buahnya lunak berwarna ungu kehitam-hitaman, tidak dapat dimakan mentah).
* Sukun (Gomo), Nangka, cempedak - Daging buahnya dapat dimakan.
* Bermacam-macam jenis durian.
* Petai dan Jengkol.
* Rambutan hutan.
* Jambu Kelutuk.
* Jambu Monyet.
* Aren.
* Sagu.
* Tayapa (Semacam Ubi Jalar).
* Pisang Monyet (Umbut pohonnya dapat dimakan sebagai sayur).
* Karet (Buah, daunnya dapat dimakan setelah dimasak).
* Sejenis nanas/lidah buaya (Tangkai buah dapat dimakan).
* Daun suji (Akarnya dimakan setelah dibakar/dimasak).
* Gelagah (Daunnya yang masih mudah).
* Rasamala (yang masih muda dan berwarna merah).
* Klanting/panggang (Daun mudah).
* Pohpohan (Daunnya).
* Putat (Daunnya).
* Catok ayam (Daunnya yang muda sekali).
* Pandan hutan/jaksi (Umbutnya).
* Bayam duri (Daun yang mudah).
* Dan lain-lain.

**Tumbuh-tumbuhan yang tidak dapat dimakan (Beracun):**
* Jarak (Racun pada bijinya).
* Pangi/Picung (Seluruh bagian pohon mengandung asam cyaan).
* Kecubung (*Datura metel*) (Mengandung jamur atropin).
* Jamur *Amanita Verna* (Mengandung muskarin).
* Jamur *Psilocybe sp.* (Mengandung philosibin).`
              },
              {
                id: 'survival-1-article-2',
                title: "Tumbuhan yang Mengandung Air & Cara Mengambilnya",
                content: `**Tumbuhan yang mengandung air:**
* Kaktus
* Rotan Cincin
* Ruas bambu
* Mangga
* Manggis
* Jambu air
* Kedondong
* Langsat
* Kelopak daun nipah yang lebar
* Bonggol pisang yang dilobangi

**Cara mengambil tumbuhan yang mengandung air:**

**Tumbuhan kaktus:**
Potong beberapa ujung pohon kaktus yang masih muda, tunggu air menetes, pasang tempat air.

**Tumbuhan rotan cincin:**
Potong tumbuhan rotan cincin muda, tetesan airnya dapat langsung diminum.

**Ruas Bambu:**
* Cari pohon bambu yang masih muda kemudian buat lubang di atas masing-masing ruas dan air akan mengalir dari lubang tersebut.
* Tadahi air yang keluar tersebut dan dapat langsung diminum.

**Kelopak daun nipah yang lebar:**
* Ikat pelepah daun nipah yang muda.
* Potong pelepah daun nipah tersebut dan pukul-pukul pelepah sehingga akan mengeluarkan air.

**Bonggol pisang:**
* Tebang pohon pisang yang agak besar dilubangi bonggolnya/bagian bawah.
* Lubangi bonggol pisang tersebut dengan menggunakan golok/pisau.
* Tunggu beberapa saat hingga lubang bonggol pohon pisang tersebut mengeluarkan air dan airnya dapat diminum.`
              }
            ]
          }
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
        ],
        syllabus: [
          {
            id: 'survival-2-modul-1',
            title: "SKK Jenis-Jenis Binatang",
            items: [
              {
                id: 'survival-2-article-1',
                title: "Jenis-Jenis Binatang dan Alat/Perangkap",
                content: `**Jenis-jenis binatang darat:**
* Macam-macam ular
* Tupai
* Monyet
* Babi
* Kelabang
* Kelinci
* Belalang
* Tikus
* Katak
* Landak
* Musang
* Biawak
* Kadal

**Jenis-jenis binatang air:**
* Ikan
* Siput
* Kepiting
* Kerang
* Ganggang
* Dan lain-lain

**Macam-macam alat / perangkap:**

**Perangkap binatang darat:**
* Perangkap kurungan
* Perangkap getah
* Perangkap jaring kail
* Perangkap kaki rusa
* Perangkap puyuh

**Alat menangkap ikan:**
* Kail
* Tombak
* Sumpit
* Panah
* Bubu
* Jala

**Cara membuat api tanpa korek api:**
* Lensa cembung dengan pertolongan sinar matahari.
* Gesekkan bambu dengan bambu.
* Gesekkan batu dengan batu.
* Menggunakan busur dengan gundik.`
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
          'Memahami & mampu merencanakan dan melaksanakan survival Hutan Gunung.',
          'Mampu survival satu hari satu malam.',
          'Telah melatih seorang Penggalang sehingga memperoleh TKK Survival Hutan Gunung.'
        ],
        syllabus: [
          {
            id: 'survival-3-modul-1',
            title: "SKK Survival Hutan Gunung",
            items: [
              {
                id: 'survival-3-article-1',
                title: "Prinsip-Prinsip Survival dan Teknik Mencari Hubungan",
                content: `**Prinsip-Prinsip Survival (HARUS HIDUP):**
* **H**adapi setiap kesukaran dengan tenang dan bijaksana.
* **A**kal yang sehat adalah senjata yang paling ampuh dalam menghadapi survival.
* **R**asa takut dan panik harus dihilangkan.
* **U**sahakan mencari jalan keluar untuk membebaskan diri dari survival dan bergabung dengan kawan.
* **S**emangat dan keyakinan tetap hidup harus tertanam.
* **H**indari dan jauhi tempat berbahaya yang dapat mengancam keselamatan diri kita dan hormati adat istiadat setempat serta tiru tata cara hidupnya.
* **I**stirahat dan tenangkan pikiran apabila timbul kekacauan.
* **D**engar lihat dan waspada terhadap perangkap alam.
* **U**tamakan kesehatan dan keselamatan diri.
* **P**raktekkan dan latih kembali pengetahuan dan keterampilan Jungle Survival yang pernah didapat.

**Teknik mencari hubungan:**
* Membuat api dan asap untuk menarik perhatian.
* Nyalakan lampu (merupakan alat yang baik apabila mengetahui morse).
* Kain berwarna (sebagai kain panel untuk pesawat terbang atau Semaphore untuk kapal laut).
* Kaca dan benda mengkilat (dapat digunakan sebagai tanda dan morse).
* Peluit (dapat dibunyikan sebagai tanda atau isyarat).
* Meninggalkan tanda-tanda jejak yang dapat dipahami oleh kawan (Huruf SOS, atau menebang hutan membuat lorong 5x5 meter dan membuat api unggun di lorong tersebut).`
              },
              {
                id: 'survival-3-article-2',
                title: "Mencari Air dan Makanan",
                content: `**Mencari Air:**
* **Menggali pada tanah yang gembur** (di daerah lembah).
* **Di padang pasir dan tanah tandus:** Perhatikan indikator (burung, pohon, bekas binatang yang mengais-ngais) atau gunakan kain untuk mengumpulkan embun.
* **Di pegunungan:** Gali pada bekas aliran sungai, ambil lumut dan peras, atau kumpulkan salju.
* **Mengambil air dari tumbuhan:** Batang kaktus, Rotan, Palem, Bambu, Bonggol pohon pisang, Akar alang-alang.

**Mencari Makanan:**
* Tumbuh-tumbuhan yang dapat dimakan (seperti di BAB II).
* Tumbuh-tumbuhan yang tidak dapat dimakan (beracun) (seperti di BAB II).
* Tumbuh-tumbuhan daerah pegunungan (Hutan pinus, biji buah pinus).
* Buah-buahan tropika lainnya yang dapat dimakan tanpa dimasak (Langsep, Mangga, Pala, Manggis, Sawo, Delima, Jambu air/bol, Buah nona, Jamblang, Kenari, Nanas, Beberapa jenis jeruk, Namu-namu, Tomi-tomi, Dan lain-lain).
* Binatang-binatang yang bisa dimakan (Gajah, harimau, badak, tapir, babi hutan, kera, rusa/menjangan, tikus-tikus, ayam alas, dan lain-lain).

**Pengolahan:**
* Semua binatang buas darat, yang berkaki empat dan yang berkuku tebal (Harimau, kera, dll.) harus dikuliti atau rambutnya dibakar.
* Semua reptilia yang berkaki empat dan berkulit belakang keras (Buaya, Biawak) harus dibalik (telentang) agar mudah membuka perut dan memotong dagingnya.
* Semua jenis reptilia (Ular-ular) harus dikuliti (*skinning*) terlebih dahulu mulai dari bagian kepalanya.`
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
          'Memahami & mampu merencanakan dan melaksanakan survival Rawa Laut.',
          'Mampu survival satu hari satu malam.',
          'Telah melatih seorang Penggalang sehingga memperoleh TKK Survival Rawa Laut.'
        ],
        syllabus: [
          {
            id: 'survival-4-modul-1',
            title: "SKK Survival Rawa Laut",
            items: [
              {
                id: 'survival-4-article-1',
                title: "Tumbuhan dan Binatang Rawa Laut, Bahaya, dan Tanda Daratan",
                content: `**Jenis Tumbuh-tumbuhan yang dapat dimakan:**
* **Api-api (*Avicenia alba*):** Daun yang muda dapat dimakan setelah direbus.
* **Tanjan (*Rhizophora Macrenata*):** Buahnya dikupas, diiris tipis, direndam minimal 1 hari, dan dapat dimakan setelah direbus. (Juga termasuk *Bruguiera sp* / buahnya disebut putut, dan *Ceriops tagel*).
* **Jeruk Rawa (*Merope angulata*):** Daun muda untuk penyedap air minum. Buah masak dapat dimakan.
* **Pidada (*Sonneratia*):** Buah masak dapat dimakan mentah.
* **Nipah/Kiwel/Daon:** Daging buahnya yang agak tua dapat dimakan mentah.
* **Gabang/Langkap:** Pondohnya (karangan bunga yang masih muda) dapat dimakan setelah direbus. Cairan dari tangkai karangan bunga dapat diminum.

**Jenis Binatang:**
* **Di rawa-rawa:** buaya, biawak, ular, kera-kera sejenis kucing rawa, tupai rawa, burung-burung, kodok hijau, kepiting, kerang pasir, kerang batu, dan lain-lain.
* **Di sungai-sungai:** buaya, ular, biawak-biawak, kodok hijau, semua jenis bebek hutan (belibis), dan lain-lain.

**Bahaya Alam di Rawa Laut:**
Angin topan, Badai ombak, Arus bawah laut dan pusaran air.

**Tanda-tanda Adanya Daratan:**
* Berkumpulnya awan di suatu tempat.
* Kepulan asap/cahaya api.
* Mercusuar atau bangunan lainnya.
* Perahu nelayan, soro-soro ikan pukat, dll.
* Kelompok pohon nipah, sampah, atau kotoran lain.
* Binatang-binatang (Burung camar, kelompok binatang air yang menyeberang).`
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
          'Memahami & dapat menyebutkan macam alat Survival Kit.',
          'Memahami & dapat menjelaskan alat Survival Kit.',
          'Memahami & dapat menjelaskan bagian alat Survival Kit.',
          'Telah melatih seorang Penggalang sehingga memperoleh TKK Survival Kit.'
        ],
        syllabus: [
          {
            id: 'survival-5-modul-1',
            title: "SKK Survival Kit",
            items: [
              {
                id: 'survival-5-article-1',
                title: "Isi Survival Kit dan Kegunaannya",
                content: `**Materi Survival Kit:**
Satu set peralatan atau kotak/tas peralatan survival yang disesuaikan dengan tujuan perjalanan, dapat dibuat sendiri dalam kaleng tertutup yang bagian dalamnya digosok mengkilat.

**Isi dan Kegunaannya:**
* **Korek Api:** Harus kedap air (dapat dimasukkan ke tabung plastik atau kepala batang korek ditetesi lilin).
* **Lilin:** Baik untuk menyalakan api dan penerangan. Lilin dari lemak dapat dimakan/untuk menggoreng.
* **Batu Api dan Geretan:** Bekerja dalam keadaan basah dan tahan lama.
* **Suryakanta/Kaca Pembesar:** Menimbulkan panas dan api dengan sinar matahari, juga untuk mendeteksi duri.
* **Jarum dan Benang:** Jarum dengan lubang besar, benang kuat, dapat dililit di sekitar jarum.
* **Kail dan Senar:** Beberapa kail ukuran berbeda, senar pancing juga dapat dipakai untuk menjerat.
* **Kompas:** Pilih kompas yang baik dan sederhana (kompas dengan cairan lebih baik).
* **Senter Kecil (*beta light*):** Untuk membaca peta, memasang umpan memancing di malam hari.
* **Kawat Jerat:** Kawat kuningan 60–90 cm, untuk jerat, memasak, dll.
* **Kawat Gergaji:** Ujung pegangan sebaiknya dibuang dan diganti kayu, disimpan di plastik dengan minyak gemuk untuk mencegah karat.
* **Obat-obatan:**
    * **Analgetik:** Penahan sakit (Ponstan, Antalgin, dll.), dosis 1 tablet/6 jam.
    * **Anti Mencret:** (Motilex, Lodya), dosis 2 tablet sekaligus, maks 3 tablet/hari.
    * **Anti Histamin:** Mengatasi alergi, gatal, gigitan serangga (CTM, Benadryl, Insidal), dosis 3 x 1 tablet/hari.
    * **Kalium Permanganat (PK):** Larutan ungu untuk sterilisasi (1 gram/1 liter air), ungu pekat untuk membasmi jamur.
    * **Anti Malaria:** Dikonsumsi hanya di daerah malaria.
    * **Anti Biotik:** Untuk mengobati infeksi (misal Ampicilin 4 x 500 mg/hari selama 4 hari).
* **Pisau Bedah:** Dua bilah pisau bedah dengan ukuran berbeda (gagang dapat dibuat dari kayu).
* **Plester Kupu-kupu:** Untuk merapatkan pinggir luka yang perlu dijahit.
* **Plester:** Beberapa buah, sebaiknya kedap air, untuk menutup luka kecil.
* **Kondom:** Dapat digunakan sebagai tempat air yang baik, menampung hingga 1 liter.`
              }
            ]
          }
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
        ],
        syllabus: [
          {
            id: 'survival-6-modul-1',
            title: "SKK Sanjak (Mengesan Jejak)",
            items: [
              {
                id: 'survival-6-article-1',
                title: "Pengertian dan Pengelompokan Regu Sanjak",
                content: `**Pengertian-Pengertian:**
* **Jejak:** Tanda-tanda yang dibuat oleh manusia, binatang, dan benda-benda bergerak lainnya (disengaja maupun tidak disengaja).
* **Mengesan Jejak:** Ilmu untuk dapat mengikuti, mengetahui, mencari, dan mengejar seseorang/kawan melalui tanda-tanda, bekas, atau bau yang ditinggalkan.
* **Pengesan Jejak:** Seseorang yang terlatih untuk dapat mencari, menganalisa, dan menyimpulkan arti dari jejak.
* **Tapak:** Bekas/jejak yang ditinggalkan oleh benda-benda bergerak atau diam, menyerupai bentuk benda sebenarnya (kaki, sepatu, tangan, dll.).

**Pengelompokan Regu Sanjak:**
* Anggota minimal 5 orang, maksimal 10 orang.
* Dibagi menjadi:
    * Pimpinan kelompok (Ketua dan wakil ketua)
    * Kelompok penjejak satu (2 s.d 3 orang)
    * Kelompok penjejak dua (2 s.d 3 orang)
    * Kelompok penjejak tiga (2 s.d 3 orang)
* Ketua/wakil mengatur giliran dan menyimpulkan jejak.`
              },
              {
                id: 'survival-6-article-2',
                title: "Dasar-Dasar dan Teknik Mencari Jejak",
                content: `**Dasar-Dasar Mengesan Jejak (Persyaratan Pengesan Jejak):**
* Memiliki panca indera yang baik.
* Mengerti tentang keadaan alam dan pengaruhnya.
* Memiliki kemampuan dan kesungguhan dalam penjejakan.
* Memiliki daya ingat yang tinggi dan cerdas.
* Memiliki kondisi fisik dan mental yang baik.
* Sabar, tabah, dan tidak mudah menyerah.
* Tenang dan teliti.

**Teknik Mencari Jejak:**
* Selalu waspada, setiap melangkah melihat medan di sekeliling.
* Amati tanda-tanda pada tumbuh-tumbuhan (cabang/ranting patah) atau injakan pada tanah, rumput, pohon, dan semak.
* Jika melihat binatang/benda bergerak, segera diam dan fokuskan pandangan, lalu tentukan cara menghindarinya (jangan lari membelakanginya, melainkan mundur perlahan sambil fokus pada mata Harimau).
* Jika mendengar bunyi-bunyian atau mencium bau-bauan yang aneh, berhenti dan tentukan sumbernya.
* Jangan hanya meninjau setinggi pandangan mata, perhatikan ke atas pohon (macan tutul, orang hutan, ular besar sering menyerang dari atas).
* Lihat juga ke jurang-jurang, lembah-lembah, dan tempat lain yang letaknya lebih rendah.`
              }
            ]
          }
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
            id: 'pba-1-modul-1',
            title: 'Manajemen Penanggulangan Bencana',
            items: [
              {
                id: 'pba-1-article-1',
                title: 'Penanggulangan Bencana',
                content: `
**Penanggulangan Bencana**
*   Merupakan salah satu wujud dari upaya untuk melindungi segenap bangsa Indonesia dari seluruh tumpah darah Indonesia.
*   Adalah kewajiban bersama antara pemerintah dan masyarakat yang didasarkan pada partisipasi, didukung dan prakarsa masyarakat serta pemerintah daerah.
*   Dititikberatkan pada tahap sebelum terjadinya bencana yang meliputi kegiatan pencegahan, penjinakan dan kesiapsiagaan untuk memperkecil, mengurangi dan memperlunak dampak yang ditimbulkan oleh bencana.
*   Adalah bagian dari kegiatan pembangunan yang bertujuan untuk mengurangi penderitaan masyarakat dan meningkatkan kehidupan dan penghidupan masyarakat secara lahir batin.

**Jenis, Sifat, Tingkat, dan Korban Bencana**

**Jenis Bencana:**
*   **Bencana Alam:** Fenomena atau gejala alam yang disebabkan oleh keadaan geografis, biologis, seismis, hidrologis dan meteorologis atau disebabkan suatu proses dalam lingkungan alam yang mengancam kehidupan dan perekonomian masyarakat serta menimbulkan malapetaka.
    *   Contoh: Wabah penyakit, gempa bumi, letusan gunung berapi, gelombang laut pasang (Tsunami), banjir, kekeringan dan lain-lain.
*   **Bencana Ulah Manusia:** Peristiwa yang terjadi karena proses teknologi, integrasi manusia dengan lingkungannya atau interaksi manusia dengan manusia didalam masyarakat itu sendiri.
    *   Contoh: Pembuangan limbah, polusi, kebakaran, kecelakaan lalu lintas, dan lain-lain.

**Sifat Bencana:**
*   Terbatas
*   Dahsyat (Luar Biasa)

**Sekala / Tingkat Bencana:**
*   Setempat / Lokal
*   Propinsi
*   Nasional

**Korban Bencana:**
*   Manusia (Luka / Meninggal)
*   Harta benda (Hilang / Rusak)
*   Lingkungan hidup (Kerusakan sarana prasarana umum)

**Pentahapan Penanggulangan Bencana**

**1. Sebelum Bencana Terjadi:**
*   Preventif (Pencegahan)
*   Mitigasi (Penjinakan)
*   Kesiapsiagaan (Latihan / Gladi)

**2. Saat Bencana Terjadi:**
*   Peringatan Dini
*   Tanggap Darurat (Menolong korban, bantuan logistik, barak darurat)

**3. Sesudah Bencana Terjadi:**
*   Rehabilitasi (Memfungsikan kembali sarana)
*   Rekonstruksi (Membangun kembali lebih baik)
`
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
            id: 'pba-2-modul-1',
            title: 'Perjalanan dan Penanganan Gawat Darurat (PPGD)',
            items: [
              {
                id: 'pba-2-article-1',
                title: 'Pengertian dan Cara Melaksanakan PPGD',
                content: `
**Pengertian Perjalanan dan Penanganan Gawat Darurat (PPGD)**

Perjalanan dan penanganan gawat darurat (PPGD) adalah hal-hal yang mencakup keadaan kesehatan pada suatu perjalanan/kegiatan meliputi kesiapan fisik, mental dan pengetahuan tentang kesehatan dan gizi.

**Cara Melaksanakan Perjalanan dan Penanganan Gawat Darurat (PPGD)**

**1. Kesiapan Fisik**
*   Kesiapan fisik penolong harus dalam kondisi yang prima.
*   Mengetahui tehnik Pertolongan Pertama Pada Kecelakaan (P3K).
*   Dapat mengambil tindakan dengan cepat dan tepat dalam memberikan pertolongan kepada korban.

**2. Kesiapan Mental**
*   Memiliki rasa percaya diri dalam melakukan Pertolongan Pertama Pada Kecelakaan (P3K).
*   Memiliki kepekaan terhadap diri dan lingkungan.
*   Selalu mengedepankan akal sehat dalam mengambil setiap tindakan Pertolongan Pertama Pada Kecelakaan (P3K).
*   Mampu mengendalikan diri terhadap segala situasi.

**3. Pengetahuan tentang Kesehatan dan Gizi**
*   Mengerti tentang tehnik Pertolongan Pertama Pada Kecelakaan (P3K).
*   Mengerti dan mengetahui tentang obat dan penggunaannya.
*   Memahami tentang berbagai macam penyakit dan gangguan kesehatan.
*   Mengetahui berbagai macam jenis makanan yang layak dikonsumsi.
*   Mengerti perimbangan nutrisi dan gizi dalam melaksanakan kegiatan dan perjalanan.
*   Mampu melaksanakan tehnik evakuasi korban.
`
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
            id: 'pba-3-modul-1',
            title: 'Pengetahuan Komunikasi Radio',
            items: [
              {
                id: 'pba-3-article-1',
                title: 'Radio Komunikasi',
                content: `
**Kegunaan Radio Komunikasi**
Alat yang digunakan untuk mengirim dan menerima berita dari pihak lain/lawan bicara.

**Bagian-bagian Besar Radio Komunikasi**
(Berdasarkan Pesawat Radio Carima PRC-1077)
Terdiri dari:
*   Saklar Daya
*   Saklar Fungsi
*   Saklar kanal/Chanel
*   Saklar pengatur frekuensi (MHz & KHz)
*   Tombol pengatur kanal
*   Penampil frekuensi
*   Pengatur volume
*   Konektor audio
*   Dudukan antena
*   Konektor daya

**Mengoperasikan Radio Komunikasi**
*   **Menghidupkan/Mematikan Radio:** Menggunakan Saklar Daya.
*   **Memilih Frekuensi:** Menggunakan Saklar pengatur frekuensi.
*   **Mengirim Berita:** Menggunakan saklar PTT pada handset.

**Prosedur Kirim Terima Berita**
*   Tata cara yang harus dipahami dan dilaksanakan oleh setiap operator.
*   Harus memperhatikan **IKIT** (Irama, Kecepatan, Isi suara, Tinggi nada).
*   Menggunakan Abjad Fonetik dalam berkomunikasi.
`
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
            id: 'pba-4-modul-1',
            title: 'Tata Cara Memasak',
            items: [
              {
                id: 'pba-4-article-1',
                title: 'Peralatan dan Teknik Memasak',
                content: `
**Kompor Lapangan T-50**
*   **Komponen:** Peti Kompor, Tangki Bahan Bakar (16 Liter, minyak tanah), Brander, Tungku, dan Pompa tangan.
*   **Cara Penggunaan:** (Langkah-langkah rinci mulai dari merangkai, memompa, menyulut, hingga api stabil).
*   **Gangguan dan Cara Mengatasinya:**
    *   Api mati tiba-tiba.
    *   Api menyala seperti kebakaran.
    *   Semburan api tidak rata.
*   **Penyetelan:** Cara penyetelan tatakan kaki tungku untuk merebus atau menggoreng.

**Alat Dapur Lapangan**
*   **Ketel 100:** Kapasitas $\\pm$ 18 Kg beras (untuk 100 orang).
*   **Ketel 50:** Untuk memasak sayur.
*   **Ketel 40:** Untuk masak air atau mengangkut hasil masakan.

**Teknik Dasar Memasak**
*   **Sumber Hidrat Arang:** Cenderung basi jika dibiarkan lama. Masak nasi harus diperhitungkan jumlahnya.
*   **Sumber Protein:** Paling lekas busuk, sebaiknya segera dimakan setelah masak.
*   **Sumber Lemak:** Cenderung tengik jika disimpan lama. Perlu diperlakukan dengan baik.
*   **Sumber Vitamin dan Mineral:** Banyak yang larut/rusak dalam air dan panas; perlu diperhatikan sejak mencuci.

**Tata Cara Memasak**
*   **Nasi:** Dibersihkan/dicuci (tidak boleh direndam), diaron di ketel/wajan, lalu dimasukkan ke dandang.
*   **Lauk (Daging/Ikan):** Bersihkan, potong/buang bagian yang tidak perlu, masak dengan temperatur/cara tertentu (misalnya daging direbus temperatur rendah, ikan dibubuhi cuka/kunyit).
*   **Sayur:** Dibersihkan/dicuci sebelum diracik (tidak boleh direndam), masak lebih awal bahan yang perlu waktu potong lama, rendam dalam air garam (untuk warna alami/cerah).

**Tata Cara Menyajikan**
*   **Cara Barat:** Urutan: Hidangan Pembuka, Hidangan Pokok, Hidangan Selingan, Hidangan Penutup.
*   **Cara China:** Urutan: 4 macam makanan dingin (pembuka), hidangan udang/ginjal, 8 macam hidangan pokok (daging, ikan, nasi), 2 macam hidangan manis (penutup). Cara bersantap porsi kecil-kecil menggunakan peralatan khusus (sumpit, mangkok porselin).
*   **Cara Menghidangkan (Di Pangkalan/Rumah/Gedung):** Sistem Prasmanan, Sistem Kafetaria, atau Dihidangkan di meja.
*   **Cara Menghidangkan (Di Lapangan):** Menggunakan alat perorangan/Lunchtray. Sistem Kafetaria atau Sistem semi Kafetaria (makanan dibagikan petugas).
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
