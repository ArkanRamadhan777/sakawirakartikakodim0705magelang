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
### 1) Pengertian Peta dan Medan

**a. Definisi**
* **Peta:** Adalah gambaran sebagian atau seluruh permukaan bumi yang dipindahkan ke dalam bidang datar, baik benda alam maupun benda buatan manusia yang dapat dipertanggungjawabkan kebenarannya.
* **Medan:** Adalah bagian dari permukaan bumi dengan segala benda yang tidak bergerak di atas permukaannya, baik benda alam maupun benda buatan manusia.

**b. Dasar Hukum dan Skala**
Menurut PP nomor 10 Tahun 2000 disebutkan bahwa peta adalah suatu gambaran dari unsur-unsur alam dan atau buatan manusia, yang berada di atas maupun di bawah permukaan bumi yang digambarkan pada suatu bidang datar dengan skala tertentu.

Salah satu peta yang dihasilkan oleh Bakosurtanal adalah Peta Rupabumi Indonesia (RBI). Peta RBI yang dihasilkan oleh Bakosurtanal meliputi skala:
* 1:1.000.000
* 1:250.000
* 1:100.000
* 1:50.000
* 1:25.000
* 1:10.000

Dimana seluruh wilayah Indonesia dibagi ke dalam grid-grid ukuran peta yang sistematis. Semua lembar peta tepat antara satu dengan lainnya, demikian pula ukurannya sama untuk setiap lembar. Ukuran lembar peta tergantung dari skala peta yang dibuat.

**c. Unsur-unsur dalam Peta**
Beberapa unsur yang bisa dilihat dalam peta:
* **Judul peta:** Biasanya terdapat di atas, menunjukkan letak peta.
* **Nomor peta:** Selain sebagai nomor registrasi dari badan pembuat, kita bisa menggunakannya sebagai petunjuk jika kelak kita akan mencari sebuah peta.
* **Koordinat peta:** Penjelasannya dapat dilihat dalam sub berikutnya.
* **Kontur:** Adalah garis khayal yang menghubungkan titik-titik yang berketinggian sama di atas permukaan laut.
* **Skala peta:** Adalah perbandingan antara jarak peta dan jarak horizontal di lapangan. Ada dua macam skala yakni:
    * *Skala angka:* Ditunjukkan dalam angka, misalkan 1:25.000 (satu senti di peta sama dengan 25.000 cm atau 250 meter di keadaan yang sebenarnya).
    * *Skala garis:* Biasanya di peta skala garis berada di bawah skala angka.
* **Legenda peta:** Adalah simbol-simbol yang dipakai dalam peta tersebut, dibuat untuk memudahkan pembaca menganalisa peta.
`
              },
              {
                id: 'navrat-1-article-2',
                title: 'Jenis-jenis Peta',
                content: `
### 2) Jenis-jenis Peta

**a. Peta Topografi**
Peta Topografi adalah peta yang menggambarkan posisi mendatar dan tegak dari semua benda medan yang tidak bergerak di permukaan bumi, atau jenis peta yang ditandai dengan skala besar dan detail, biasanya menggunakan garis kontur dalam pemetaan modern.

* Sebuah peta topografi biasanya terdiri dari dua atau lebih peta yang tergabung untuk membentuk keseluruhan peta.
* Sebuah garis kontur merupakan kombinasi dari dua segmen garis yang berhubungan namun tidak berpotongan, ini merupakan titik elevasi pada Peta Topografi.
* Secara historis, perkembangan Peta Topografi sebagian besar didorong oleh kebutuhan militer. Saat ini, operasi taktis dan kegiatan tentara sedemikian kompleks sehingga sangat penting bagi semua prajurit untuk dapat membaca dan menafsirkan peta, agar dapat bergerak cepat dan efektif di medan perang.
* Pengenalan medan dapat memberikan perbedaan nyata dalam medan pertempuran. Kemampuan membaca peta sangat dibutuhkan jika ingin memenangkan pertempuran.
* Tidak hanya dalam medan pertempuran, hal ini juga berlaku untuk keperluan sipil seperti berburu, menempuh rimba, menyusur rawa, hiking, mendaki gunung, bukit atau penggunaan lainnya dimana ketepatan navigasi darat diperlukan.
* Peta Topografi adalah representasi grafis dari bagian permukaan bumi yang ditarik ke skala, seperti yang terlihat dari atas. Menggunakan warna, simbol, dan label untuk mewakili fitur yang ditemukan pada permukaan bumi.
* Pada peta skala 1:250.000:
    * Simbol yang ditentukan untuk bangunan mencakup areal seluas 500 meter persegi di atas tanah.
    * Simbol jalan adalah setara dengan lebar jalan sekitar 520 kaki di tanah.
    * Simbol untuk rel kereta api tunggal adalah setara dengan rel kereta api sekitar 1.000 kaki pada tanah.

**b. Peta Tematik**
Peta Tematik adalah peta yang menyajikan tema tertentu dan untuk kepentingan tertentu (land status, penduduk, transportasi dan lain-lain) dengan menggunakan peta rupa bumi yang telah disederhanakan sebagai dasar untuk meletakkan informasi tematiknya. Atau adalah peta yang berisi gambaran satu atau dua tema khusus yang disusun berdasarkan data statistik seperti peta jenis tanah dan peta perairan.

* *Sejarah:* Meskipun terkenal karena penemuan kometnya, Edmond Halley juga diakui sebagai pembuat peta tematik pertama dengan keahlian Kartografik yang diakui. Pada tahun 1686, Halley menghasilkan peta kecil yang menggambarkan arah angin perdagangan di Samudra Atlantik.
* Salah satu contoh terkenal dari Peta Tematik awal berasal dari ahli medis London John Snow. Map kolera Snow pada 1855 adalah salah satu contoh terbaik penggunaan peta tematik untuk analisis (menggambarkan prinsip GIS). Dimulai dengan peta dasar yang akurat sekitar London termasuk jalan dan lokasi pompa, Snow memetakan kejadian peristiwa kematian karena kolera. Pola yang muncul berpusat di sekitar pompa tertentu di Broad Street.

**(1) Peta Jenis Tanah**
* Adalah sebuah peta yang menggambarkan variasi dan persebaran berbagai jenis tanah atau sifat-sifat tanah (seperti pH, tekstur, kadar organik, kedalaman, dan sebagainya) di suatu area.
* Digunakan untuk evaluasi sumber daya lahan, pemetaan ruang, perluasan lahan pertanian, konservasi, dan sebagainya.
* Terdapat data primer (pengukuran langsung) dan data sekunder (perhitungan/perkiraan).
* *Contoh data sekunder:* Kapasitas produksi tanah, laju degradasi, dll.
* *Contoh Data Peta (Wilayah Kodim 0504/Jaksel):*
    * Kebayoran Lama, Kebayoran Baru, Mampang Prapatan, Setiabudi, Tebet, Cilandak, Pasar Minggu, Jagakarsa.
    * Keterangan Tanah: Aluvial Endapan Sungai, Tanah Liat Berpasir, Tanah Lempung (Hidromorf Kelabu), Kerikil/Kerakal, Latosol Cokelat Kemerahan.

**(2) Peta Perairan**
* Adalah peta yang hanya menjelaskan unsur perairan yang terdapat pada suatu wilayah (sungai, danau, rawa dan waduk).
`
              },
              {
                id: 'navrat-1-article-3',
                title: 'Pengertian Tanda–Tanda Peta',
                content: `
### 3) Pengertian Tanda–Tanda Peta
Tanda peta adalah sejumlah gambar pengganti yang mewakili bagian medan, benda medan dan tanda medan. Tanda-tanda peta dapat dibedakan menurut warna dan bentuknya.

**a. Tanda peta menurut warna**
1.  **Warna Hitam:** Untuk menunjukkan sebagian besar benda-benda medan buatan manusia.
    * *Contoh:* Rel kereta api rangkap, Titik triangulasi, Batas daerah, Tumbuh-tumbuhan.
2.  **Warna Biru:** Untuk menunjukkan tanda-tanda perairan.
    * *Contoh:* Sungai dan anak sungai, Danau, Sawah.
3.  **Warna Merah:** Untuk menentukan tanda-tanda peta berupa konstruksi dari batu/bangunan, jalan keras.
    * *Contoh:* Jalan, Bangunan.
4.  **Warna Hijau:** Untuk menentukan tanda-tanda peta berupa daerah/tempat yang didiami manusia (perkampungan).
    * *Contoh:* Perkampungan.
5.  **Warna Cokelat:** Untuk menentukan tanda-tanda peta berupa ketinggian.
    * *Contoh:* Garis ketinggian/kontur, Kedalaman permukaan bumi, Sebagian jalan keras yang lebih rendah.
`
              },
              {
                id: 'navrat-1-article-4',
                title: 'Pengertian Koordinat Peta',
                content: `
### 4) Pengertian Koordinat Peta
Titik koordinat adalah pertemuan antara garis tegak dengan garis mendatar di atas peta. Pada setiap lembar peta terdapat grid (garis tegak lurus) yang membentuk kotak bujur sangkar yang disebut **Karvak**. Menghitungnya dari Barat ke Timur (KI/KA), selanjutnya dari Selatan ke Utara (BA/TAS).

Secara teori, koordinat merupakan titik pertemuan antara Absis dan Ordinat. Sistem koordinat yang resmi dipakai ada dua macam yaitu:

**a. Koordinat Geografis (Geographical Coordinate)**
* Sumbu yang digunakan adalah **Garis Bujur** (Bujur Barat dan Bujur Timur) yang tegak lurus dengan garis khatulistiwa, dan **Garis Lintang** (Lintang Utara dan Lintang Selatan) yang sejajar dengan garis khatulistiwa.
* Koordinat geografis dinyatakan dalam satuan derajat, menit dan detik.
* Pada peta Bakosurtanal, biasanya menggunakan koordinat geografis sebagai koordinat utama.
* Pada peta ini, satu kotak (Karvak) lebarnya adalah 3.7 cm.
    * Pada skala 1:25.000, satu karvak sama dengan 30 detik (30").
    * Pada peta skala 1:50.000, satu karvak sama dengan 1 menit (60").
* **Garis Lintang (Latitude):** Garis khayal yang digunakan untuk menentukan lokasi di Bumi terhadap Khatulistiwa (utara atau selatan). Posisi Lintang merupakan penghitungan sudut dari 0° di Khatulistiwa sampai ke +90° di Kutub Utara dan -90° di Kutub Selatan.
* **Garis Bujur (Longitude):** Menggambarkan lokasi sebuah tempat di timur atau barat Bumi dari sebuah garis utara-selatan yang disebut Meridian Utama (Greenwich). Berkisar dari 0° di Meridian Utama ke +180° arah timur dan −180° arah barat.

**b. Koordinat Grid (Grid Coordinate atau UTM)**
* Dalam koordinat grid, kedudukan suatu titik dinyatakan dalam ukuran jarak setiap titik acuan.
* Untuk wilayah Indonesia, titik acuan berada di sebelah barat Jakarta (60 LU, 980 BT).
* Garis vertikal diberi nomor urut dari selatan ke utara, sedangkan horizontal dari barat ke timur.
* Sistem koordinat mengenal penomoran 4 angka, 6 angka dan 8 angka.
* Pada peta AMS, biasanya menggunakan koordinat grid. Satu karvak sebanding dengan 2 cm.
* *Cara penentuan:*
    * Koordinat 4 angka: Dapat langsung ditentukan.
    * Koordinat 6 angka: Satu karvak dibagi menjadi 10 bagian (per 2 mm).
    * Koordinat 8 angka: Satu karvak dibagi menjadi sepuluh bagian (per 1 mm).
* **Contoh Koordinat Peta 8 Angka:**
    * Co. 2343 3056
    * Artinya: X = 2343, Y = 3056.
`
              },
              {
                id: 'navrat-1-article-5',
                title: 'Teknik Menyambung Peta',
                content: `
### 5) Teknik Menyambung Peta
Bila daerah yang dipelajari luas, maka peta yang digunakan terdiri dari beberapa lembar peta. Untuk menyambung peta-peta tersebut dapat dilihat pada petunjuk nomor peta yang terdapat pada setiap lembar peta di bagian kiri bawah (ada 9 kotak bujur sangkar kecil yang masing-masing berisi nomor peta dan kotak yang di tengah diarsir).
`
              },
              {
                id: 'navrat-1-article-6',
                title: 'Pengertian Kedar Peta',
                content: `
### 6) Pengertian Kedar Peta
Kedar peta adalah perbandingan jarak mendatar antara dua titik di peta dengan dua titik yang sama di medan.

**Rumus:**
* **K = JP / JM**
* **JM = JP / K**
* **JP = JM x K**

*Keterangan:*
* K = Kedar
* JM = Jarak Mendatar di Medan
* JP = Jarak di Peta

**Contoh soal:**
* Diketahui:
    * JP = 2 cm
    * JM = 1000 m
* Ditanya: Berapa kedarnya?
* Jawab:
    * K = JP / JM
    * K = 2 cm / 1000 m
    * (Ubah satuan meter ke cm) -> 1000 m = 100.000 cm
    * K = 2 cm / 100.000 cm
    * **K = 1 : 50.000**
`
              },
              {
                id: 'navrat-1-article-7',
                title: 'Pengertian Sudut Tanjakan',
                content: `
### 7) Pengertian Sudut Tanjakan
Sudut tanjakan adalah perbandingan selisih dua titik ketinggian dengan jarak mendatarnya di medan. Bagi anggota Pramuka sangat penting untuk mengetahui terjalnya suatu tanjakan karena dengan mengetahui terjalnya suatu tanjakan tersebut kita dapat melakukan pergerakan lanjutan di lapangan sebenarnya.

**Rumus Sudut Tanjakan = Selisih Tinggi / Jarak Mendatar**

*Catatan:* Untuk perbandingan antara selisih tinggi dengan jarak mendatar maka satuan panjangnya harus sama (meter).

**a. Perbandingan antara selisih tinggi dengan jarak mendatar**
* *Contoh:*
    * Selisih Tinggi = 25 meter
    * Jarak mendatar = 100 meter
* *Maka besar sudut tanjakan:*
    * = 25 / 100
    * = **1/4**

**b. Menyatakan selisih tinggi dengan jarak mendatar dalam derajat**
* *Rumus:*
    * Sudut Tanjakan = (Selisih Tinggi / Jarak Mendatar) x 57,3°
* *Perhitungan:*
    * = (25 / 100) X 57,3°
    * = (1 / 4) X 57,3°
    * = **14° 19' 30"**

**Catatan:**
1.  1 T radial = 57,3°
2.  Rumus di atas dapat digunakan untuk sudut tanjakan yang lebih kecil dari 30°.
3.  Perhitungan untuk lereng-lereng yang mendaki dinyatakan dengan tanda Plus (+), sedangkan yang menurun dinyatakan dengan tanda Minus (-) dalam penulisannya.
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
                title: 'Pengertian Kompas',
                content: `
### 1) Pengertian Kompas

Kompas adalah alat navigasi untuk menentukan arah berupa sebuah panah penunjuk magnetis yang bebas menyelaraskan dirinya dengan medan magnet bumi secara akurat.
* Kompas memberikan rujukan arah tertentu, sehingga sangat membantu dalam bidang navigasi.
* Arah mata angin yang ditunjuknya adalah utara, selatan, timur, dan barat.
* Apabila digunakan bersama-sama dengan jam dan sekstan, maka kompas akan lebih akurat dalam menunjukkan arah.
* Alat ini membantu perkembangan perdagangan maritim dengan membuat perjalanan jauh lebih aman dan efisien dibandingkan saat manusia masih berpedoman pada kedudukan bintang untuk menentukan arah.

**Sejarah dan Perkembangan:**
* Penemuan bahwa jarum magnetik selalu mengarah ke utara dan selatan terjadi di Cina dan diuraikan dalam buku *Loven Heng*.
* Di abad kesembilan, orang Cina telah mengembangkan kompas berupa jarum yang mengambang dan jarum yang berputar.
* Pelaut Persia memperoleh kompas dari orang Cina dan kemudian memperdagangkannya.
* Pada tahun 1877 orang Inggris, William Thomson, 1st Baron Kelvin (Lord Kelvin) membuat kompas yang dapat diterima oleh semua negara dengan memperbaiki kesalahan-kesalahan yang timbul dari deviasi magnetik karena meningkatnya penggunaan besi dalam arsitektur kapal.

**Prinsip Kerja:**
* Alat apa pun yang memiliki batang atau jarum magnetis yang bebas bergerak menunjuk arah utara magnetis dari Magnetosfer sebuah planet sudah bisa dianggap sebagai kompas.
* **Kompas jam:** Kompas yang dilengkapi dengan jam matahari.
* **Kompas variasi:** Alat khusus berstruktur rapuh yang digunakan dengan cara mengamati variasi pergerakan jarum.
* **Giro kompas:** Digunakan untuk menentukan utara sejati.
* **Pergeseran Magnet:** Lokasi magnet di Kutub Utara selalu bergeser dari masa ke masa. Penelitian terakhir oleh *The Geological Survey of Canada* melaporkan bahwa posisi magnet ini bergerak kira-kira 40 Km per tahun ke arah barat laut.

**Bagian-bagian Kompas:**
1.  Tutup Kompas
2.  Kotak Kompas
3.  Skala Puluhan Derajat
4.  Skala Limaan Derajat
5.  Takik
6.  Garis Tanda Bercahaya
7.  Bibir Pelindung
8.  Garis Rambut
9.  Skala Satuan Derajat
10. Pelindung Tutup Kompas
11. Sekrup Pengapit
12. Kaca Tutup Kompas
13. Lingkaran Kompas dengan Pembagian Mata Angin
14. Tanda bercahaya arah kompas menuju utara magnit
15. Cincin Ibu Jari
16. Tanda bercahaya di bawah piringan kaca
17. Prisma
`
              },
              {
                id: 'navrat-2-article-2',
                title: 'Jenis dan Fungsi Kompas',
                content: `
### 2) Jenis dan Fungsi Kompas
Kompas terdiri dari 3 jenis, yaitu Kompas Bidik (Kompas Prisma), Kompas Orienteering (Kompas Silva), dan Kompas Biasa.

**a. Kompas Bidik (Kompas Prisma)**
Fungsi utamanya untuk mempermudah menghitung sudut sasaran bidik (tempat atau benda) secara langsung. Cara pemakaiannya dengan membidikkan kompas ke sasaran secara langsung sekaligus membaca sudut sasaran pada skala kompas. Besar sudut yang dibuat oleh arah bidikan dan arah jarum (utara) itulah sudut sasarannya (*bearing*).

**(1) Komponen Kompas Bidik:**
1.  **Kawat Pisir:** Berfungsi sebagai garis pemandu ketepatan ke arah objek bidikan.
2.  **Piringan skala derajat:** Sebagai penunjuk derajat hasil bidikan dan arah mata angin.
3.  **Jarum kompas:** Magnet sebagai penunjuk arah utara selatan magnetis bumi, sekaligus sebagai pemutar piringan skala derajat secara otomatis.
4.  **Rumah kompas:** Berfungsi sebagai pelindung komponen utama kompas (skala, jarum, tanda arah mata angin).
5.  **Lensa pembidik:** Sebagai alat bantu untuk membaca hasil derajat bidikan dan mensejajarkan kompas dengan objek bidik.

**(2) Cara Pemakaian Kompas Bidik:**
1.  Buka kompas bidik.
2.  Masukkan jempol kanan ke handle pengait.
3.  Arahkan posisi kita ke objek yang akan dibidik.
4.  Dekatkan mata kita pada lensa kompas untuk mempermudah bidikan objek.
5.  Arahkan kompas (kawat pisir) pada objek yang akan dibidik setepat mungkin. Lensa pembidik, kawat pisir, dan objek bidik harus satu garis lurus atau sejajar.
6.  Setelah dipastikan sejajar, pertahankan bidikan sambil melihat (membaca) hasil yang ditunjukkan pada skala derajat. Hasil penunjukan tersebut merupakan sudut objek bidik (Azimut) yang digunakan sebagai dasar perhitungan untuk mengetahui posisi kita dan objek itu sendiri.

**b. Kompas Orienteering (Kompas Silva)**
Fungsi utamanya untuk mempermudah perhitungan dan pembacaan pada peta secara langsung. Badan atau pembungkus kompas silva selalu dibuat transparan untuk mempermudah pembacaan peta yang diletakkan di bawahnya.

**(1) Cara Pemakaian:**
1.  Letakkan kompas anda pada peta kawasan tersebut dengan ujung *Base Plate* menghubungkan lokasi anda berada dengan arah lokasi anda akan dituju.
2.  Tetapkan garisan tengah dalam kompas dengan memutarkan *Dial* kompas mengikuti garisan pada peta anda, sejajar dengan Utara Magnetik (MN) pada peta.
3.  Keluarkan kompas dari peta dan hadapkan ke hadapan anda dengan *Travel Arrow* menunjuk ke depan/lokasi. Putarkan badan anda sehingga ujung merah jarum kompas berubah dengan menunjuk kepada "N" pada di dalam dial kompas. Arah Perjalanan *Arrow* kini menunjukkan tepat ke destinasi anda. Lihat pada satu mercu tanda (bukit, puncak gunung, pohon) dan berjalan kepadanya. Ulang prosedur ini sehingga anda sampai ke destinasi anda.

**c. Kompas Biasa**
Fungsi utamanya hanya sebagai penunjuk arah berdasarkan prinsip gaya magnet. Jadi kompas biasa adalah kompas dasar. Ukuran kompas biasa umumnya lebih kecil dari 2 jenis kompas yang lain. Untuk sekedar penunjuk arah mata angin kompas biasa lebih dapat diandalkan karena lebih praktis.
`
              },
              {
                id: 'navrat-2-article-3',
                title: 'Orientasi Peta dengan Kompas',
                content: `
### 3) Orientasi Peta dengan Kompas
Sebelum peta digunakan terlebih dahulu peta harus diorientasi sehingga peta tersebut terletak horisontal dalam kedudukan utara/selatan peta sesuai dengan utara selatan medan.

**a. Cara mengorientasi peta dengan kompas:**
1.  Buka peta dan letakkan di atas bidang datar.
2.  Buka kompas dan letakkan di atas peta.
3.  Himpitkan garis rambut dan tanda baca yang bercahaya pada kompas sejajar dengan garis grid utara selatan pada peta.
4.  Putar peta dan kompas sehingga jarum kompas searah dengan garis utara magnit.
5.  Dengan demikian peta telah terorientasi ke arah utara.

**b. Menghitung Bearing (Azimuth)**
Menghitung arah kelurusan/jurus dari bidang vertikal yang melalui garis tetapi tidak menunjukan arah penunjaman garis tersebut (menunjukkan arah–arah di mana, salah satu arahnya merupakan sudut pelurusnya).
* Setiap arah bisa dinyatakan sebagai sudut yang terhubung dengan utara. Pada militer ini disebut "Azimuth" (sudut antara sasaran terhadap kutub magnetik bumi/sudut kompas) dan bearing dinyatakan sebagai jumlah derajat.
* *Orienteer* mengambil jalan keluar yang gampang, dengan mensetting sudut pada kompasnya dan menjaga jarum kompasnya, dan ini membuat mereka tetap bergerak pada arah yang benar.

**Instruksi langkah-langkah mudah cara mengeset bearing pada dasar kompas tipe baseplate:**
1.  Letakan kompas di atas peta penunjuk arah mengarah ke arah tujuan kita.
2.  Putar rumah kompas sehingga tanda panahnya yang terdapat pada dasar plastiknya paralel dengan panah yang tergambar pada peta (pastikan mata anak panahnya mengarah ke utara bukan selatan).
3.  Pisahkan kompas dengan peta dan peganglah peta di depan kita jadi dengan begitu arah perjalanan kita terbentang di depan kita.
4.  Putarlah tubuh sehingga jarum kompas tepat pada tanda panah di dasar rumah kompas.
5.  Lalu pilihlah sebuah objek jelas di depan kita yang terletak di jalur perjalanan kita, ulangi proses ini (dengan cara ini kita bisa memutari rintangan dan tetap berada pada jalur bearing kita).
`
              },
              {
                id: 'navrat-2-article-4',
                title: 'Pengertian Kompas Siang dan Kompas Malam',
                content: `
### 4) Pengertian Kompas Siang dan Kompas Malam

**a. Pengertian Kompas Siang**
Kompas siang adalah suatu cara yang digunakan untuk menentukan arah/menuju sasaran yang telah ditentukan pada siang hari.

**Langkah-langkah penggunaan Kompas Siang adalah:**
1.  Buka tutup kompas hingga berdiri tegak.
2.  Letakkan/angkat prisma ke atas kaca kompas.
3.  Masukkan ibu jari ke dalam cincin kompas, dan luruskan telunjuk ke depan sehingga rapat pada bagian tutup kompas dengan maksud agar pada waktu kompas dibidikkan tidak bergerak.
4.  Dari tiang bidikan, kedua kaki rapat/sikap sempurna dan menghadap penuh ke sasaran.
5.  Bawa kompas ke depan mata dan langsung membidik, mata yang tidak membidik dipejamkan.
6.  Lihat standar melalui prisma.
7.  Luruskan garis rambut pada tutup kompas dengan sasaran.
8.  Baca garis-garis/angka derajat dalam kompas melalui prisma yang sejajar dengan garis rambut pada kaca kompas dan sasaran.
9.  Itulah sudut yang dimaksud.
10. Melaksanakan *Back Azimuth* (Bidikan ke belakang) sebagai koreksi sudut jurusan.

**b. Pengertian Kompas Malam**
Kompas malam adalah suatu cara yang digunakan untuk menentukan arah/menuju sasaran yang telah ditentukan yang dilaksanakan pada malam hari.

**Langkah-langkah penggunaan Kompas pada malam hari adalah:**
1.  Buka tutup kompas hingga rata.
2.  Kendorkan sekrup pengapit.
3.  Putar kaca kompas sesuai sudut yang dikehendaki.
4.  Kencangkan sekrup pengapit.
5.  Kompas dibawa ke depan dada.
6.  Putar badan dan kompas sehingga jarum kompas yang bercahaya berhimpit dengan tanda baca yang bercahaya.
7.  Garis rambut dan tanda baca yang bercahaya menunjukkan arah kompas.
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
                title: 'Pengertian Resection dan Intersection',
                content: `
### 1) Pengertian Resection dan Intersection

**a) Resection (Mengikat ke Depan)**
Adalah cara untuk menentukan tempat/kedudukan sendiri di medan ke titik di peta dengan menggunakan dua titik pertolongan yang terdapat di peta dan di medan sebenarnya.

**b) Intersection (Mengikat ke Belakang)**
Adalah cara untuk menentukan tempat/kedudukan pihak lain di medan ke titik yang ada di peta dengan menggunakan titik pertolongan yang terdapat di peta dan di medan.
`
              },
              {
                id: 'navrat-3-article-2',
                title: 'Cara Melaksanakan Resection dan Intersection',
                content: `
### 2) Cara Melaksanakan Resection dan Intersection

**a) Resection (Mengikat ke Depan) dengan Kompas**
1.  Pilih dua titik tanda yang sudah dikenali di lapangan dan juga di peta.
    * **Contoh:** Titik 1 Menara (Arah kompas 146°).
2.  Dari arah kompas 146° ditarik garis *Back Azimuth* (bidikan arah balik/ke belakang) sebesar 326°.
3.  **Contoh:** Titik 2 Pura (Arah kompas 248°).
    * Dari arah kompas 248° ditarik garis *Back Azimuth* (arah balik) sebesar 68°.
4.  Dari hasil perpotongan kedua garis tersebut merupakan kedudukan kita sendiri.
    * *(Data Gambar: 77°, Kedudukan Sendiri, 123°, 154°, 234°)*

**b) Intersection (Mengikat ke Belakang) dengan Kompas**
1.  Pilih dua titik tanda yang sudah dikenali di medan dan di peta.
    * **Contoh:**
        * Titik 1: Menara (Arah kompas 146°).
        * Titik 2: Pura (Arah kompas 248°).
2.  Dari titik 1 (satu) kita melaksanakan pergerakan ke arah titik 2 (dua) minimal sejauh 50 meter s.d 100 m.
3.  Dari titik 2 (dua) melaksanakan kompas ke sasaran (mercusuar).
4.  Dari hasil perpotongan kedua garis tersebut merupakan kedudukan pihak lain.
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
                title: 'Kegunaan Alat GPS',
                content: `
### 1) Kegunaan Alat Global Position System (GPS)
GPS adalah alat untuk menentukan posisi suatu tempat secara teliti dengan bantuan satelit yang ada dan dapat digunakan untuk melaksanakan navigasi.
* Menentukan koordinat posisi (Lintang/Bujur atau UTM) di permukaan bumi.
* Menentukan ketinggian (altitude) dari permukaan laut.
* Menentukan kecepatan bergerak dan waktu perjalanan.
* Membuat rekam jejak perjalanan (*track*) dan rute navigasi.
`
              },
              {
                id: 'navrat-4-article-2',
                title: 'Bagian-bagian Alat GPS',
                content: `
### 2) Bagian-bagian Alat Global Position System (GPS)
*(Secara umum GPS tipe genggam memiliki bagian-bagian sebagai berikut):*

**a. Fisik Luar**
1.  **Antena:** Bagian penerima sinyal dari satelit (biasanya menonjol di bagian atas atau internal).
2.  **Layar (Display):** Menampilkan peta, koordinat, menu, dan data navigasi.
3.  **Tempat Baterai:** Terletak di bagian belakang, biasanya menggunakan baterai tipe AA.
4.  **Port Data:** Lubang koneksi (USB) untuk menyambungkan GPS ke komputer.

**b. Tombol-tombol Fungsi (Keypad)**
1.  **Tombol Power (On/Off):** Untuk menghidupkan, mematikan, dan mengatur lampu layar (*backlight*). Biasanya bergambar lampu atau simbol power berwarna merah.
2.  **Tombol Zoom (In/Out):** Untuk memperbesar atau memperkecil tampilan peta.
3.  **Tombol Page/Menu:** Untuk berpindah halaman (dari halaman satelit, peta, kompas, hingga menu utama).
4.  **Tombol Rocker/Kursor:** Tombol arah (atas, bawah, kiri, kanan) untuk menggeser panah di layar.
5.  **Tombol Enter:** Untuk memilih atau mengonfirmasi perintah.
6.  **Tombol Mark:** Untuk menyimpan posisi saat ini (*Marking Waypoint*).
7.  **Tombol Find:** Untuk mencari titik atau tujuan yang telah disimpan.
`
              },
              {
                id: 'navrat-4-article-3',
                title: 'Pengoperasian Alat GPS',
                content: `
### 3) Pengoperasian Alat GPS

**a. Menghidupkan dan Inisialisasi (Memulai)**
1.  Bawalah GPS ke tempat terbuka (luar ruangan) agar antena tidak terhalang gedung atau pohon rapat.
2.  Tekan tombol **Power/On** (biasanya bergambar lampu warna merah) beberapa detik hingga layar menyala.
3.  Tunggu beberapa saat. GPS akan mencari sinyal satelit (*Acquiring Satellites*).
4.  Jika alat belum dapat menjejak sinyal satelit, maka akan keluar layar konfigurasi angka-angka berupa gambar dua lingkaran dan beberapa tanda nomor satelit (batang sinyal).
5.  Biarkan hingga akurasi sinyal stabil (biasanya muncul tulisan "3D GPS Location" atau akurasi mencapai angka kecil, misal: ± 3 meter).

**b. Menandai Posisi (Marking Waypoint)**
*Proses menyimpan koordinat tempat kita berdiri:*
1.  Pastikan GPS sudah mendapatkan sinyal kuat.
2.  Tekan tombol **MARK**.
3.  Akan muncul halaman *Mark Waypoint* berisi simbol, nomor/nama titik, dan koordinat.
4.  Jika ingin mengganti nama, gunakan tombol kursor ke kolom nama, tekan Enter, lalu ganti namanya (misal: "POS 1").
5.  Arahkan kursor ke tombol **OK** atau **SAVE**, lalu tekan Enter. Posisi tersimpan di memori.

**c. Mencari Tujuan (Go To / Navigasi)**
*Proses menuju ke titik yang sudah disimpan:*
1.  Tekan tombol **FIND**.
2.  Pilih menu *Waypoints*, tekan Enter.
3.  Pilih nama titik tujuan yang diinginkan dari daftar, tekan Enter.
4.  Pilih tombol **GO TO**, tekan Enter.
5.  Layar akan berubah menjadi halaman Peta atau Kompas yang menunjukkan arah panah dan jarak menuju tujuan tersebut. Ikuti arah panah tersebut.

**d. Mematikan Alat**
1.  Tekan dan tahan tombol **Power** sampai layar padam.
2.  Jika akan disimpan lama, sebaiknya lepas baterai untuk menghindari kebocoran.
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

              <div className="mt-4 bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-200">
                        <th className="px-4 py-3 text-left font-semibold text-gray-700">Aspek</th>
                        <th className="px-4 py-3 text-left font-semibold text-gray-700">Peta Topografi</th>
                        <th className="px-4 py-3 text-left font-semibold text-gray-700">Peta Tematik</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="px-4 py-3 font-medium text-gray-700">Tujuan</td>
                        <td className="px-4 py-3 text-gray-600">Gambaran umum medan</td>
                        <td className="px-4 py-3 text-gray-600">Informasi khusus tema tertentu</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="px-4 py-3 font-medium text-gray-700">Skala</td>
                        <td className="px-4 py-3 text-gray-600">Besar, detail</td>
                        <td className="px-4 py-3 text-gray-600">Bervariasi</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="px-4 py-3 font-medium text-gray-700">Pengguna</td>
                        <td className="px-4 py-3 text-gray-600">Militer, pendaki, navigator</td>
                        <td className="px-4 py-3 text-gray-600">Peneliti, perencana, analis</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
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
### Simpul

Simpul adalah suatu bentukan tertentu (lilitan, tekukan) yang dibuat pada tali yang difungsikan untuk menambatkan tali pada anchor, maupun untuk keperluan tertentu. Pengetahuan tentang simpul dan kemampuan membuat simpul dengan mudah dan cepat adalah bagian penting yang harus dimiliki seorang anggota Pramuka. Menguasai dan memahami simpul yang penting saja (yang sering dipakai, dan dapat digunakan pada saat emergency) jauh lebih baik daripada hanya mengenal bermacam-macam simpul tanpa tahu fungsi dan kegunaannya.

Seorang anggota Pramuka yang baik harus ingat seperti apa simpul yang baik, dan tahu cara meneliti lagi apakah simpul yang dibuat/akan dipergunakan sudah benar atau belum. Faktor keamanan yang dimaksud adalah kemampuan simpul tetap terikat kuat setelah dibebani. Beberapa simpul dalam bentuk dasarnya cenderung kehilangan fungsi kerjanya bila tidak diberi beban lilitannya.

#### Macam-macam simpul diantaranya:

**a. Simpul Hidup**
Simpul hidup merupakan simpul paling dasar. Simpul hidup atau *overhand knot* juga menjadi simpul yang mendasari pembuatan simpul-simpul lainnya seperti simpul mati dan simpul nelayan atau simpul kembar. Simpul hidup digunakan sebagai simpul pada ujung tali untuk menjaga agar jalinan tali di ujung tali tidak terurai serta menjaga tali dari pergeseran.

Di Kepramukaan, Simpul Hidup termasuk salah satu simpul yang harus dikuasai oleh para Pramuka. Simpul ini termasuk salah satu simpul yang diujikan dalam Syarat Kecakapan Umum baik untuk pramuka siaga (SKU Bantu Nomor 34) maupun SKU Penggalang (SKU Penggalang Ramu Nomor 23).

*Cara membuatnya sebagai berikut:*
1. Buat simpul biasa pada kedua ujung tali.
2. Tekuk/lipat kedua ujung simpul, sehingga ujung simpul sejajar dengan bagian tali yang panjang.
3. Tarik kedua tali secara berlawanan, sehingga sambungan menjadi kencang.

**b. Simpul Hidup dengan Sosok**
Digunakan untuk menyambung tali yang sama besarnya, dengan tujuan agar sambungan tersebut mudah dilepaskan kembali.

*Cara membuatnya sebagai berikut:*
1. Buat simpul hidup pada ujung tali.
2. Salah satu ujung pendeknya putar ke yang berlawanan sehingga membentuk sosok baru.
3. Tarik bagian tali yang panjang berlawanan arah dengan kuat-kuat, sehingga sambungan menjadi kencang.

**c. Simpul Tenun/Simpul Anyam (Sheet Bend)**
Membuat simpul anyam atau sheet bend menjadi salah satu Teknik Kepramukaan bidang tali temali yang paling dasar. Bersama dengan Simpul Mati, Simpul Hidup, Simpul Pangkal, Simpul Jangkar, dan beberapa lagi, Simpul Anyam akan sangat sering dipakai dalam kegiatan tali temali di Kepramukaan. Karena peran pentingnya itu para Pramuka, mulai dari Siaga, Penggalang, maupun anggota dewasa, sudah selayaknya menguasai dengan benar teknik pembuatan simpul anyam (sheet bend). Simpul anyam digunakan untuk menyambung dua buah utas tali kering yang ukurannya tidak sama besar. Dalam arti, jika ingin menyambung dua utas tali di mana yang satu berukuran besar dan satunya lagi berukuran kecil, gunakanlah Simpul Anyam.

*Cara membuatnya sebagai berikut:*
1. Buat sosok pada ujung tali yang besar.
2. Melalui sosok tersebut susupkan tali kecil dan putar sehingga melilit sosok dan membentuk mata.
3. Tarik kedua ujung tali besar dan kedua ujung tali kecil secara berlawanan.

**d. Simpul Tenun Berganda / Simpul Anyam Rangkap**
Simpul anyam rangkap merupakan pengembangan dari simpul anyam terutama untuk meningkatkan daya ikat (kekuatan) tali dalam menyimpul. Simpul anyam berganda atau dalam bahasa Inggris dikenal sebagai *double sheet bend*, tidak hanya mempunyai kemiripan bentuk dengan simpul anyam, namun fungsi atau kegunaan simpul ini pun nyaris sama. Keduanya berguna untuk menyambung dua buah utas tali kering yang ukurannya tidak sama besar.

Bedanya, simpul anyam berganda digunakan jika perbedaan ukuran antara dua utas tali yang disambung tersebut sangat besar, sehingga bisa dikatakan bahwa jika ingin menyambung dua utas tali kering yang ukurannya sama, gunakan simpul mati. Jika kedua utas tali berbeda ukuran (yang satu besar dan satunya lagi kecil), gunakan simpul anyam dan jika perbedaan ukuran tersebut sangat mencolok (yang satu sangat besar dan satunya sangat kecil), gunakanlah simpul anyam berganda.

*Cara membuatnya sebagai berikut:*
1. Buat sosok pada ujung tali yang besar.
2. Buat mata pada ujung tali yang kecil, yang dililit sosok tali besar.
3. Lilitkan sekali lagi tali kecil pada sosok tali besar, sehingga ujung tali kecil membentuk mata.
4. Tarik kedua ujung tali secara berlawanan.

**e. Simpul Penarik**
Digunakan untuk menambatkan benda/hewan pada patok.

*Cara membuatnya sebagai berikut:*
1. Buat simpul biasa di tengah-tengah tali.
2. Tarik lingkaran tengah simpul melalui sela-sela kaki simpul.
3. Masukkan sosok dari hasil tarikan simpul tersebut pada patok yang telah disiapkan.
4. Tarik kedua ujung tali sehingga simpul menjadi kuat kencang.

**f. Simpul Kelapa**
Digunakan untuk menyambung tali yang sama besar agar sambungan lebih kuat.

*Cara membuatnya sebagai berikut:*
1. Buat mata pada salah satu ujung tali yang akan disambung.
2. Buat mata satu lagi pada ujung tali yang lain, dengan jalan menyusupkan melalui sela-sela mata pada tali yang pertama secara bersilangan.
3. Tarik kedua ujung tali secara berlawanan.

**g. Simpul Kursi (Bowline on a Bight)**
Digunakan untuk mengangkut orang sakit dari bawah ke atas atau sebaliknya.

*Cara membuatnya sebagai berikut:*
1. Buat dua buah mata di tengah-tengah tali yang sejajar.
2. Geser mata dengan jalan menganyamnya.
3. Buat sosok yang besar dari kedua mata yang telah dianyam tersebut.
4. Dari kedua ujung tali masing-masing buat mata yang melilit sosok yang baru dibuat.

**h. Simpul Aceh**
Digunakan untuk membawa atau mengikat tawanan.

*Cara membuatnya sebagai berikut:*
1. Buat dua buah mata di tengah-tengah tali yang sejajar.
2. Geserkan kedua mata dengan cara menganyam.
3. Buat sosok yang besar dari kedua mata yang dianyam, masukkan ke bahu kanan atau bahu kiri tawanan.
4. Tarik kedua ujung tali sehingga simpul mengikat dengan ketat pada bahu tawanan.

**i. Simpul Mati (Reef Knot/Square Knot)**
Simpul mati atau reef knot (biasa disebut juga sebagai square knot) merupakan salah satu simpul mendasar dalam Kepramukaan. Simpul ini merupakan simpul yang sangat mudah untuk dipelajari. Kegunaan simpul mati adalah untuk menyambung dua buah tali yang sama besar dan dalam keadaan kering. Ini berbeda dengan simpul anyam yang digunakan untuk menyambung dua buah tali yang besarnya berbeda, ataupun dengan simpul nelayan (simpul Inggris) yang digunakan untuk menyambung tali yang basah atau licin. Di samping untuk menyambung tali atau digunakan untuk mengakhiri suatu ikatan, simpul mati dapat juga digunakan untuk menali perban segi tiga (mitela) saat melakukan PPPK. Dengan fungsi dan kegunaannya, simpul mati akan sangat sering digunakan oleh seorang pramuka baik ketika mengikuti kegiatan kepramukaan maupun di kehidupan sehari-hari.

*Cara membuatnya sebagai berikut:*
1. Letakkan ujung tali merah di atas ujung tali biru.
2. Lingkarkan ujung tali merah ke bawah tali biru kemudian lingkarkan lagi ke atas.
3. Balik arah ujung tali biru yang tadinya ke arah kanan menjadi ke arah kiri. Demikian juga dengan ujung tali merah, balik ke arah kanan dan letakkan ujungnya di atas ujung tali biru.
4. Ulangi langkah pada nomor dua.
5. Tarik masing-masing ujung tali sehingga simpul menjadi kencang.
6. Dan selesai, simpul mati atau *reef knot* atau *square knot* telah jadi.

**j. Simpul Mata dengan Sosok**
Digunakan untuk memperkuat ikatan.

*Cara membuatnya sebagai berikut:*
1. Buat sosok pada ujung tali.
2. Buat mata pada ujung tali yang pendek.
3. Belitkan kaki mata pada bagian tali yang panjang dan susupkan melalui mata.
4. Belitkan sekali lagi kaki mata pada kaki sosok dan susupkan ke mata lagi.
5. Tarik bagian tali yang panjang dan tahan pada sosok sehingga simpul menjadi kuat.
`
              },
              {
                id: 'pioneering-1-article-2',
                title: 'Bentuk Jerat',
                content: `
### Bentuk Jerat

**a. Jerat Rangkap**
Digunakan untuk membuat tangga dari tali, mencabut patok.

*Cara membuatnya sebagai berikut:*
1. Buat mata yang sedang di tengah tali.
2. Putarkan mata sehingga berhimpit dan kedudukan kedua ujung tali di antara kedua mata.
3. Masukkan kedua mata pada balok.
4. Tarik kedua ujung tali secara berlawanan.

**b. Jerat Tukang Kayu**
Digunakan untuk ikat permulaan pada balok.

*Cara membuatnya sebagai berikut:*
1. Buat mata pada ujung tali yang melingkar balok, lipat ujung tali pendek melingkar pada tali panjang, lilitkan ujung tali tersebut pada mata secara berulang-ulang.
2. Tarik ujung yang panjang sehingga jerat dengan kuat mengikat pada balok.

**c. Jerat Memperpendek Tali**
Digunakan untuk memperpendek tali yang terlalu panjang.

*Cara membuatnya sebagai berikut:*
1. Buat dua buah sosok secara berurutan di tengah-tengah tali.
2. Dari masing-masing ujung tali, buat mata yang membelit pada sosok yang telah dibuat tersebut.
3. Tarik kedua ujung tali sehingga kencang.

**d. Jerat Rangkap Berganda**
Digunakan untuk mengikatkan tali pada balok.

*Cara membuatnya sebagai berikut:*
1. Buat dua belitan pada balok.
2. Buat belitan sekali lagi pada tali pendek di sisi tali yang panjang.
3. Tarik ujung tali yang pendek dan ujung tali yang panjang.

**e. Jerat Mata Kait**
Digunakan untuk mengangkat benda dengan bantuan katrol.

*Cara membuatnya sebagai berikut:*
1. Buat mata pada tali.
2. Masukkan mata tersebut pada pengait katrol.
3. Tarik katrol, sehingga jerat menjadi kencang.

**f. Jerat Tiang Rangkap**
Digunakan untuk menambatkan perahu atau hewan pada pohon atau patok.

*Cara membuatnya sebagai berikut:*
1. Buat mata pada ujung tali.
2. Buat dua buah sosok pada ujung tali pendek dan selipkan ke dalam mata.
3. Belitkan ujung sosok pada bagian tali yang panjang dan ujungnya selipkan pada mata lagi.
4. Tarik tali panjang dan ujung tali pendek secara berlawanan.

**g. Jerat Tangga**
Digunakan untuk membuat tangga dari tali.

*Cara membuatnya sebagai berikut:*
1. Buat mata pada ujung tali.
2. Belitkan ujung tali panjang pada ujung tali pendek, sehingga berlawanan.
3. Selipkan tongkat pada mata dan tali panjang.
4. Tarik ujung tali pendek dan tali panjang berlawanan.

**h. Jerat Sauh**
Digunakan untuk mengikat cincin besi/cincin kait.

*Cara membuatnya sebagai berikut:*
1. Belitkan ujung tali dua kali pada cincin/balok atau sauh, buat mata pada ujung tali pendek dengan membelitkan pada tali panjang dan susupkan/selipkan pada sela-sela belitan tali dengan cincin.
2. Belitkan ujung tali pendek pada tali panjang beberapa kali dan ujung terakhirnya ikat menjadi satu dengan bagian tali yang panjang.

**i. Jerat Setengah**
Digunakan untuk mengikat tali pada pohon.

*Cara membuatnya sebagai berikut:*
1. Belitkan tali pada balok/pohon.
2. Belitkan ujung tali pendek pada bagian tali panjang secara berulang-ulang.
3. Rapatkan ujung tali pendek dengan tali panjang dan ikat dengan ikat belit.

**j. Jerat Sosok Berganda**
Digunakan untuk mengaitkan katrol.

*Cara membuatnya sebagai berikut:*
1. Buat sosok yang besar pada ujung tali.
2. Buat dua buah sosok lagi dengan menarik dua kali sosok pertama secara berlawanan.
3. Puntir sosok dari tali panjang sehingga membentuk mata.
4. Rapatkan sosok dari tali pendek, puntir dan tekuk/lipat masukkan ke dalam mata tali yang panjang.

**k. Jerat Penuh dan Setengah**
Digunakan untuk mengikat tali pada pohon atau patok/cincin.

*Cara membuatnya sebagai berikut:*
1. Belitkan ujung tali dua kali pada pohon/patok cincin.
2. Belitkan kembali ujung tali yang pendek pada bagian tali yang panjang dengan bentuk mata beberapa kali.
3. Ikat ujung tali pendek dengan tali panjang.

**l. Jerat Mata Rangkap dengan Sosok**
Digunakan untuk mengaitkan tali pada katrol.

*Cara membuatnya sebagai berikut:*
1. Lipat/tekuk tali menjadi dua bagian.
2. Buat mata dan sosok pada tali yang ditekuk/dilipat.
3. Masukkan sosok kedalam mata dan tekuk keluar.
4. Masukkan kaki sosok dan tali panjang ke sela-sela sosok yang ditekuk.
5. Tarik tali panjang sehingga jerat menjadi kuat.

**m. Jerat Angka Delapan dengan Sosok**
Digunakan untuk mengaitkan tali pada patok.

*Cara membuatnya sebagai berikut:*
1. Buat mata pada ujung tali dan masukkan ke dalam patok.
2. Tekuk ujung tali yang pendek dan buat angka 8.
3. Selipkan sisi ujung tali yang pendek ke dalam mata dan angka delapan.

**n. Jerat Laso**
Digunakan untuk mengikatkan tali pada patok.

*Cara membuatnya sebagai berikut:*
1. Buat sosok pada ujung tali yang membelit patok.
2. Buat simpul biasa pada ujung tali yang pendek pada sosok yang membelit tali panjang.
3. Tarik tali panjang dan tahan tali pendek.
`
              },
              {
                id: 'pioneering-1-article-3',
                title: 'Bentuk Ikat Belit',
                content: `
### Bentuk Ikat Belit

**a. Ikat Belit Pokok**
Digunakan untuk mengikat dua buah benda yang disambung lurus atau sejajar.

*Cara membuatnya sebagai berikut:*
1. Sejajarkan balok yang akan disambung 30-50 cm.
2. Buat jerat tukang kayu sebagai permulaan ikatan pada kedua ujung pokok.
3. Belitkan tali panjang pada kedua balok, belitan tersebut harus rapat, arah belitan berlawanan dengan belitan tukang kayu.
4. Selipkan ujung tali ke dalam belitan, buat jerat setengah.

**b. Ikat Belit Pokok Diubah**
Digunakan untuk menyambung dua buah benda yang disambung lurus atau sejajar.

*Cara membuatnya sebagai berikut:*
1. Sejajarkan balok yang akan disambung 30-50 cm.
2. Buat jerat tukang kayu sebagai permulaan pada kedua ujung balok.
3. Buat belitan pada tali panjang beberapa kali pada kedua balok, belitan harus rapat satu sama lain.
4. Rubah dengan membuat antara pada belitan pertama dan kedua, antara dibuat dengan membuat persilangan tali.
5. Selipkan ujung tali pada belitan dan buat jerat setengah di ujungnya.

**c. Ikat Belit Pokok Dicekik**
Digunakan untuk membuat sambungan, silang atau lurus pada pekerjaan jembatan maupun kemah/barak/sengkuap.

*Cara membuatnya sebagai berikut:*
1. Buat jerat tukang kayu pada awal ikatan.
2. Belitkan bagian tali yang panjang satu sama lain.
3. Buat cekikan pada belitan dengan menggunakan sisa ujung tali, dengan cara menyelipkan tali di antara kedua benda.
4. Lilitkan beberapa kali dan matikan ujung tali dengan jerat setengah atau jerat rangkap.

**d. Ikat Belit Silang**
Digunakan untuk menyambung dua buah benda yang tegak lurus.

*Cara membuatnya sebagai berikut:*
1. Ikat Jerat tukang kayu.
2. Belitkan tali panjang pada persilangan, empat atau lima kali.
3. Buat cekikan di sela-sela sambungan dua atau tiga belitan, ujung tali ikat belit dan jerat tukang kayu eratkan dengan simpul hidup atau jerat rangkap.

**e. Ikat Belit Puntir**
Digunakan untuk mengeraskan ikatan atau klem penjepit.

*Cara membuatnya sebagai berikut:*
1. Ikatkan tali pada gelagar dan menggapit dengan simpul mati.
2. Masukkan kayu penusuk pada sela-sela tali dengan penggapit.
3. Putar hingga ikatan kencang.

**f. Ikat Belit Peneguh**
Digunakan untuk memperkuat patok peneguh (dua buah patok atau lebih).

*Cara membuatnya sebagai berikut:*
1. Buat jerat tukang kayu pada salah satu patok.
2. Belitkan tali panjang pada kedua patok rapat-rapat.
3. Lilitkan ujung tali pada tali di antara patok beberapa kali.
4. Matikan ujung tali dengan jerat setengah.
5. Buat jerat tukang kayu sebagai awal ikatan.
6. Buat belitan dengan tali panjang pada pasak dengan balok mendatar beberapa kali.
7. Buat cekikan antara balok dengan pasak.
8. Matikan ujung jerat dengan ujung lilitan memakai simpul atau jerat rangkap.

**g. Ikat Belit Hidup**
Digunakan untuk menyambung dua buah benda yang disambung tegak lurus.

*Cara membuatnya sebagai berikut:*
1. Buat jerat tukang kayu pada awal ikatan.
2. Belitkan tali panjang pada sambungan secara berurutan secukupnya.
3. Rubah belitan dengan mencekik belitan pertama pada sela-sela sambungan dua atau tiga belitan.
4. Matikan ujung tali dengan ujung jerat menggunakan simpul hidup.

**h. Jerat Penuh Rangkap**
Digunakan untuk mengaitkan katrol pada patok.

*Cara membuatnya sebagai berikut:*
1. Belitkan tali dua kali pada patok/pohon.
2. Buat simpul pada kedua ujung tali yang membelit kedua belitan tali tersebut.
3. Kaitkan katrol pada tali dan tarik hingga kencang.
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
### Jembatan Tepi Sederhana

**a. Pekerjaan awal**
1. Pembersihan tempat/lokasi yang akan dibangun jembatan.
2. Merambu yang meliputi pengukuran lebar jembatan, penentuan sumbu as jembatan dan kedalaman sungai serta memeriksa kondisi tanah.
3. Menentukan tempat kerja di daerah tepi dekat dan tepi jauh.

**b. Pekerjaan pangkal jembatan**
1. Menyiapkan tempat pangkal jembatan.
2. Gali tanah secukupnya untuk kedudukan balok penyangga.
3. Apabila kondisi tanah pada tebing pangkal jembatan mudah longsor, diperkuat dengan turapan.
4. Pasang balok penyangga melintang tegak lurus sumbu jembatan.
5. Di samping kanan dan kiri balok penyangga dipasang patok agar tidak goyah.

**c. Pemasangan gelagar**
1. Pasang gelagar di atas balok penyangga sejajar arah sumbu jembatan (panjang gelagar maksimal 6 M) apabila dari bambu atau batang kayu bulat minimal 10 Cm.
2. Gelagar yang bertumpu di atas balok penyangga diratakan dan dipaku/diikat dengan kawat.
3. Gelagar dipasang rapat apabila di atasnya ditimbun tanah.
4. Untuk jembatan yang dilalui kendaraan jumlah gelagar dibuat minimal 8 batang pohon kelapa/pohon yang berdiameter 25-30 Cm disusun berjajar rapat dengan pucuk dan pangkal batang satu dengan batang yang lain berlawanan.
5. Pada ujung-ujung gelagar dipasang balok penahan kemudian dipasang piket (patok) di sisi luar dan ujung-ujung balok penahan.

**d. Pembuatan lantai**
1. Lantai dibuat dari papan kayu bulat yang utuh atau dibelah.
2. Dipasang melintang di atas gelagar memanjang diikat dengan kawat atau dipaku.
3. Untuk memperkuat kedudukan lantai dipasang balok penutup atau penjepit lantai.

**e. Pembuatan sandaran**
1. Sandaran dibuat dari kayu persegi, kayu bulat atau bambu.
2. Tiang sandaran dipasang pada bagian ujung-ujung pangkal jembatan ditanam di tanah.
3. Kayu/bambu sandaran dihubungkan dengan tiang sandaran diikat kawat atau dipaku.
`
              },
              {
                id: 'pioneering-2-article-2',
                title: 'Jembatan Kuda-kuda',
                content: `
### Jembatan Kuda-kuda

**a. Pekerjaan awal**
1. Pembersihan tempat/lokasi yang akan dibangun jembatan.
2. Merambu yang meliputi pengukuran lebar jembatan, kedalaman sungai serta kondisi tanah.
3. Menentukan tempat kerja di daerah tepi dekat dan tepi jauh.

**b. Pekerjaan pangkal jembatan**
1. Menyiapkan tempat pangkal jembatan.
2. Gali tanah secukupnya untuk kedudukan balok penyangga.
3. Apabila keadaan tanah tebing pada pangkal jembatan mudah longsor diperkuat dengan turapan.
4. Pasang balok penyangga melintang atau tegak lurus sumbu jembatan.
5. Di samping kiri dan kanan balok penyangga dipasang patok agar kedudukan balok tidak goyah.

**c. Pembuatan kuda-kuda**

**(1) Kuda-kuda kaki sejajar**
* (a) Membuat mal kuda-kuda dari tali di atas tanah sesuai dengan lebar jembatan yang akan dibuat.
* (b) Buat kuda-kuda dari batang kayu bulat/bambu diameter 10 Cm sesuai dengan mal yang sudah dibuat.
* (c) Pasang batang kayu bulat/bambu diameter 10 Cm pada kaki kuda-kuda bagian bawah sebagai balok lumpur.
* (d) Pasang penopang dari batang kayu/bambu bersilangan di atas kedua kaki kuda-kuda dan semua sambungan diikat dengan belit silang.

**(2) Kuda-kuda kaki silang**
* (a) Dua buah batang kayu bulat/bambu minimal diameter 10 Cm diikat dengan ikatan belit silang pada bagian persilangan bagian bawah sebagai kaki kuda-kuda.
* (b) Pasang batang kayu bulat/bambu diameter 10 Cm pada kaki kuda-kuda pada bagian bawah sebagai balok lumpur.

**d. Pembuatan gelagar**
1. Pasang gelagar dari batang kayu bulat/bambu diameter 10 Cm minimal 3 batang di atas kuda-kuda dan balok penyangga dengan diikat memakai ikat belit silang.
2. Pasang balok penahan pada ujung-ujung balok gelagar yang bertumpu pada balok penyangga.

**e. Pembuatan lantai jembatan**
1. Potong kayu bulat yang telah dibelah atau papan, sesuai dengan lebar jembatan yang telah direncanakan.
2. Pasang potongan papan, kayu bulat tersebut melintang di atas gelagar diikat dengan ikat silang atau dipaku.
3. Bila menggunakan bambu maka harus dianyam atau dibuat sasak.

**f. Pembuatan sandaran**
1. Sandaran dibuat dari kayu persegi, kayu bulat/bambu.
2. Tanam bambu/kayu bulat pada ujung jembatan setinggi 90-100 Cm sebagai tiang sandaran.
3. Pasang bambu/kayu bulat pada tiang sandaran tersebut sebagai titihan, untuk bagian tengah titihan diikatkan pada kaki kuda-kuda sebagai tiang sandaran.
`
              },
              {
                id: 'pioneering-2-article-3',
                title: 'Jembatan Bambu Satu',
                content: `
### Jembatan Bambu Satu

**a. Kebutuhan Bambu**
1. **Bambu besar:**
   * 4 potong (ukuran 3 M)
   * 1 potong (ukuran 250 Cm)
2. **Bambu sedang:**
   * 2 potong (ukuran 100 Cm, 60 Cm, 3 M)

**b. Kebutuhan Tali**
1. 16 Gulung (ukuran panjang 6 M)
2. 2 Gulung (ukuran panjang 4 M)
`
              },
              {
                id: 'pioneering-2-article-4',
                title: 'Jembatan Tarik',
                content: `
### Jembatan Tarik

**a. Kebutuhan Bambu**
1. **Bambu besar:**
   * 2 potong (ukuran 250 Cm)
   * 2 potong (ukuran 160 Cm)
2. **Bambu sedang:**
   * 4 potong (ukuran 3 M)
   * 5 potong (ukuran 1 M)
   * 2 potong (ukuran 2 M)
   * 1 potong (ukuran 160 Cm)
   * 20 potong (ukuran 120 Cm)
3. **Bambu kecil:**
   * 14 potong (ukuran 50 Cm)

**b. Kebutuhan Tali**
1. 21 Gulung (ukuran panjang 6 M)
2. 1 Gulung (ukuran panjang 7 M)
3. 2 Gulung (ukuran panjang 15 M)
`
              },
              {
                id: 'pioneering-2-article-5',
                title: 'Jembatan Kaki Delapan Bersudut Dua',
                content: `
### Jembatan Kaki Delapan Bersudut Dua

**a. Kebutuhan Bambu**
1. **Bambu besar:**
   * 4 potong (ukuran 5 M)
   * 4 potong (ukuran 4 M)
2. **Bambu sedang:**
   * 2 potong (ukuran 3 M)
   * 6 potong (ukuran 2 M)
   * 7 potong (ukuran 150 Cm)
   * 60 buah (ukuran 150 Cm)

**b. Kebutuhan Tali**
1. 26 Gulung (ukuran panjang 6 M)
2. 6 Gulung (ukuran panjang 15 M)
`
              },
              {
                id: 'pioneering-2-article-6',
                title: 'Jembatan Topang',
                content: `
### Jembatan Topang

**a. Jembatan Topang Tunggal**
Jembatan Topang hanya dapat digunakan untuk jembatan kelas 5 Ton dan biasanya hanya digunakan jika tidak terdapat bahan-bahan lain seperti tali-tali pengikat dan kayu bulat yang dapat ditebang di tempat itu. Jika di tepi-tepi terdapat peletak-peletak yang dapat digunakan, lebih baik digunakan jembatan topang lain.

* Terdiri dari dua kuda-kuda yang diikat, yang duduk pada tebing-tebing rintangan dan ujung lainnya saling bertemu. Pada titik pertemuan ini kuda-kuda menyangga pemikul lintang, yang di atasnya terletak bangunan atas jembatan.
* Kuda-kuda harus dibuat sedemikian rupa, supaya satu dengan yang lainnya dapat tepat.
* Kemiringan kuda-kuda tidak boleh kurang dari 1:2 dan lantai jembatan harus dengan kemiringan 1:60.
* Tempat-tempat peletak dari kuda-kuda harus dapat tepat berhadap-hadapan dan pada ketinggian yang sama, dan harus diusahakan supaya kaki jembatan macam ini dapat dikerjakan pada bentangan 10 M oleh 30 orang, dalam waktu kurang lebih 2 jam, jika bahan-bahan sudah ada di tempat itu.

**b. Jembatan Topang Berganda**
Dapat dibuat sampai bentangan 12 M. Kedua kuda-kuda tidak saling bertemu, tetapi dihubungkan dengan balok mendatar, dan oleh karenanya terdapat dua titik tumpu.
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
### Sengkuap

**a. Sengkuap Satu Banjar Tiang**
*Cara membuatnya adalah sebagai berikut:*
1. Lebar sengkuap kurang lebih 3 meter.
2. Panjang sengkuap tergantung jumlah personel yang menempatinya.
3. Panjang petak 2 s.d. 4 meter, menurut kekuatan bahan yang digunakan.
4. Tinggi tiang kurang lebih 2,5 meter dan ditanam 0,5 meter.
5. Belandar depan dipasang setinggi 1,8 meter.
6. Panjang kasau 4,25 meter dan dipasang dengan jarak 0,5 meter, kasau menggunakan bambu belah maka belahannya menghadap ke atas. Ujung kasau bagian atas (depan) dilebihkan di atas belandar kurang lebih 0,6 meter.
7. Pada bagian belakang tidak harus menggunakan belandar, untuk itu ujung-ujung kasau ditancapkan ke tanah.
8. Bila penutup atas menggunakan daun pisang atau alang-alang maka lebih dulu dipasang reng di atas kasau dengan jarak 0,3 meter untuk mengikat atap.
9. Di sekeliling sengkuap dibuatkan parit, tanah bekas galiannya yang kering dapat digunakan untuk meninggikan lantai.
10. Sebagai bahan penutup dapat menggunakan daun palem atau anyaman bambu, dan lain-lain.

**b. Sengkuap Dua Banjar Tiang**
*Cara membuatnya sebagai berikut:*
1. Lebar sengkuap kurang lebih 3 meter.
2. Panjang sengkuap tergantung jumlah personel yang menempatinya.
3. Panjang petak 2 s.d. 4 meter.
4. Tinggi tiang depan kurang lebih 3 meter dan ditanam ke tanah 50 cm.
5. Tinggi tiang belakang kurang lebih 2,5 meter dan ditanam ke tanah 50 cm.
6. Panjang kasau 4,25 meter dengan jarak pemasangan 0,5 meter dan dilebihkan ke depan 0,6 meter serta dilebihkan ke belakang 0,75 meter.
7. **Pemasangan bale-bale:**
   * (a) Belandar depan menempel pada tiang depan atau di atas, tiang bale-bale setinggi 0,5 meter.
   * (b) Belandar belakang menempel pada tiang belakang atau di atas tiang bale-bale setinggi 0,55 meter.
   * (c) Tiang bale-bale ditanam 0,25 meter dengan jarak 1 meter.
   * (d) Gelagar bale-bale diletakkan di atas belandar dengan jarak 0,2 s.d. 0,5 meter.

**c. Sengkuap Dua Banjar Tiang dengan Serambi**
Cara membuatnya sama dengan Sengkuap 2 banjar tiang hanya ditambah dengan serambi kurang lebih 1 meter dari depan, panjang tiang serambi 2,2 meter dan ditanam 0,5 meter.

1. Ujung kaso atas dengan gelandar diikat satu per satu.
2. Ujung kaso bawah ± 20 cm dari belandar bawah diikat satu per satu.
3. **Penutup atap dengan welit disusun sebagai berikut:**
   * (a) Disusun dari bawah ke atas dengan jarak 0,04 - 0,10 meter.
   * (b) Menyambung ke samping dengan bertalipan 0,10 - 0,20 meter.
   * (c) Tiap welit diikat pada kasau dan paling bawah dibalik.
4. Bale-bale dipasang secara memanjang/melintang dengan menggunakan pelupuk.
5. Tinggi tiang bale-bale bagian depan 0,50 meter dan bagian belakang 0,55 meter.
6. Jarak tiang bale-bale 1,0 meter.
7. Antara tiang bale-bale depan dan belakang diberi tiang tambahan dan belandar.
8. **Pembuatan Parit penguras:** Di sekeliling barak harus dibuat parit penguras, bekas galian parit yang digali tanahnya dapat dipakai mempertinggi lantai barak, kemiringan lantai 1 : 20.
9. **Adapun teknik menghitungnya sebagai berikut (panjang 11M / 3 Petak):**

   **(a) Bahan yang dibutuhkan:**
   * i. Bambu Bitung panjang efektif 6 M diameter 15 Cm.
   * ii. Bambu Kaso panjang efektif 5 M diameter 7 Cm.
   * iii. Atap atau Welit panjang 1 M Jarak welit 20 Cm.
   * iv. Bahan pengikat dan penutup (Ijuk, Gedeg).

   **(b) Kebutuhan Bambu Bitung:**
   * i. Jumlah rangka = Jumlah petak + 1 = 3 + 1 = 4 rangka.
   * ii. Bahan Rangka:
       * Tiang Depan = 3,00 M
       * Tiang Belakang = 1,50 M
       * Tiang Serambi = 2,50 M
       * Tiang Bale Depan = 0,75 M
       * Tiang Bale Tengah = 0,77 M
       * Tiang Bale Belakang = 0,80 M
       * **Total = 9,32 M**
       * Jadi: 9,32 X 4 = 37,28 M

   **(c) Belandar:**
   * i. Belandar Sengkuap = 3 X 12,00 = 36,00 M
   * ii. Belandar Bale = 3 X 11,45 = 34,35 M
   * **Total = 70,35 M**
   * Jadi Kebutuhan Bambu Bitung = 37,28 + 70,35 = 107,63 M = 108 M
   * 108 M / 6 = 18 Batang.
   * Keamanan 10% = 18 + 1,8 = 19,8 dibulatkan **20 Batang**.

   **(d) Kebutuhan Bambu Kaso:**
   * **Kaso Sengkuap:**
       * = (P. Bldr Sengkuap + 1) / Jarak Kaso X 4,25 M
       * = (12 + 1) / 0,5 X 4,25 M
       * = 25 X 4,25 = 106,25 M
   * **Kaso Serambi:**
       * = (P. Bldr Skuap + 1) / Jarak Kaso X 1,60 M
       * = (12 + 1) / 0,5 X 1,60 M
       * = 25 X 1,60 = 40,00 M
   * **Kaso Bale:**
       * = (Pj. Bld Bale + 1) / Jarak Kaso X 2,50 M
       * = (11,45 + 1) / 0,5 X 2,50 M
       * = 23 X 2,50 = 57,50 M
   * **Total:**
       * Jadi Kebutuhan Bambu Kaso 106,25 + 40,00 + 57,50 = 203,75 M dibulatkan 204 M
       * 204 / 5 = 40,4 dibulatkan 41 Batang.
       * Keamanan 10% = 41 + 4,1 = 45,1 dibulatkan **46 Batang**.

   **(e) Kebutuhan Atap / welit:**
   * **Atap Sengkuap:**
       * = (Panj. Bldr Sengkuap / Panjang Welit) X (Panj. Kaso / Jarak Welit)
       * = (12,00 / 1,00) X (4,25 / 0,20)
       * = 12 X 22 = 264 Lembar.
   * **Atap Serambi:**
       * = (Panj. Bldr Sengkuap / Panj. Welit) X (Panj Kaso / Jarak)
       * = 12 X 8 = 96 Lembar.
   * **Total:**
       * Jadi Kebutuhan Atap / Welit = 264 + 96 = 360 Lembar.
       * Keamanan 10% = 360 + 36 = **396 Lembar**.
`
              },
              {
                id: 'pioneering-3-article-2',
                title: 'Barak',
                content: `
### Barak

**a. Barak Tionghoa**
*Cara membuatnya sebagai berikut:*
1. Panjang barak disesuaikan dengan jumlah penghuninya, jarak antar tiang 2 meter.
2. Lebar kurang lebih 4 meter, dan tinggi 3 meter.
3. Tiang ditanam kurang lebih 0,5 meter.
4. Memasang kuda-kuda di atas tiang.
5. Memasang belandar di atas kaki kuda-kuda.
6. Memasang kaso dari kayu/bambu dengan jarak kurang lebih 50 cm.
7. Memasang atap welit/kajang.
8. Memasang dinding/bilik bambu.
9. Membuat parit keliling barak.

**b. Barak Biasa**
*Cara membuatnya sebagai berikut:*
1. Panjang barak kurang lebih 6 meter atau disesuaikan dengan penghuninya, jarak antar tiang 3 meter.
2. Lebar kurang lebih 4 meter, tinggi tiang 3 meter dan ander 1 meter.
3. Memasang tiang dengan belandar.
4. Memasang ander.
5. Memasang kaso dengan jarak kurang lebih 50 cm.
6. Memasang bale-bale dengan pelupuh.
7. Memasang atap dengan welit/jerami/alang-alang.
8. Memasang dinding/bilik dari bambu.
9. Membuat parit sekeliling barak.
`
              },
              {
                id: 'pioneering-3-article-3',
                title: 'Menara',
                content: `
### Menara

**a. Menara tinjau di atas pohon**
*Cara membuatnya sebagai berikut:*
1. Memilih dahan yang baik letaknya.
2. Dahan yang sudah dipilih dipasang bambu-bambu mendatar sebagai gelagar dan di atasnya dipasang lantai yang terbuat dari belahan bambu atau bambu kecil.
3. Membuat sandaran/dinding pengaman dari bambu atau kayu.
4. Membuat tangga yang terbuat dari bambu atau tali.

**b. Menara tinjau yang terbuat dari bambu berkaki tiga**
1. Tiga batang bambu betung yang lurus panjangnya kurang lebih 8 meter, di bagian atas diikat dengan kawat atau ijuk.
2. Ujung-ujung bambu kurang lebih 1 meter dari atas dipasang pasak besi atau kayu, masing-masing bambu bisa bergerak.
3. Hubungkan antar tiang dengan bambu sebagai gelagar lantai kurang lebih 2,5 meter dari pasak yang telah terpasang.
4. Pasang lantai di atas gelagar lantai dengan bambu yang telah dibelah/bambu dengan diameter kecil.
5. Gali kurang lebih dalamnya 1 meter dan diameter lubangnya 30 cm untuk menempatkan kaki menara dengan jarak kurang lebih 3 meter.
6. Dirikan menara pada lubang yang telah digali dan ditimbun kembali dengan tanah yang banyak batuan dan dipadatkan.
7. Hubungkan kaki menara yang satu dengan kaki yang lain dengan bambu sebagai skor/penguat.
8. **Kebutuhan Bambu:**
   * (a) Bambu besar: 3 potong (ukuran 5,5 M).
   * (b) Bambu sedang: 3 potong (ukuran 2 M).
   * (c) Bambu kecil:
       * 3 potong (ukuran 115 Cm).
       * 1 buah (ukuran 150, 40, 130, 10, 120, 100, 90, 80, 70, 60 Cm).
       * 10 potong (ukuran 50 Cm).
9. **Kebutuhan Tali:**
   * (a) 12 Gulung (ukuran panjang 6 M).
   * (b) 1 Gulung (ukuran panjang 8 M).
   * (c) 2 Gulung (ukuran panjang 12 M).
   * (d) 2 Gulung (ukuran panjang 15 M).

**c. Menara Tinjau / Pandang Berkaki Empat**
1. **Kebutuhan Bambu:**
   * (a) Bambu besar: 8 potong (ukuran 3 M).
   * (b) Bambu sedang:
       * 4 potong (ukuran 2 M).
       * 11 potong (ukuran 150 Cm).
       * 4 potong (ukuran 60 Cm).
       * 20 buah (ukuran 180 Cm).
   * (c) Bambu kecil: 14 potong (ukuran 50 Cm).
2. **Kebutuhan Tali:**
   * (a) 42 Gulung (ukuran panjang 6 M).
   * (b) 2 Gulung (ukuran panjang 15 M).
   * (c) 2 Gulung (ukuran panjang 12 M).
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
### Bekal Air

**a. Macam-macam sumber air**
1. **Air permukaan:**
   * (a) Rawa, Danau.
   * (b) Air sungai.
   * (c) Air Waduk.
2. **Air tanah:**
   * (a) Mata Air.
   * (b) Sumur Artetis.
   * (c) Sumur Biasa.
   * (d) Sumur Bor.

**b. Penyediaan sumber air tanah**
1. **Mata air:**
   * (a) Merupakan sumber perbekalan air.
   * (b) Sediakan tempat penampungan.
   * (c) Cegah pengotoran.
2. **Sumber Artetis:**
   * (a) Sumur yang dibuat di atas saluran air tanah.
   * (b) Semburan tergantung pada tekanan air.
   * (c) Biasa terdapat di pegunungan batu.
3. **Sumur Biasa:**
   * (a) Sebagian besar digunakan penduduk.
   * (b) Perlu perkuatan dinding agar tidak runtuh.
   * (c) Dapat digunakan pompa air.
4. **Sumur Bor:**
   * (a) Pengeboran dengan alat.
   * (b) Baik di tanah yang kohesif (campuran tanah liat dan pasir).

**c. Menempatkan alat peralatan pompa air**
1. **Pada air yang dangkal:**
   * (a) Gali dasarnya.
   * (b) Bekas galian isi koral.
   * (c) Tempatkan saringan pada koral.
2. **Pada air sungai.**
3. **Pada waduk/danau:**
   * (a) Buat alat pembantu apung.
   * (b) Pasang ujung pipa/saringan pengisap di atas pengapung.
   * (c) Alat pengapung dibuat dari balok dolken atau drum-drum.
4. **Sungai rembesan:**
   * (a) Buat parit-parit di sepanjang sungai.
   * (b) Isi batu koral biar tidak longsor.

**d. Mencari sumber air**
1. **Pelajari Peta:**
   * (a) Kenali lokasi tempatnya.
   * (b) Tentukan sasaran (sungai, danau, mata air).
   * (c) Cari dan cetak keterangan yang dapat dipercaya.
2. **Sasaran Danau:**
   * (a) Catat keadaan danau.
   * (b) Catat data umum (luas, dalam, warna air, perkiraan debit).
3. **Sasaran Sungai:**
   * (a) Catat data sungai (lebar, dalam, deras air, dan debet air).
   * (b) Catat jalan-jalan pendekat.
   * (c) Buat denah.

**e. Penjernihan air**
1. **Bahan penjernih air:**
   * **(a) Bahan alam:**
       * i. Pasir beton.
       * ii. Ijuk.
       * iii. Batu.
       * iv. Kerikil.
       * v. Batu apung.
       * vi. Karang aktif.
       * vii. Kain kasa/kapas.
       * viii. Bambu.
   * **(b) Bahan kimia:**
       * i. Tawas.
       * ii. Kaporit.
       * iii. Garam dapur.
       * iv. Kapur tohor.
       * v. Phenol red.
       * vi. Ph tablet.
       * vii. Kertas indikator.
       * viii. Soda.
2. **Proses pengendapan:**
   * **(a) Secara alamiah:**
       * i. Tidak menggunakan bahan kimia.
       * ii. Mengendapkan kotoran-kotoran.
       * iii. Waktu relatif lama.
   * **(b) Dengan bahan kimia:**
       * i. Hampir sama dengan alamiah.
       * ii. Disini proses pengendapan dipercepat dengan mencampur bahan kimia berupa tawas.
   * **(c)** Pengendapan juga merupakan proses pendahuluan dalam penyaringan.
3. **Penyaringan:**
   * **(a) Penyaringan dengan pasir lambat:**
       * i. Tanpa bahan pengawet.
       * ii. Dapat menghilangkan sel-sel amuba.
   * **(b) Penyaringan dengan pasir cepat:**
       * i. Cara ini hampir sama dengan air lambat.
       * ii. Disini diberi tekanan untuk mempercepat perembesan air.
       * iii. Biasanya kurang baik.
   * **(c) Beberapa cara saringan pasir lambat:**
       * i. Cara petak.
       * ii. Cara langsung.
       * iii. Dengan drum.
       * iv. Dengan tempat.
4. **Pembunuhan kuman:**
   * (a) Secara ilmu alam, dipanaskan sampai mendidih.
   * (b) Secara ilmu hayat dengan memasukan baksil ke dalam saringan (jarang dilakukan).
   * (c) Secara kimia penyempurnaan chlor dengan air.
   * (d) Untuk menghilangkan bau dan rasa chlor, sebelum chlor dituang dicampur terlebih dulu air dengan bahan amoniak.
`
              },
              {
                id: 'pioneering-4-article-2',
                title: 'Dasar-Dasar Pengetahuan Tentang Listrik',
                content: `
### Dasar-Dasar Pengetahuan Tentang Listrik

**a. Proses terjadinya listrik**
1. **Karena gesekan dua buah benda:**
   * (a) Ebonit digosok bulu kucing.
   * (b) Kaca digosok dengan sutera.
2. **Karena proses kimia:**
   * (a) Acumulator.
   * (b) Bateray.
3. **Karena perpotongan konduktor dengan garis gaya listrik:**
   * (a) Generator.
   * (b) Dinamo.

**b. Istilah dalam listrik**
1. **Tegangan:**
   * (a) Adalah besar muatan listrik pada suatu tempat.
   * (b) Simbulnya "E".
   * (c) Satuan Volt "V".
   * (d) Ada dua macam tegangan:
       * i. Tegangan searah (DC) contohnya baterai, accu.
       * ii. Tegangan bolak-balik (AC) contohnya generator.
2. **Arus:**
   * (a) Adalah aliran listrik yang mengalir pada penghantar.
   * (b) Simbulnya "I".
   * (c) Satuannya Amper (A).
3. **Tahanan:**
   * (a) Adalah besar kemampuannya yang menghambat suatu bahan listrik.
   * (b) Simbulnya "R".
   * (c) Satuannya "Ohm".
4. **Daya:**
   * (a) Kemampuan yang dihasilkan oleh alat listrik.
   * (b) Simbolnya "P".
   * (c) Satuannya "Watt" (W).

**c. Hubungan listrik**
1. **Seri:**
   * (a) Lampu.
   * (b) Baterai.
   * (c) Tahanan.
2. **Pararel:**
   * (a) Lampu.
   * (b) Baterai.
   * (c) Tahanan.
3. **Kombinasi:**
   * (a) Lampu.
   * (b) Baterai.
   * (c) Tahanan.
`
              },
              {
                id: 'pioneering-4-article-3',
                title: 'Alat Peralatan dan Instalasi Listrik',
                content: `
### Alat Peralatan dan Instalasi Listrik

**a. Alat tukang listrik**

**b. Bahan Instalasi listrik**
1. Macam kawat.
2. Instalasi lain.

**c. Alat ukur listrik**
1. **Avometer:**
   * (a) Mengukur besarnya arus.
   * (b) Mengukur tegangan.
   * (c) Mengukur tahanan isolasi instalasi.
2. **Watt meter:**
   * (a) Mengukur daya listrik.
   * (b) Disambung seri dan paralel.
3. **Tang meter:**
   * Mengukur besarnya arus.
4. **Megger:**
   * (a) Mengukur tahanan isolasi instalasi.
   * (b) Saluran bebas dari tegangan listrik.
   * (c) Semua lampu dilepas dan saklar pada kedudukan mati/off.
5. **Frekwensi meter:**
   * (a) Mengukur frekwensi.
   * (b) Pengukuran disambung paralel.

**d. Pengetahuan dasar tentang alat pembangkit listrik**
1. **Pembangkit listrik AC (Arus bolak-balik):**
   * **(a) Macam generator:**
       * i. Generator satu phass.
       * ii. Generator dua phass.
       * iii. Generator tiga phass, tiga kawat (hubungan segitiga) dan empat kawat (hubungan bintang).
   * **(b) Bahan generator (Stator):**
       * i. Merupakan bagian yang tidak bergerak.
       * ii. Terdiri dari gardan, kutub utama, kutub bantu dan kumparan stator.
       * iii. Merupakan bagian yang berputar (Rotor).
       * iv. Terdiri dari as penahan, komulator, kumparan rotor.
   * **(c) Prinsip kerja:**
       * i. Belitan digerakan pada medan magnet, sehingga timbul tegangan listrik.
       * ii. Besarnya tegangan tergantung:
           * Putaran.
           * Jumlah belitan.
           * Besar medan magnet.
           * Celah udara antara belitan dan medan magnet.
   * **(d) Penggunaan generator:**
       * i. Untuk penerangan.
       * ii. Untuk tenaga peralatan listrik.
2. **Pembangkit listrik arus searah:**
   * **(a) Macamnya:**
       * i. Generator/dinamo DC.
       * ii. Accumulator.
       * iii. Bateray.
   * **(b) Macam dinamo DC.**
   * **(c) Prinsip kerja dinamo:**
       * i. Belitan konduktor digerakkan.
       * ii. Gerakan pada medan magnet.
       * iii. Timbul tegangan.
   * **(d) Penggunaan dinamo DC:**
       * i. Untuk penerangan.
       * ii. Untuk tenaga peralatan listrik.
   * **(e) Penggunaan Accumulator dan baterai:**
       * i. Untuk penerangan.
       * ii. Untuk tenaga peralatan listrik DC.

**e. Merawat Generator**
1. Melumasi bantalan-bantalan.
2. Usahakan generator selalu dalam keadaan kering, jangan sampai lembab.
3. Kontrol baut-baut dan mur-mur pada generator.
4. Jangan merubah hubungan yang sudah ada pada generator.

**f. Mengoperasikan generator**
1. Beban yang terpasang pada generator dilepas dahulu.
2. Jalankan mesin penggerak sesuai putaran yang sudah ditentukan.
3. Lihat Volt meter untuk mengetahui tegangan yang harus dicapai.
4. Setelah mesin penggerak dan generator berjalan normal, baru masukan sakelar beban. Apabila tegangan beban turun, tambah putaran generator.
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
### 1) Panjat bebas (Free Climbing)
Sesuai dengan namanya free climbing alat pengaman yang paling baik adalah diri sendiri. Namun keselamatan dapat ditingkatkan dengan adanya keterampilan yang diperoleh dari latihan yang baik dan mengikuti prosedur yang benar, dengan latihan yang baik otot-otot tangan dan kaki akan cukup kuat dan terlatih, begitu pula dengan keseimbangan badan dan gerakan-gerakan akan terlatih dengan sendirinya disamping itu dapat memperkirakan kemampuan dan memperhitungkan lintasan yang akan dilalui.

Pada free climbing peralatan berfungsi hanya sebagai pengaman, peralatan yang digunakan antara lain tali, carabiner, sling, chock, dan piton tetap dipakai tetapi hanya berfungsi sebagai pengaman bila jatuh. Dalam pelaksanaannya pendaki bergerak sambil memasang jadi kalaupun tanpa alat-alat tersebut pendaki masih mampu bergerak atau melanjutkan pendakian. Dalam tipe ini pendaki diamankan oleh belayer.
`
              },
              {
                id: 'mountaineering-1-article-2',
                title: 'Panjat dengan Alat Bantu (Artificial Climbing)',
                content: `
### 2) Panjat dengan alat bantu (Artificial Climbing)
Merupakan panjat bebas dengan menggunakan bantuan peralatan tambahan seperti paku tebing, bor, stirrup, palu/hammer, pengaman sisip, cincin kait, seling pendek, harnes, bedak magnesium.

Alat-alat tersebut digunakan untuk menambah ketinggian. Hal ini dilakukan secara berkelompok, dengan pembagian tugas yang jelas antara leader dan belayer, sehingga kelompok tersebut dapat mencapai ketinggian, baik secara perorangan maupun secara bersama-sama.
`
              },
              {
                id: 'mountaineering-1-article-3',
                title: 'Panjat Tanpa Alat Bantu (Free Soloing)',
                content: `
### 3) Panjat tanpa alat bantu (Free Soloing)
Merupakan bagian dari free climbing, tetapi si pendaki benar-benar melakukannya dengan segala resiko yang dihadapinya seorang diri, dalam pergerakannya tidak memerlukan peralatan pengaman, untuk melakukan free solo climbing pendaki harus benar-benar mengetahui segala bentuk rintangan atau bentuk pergerakan pada rute yang dilaluinya serta menghafalkan dahulu segala gerakan, tumpuan dan pegangan, biasanya free solo climbing dilakukan oleh pendaki yang sudah pernah mendaki pada lintasan yang sama.

Resiko yang dihadapi pendaki tipe ini sangat fatal sehingga hanya orang-orang yang mampu dan benar-benar profesional yang akan melakukannya.
`
              },
              {
                id: 'mountaineering-1-article-4',
                title: 'Cara Melintasi',
                content: `
### 4) Cara melintasi Panjat bebas, Panjat dengan alat bantu, panjat tanpa alat bantu

a) Membaca tebing dan menentukan titik-titik rawan dengan alternatif mengatasinya.

b) Kecuali tali dinamic semua peralatan pada tebing dipasang pada sabuk si pemanjat dengan rapi agar tidak mengganggu gerakan memanjat.

c) Ujung tali dinamic dililitkan pada cincin kait dan digantung pada tali pipih yang diikatkan pada sabuk bagian depan.
`
              },
              {
                id: 'mountaineering-1-article-5',
                title: 'Tehnik Melintasi',
                content: `
### 5) Tehnik melintasi

a) Bergerak memanjat dengan menggunakan ruas jari tangan dan injakan kaki pada lekukan dan benjolan tebing.

b) Apabila tidak mungkin dengan cara itu maka dapat digunakan celah yang ada pada tebing dengan menggunakan stopper/chock/friends lalu pasang cincin kait dan masukkan tali dinamic kedalamnya demikian seterusnya.

c) Bila tidak terdapat celah lekukan dan benjolan tebing maka pasang paku tebing dan pukul dengan palu pasang cincin kait dan masukkan ujung tali dinamic demikian seterusnya.

d) Agar tetap dijaga keseimbangan badan sampai ke tempat yang kita tuju.

e) Panjat tebing.
`
              },
              {
                id: 'mountaineering-1-article-6',
                title: 'Jenis–jenis Alat dan Prasarana',
                content: `
### 6) Jenis–jenis alat dan prasarana panjat tebing

a) Tali dinamic.
b) Tali tubuh.
c) Sisip pengaman: Stopper, chok dan friends.
d) Tali sling atau tali pipih.
e) Cincin kait.
f) Paku tebing, palu tebing.
g) Alat bantu memperlambat luncur (sticht plate belay).
h) Magnesium.
`
              },
              {
                id: 'mountaineering-1-article-7',
                title: 'Tehnik Pemasangan',
                content: `
### 7) Tehnik pemasangan panjat tebing

a) Membaca tebing.

b) Mempersiapkan alat–alat yang digunakan dalam pemanjatan.

c) Bergerak memanjat dengan menggunakan benjolan tebing apabila tidak terdapat celah atau benjolan tebing, kita pergunakan dengan paku tebing sampai ke tempat yang kita tuju.
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
                title: 'Kegunaan Turun Hesty dan Naik Togle',
                content: `
### 1) Kegunaan Turun Hesty dan Naik Togle

**a) Kegunaan turun hesty**
Untuk melintasi medan yang tidak terlalu curam dan tidak bisa dilalui dengan jalan kaki biasa dengan menggunakan tali Peleton.

**b) Kegunaan naik togle rope**
Untuk melintasi medan yang tidak terlalu terjal yang sulit dilewati jalan kaki biasa.
`
              },
              {
                id: 'mountaineering-2-article-2',
                title: 'Cara Melintasi Turun Hesty dan Rappelling',
                content: `
### 2) Cara Melintasi Turun Hesty dan Rappelling

**a) Hesty**
1.  Tali lintasan berada di belakang punggung, kedua tangan direntangkan sambil memegang tali lintasan dan telapak tangan menghadap ke atas dengan menggunakan sarung tangan.
2.  Kedua kaki dibuka selebar bahu digeser ke samping, bersamaan itu kedua tangan yang direntangkan mengikuti gerakan.

**b) Rappelling**
1.  Menggunakan peralatan tali saja, dibelitkan sedemikian rupa pada badan, cara ini terjadi gesekan antara badan dengan tali, sehingga bagian badan yang bergesekan akan terasa panas.
2.  Menggunakan tali tubuh, carabiner dan descender memakainya hampir sama dimana gaya gesek diberikan pada descender.

**c) Melintasi Turun Hesty**
1.  Turun hesty.
2.  Rappelling.
`
              },
              {
                id: 'mountaineering-2-article-3',
                title: 'Jenis–jenis Alat dan Prasarana',
                content: `
### 3) Jenis–jenis alat dan prasarana turun hesty dan rappelling

**(1) Turun hesty**
* (a) Tali peleton Ø 1,5 Cm, Panjang 225 M.
* (b) Sarung tangan.
* (c) Pohon, batu, patok sebagai tambatan ikatan pokok.

**(2) Rappelling**
* (a) Tali statik/dinamik.
* (b) Sarung tangan.
* (c) Cincin kait.
* (d) Carabiner.
* (e) Descender (figure 8).
`
              },
              {
                id: 'mountaineering-2-article-4',
                title: 'Teknik Pemasangan',
                content: `
### 4) Teknik pemasangan turun hesty dan Rappelling

**(1) Turun hesty**
* (a) Gunakan medan yang memiliki sudut ± 60º.
* (b) Ikatan tali peleton pada tambatan yang kuat dengan ikatan pokok sisa tali diuraikan ke bawah tebing sampai pada medan yang cukup rata.
* (c) Periksa dan coba lintasan sebelum digunakan.

**(2) Rappelling**
* (a) Cari medan yang memiliki sudut ± 90˚.
* (b) Pasang sit harness, cincin kait dan sarung tangan.
* (c) Masukkan tali jalur ke descender yang dihubungkan dengan cincin kait.
* (d) Masukkan tali jalur ke carabiner yang dihubungkan dengan cincin kait.
* (e) Periksa dan coba sebelum digunakan.
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
                title: 'Rayapan Tali Satu dan Dua',
                content: `
### 1) Rayapan Tali Satu dan Dua

**a. Kegunaan Rayapan Tali Satu dan Dua**
1.  **Rayapan Tali Satu:** Untuk melintasi medan yang tidak dapat dilalui oleh jalan kaki biasa.
2.  **Rayapan Tali Dua:** Sama seperti Rayapan Tali satu.

**b. Cara Melintasi Rayapan Tali Satu dan Dua**

**(1) Rayapan Tali Satu**
* (a) Pertama anggota Pramuka duduk di atas lintasan Rayapan Tali satu, kemudian badan direbahkan dan kedua tangan memegang tali lintasan.
* (b) Salah satu kaki dikaitkan pada tali lintasan, kaki yang satu tergantung lemas untuk keseimbangan.
* (c) **Teknik melintasi:** Kedua tangan dijulurkan ke depan kemudian memegang erat tali, lalu menarik badan ke depan diikuti dengan kaki yang terkait di tali lintasan, demikian selanjutnya sampai ke ujung lintasan.

**(2) Rayapan Tali Dua**
* (a) Peserta Pramuka duduk di atas tali lintasan Rayapan Tali dua, kemudian badan direbahkan dan kedua tangan dijulurkan ke depan dengan tetap berpegangan pada kedua tali lintasan.
* (b) Kedua kaki dikaitkan pada masing-masing lintasan kanan dan kiri.
* (c) **Teknik melintasi:** Kedua tangan dijulurkan ke depan di masing-masing lintasan, kemudian badan ditarik ke depan diikuti dengan gerakan kedua kaki, demikian selanjutnya sampai ke ujung lintasan.

**c. Melintasi Rayapan Tali Satu dan Dua**
1.  Melintasi Rayapan Tali satu.
2.  Melintasi Rayapan Tali dua.

**d. Jenis–jenis Alat dan Prasarana Rayapan Tali Satu dan Dua**

**(1) Alat dan Prasarana Rayapan Tali Satu**
* (a) Tali manila Ø 3,5 Cm, panjang 225 M.
* (b) Tali perorangan.
* (c) Katrol atau alat pengencang.
* (d) Pohon, batu, untuk tambatan tali.

**(2) Alat dan Prasarana Rayapan Tali Dua**
* (a) Tali manila Ø 2,5 Cm, panjang 225 M.
* (b) Tali perorangan.
* (c) Katrol atau alat pengencang.
* (d) Bambu–bambu stabilisator.
* (e) Pohon, batu, untuk tambatan tali.

**e. Teknik dan Pemasangan Rayapan Tali Satu dan Dua**

**(1) Rayapan Tali Satu**
* (a) Buat ikatan pokok pada tepi dekat.
* (b) Kencangkan tali, sementara buat gelung rangkap ± 4 langkah dari tepi jauh.
* (c) Kencangkan lintasan dengan bantuan katrol.
* (d) Ikat dan kunci agar tidak kendor.
* (e) Periksa lintasan sebelum digunakan.

**(2) Rayapan Tali Dua**
* (a) Cari atau gunakan pancangan yang kuat untuk tambatan ikatan pokok.
* (b) Kencangkan tali satu per satu dengan jarak antara tali ± 40 Cm.
* (c) Pasang bambu stabilisator dan ikat dengan tali perorangan.
* (d) Jarak antara bambu stabilisator ± 5 M.
* (e) Periksa lintasan sebelum digunakan.
`
              },
              {
                id: 'mountaineering-3-article-2',
                title: 'Titian Tali 2 dan 3',
                content: `
### 2) Titian Tali 2 dan 3

**a. Kegunaan Titian Tali Dua dan Tali Tiga**
1.  **Titian Tali Dua:** Untuk melintasi medan yang tidak bisa dilewati oleh kendaraan.
2.  **Titian Tali Tiga:** Untuk melintasi medan yang tidak bisa dilewati oleh kendaraan.

**b. Cara Melintasi Titian Tali Dua dan Tali Tiga**

**(1) Titian Tali Dua**
* (a) Berdiri di atas lintasan dan salah satu tangan menjepit tali lintasan bagian atas, yang satunya dijulurkan ke depan dengan telapak tangan menghadap ke atas.
* (b) Tangan digeser ke depan bersamaan menarik badan dan kedua kaki digeser ke samping selanjutnya sampai menuju ke seberang.
* (c) **Teknik melintasi:** Kedua tangan dijulurkan ke depan kemudian memegang erat tali, lalu menarik badan ke depan diikuti dengan kaki yang terkait di tali lintasan, demikian selanjutnya sampai ke ujung lintasan.

**(2) Titian Tali Tiga**
* (a) Kedua kaki berdiri di atas tali lintasan yang di bawah dengan posisi kaki menyilang, kedua tangan masing-masing memegang tali lintasan yang ada di atas (kanan, kiri) dengan posisi telapak tangan menghadap ke atas.
* (b) **Teknik melintasi:** Kedua tangan digeser ke depan dengan tetap berpegangan pada tali lintasan (kanan, kiri) sambil menarik badan, bersamaan dengan itu kaki belakang melangkah ke depan dan tetap menyilang pada tali lintasan bawah, demikian selanjutnya sampai ke ujung lintasan.

**c. Melintasi Titian Tali Dua dan Titian Tali Tiga**
1.  Melintasi titian tali dua.
2.  Melintasi titian tali tiga.

**d. Jenis–jenis Alat dan Prasarana Titian Tali Dua dan Tiga**

**(1) Titian Tali Dua**
* (a) Tali manila Ø 2,5 Cm, panjang 225 M.
* (b) Tali perorangan untuk jari–jari.
* (c) Katrol atau alat pengencang.
* (d) Pohon–pohon, batu–batu besar, patok-patok untuk tambatan ikatan pokok.

**(2) Titian Tali Tiga**
* (a) Tali manila Ø 2,5 Cm, panjang 225 M.
* (b) Tali perorangan untuk jari–jari.
* (c) Katrol atau alat pengencang.
* (d) Bambu stabilisator.
* (e) Pohon–pohon, batu–batu besar, patok-patok untuk tambatan ikatan pokok.

**e. Teknik Pemasangan Titian Tali Dua dan Tali Tiga**

**(1) Titian Tali Dua**
* (a) Ikat tali pokok satu per satu pada pohon (tambatan) pasang tali yang bawah terlebih dahulu dan kencangkan.
* (b) Pasang tali bagian atas dengan jarak ± 1,5 M.
* (c) Pasang jari-jari dengan tali perorangan setelah kedua tali kencang.
* (d) **Cara memasang jari-jari:**
    * i. Buat ikatan pokok pada lintasan bagian atas.
    * ii. Tali yang terurai ke bawah dikaitkan dengan kaki, kemudian dibawa ke atas dan diikat.
    * iii. Jarak antara jari-jari ± 2 M – 3 M.
* (e) Periksa lintasan sebelum digunakan.

**(2) Titian Tali Tiga**
* Pasang tali satu persatu dari lintasan bawah.
* Pasang jari-jari dan bambu stabilisator seperti pada pemasangan Rayapan Tali dua.
* Periksa lintasan sebelum digunakan.
`
              },
              {
                id: 'mountaineering-3-article-3',
                title: 'Peluncuran',
                content: `
### 3) Peluncuran

**a. Kegunaan Peluncuran**
Untuk melintasi medan yang curam atau mempercepat ke tempat yang dituju.

**b. Cara dan Teknik Melintasinya**
Togle rope membentuk ”8” kemudian disilangkan di atas tali peluncuran dan toglenya berada di atas, kedua tangan memegang tali togle rope, siku–siku tangan lurus dan salah satu kaki dijulurkan ke bawah yang satunya ditekuk dan siap untuk meluncur.

**c. Jenis–jenis Alat dan Prasarana Peluncuran**
1.  Tali manila Ø 3,5 Cm, Panjang 225 M.
2.  Tali peleton Ø 1,5 Cm.
3.  Tali perorangan.
4.  Togle rope, cincin kait.
5.  Sarung tangan.
`
              },
              {
                id: 'mountaineering-3-article-4',
                title: 'Hand Traves dan Rappelling',
                content: `
### 4) Hand Traves (Bergerak ke Samping)

**a. Kegunaan Hand Traves**
Untuk bergerak ke samping dilakukan bila pegangan ideal sangat minim dan memanjat vertikal sudah tidak memungkinkan.

**b. Cara dan Teknik Melintasi**
Teknik ini sangat rawan dan banyak memakan tenaga, karena seluruh berat badan tergantung pada pegangan tangan, sedapat mungkin pegangan tangan dibantu dengan pijakan kaki (ujung kaki), agar berat badan dapat terbagi lebih merata.

**c. Rappelling**
1.  Pasang Seat Harness dan cincin kait serta sarung tangan, masukkan tali jalur ke Descender yang dihubungkan dengan cincin kait.
2.  Sikap awal, tangan kanan berada di bawah di samping paha di sebelah kanan meremas tali, tali jalur berada di sebelah kanan tangan kiri berada di atas lurus dan meremas tali tidak kaku.
3.  Berat badan pada kedua kaki dan tali pandangan ke depan badan tegak seperti duduk di kursi.
4.  Gerakannya, tolak dengan kedua ujung telapak kaki tangan kanan dan kiri mengulur tali pada saat melayang posisi kaki tidak berubah tangan kanan yang berada di bawah di samping paha mengendalikan kecepatan pada saat mendarat dengan kedua ujung telapak kaki mengeper dan tangan kanan mengerem.

**d. Jenis–jenis Alat dan Prasarana Peluncuran, Snap Link dan Rappelling**

**(1) Peluncuran**
* (a) Tali manila Ø 3,5 Cm, Panjang 225 M.
* (b) Tali peleton Ø 1,5 Cm.
* (c) Tali perorangan.
* (d) Togle rope, cincin kait.
* (e) Sarung tangan.

**(2) Katrol atau alat pengencang**
* (a) Patok-patok, untuk tambatan ikatan pokok.
* (b) Karung.

**(3) Snap Link**
* i. Tali peleton Ø 1,5 Cm.
* ii. Tali perorangan.
* iii. Cincin kait dan sarung tangan.
* iv. Pohon–pohon atau patok–patok, untuk tambatan ikatan pokok.

**(4) Rappelling**
* (a) Tali dinamic (sebagai jalur).
* (b) Cincin kait atau Descender (alat bantu).
* (c) Tali sling (pipih).
* (d) Sarung tangan.

**e. Teknik Pemasangan Peluncuran, Snap Link dan Rappelling**

**(1) Peluncuran**
* (a) Cari atau pilih tempat yang memenuhi syarat dengan sudut ± 30º - 40º dan tempat pendaratan yang rata dan tidak berbatu.
* (b) Buat para-para dan tangga tali bila ikatan pokok di atas pohon.
* (c) Bersihkan lintasan jalur dari pohon atau ranting yang menghalangi.
* (d) Bila sudah kencang pasang Belayer atas dan bawah dengan ikatan jerat kambing.
* (e) Periksa dan coba sebelum digunakan.

**(2) Snap Link**
* (a) Cari dan gunakan tebing dengan sudut 60˚ kemudian buat jalur lintasan Snap Link.
* (b) Ikat tali Peleton dengan ikatan pokok pada pohon atau batu dan sisa tali diurai ke bawah.
* (c) Periksa dan coba sebelum digunakan.

**(3) Rappelling**
* (a) Pasang tali jalur atau jalur static pada pohon yang ada di atas tebing.
* (b) Pasang Seat Harness cincin kait serta sarung tangan.
* (c) Masukkan tali jalur ke Descender yang dihubungkan dengan cincin kait.
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
### 1) Melintasi Rawa

Rawa adalah permukaan bumi yang selalu digenangi oleh air dan lumpur yang tinggi rendah permukaannya dapat berubah-ubah karena pengaruh air laut/sungai.

**a. Bergerak tanpa menggunakan alat**
1.  Memperhatikan bekas pasang surut.
2.  Memperhatikan arah mengalirnya air.
3.  Apabila melintasi lumpur yang relatif dalam lakukan dengan merayap (berenang di atas lumpur).
4.  Dalam kondisi air surut bergeraklah di tepi sungai jangan bergerak di tengah sungai walaupun sungai dalam kondisi kering.
5.  Apabila terjebak dalam lumpur hidup jangan meronta tapi bergeraklah secara pelan dan berusaha untuk tetap dalam posisi tiarap dan selanjutnya berenang.

**b. Bergerak dengan menggunakan alat**
1.  Siapkan alat bantu berupa papan luncur, bambu atau batang pisang, gunakan tali tubuh, pasang cincin kait dan hubungkan dengan tali.
2.  Peralatan dibawa dengan cara disandang.
3.  Tiarap di atas papan luncur, bambu atau batang pisang.
4.  **Teknik Gerakan:**
    * (1) Dengan tarikan, pegang papan luncur/bambu mengikuti tarikan.
    * (2) Tanpa tarikan, gerakan kedua tangan seperti berenang gaya katak.
`
              },
              {
                id: 'mountaineering-4-article-2',
                title: 'Melintasi Sungai',
                content: `
### 2) Melintasi Sungai

Sungai adalah permukaan bumi yang selalu digenangi air yang mengalir dari hulu menuju muara yang dapat dilalui dengan alat ataupun tanpa alat.

**a. Teknik melintasi sungai dengan tali ada beberapa macam:**
1.  Rayapan tali satu.
2.  Jembatan tali dua.
3.  Jembatan tali tiga.
4.  Meluncur.

**b. Teknik Pelintasan Kering dengan tali**
Adalah suatu usaha, pekerjaan, kegiatan dan tindakan yang dilaksanakan dari tepi dekat menuju tepi jauh sebuah sungai/air, melalui alat yang sudah disiapkan di permukaannya. Melintasinya dengan tidak menyentuh air.

**(1) Persiapan**
* (a) Pasang tali membentang dari tepi dekat ke tepi jauh sungai.
* (b) Kaitkan cincin kait pada jalur lintasan pelintasan dan periksa benar-benar aman.
* (c) Berdiri tegak menghadap ke tepi.
* (d) Laporan kesiapan untuk melaksanakan penyeberangan.

**(2) Gerakan**
* (a) Kedua tangan memegang tali lintasan dengan jarak selebar bahu di bawah cincin kait.
* (b) Badan berada di bawah tali lintasan, posisi kedua kaki tergantung lemas pandangan ke arah sasaran.
* (c) Tangan secara bergantian menarik badan sampai tepi jauh.
* (d) Lakukan dengan penuh konsentrasi dan penuh percaya diri.

**c. Teknik pelintasan basah dengan tali**
Adalah suatu usaha, pekerjaan, kegiatan dan tindakan yang dilaksanakan dari tepi dekat menuju tepi jauh sungai/air, dengan alat yang ada disekitarnya untuk melintasinya.

**(1) Persiapan**
* (a) Pasang tali membentang dari tepi dekat ke tepi jauh sungai.
* (b) Kaitkan cincin kait pada jalur lintasan pelintasan basah dan yakinkan bahwa benar-benar aman.
* (c) Badan tegak menghadap ke hulu sungai.
* (d) Siapkan mental untuk melaksanakan pelintasan.

**(2) Gerakan**
* (a) Kedua tangan memegang tali lintasan dengan posisi kedua tangan selebar bahu, ibu jari di bawah.
* (b) Badan menghadap tali lintasan dan melawan datangnya arus.
* (c) Cincin kait yang dipasang pada jalur lintasan berada di antara kedua tangan.
* (d) Tangan yang belakang bergeser ke arah gerakan sambil mendorong cincin kait.
* (e) Tangan yang di depan digeser ke arah gerakan dan berfungsi sebagai pembersih kotoran yang menyangkut pada tali.
* (f) Posisi badan mengapung dengan gerakan kaki seperti renang gaya bebas.
* (g) Setelah sampai di tepi jauh pada tempat yang dangkal maka berdiri dan buka cincin kait.
* (h) Pelintasan dapat dilaksanakan dengan membawa alat perlengkapan perorangan dan diselempangkan di punggung.

**d. Teknik Penyeberangan dengan Ransel**
Apabila terpaksa, apabila tidak ada sarana lain dapat menggunakan alat bantu penyebaran sungai berupa ransel atau bodypack sebagai sarana penyeberangan dengan teknik sbb:
1.  Ransel dikemas dengan rapat dan kencang.
2.  Gunakan plastik untuk pembungkus ransel.
3.  Jadikan ransel sebagai pelampung dalam melintasi sungai.
4.  **Teknik gerakan:**
    * (1) Ransel dipegang dengan dua tangan di depan badan.
    * (2) Berenang dengan gaya katak atau gaya bebas.
    * (3) Dorong ransel sampai ke seberang sungai.
`
              },
              {
                id: 'mountaineering-4-article-3',
                title: 'Melintasi Laut dan Pantai Menggunakan (LCR)',
                content: `
### 3) Melintasi Laut dan Pantai Menggunakan (LCR)

**a. Persiapan**

**(1) Pembagian tugas regu LCR**
* (a) Ketua regu sebagai pemandu arah.
* (b) Kelompok lambung (pendayung) kanan.
* (c) Kelompok lambung (pendayung) kiri.
* (d) Wakil ketua regu sebagai pengemudi.

**(2) Penyiapan perahu**
* (a) Perahu disiapkan di tepi sungai/pantai.
* (b) Pengepakan perlengkapan regu ke dalam perahu.
* (c) Aba-aba diberikan pada saat air setinggi dada oleh orang terdepan dan tidak ada gelombang.
* (d) Perahu segera diletakkan di atas air tanpa hentakan, anggota tetap berpegang pada perahu/tali perahu.

**b. Gerakan masuk perahu**
1.  Pegang tali lambung dan angkat badan seperti gerakan pull up.
2.  Anggota yang telah masuk perahu segera menolong kawannya.
3.  Usahakan dengan cepat mendayung untuk mencegah perahu terdorong ombak ke daratan (pantai).
4.  Pimpinan perahu masuk perahu terakhir untuk menahan perahu dari dorongan ombak dan menjaga arah perahu agar tetap lurus ke depan.

**c. Gerakan melintasi Laut dan pantai dengan perahu LCR**
1.  Perhatikan arah arus air.
2.  Bergerak sesuai rute ekspedisi.
3.  Pertimbangkan waktu pasang surut air.
4.  Hindari benda-benda tajam yang dapat merusak perahu karet.
5.  Mendayung dilaksanakan secara bersama-sama dengan mata dayung masuk ke dalam air.

**d. Gerakan turun perahu**
1.  Pada saat perahu merapat ke tepi pantai kayuhan dayung dilakukan dengan cepat dan kuat.
2.  Sampai di tepi pantai pimpinan perahu loncat ke darat dengan menarik tali perahu kemudian diikat pada pohon atau benda yang kuat.
3.  Anggota yang berada di lambung kanan turun ke sebelah kanan.
4.  Anggota yang berada di lambung kiri turun ke sebelah kiri.
5.  Pengemudi turun terakhir dengan terlebih dahulu merapihkan dayung dan perahu.
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
        title: 'TKK Jenis-Jenis Tumbuhan',
        image: '/tkk survival/TKK JENIS-JENIS TUMBUHAN.webp',
        requirements: [
          'Mampu membedakan tumbuhan yang dapat dimakan dan yang beracun.',
          'Mengetahui tumbuhan obat tradisional.',
          'Mampu memanfaatkan tumbuhan untuk kebutuhan survival.'
        ],
        syllabus: [
          {
            id: 'survival-1-modul-1',
            title: 'Jenis-Jenis Tumbuhan',
            items: [
              {
                id: 'survival-1-article-1',
                title: 'Tumbuhan yang Dapat Dimakan',
                content: `
### Tumbuhan yang Dapat Dimakan
                  * (Meliputi: Nama lokal, bagian yang dimakan, dan habitat) *

#### a.Tumbuhan Rawa Laut(Mangrove)
1. ** Api - api:** Daun muda.
2. ** Jeruk Rawa:** Buah.
3. ** Nipah:** Daging buah.
4. ** Gebang:** Pucuk / bunga yang muda(umbut).
5. ** Tanjau:** Buah.

#### b.Tumbuhan Pesisir Pantai
1. ** Kelapa:** Buah dan airnya.
2. ** Ketapang:** Biji dalam buah.
3. ** Beluntas:** Daun muda.
4. ** Pohon Bumi:** Tangkai bunga.
5. ** Putri:** Daun / buah.

#### c.Tumbuhan Rawa Sungai
1. ** Nipah:** Buah dan nira.
2. ** Sagu:** Pati batang.
3. ** Aren:** Nira dan buah(kolang - kaling).
4. ** Bambu:** Rebung(tunas muda).
5. ** Jamur:** Berbagai jenis jamur yang dapat dimakan.

#### d.Tumbuhan Rimba Sekunder
1. ** Ki Cemang:** Daun.
2. ** Haria:** Daun.
3. ** Balaka Toa:** Umbut.
4. ** Tepus(Tepuis):** Umbut / tunas.
5. ** Kondang(Komdang):** Buah.
6. ** Kaliandra:** Daun muda / pucuk.
7. ** Sintrong(Simtrong):** Daun.

#### e.Tumbuhan Daerah Pegunungan
                  * (Data belum tersedia dalam daftar) *
                    `
              },
              {
                id: 'survival-1-article-2',
                title: 'Tumbuhan yang Mengandung Air',
                content: `
### Tumbuhan yang Mengandung Air

#### a.Tumbuhan Penghasil Air Langsung
1. ** Kaktus **
                    2. ** Rotan Cincin **
                  3. ** Ruas Bambu **
                  4. ** Kelopak Daun Nipah **
                  5. ** Bonggol Pisang **

#### b.Buah - buahan yang Banyak Mengandung Air
1. Mangga
2. Manggis
3. Jambu Air
4. Kedondong
5. Langsat
                    `
              },
              {
                id: 'survival-1-article-3',
                title: 'Cara Mengambil Air dari Tumbuhan',
                content: `
### Cara Mengambil Air dari Tumbuhan

#### a.Tumbuhan Kaktus
                  * Potong beberapa ujung batang kaktus yang masih muda.
* Tunggu hingga air menetes sedikit demi sedikit.
* Pasang wadah untuk menampung air tersebut.

#### b.Tumbuhan Rotan Cincin
                  * Potong batang tumbuhan rotan cincin yang masih muda(biasanya bagian dekat pangkal).
* Air akan menetes dan dapat langsung diminum.

#### c.Ruas Bambu
1. Cari pohon bambu yang masih muda.
2. Buat lubang di bagian atas atau bawah ruas bambu.
3. Air akan mengalir dari lubang tersebut.
4. Tampung air yang keluar; air ini dapat langsung diminum.

#### d.Kelopak Daun Nipah
1. Pilih pelepah daun nipah yang muda.
2. Ikat pelepah tersebut, kemudian potong bagian ujungnya.
3. Pukul - pukul perlahan batang pelepah agar memar(untuk merangsang aliran air).
4. Air akan menetes keluar.

#### e.Bonggol Pisang
1. Tebang pohon pisang yang ukurannya agak besar.
2. Buat lubang(cekungan) pada bagian bonggol atau pangkal batang bawah menggunakan golok/ pisau.
3. Tunggu beberapa saat hingga lubang tersebut terisi air yang keluar dari serat batang.
4. Air yang terkumpul dapat diminum.
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
            title: 'Jenis-Jenis Binatang',
            items: [
              {
                id: 'survival-2-article-1',
                title: 'Jenis-jenis Binatang Darat',
                content: `
### Jenis - jenis Binatang Darat
1. Macam - macam ular
2. Tupai
3. Monyet
4. Babi
5. Kelabang
6. Kelinci
7. Belalang
8. Tikus
9. Katak
10. Landak
11. Musang
12. Biawak
13. Kadal
            `
              },
              {
                id: 'survival-2-article-2',
                title: 'Jenis-jenis Binatang Air',
                content: `
### Jenis - jenis Binatang Air
1. Ikan
2. Siput
3. Kepiting
4. Kerang
5. Ganggang
6. Dan lain - lain
            `
              },
              {
                id: 'survival-2-article-3',
                title: 'Macam-macam Alat / Perangkap',
                content: `
### Macam - macam Alat / Perangkap

#### a.Perangkap Binatang Darat
1. Perangkap kurungan
2. Perangkap getah
3. Perangkap jaring kail
4. Perangkap kaki rusa
5. Perangkap puyuh

#### b.Alat Menangkap Ikan
1. Kail
2. Tombak
3. Sumpit
4. Panah
5. Bubu
6. Jala
            `
              },
              {
                id: 'survival-2-article-4',
                title: 'Cara Membuat Api Tanpa Korek Api',
                content: `
### Cara Membuat Api Tanpa Korek Api
1. Lensa cembung dengan pertolongan sinar matahari.
2. Gesekan bambu dengan bambu.
3. Gesekan batu dengan batu.
4. Menggunakan busur dengan gundik.
5. Gesekan kayu dengan rotan.
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
            title: 'Survival Hutan Gunung',
            items: [
              {
                id: 'survival-3-article-1',
                title: 'Prinsip-Prinsip Survival (HARUS HIDUP)',
                content: `
### Prinsip - Prinsip Survival(HARUS HIDUP)
          * (Pedoman mental saat menghadapi kondisi darurat)*

          1. ** H ** – Hadapi setiap kesukaran dengan tenang dan bijaksana.
2. ** A ** – Akal yang sehat adalah senjata yang paling ampuh dalam menghadapi survival.
3. ** R ** – Rasa takut dan panik harus dihilangkan.
4. ** U ** – Usahakan mencari jalan keluar untuk membebaskan diri dari survival dan bergabung dengan kawan.
5. ** S ** – Semangat dan keyakinan tetap hidup harus tertanam.
6. ** H ** – Hindari dan jauhi tempat berbahaya yang dapat mengancam keselamatan diri, serta hormati adat istiadat setempat dan tiru tata cara hidupnya.
7. ** I ** – Istirahat dan tenangkan pikiran apabila timbul kekacauan.
8. ** D ** – Dengar, lihat, dan waspada terhadap perangkap alam.
9. ** U ** – Utamakan kesehatan dan keselamatan diri.
10. ** P ** – Praktekkan dan latih kembali pengetahuan dan keterampilan * Jungle Survival * yang pernah didapat.
`
              },
              {
                id: 'survival-3-article-2',
                title: 'Teknik Mencari Hubungan',
                content: `
### Teknik Mencari Hubungan(Komunikasi Darurat)
          * Dalam keadaan darurat dimana hubungan dengan kawan terputus, lakukan kontak dengan cara:*

          1. ** Api dan Asap:** Membuat api dan asap tebal untuk menarik perhatian.
2. ** Cahaya Lampu:** Menggunakan senter / lampu, sangat efektif jika menguasai sandi Morse.
3. ** Kain Berwarna:** Digunakan sebagai panel sinyal bagi pesawat terbang, atau dilambaikan(seperti Semaphore) untuk kapal laut.
4. ** Cermin / Benda Mengkilat:** Memantulkan cahaya matahari(heliograf) sebagai tanda atau morse.
5. ** Peluit:** Bunyi peluit sebagai tanda bahaya atau isyarat lokasi.
6. ** Jejak dan Tanda:**
   * Meninggalkan jejak yang dipahami kawan.
   * Membuat huruf besar(seperti SOS) di tanah terbuka atau pantai.
   * Menebang pohon di hutan membentuk lorong ukuran 5x5 meter dan membuat api unggun di tengahnya.
`
              },
              {
                id: 'survival-3-article-3',
                title: 'Mencari Air dan Makanan',
                content: `
### Mencari Air dan Makanan

#### a.Mencari Air
          * Air sangat vital.Jika persediaan menipis, berhematlah.Jangan minum air kotor sembarangan.*

          1. ** Tanah Gembur / Lembah:** Menggali tanah di area lembah, biasanya air dekat dengan permukaan.
2. ** Padang Pasir / Tandus:** Perhatikan indikator alam(burung, kumpulan pohon, jejak binatang mengais).Gunakan teknik kondensasi(mengumpulkan embun dengan kain).
3. ** Pegunungan:** Gali bekas aliran sungai, peras lumut basah, atau kumpulkan salju(cairkan terlebih dahulu).
4. ** Air dari Tumbuhan:**
   * Batang kaktus.
   * Rotan(potong pangkalnya).
   * Palem.
   * Bambu(ruas).
   * Bonggol pohon pisang.
   * Akar alang - alang.

#### b.Mencari Makanan(Botani & Zoologi Praktis)

          ** (1) Tumbuh - tumbuhan Rimba yang Dapat Dimakan **
          1. ** Melinjo(Tangkil):** Daun dan buah.
2. ** Keluwek / Pangi:** Daging buah lunak(ungu kehitaman). * Catatan: Tidak boleh dimakan mentah karena mengandung Asam Sianida.*
          3. ** Sukun / Nangka / Cempedak:** Daging buah.
4. ** Durian:** Berbagai jenis durian hutan.
5. ** Petai dan Jengkol.**
          6. ** Rambutan Hutan:** Banyak di Kalimantan.
7. ** Jambu Klutuk & Jambu Monyet.**
          8. ** Aren & Sagu:** Mengambil patinya.
9. ** Tayapa:** Semacam ubi jalar, daun merayap melingkar di pohon.
10. ** Pisang Monyet:** Umbut pohonnya dapat disayur.
11. ** Karet:** Buah dan daun dapat dimakan ** setelah dimasak **.
12. ** Nanas / Lidah Buaya Hutan:** Bagian putih / tengah pangkal daun dapat digoreng / dimakan.
13. ** Daun Suji:** Akar dimakan setelah dibakar / rebus.
14. ** Gelagah:** Pucuk batang muda(umbut) dimakan mentah / rebus.
15. ** Rasamala:** Daun muda(kemerahan) dimakan mentah.
16. ** Klanting & Pohpohan:** Daun muda dimakan mentah / rebus.
17. ** Putat & Catok Ayam:** Daun muda dimakan mentah.
18. ** Pandan Hutan(Jaksi):** Umbut dimakan mentah / rebus.
19. ** Bayam Duri:** Daun muda direbus.

** (2) Tumbuh - tumbuhan Beracun(Tidak Boleh Dimakan) **
          1. ** Jarak:** Biji menyebabkan muntah dan pusing(daun hanya untuk obat luar).
2. ** Pangi / Picung(Mentah):** Mengandung asam sianida(racun).
3. ** Kecubung(* Datura metel *):** Mengandung atropin(penyebab halusinasi).
4. ** Jamur * Amanita verna *:** Mengandung muskarin(sangat mematikan).
5. ** Jamur * Psilocybe sp *:** Mengandung psilocybin(penyebab halusinasi).

** (3) Tumbuhan Pegunungan & Buah Tropika **
* ** Pinus:** Biji buah(seperti kenari) dapat dimakan mentah.
* ** Buah - buahan:** Langsat, Mangga, Pala, Manggis, Sawo, Delima, Jambu Air, Srikaya(Buah Nona), Jamblang(Duwet), Kenari, Nanas, Namu - namu, Tomi - tomi.

** (4) Binatang yang Dapat Dimakan **
* Hampir semua binatang berjalan, merayap, terbang, dan berenang dapat dimakan, kecuali yang beracun.*
* ** Jenis:** Gajah, harimau, rusa, babi hutan, kera, tikus hutan, ayam alas, ikan, dll.

#### c.Pengolahan Makanan(Binatang)
1. ** Mamalia(Berkaki empat / berambut):** Harus dikuliti atau rambut dibakar(seperti mengolah kambing).
2. ** Reptil berkulit keras(Buaya / Biawak):** Balikkan badan(terlentang) untuk membelah bagian perut yang lunak.
3. ** Ular:** Kuliti(* skinning *) mulai dari bagian kepala ke bawah.
`
              },
              {
                id: 'survival-3-article-4',
                title: 'Teknik Survival Hutan Gunung',
                content: `
### Teknik Survival Hutan Gunung

#### a.Cara Bergerak(* Moving *)
1. ** Punggung Gunung:** Ikuti punggung gunung untuk menghindari tersesat di lembah luas.
2. ** Bukit Berbatu:** Hati - hati saat melintas(biasanya indikasi dekat pantai / tebing).
3. ** Menyusuri Sungai:** Peluang menemukan desa lebih besar. * Waspada:* Banjir bandang, buaya, atau arus deras.
4. ** Menyusuri Pantai:**
   * Banyak sumber makanan(ikan, kerang).
   * * Waspada:* Pasang surut air laut dan tsunami.
5. ** Hutan Lebat:** Ikuti jejak binatang.Waspada binatang buas.Saat memanjat pohon, perhatikan ular atau lebah.
6. ** Menyeberangi Rawa:** Perhatikan pasang surut.Waspada lumpur hidup(* quicksand *); jika terjebak, tiarap dan bergerak perlahan(berenang di atas lumpur).
7. ** Menyeberangi Sungai/ Danau:** Gunakan alat apung(rakit, batang pisang, jerigen).Waspada air terjun dan pusaran air.

#### b.Ancaman dalam Survival
1. ** Penyakit:** Akibat pola makan tidak teratur dan kondisi fisik menurun(Diare, Demam).
2. ** Tumbuhan Berbahaya:**
   * Getah Bakau Putih(Kebutaan).
   * Getah Pohon Rengas(Gatal parah / luka bakar).
   * Getah Kolang - kaling(Gatal).
   * Getah Jambu Monyet(Gatal / luka).
   * Bulu Bambu(Gatal).
   * Daun Sereh(Tajam / melukai kulit).
3. ** Binatang Berbahaya:** Nyamuk malaria, semut api, kelabang, kalajengking, pacet / lintah.
4. ** Cuaca Ekstrim:** Hipotermia(kedinginan) atau Heatstroke(kepanasan) yang bisa fatal.
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
            title: 'Survival Rawa Laut',
            items: [
              {
                id: 'survival-4-article-1',
                title: 'Survival di Rawa Laut',
                content: `
### Survival di Rawa Laut

#### a.Alat yang Digunakan
1. Papan(kepingan perahu).
2. Drum / jerigen kosong.
3. Kayu yang mengapung.
4. Peti kosong yang dapat mengapung.
5. Rakit kayu, bambu, busa.
6. Pelampung ban atau kayu, dll.

#### b.Yang Perlu Diperhatikan
1. Cermin untuk menarik perhatian pesawat terbang, kapal, dan nelayan.
2. Kaos kaki untuk menutup telapak kaki agar tidak menarik perhatian ikan buas.
3. Cegah / hindari adanya bagian tubuh yang terluka, bau darah dapat menarik perhatian ikan buas.

#### c.Ancaman dalam Survival di Laut

      ** (1) Penyakit.Stamina menurun akibat:**
      (a) Terlalu lama mengapung di Laut.
   (b) Muntah - muntah / mabuk.
   (c) Sakit mata.
   (d) Kulit pecah - pecah.

** (2) Bahaya binatang buas:**
      (a) Ikan Hiu.
   (b) Ikan Babo.
   (c) Ikan Sotong raksasa.
   (d) Ikan Pari.

** (3) Bahaya Alam:**
      (a) Angin topan.
   (b) Badai ombak.
   (c) Arus bawah laut dan pusaran air.

#### d.Tanda - tanda Adanya Daratan
1. Berkumpulnya awan di suatu tempat menunjukkan adanya daratan.
2. Kepulan Asap / cahaya api.Baik dari daratan maupun asap kapal.
3. Mercusuar, atau bangunan lainnya.
4. Perahu nelayan, soro - soro, ikan pukat, dll.
5. Kelompok pohon nipah, sampah, atau kotoran lain.
6. Binatang - binatang.Burung camar, kelompok binatang air yang menyeberang dari satu pulau ke pulau lainnya.
`
              },
              {
                id: 'survival-4-article-2',
                title: 'Tumbuhan yang Dapat Dimakan',
                content: `
### Tumbuhan yang Dapat Dimakan
      * Disini dijelaskan khusus tumbuh - tumbuhan yang terdapat di rawa laut, sebagai berikut:*

#### a.Tumbuh - tumbuhan Rawa Laut
      * Di daerah rawa laut, dimana pada umumnya hanya terdapat pohon - pohon kayu laut atau kayu bakau(mangrove) sedikit sekali tumbuh - tumbuhan yang daun, batang, buah atau akarnya dapat dimakan.Beberapa jenis tumbuhan rawa yang dapat dimakan antara lain:*

      1. ** Api - api(* Avicennia alba *).** Daun yang muda dapat dimakan setelah direbus.
2. ** Tanjan(* Rhizophora mucronata *).** Buahnya dikupas, diiris tipis, direndam paling sedikit satu hari dan airnya sering - sering diganti, dapat dimakan setelah direbus.Jenis tanjan lainnya adalah * Bruguiera sp * yang buahnya disebut putut, dan * Ceriops tagal * (cara memasaknya sama seperti Tanjan).
3. ** Jeruk rawa(* Merope angulata *).** Daun yang muda ditaruh dalam air minum untuk penyedap.Buah yang masak dapat dimakan, rasanya kecut manis seperti rasa jeruk manis.Jangan dimakan terlalu banyak.
4. ** Pidada(* Sonneratia *).** Buah yang masak dapat dimakan mentah, rasanya seperti buah jambu air.
5. ** Druju(Drujon).** Buah yang manis muda, dimakan setelah direbus.
6. ** Nipah / Kiwel / Daon.** Daging buahnya yang agak tua dapat dimakan mentah.
7. ** Mata kancil.** Buah yang masak berwarna merah.Daging selaput biji dapat dimakan mentah, rasanya seperti buah kelengkeng.
8. ** Gabang / langkap.** Pondohnya(karangan bunga yang masih muda) dapat dimakan setelah direbus.Cairan yang keluar dari tangkai karangan bunga(pondoh) dapat diminum.

#### b.Tumbuh - tumbuhan Pesisir / Pantai

1. ** Kelapa.** Hampir di seluruh pantai Indonesia terdapat pohon Kelapa.Daging buah dan air kelapa muda menyegarkan dan menyehatkan.Air kelapa muda ini juga digunakan sebagai obat disentri.Pada buah yang tua, terdapat tombol / tombong / kentos yang juga enak dimakan.Ujung pohon kelapa dibagian hati(umbut muda) juga dapat dimakan.
2. ** Ketapang(Ketepeng).** Buahnya agak ceper.Isi buahnya seperti buah kenari, dapat dimakan mentah atau setelah dibakar.
3. ** Buah Puteri.** Tanaman ini merayap dan hampir terdapat di semua tempat.Suka ditanam oleh penduduk untuk membasmi alang - alang.Kerap kali disebut Mata Kucing, karena buahnya apabila sudah masak menjadi kuning dan isinya manis sekali.Daun - daun yang muda dapat dimasak seperti sayur.Dengan santen kelapa dan sedikit lombok merupakan sayuran yang sehat.
4. ** Pohon Buri(Sejenis Palem).** Dari tangkai karangan bunga atau buah - buahnya dapat diperoleh semacam saguer atau tuak seperti di pohon aren.Isi dari batang pohon dapat dibuat tepung semacam sagu.
5. ** Tumbuhan Tapak Kambing.** Daun yang masih muda dapat dimakan setelah direbus.
6. ** Beluntas.** Daun dimakan mentah atau setelah direbus.

#### c.Tumbuh - tumbuhan Rawa Sungai

1. ** Nipah.** Daunnya dipakai untuk membuat atap.Batang daun digunakan untuk keperluan - keperluan nelayan.Buahnya dapat dimakan tetapi tidak boleh terlalu banyak, karena akan memabukkan.Dapat diambil air dari tangkai bunga(mayang) atau dari buah yang masih muda, rasanya seperti saguer.
2. ** Sagu.** Isi batang pohonnya di "pukul" menjadi tepung sagu.Sagu ini adalah makanan pokok bagi penduduk Maluku dan Irian Barat.Pelepah daunnya, yang dinamakan Gaba - gaba dapat digunakan untuk bahan membuat rumah.
   * * Cara membuat sagu adalah sebagai berikut:* Carilah sebatang pohon sagu tua.Tebang sagu itu kira - kira ½ meter dari tanah.Semua daun - daun disingkirkan dengan memotong ujung pohon, lalu dibelah dua, nampak dengan jelas isinya yang berwarna putih - gading.Isi pohon yang masih banyak sabutnya dicincang kemudian ditumbuk menjadi halus.Setelah halus disaring di atas sebuah alat penyaring dan airnya ditambah pada suatu dulang besar.Air itu dibiarkan agar tepungnya mengendap.
3. ** Aren.** Buahnya dapat dijadikan kolang - kaling dan air nira atau saguer atau tuak dapat diminum.
   * * Cara membuat kolang - kaling:* Ialah dengan cara membakar buah aren.Setelah dibakar, dicuci dengan air kapur.
   * * Air Nira:* Didapat dengan cara memotong tangkai karangan bunga yang belum terbuka.Setelah dipotong tangkai yang ketinggalan dipukul dengan sepotong kayu, lalu ditahan dengan bambu.Untuk menjaga agar air nira itu bersih, di kelingking bekas potongan dibungkus dengan ijuk dan di mulut bambu diikatkan juga segumpal ijuk yang bersih untuk menyaring nira yang akan masuk kedalam bambu.Juga untuk menjaga jangan ada tawon dan lalat serta lain - lain Insekta masuk ke dalamnya.
   * Daun aren selain untuk dibuat sapu lidi juga digunakan untuk bahan anyaman keranjang atau dinding rumah.Daun sagu dan aren yang muda diambil untuk membuat kirai(sebagai pengganti kertas rokok).Ijuknya dipintal menjadi tali ijuk, atau keperluan - keperluan lainnya.Pada pelepah daun aren terdapat bulu - bulu yang halus yang disebut * kawul * (bahasa Sunda), dapat dibuat untuk membuat api tanpa korek.Sangat berguna untuk dipakai dalam hutan - hutan rimba dalam keadaan Survival.
4. ** Bambu.** Tunas bambu yang muda(rebung) dapat dijadikan bahan sayur.Caranya: rebung muda diiris - iris lalu direbus, untuk jenis - jenis bambu tertentu direbus berulang - ulang.
5. ** Bermacam - macam paku(pakis).** Sangat banyak di daerah rawa.Daun muda dapat dimakan setelah direbus.
6. ** Bermacam - macam talas.** Hampir semua dapat dimakan.Jika merasa khawatir supaya direbus dengan kapur sirih, karena ada beberapa jenis yang gatal.
7. ** Bermacam - macam jamur.** Harus hati - hati terhadap jenis yang beracun, yang dapat dimakan ialah jamur kuping, jamur roti, jamur picis.Jamur - jamur dari jenis lain jangan dimakan.
8. ** Selada Air.** Daun - daun dapat dimakan.
9. ** Rotan.** Umbut dan buahnya dapat dimakan.
`
              },
              {
                id: 'survival-4-article-3',
                title: 'Binatang-binatang yang Bisa Dimakan',
                content: `
### Binatang - binatang yang Bisa Dimakan

#### a.Macam Binatang
      * Pada umumnya hampir semua binatang yang berjalan, merayap, terbang dan berenang di air dapat dimakan termasuk beberapa jenis insekta, terkecuali beberapa jenis yang beracun / berbisa.Rawa merupakan gudang makanan dan hanya tinggal memilih binatang yang kebetulan muncul untuk dijadikan makanan.Jenis - jenisnya adalah sebagai berikut:*

      1. ** Di rawa - rawa:** Buaya, biawak, ular, kera - kera sejenis kucing rawa, tupai rawa, burung - burung, kodok hijau, kepiting, kerang pasir, kerang batu dan lain - lain.
2. ** Di sungai - sungai:** Buaya, ular, biawak - biawak, kodok hijau, semua jenis bebek hutan(belibis), dan lain - lain.

#### b.Pengolahan

1. Semua reptilia yang berkaki empat dan berkulit belakang keras seperti buaya, biawak, harus dibalik(terlentang) agar bagian perutnya berada di atas sehingga mudah untuk membuka perutnya, serta memotong dagingnya.
2. Semua jenis reptilia seperti ular - ular dan lain sebagainya harus dikuliti(* skinning *) terlebih dahulu mulai dari bagian kepalanya.
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
            title: 'Survival Kit',
            items: [
              {
                id: 'survival-5-article-1',
                title: 'Materi Survival Kit (Umum)',
                content: `
### Materi Survival Kit(Umum)

Survival kit adalah satu set peralatan atau satu kotak / tas peralatan survival yang umumnya dapat digunakan untuk semua jenis daerah seperti gunung, hutan, padang pasir, dan pantai serta laut.Jenis survival kit seperti di atas adalah survival kit yang dibuat khusus yang biasanya digunakan oleh para penerbang pesawat militer.

Bagi seorang penjelajah ataupun petualang, survival kit merupakan salah satu perlengkapan dasar yang harus dimiliki.Survival kit ini haruslah survival kit yang sesuai dengan perjalanannya, karena survival di gunung akan berbeda dengan survival di laut.Survival kit dapat dibuat sendiri yang disesuaikan dengan tujuan perjalanan dan kebutuhan pribadi.

#### Tips menyusun wadah:
* Carilah sebuah kaleng yang tertutup dan tidak bocor, ukuran cukup kecil tetapi dapat memuat alat yang diperlukan.
* Gosoklah bagian dalam kaleng sampai mengkilat sehingga dapat digunakan sebagai cermin.
* Untuk membuat lebih kedap air, berilah paking pada tutupnya dan balutlah dengan solatip setelah ditutup.
* Pada saat mengisi kotak survival, usahakan tidak ada ruang kosong yang memungkinkan peralatan di dalam kotak bergerak yang bisa mengakibatkan kerusakan alat.
* Untuk menghindari ini, isilah bagian kosong di kotak dengan kapas atau sobekan kain, yang nantinya juga kapas dan sobekan kain tersebut dapat digunakan sebagai bahan penyala api.

Biasakanlah selalu membawa survival kit dalam setiap perjalanan, karena dengan survival kit, satu set perlengkapan sudah dimiliki untuk keadaan darurat.
`
              },
              {
                id: 'survival-5-article-2',
                title: 'Isi Survival Kit dan Kegunaannya',
                content: `
### Isi Survival Kit dan Kegunaannya

#### 1) Korek api
Korek api yang kedap air dapat dicari tetapi harganya mahal.Kita dapat membuat kedap air dengan cara memasukkan batang korek dan penyala ke dalam sebuah tabung plastik bekas tempat film, atau kita teteskan lilin ke atas kepala batang korek api sehingga terselaput seluruh kepala batang korek tersebut.Untuk memakainya kita buang lilinnya terlebih dahulu baru digoreskan kepalanya.
* * Catatan:* Membuat api dengan korek api jauh lebih mudah dari memakai alat yang lainnya.Janganlah membuang percuma korek api, pakailah apabila diperlukan.Ambil korek api dari tabung dan segera tutup kembali, jangan biarkan tutup tabung tetap terbuka atau tergeletak di atas tanah.

#### 2) Lilin
Sangat baik untuk memulai menghidupkan api dan juga untuk penerangan.Apabila terbuat dari lemak maka dapat dimakan atau untuk menggoreng(harus yakin bahwa terbuat dari lemak).Lilin dari bahan lain atau parafin tidak dapat dimakan.

#### 3) Batu api dan geretan
Batu api dapat bekerja dalam keadaan basah dan dapat tahan lama sekali.Bawalah batu api sekalian dengan gergaji penggoresnya.

#### 4) Suryakanta / Kaca pembesar
Dapat menimbulkan panas dan api dengan sinar matahari langsung, juga dapat dipakai untuk melihat dan mendeteksi duri dalam jaringan kulit.

#### 5) Jarum dan benang
Beberapa jarum dimana satu diantaranya mempunyai lubang yang besar, sehingga dapat memakai serat tumbuhan sebagai benang apabila diperlukan.Simpanlah jarum - jarum tersebut menjadi satu dan lilit dengan benang yang kuat sekelilingnya.

#### 6) Kail dan senar
Pilihlah beberapa kail yang berbeda ukuran dan letakkan di dalam kotak atau bungkus.Kail yang kecil akan dapat menangkap ikan kecil dan besar, sedangkan kail yang besar hanya dapat menangkap ikan besar saja.Sertakan juga tali pancing secukupnya, karena kelebihan tali pancing dapat dipakai untuk menjerat.

#### 7) Kompas
Sebuah kompas yang cukup baik tapi sederhana dan pastikan diri kita bahwa kita dapat memakai kompas dengan baik.Kompas dengan cairan di dalamnya adalah yang terbaik, pastikan tidak bocor dan juga tidak ada gelembung udara di dalamnya.

#### 8) Senter kecil(beta light)
Sebuah lampu kristal, sering dipakai untuk gantungan kunci mobil / rumah.Lampu ini dapat dipakai untuk membaca peta, atau memasang umpan pada waktu memancing di malam hari.

#### 9) Kawat jerat
Kawat kuningan sepanjang 60 – 90 cm.Dapat dipakai dan sangat banyak kegunaannya, antara lain untuk jerat, memasak, dll.

#### 10) Kawat gergaji
Biasanya di ujungnya diberi bundaran untuk pegangan yang besar, ini sangat banyak memakai ruangan sebaiknya dibuang saja pegangan tersebut, karena dapat diganti dengan sepotong kayu apabila dipakai.Untuk mencegah berkaratnya gergaji ini sebaiknya disimpan dalam tempat dari plastik dan diberi minyak gemuk sebelumnya.Gergaji ini dapat dipakai untuk memotong kayu yang sangat besar.

#### 11) Obat - obatan
Obat yang kita bawa adalah yang sering diperlukan di dalam perjalanan dan juga obat - obat pribadi diperlukan seperti:

* ** a) Analgetik **
    * * Fungsi:* Obat penahan sakit seperti sakit kepala, sakit gigi, sakit otot, terkilir, dll.
    * * Dosis:* 1 tablet setiap 6 jam.
    * * Contoh:* Ponstan, Antalgin, Metaneuron, Naspro, Aspirin, dll.

* ** b) Anti mencret(Diare) **
    * * Fungsi:* Sebagai obat penghenti mencret - mencret, tetapi tidak menghilangkan sebab penyakitnya.
    * * Dosis:* 2 tablet sekaligus, apabila masih tetap mencret setelah 1 jam dapat diberi 1 tablet lagi.Maksimal 3 tablet / hari.
    * * Contoh:* Motilex, Lodya.

* ** c) Anti Histamin **
    * * Fungsi:* Untuk mengatasi problem alergi, gatal - gatal, gigitan serangga, tidak dapat tidur.Tetapi efek tidur disini sangat ringan sehingga tidak efektif bagi orang yang sering memakai obat tidur.
    * * Dosis:* 3 x 1 tablet / hari.
    * * Contoh:* CTM, Benadryl tablet / inj, Incidal.

* ** d) Kalium Permanganat(PK) **
    * * Fungsi:* Biasanya dijual dengan berat 1 gram, 5 gram dll.
    * * Dosis:* 1 gram untuk 1 liter air dijadikan larutan ungu untuk membuat steril.Apabila warna lebih ungu dapat dipakai sebagai antiseptik, sedangkan warna ungu pekat dapat dipakai untuk membasmi jamur.

* ** e) Anti Malaria **
    * * Fungsi:* Hanya dikonsumsi apabila kita memasuki daerah malaria, dimulai dua minggu sebelum memasuki daerah malaria dan dua minggu setelah keluar daerah endemis malaria.

* ** f) Antibiotik **
    * * Fungsi:* Untuk mengobati infeksi yang telah ada nanahnya ataupun untuk pengobatan yang memerlukan antibiotik lainnya.
    * * Dosis:* 4 x 500 mg / hari(Ampicilin) selama 4 hari.

#### 12) Pisau bedah
Sebaiknya dua bilah pisau bedah dengan ukuran yang berbeda.Untuk gagang dapat kita buat dari sepotong kayu apabila diperlukan.

#### 13) Plester kupu - kupu
Dibuat dari plester yang dipotong mirip bentuk kupu - kupu, dipakai untuk mendekatkan dan merapatkan pinggir luka yang perlu dijahit.

#### 14) Plester
Beberapa buah plester dengan ukuran yang berbeda, sebaiknya yang kedap air.Untuk menutup luka yang kecil dan menjaga agar tetap bersih.Plester ini dapat juga dipotong untuk menutup luka kecil ataupun dibuat plester kupu - kupu.

#### 15) Kondom
Dapat dibuat sebagai tempat air yang baik dimana dapat menampung air sebanyak 1 liter.
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
            title: 'Sanjak (Mengesan Jejak)',
            items: [
              {
                id: 'survival-6-article-1',
                title: 'Umum',
                content: `
### Umum
Dalam suatu kegiatan penjelajahan, terutama di daerah hutan gunung sering ditemui kesukaran untuk menyelesaikan suatu kegiatan di dalam mencari dan menemukan kawan atau lokasi perkemahan, mengingat keadaan daerah di negara kita umumnya terdiri dari hutan yang lebat atau medan yang tertutup.Oleh sebab itu pengetahuan dan keterampilan "Mengesan Jejak" sangat diperlukan untuk dapat melaksanakan kegiatan, mencari dan menemukan kawan / tempat perkemahan di hutan maupun di gunung.
`
              },
              {
                id: 'survival-6-article-2',
                title: 'Pengertian-pengertian',
                content: `
### Pengertian - pengertian

#### a.Jejak
Adalah tanda - tanda yang dibuat oleh manusia, binatang dan benda - benda bergerak lainnya yang disengaja maupun tidak disengaja.

#### b.Mengesan jejak
Adalah suatu ilmu untuk dapat mengikuti, mengetahui, mencari dan mengejar seseorang / kawan melalui tanda - tanda, bekas atau bau yang ditinggalkan.

#### c.Pengesan jejak
Adalah seseorang yang terlatih untuk dapat mencari, menganalisa dan selanjutnya menyimpulkan arti dari jejak.

#### d.Tapak
Adalah bekas / jejak yang ditinggalkan oleh benda - benda baik bergerak ataupun diam dan menyerupai bentuk benda yang sebenarnya seperti kaki, sepatu, tangan ataupun lainnya.
`
              },
              {
                id: 'survival-6-article-3',
                title: 'Pengelompokan Regu Sanjak',
                content: `
### Pengelompokan Regu Sanjak
Regu Sanjak anggotanya sama dengan anggota Krida Survival minimal 5 orang dan maksimal 10 orang, dalam organisasi tugasnya ditentukan sebagai berikut:

#### a.Pimpinan kelompok(Ketua dan wakil ketua)

#### b.Kelompok penjejak satu(2 s.d 3 orang)

#### c.Kelompok penjejak dua(2 s.d 3 orang)

#### d.Kelompok penjejak tiga(2 s.d 3 orang)

#### e.Tugas Ketua / Wakil
Ketua kelompok / wakil mengatur giliran pelaksanaan mengesan jejak, mendiskusikan dan menyimpulkan dari jejak yang diperoleh.

#### f.Pelaksanaan
Pelaksanaan mengesan jejak lama waktu dan jarak ditentukan oleh pimpinan kelompok adapun pelaksanaannya dilakukan secara bergantian dari kelompok regu tersebut.
`
              },
              {
                id: 'survival-6-article-4',
                title: 'Dasar-dasar Mengesan Jejak',
                content: `
### Dasar - dasar Mengesan Jejak
Untuk dapat menjadi seorang pengesan jejak, diperlukan beberapa persyaratan yang harus dimiliki sebagai berikut:

#### a.Memiliki panca indera yang baik.

#### b.Mengerti tentang keadaan alam dan pengaruhnya.

#### c.Memiliki kemampuan dan kesungguhan dalam melaksanakan penjejakan.

#### d.Memiliki daya ingat yang tinggi dan cerdas.

#### e.Memiliki kondisi fisik dan mental yang baik.

#### f.Sabar, tabah dan tidak mudah menyerah dalam menghadapi kesulitan.

#### g.Tenang dan teliti.
`
              },
              {
                id: 'survival-6-article-5',
                title: 'Teknik Mencari Jejak',
                content: `
### Teknik Mencari Jejak
Pada saat berjalan sebaiknya selalu waspada, setiap melangkah melihat medan di sekelilingnya.Jarak pengamatan dimulai dari yang terdekat sampai yang terjauh apakah ada keanehan atau perubahan - perubahan yang terjadi di sekitarnya seperti:

#### a.Tumbuh - tumbuhan
Cabang - cabang pohon, ranting yang patah karena aktifitas manusia atau binatang.

#### b.Serasah / Sampah Alam
Dahan, ranting, daun yang bertaburan karena faktor alamiah, dipetik, dipotong, dipatahkan atau yang dimakan oleh binatang.

#### c.Injakan
Injakan pada tanah, rumput, pohon, dan semak yang rendah.

#### d.Binatang atau Benda Bergerak
Jika melihat binatang atau benda - benda yang bergerak, segera diam, fokuskan pandangan kepada binatang / benda tersebut.Setelah itu ditentukan untuk menghindari atau mengusir benda / binatang.
* * Contoh:* Misalnya kita berhadapan dengan Harimau maka jangan lari membelakanginya karena Harimau akan mengejar dan menerkam tengkuk dari belakang.Sehingga kita harus diam dan pandangan mata fokus pada mata Harimau tersebut kemudian mundur secara perlahan sampai pada jarak yang aman selanjutnya melanjutkan mencari jejak.

#### e.Bunyi dan Bau
Jika mendengar bunyi - bunyian, atau mencium bau - bauan yang aneh seperti bangkai, asap, cabang patah, binatang berjalan, atau benda bergerak lainnya berhenti dan menentukan sumbernya.

#### f.Tinjauan Atas
Jangan hanya meninjau setinggi pandangan mata, sekali - kali perlu melihat ke atas pohon biasanya macan tutul, orang hutan, ular besar selalu menyerang dari atas pohon.

#### g.Tinjauan Bawah
Jangan lupa melihat ke jurang - jurang, lembah - lembah dan tempat lain yang letaknya lebih rendah dari tempat kedudukan kita.
`
              },
              {
                id: 'survival-6-article-6',
                title: 'Mengenal Macam Jejak',
                content: `
### Mengenal Macam Jejak

#### a.Jejak Langkah Biasa
1. Jejak ujung kaki dengan tumit sama rata.
2. Jejak telapak kaki atau alas kaki tidak ada perubahan.
3. Pinggiran jejak tidak terlalu rusak.
4. Tidak ada lemparan tanah ke belakang.
5. Jejak menggunakan alas kaki dapat menentukan siapa yang lewat dan arah perjalanan.
   * * Contoh:* Jejak kaki manusia yang menuju air dan kembali lagi maka diperkirakan orang tersebut mengambil air, mandi atau melaksanakan kegiatan lain yang memerlukan air.
6. ** Jenis jejak pria:**
   * Tapak kaki lebih besar.
   * Langkahnya lebih panjang.
   * Ujung kaki mengarah ke luar jejak tumit ke arah dalam.
7. ** Jenis jejak wanita:**
   * Tapak kaki wanita pada umumnya lebih kecil.
   * Jarak antara satu dan lainnya lebih pendek.
   * Ujung kaki mengarah ke dalam tumit terbuka ke arah luar.

#### b.Langkah Lari
1. Jarak antara tapak jauh.
2. Bekas ujung alas kaki lebih dalam, semakin cepat larinya semakin dalam jejaknya.Bila tidak beralas kaki maka jari - jari kaki akan membuka.
3. Lemparan tanah ke belakang jauh dibandingkan dengan langkah biasa.
4. Bekas pinggiran alas kaki pada tanah tidak terlalu rata.
5. Jejak tumit biasanya akan hilang kalau larinya semakin cepat.

#### c.Langkah Mundur
      * Langkah mundur dapat diketahui dari:*
      1. Jejak tumit lebih dalam dari ujung sepatu(alas kaki).
2. Ada geseran pada tanah di belakang sebelum tumit.
3. Tanah terlempar ke arah ujung sepatu.
4. Jejak sepatu / kaki kadang - kadang tidak menentu arahnya dan bentuknya tidak simetris.

#### d.Pembawa Beban
      * Langkah pembawa beban pada umumnya meninggalkan tanda - tanda:*
      1. Jarak antara tapak dekat.
2. Telapak sepatu melebar, bila tidak memakai alas kaki maka jari - jari kaki akan melebar.
3. Tapak tidak satu garis.
4. Lobang pada tanah lebih dalam pada tumit dari pada ujung sepatu.
5. Ada bekas beban yang dibawa pada waktu istirahat.

#### e.Pembawa Pasien
      * Orang yang membawa pasien biasanya meninggalkan tanda - tanda:*
      1. Jejak langkahnya tidak teratur.
2. Jejak ujung kaki tidak selalu ke depan arahnya.
3. Kadang - kadang terlihat tanda - tanda berhenti.
4. Jejak langkahnya pendek - pendek.
5. Ada bekas seretan kaki / tandu.
6. Sama dengan pembawa beban.

#### f.Jejak Hewan
      * Dari jejak kaki hewan yang terdapat di atas tanah maka dapat diketahui:*
      1. Jenis binatang yang lewat.
2. Apakah binatang buas atau peliharaan yang melalui daerah tersebut.

#### g.Jejak Darah
      * Dari darah yang tercecer dapat diketahui sebagai berikut:*
      1. ** Darah dari kepala:** Berwarna agak kehitam - hitaman, kental, licin dan seperti agar - agar.
2. ** Darah dari paru - paru:** Berwarna merah terang, berbuih dan ada gelembung udaranya.
3. ** Darah dari perut(usus atau lambung):** Berbau makanan.
4. ** Posisi luka:** Darah pada jejak kaki bagian kanan, berarti luka ada pada kaki / badan sebelah kanan atau sebaliknya.
`
              },
              {
                id: 'survival-6-article-7',
                title: 'Menentukan Usia Jejak',
                content: `
### Menentukan Usia Jejak
      * Seorang pengesan jejak harus mengetahui usia dari tanda - tanda yang diperolehnya.Seperti tanda dari usia di daerah panas akan berlainan dengan daerah yang sering turun hujan atau daerah yang lembab, berikut ini ada beberapa contoh dari tanda - tanda yang dapat membantu dalam memperkirakan Usia Jejak.*

#### a.Semut
Apabila ada semut berkerumun pada sisa - sisa makanan diperkirakan usianya sekitar satu hari sampai tujuh hari.

#### b.Karat
Apabila terdapat karat pada kaleng makanan dan minuman diperkirakan usianya berkisar dua minggu atau lebih.

#### c.Jejak kaki manusia dan hewan dari satu arah
Apabila jejak kaki manusia dan di atasnya terdapat jejak kaki binatang yang menuju ke satu arah maka diperkirakan jejak kaki manusia itu usianya belum satu hari.

#### d.Jejak kaki manusia dan hewan dari dua arah
Apabila ada jejak kaki manusia dan di atasnya terdapat jejak kaki hewan dari dua arah yang berlawanan, diperkirakan usianya lebih dari satu hari.

#### e.Jejak kaki manusia di lumpur dan kubangan air
Apabila ada jejak kaki manusia di tanah yang berlumpur atau kubangan air, di atas jejak kaki manusia air belum jernih maka usia jejak itu diperkirakan belum satu jam.

#### f.Percikan tanah pada bekas jejak kaki
Jejak tersebut dibuat sebelum hujan, apabila dibuat setelah hujan maka tidak terdapat percikan tanah di sekitarnya.Untuk mengetahui usia jejak tersebut seorang pengesan jejak harus tahu kapan hujan terakhir turun.

#### g.Jejak telapak kaki dan kelembaban tanah
Pada saat permulaan jejak tapak sepatu dibuat, kelembaban tanah dapat menahan butiran pasir / tanah pada sisi - sisi tapak tersebut, sehingga batas sisi terlihat jelas.

#### h.Setelah tanah mulai mengering
Setelah tanah mulai mengering butiran - butiran pasir / tanah pada sisi - sisi tapak akan jatuh ke dalam tapak sehingga batas sisi tapak menjadi tidak jelas, hal ini disebabkan karena pengaruh cuaca dan kondisi medan.

#### i.Abu bekas bakaran
Apabila masih berwarna putih dan kadang - kadang masih membentuk sesuai dengan sebelum dibakar, diperkirakan berusia kurang dari satu hari.Bila warnanya telah berubah menjadi abu - abu atau terdapat tanda - tanda bekas terkena embun, diperkirakan usianya lebih dari satu hari.

#### j.Getah kayu
Apabila menemukan getah yang telah mengering yang keluar dari pohon, diperkirakan usianya telah lebih dari dua jam.Untuk mengetahui secara pasti, maka pengesan jejak harus mempelajari sifat - sifat dari getah berbagai tumbuhan karena getah - getah tersebut tidak semuanya sama proses dan waktu lamanya mengering.

#### k.Tumbuhan jenis merambat
Pada tumbuh - tumbuhan merambat sejenis rotan bila dipotong akan mengeluarkan air yang masih menetes, dari bekas potongan tersebut maka usianya belum lebih dari satu hari.

#### l.Tumbuhan yang telah dipotong
Bila dijumpai tumbuh - tumbuhan yang telah dipotong karena akan diambil airnya dan ternyata airnya telah kering(tidak menetes), maka dapat diperkirakan bahwa usia potongan tersebut lebih dari 12 jam.Biasanya tetesan air dari bekas potongan akan berhenti sama sekali setelah 12 jam.

#### m.Jejak kaki pada jalan setapak
Bila pada jalan - jalan setapak terdapat jejak kaki manusia atau binatang sedangkan di atas jejak tersebut telah terlihat adanya jaring(sarang) laba - laba, maka diperkirakan usia jejak tersebut telah lebih dari setengah hari.

#### n.Embun pada dedaunan
Bila butiran - butiran embun yang terdapat pada dedaunan, tidak seperti aslinya(butiran - butiran embun itu sudah tersentuh) berarti orang yang menyentuhnya belum lama melewati.Kejadian ini umumnya dapat dilihat pada pagi hari.
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
          'Memahami jenis-jenis bencana dan dampaknya (Harta benda, Lingkungan hidup).',
          'Memahami pentahapan penanggulangan bencana (Preventif, Mitigasi, Kesiapsiagaan, Peringatan dini, Tanggap darurat, Rehabilitasi, Rekonstruksi).'
        ],
        syllabus: [
          {
            id: 'pba-1-modul-1',
            title: 'Manajemen Penanggulangan Bencana',
            items: [
              {
                id: 'pba-1-article-3',
                title: 'Pentahapan Penanggulangan Bencana',
                content: `
### Pentahapan Penanggulangan Bencana

      ** a.Sebelum bencana terjadi **
* Kegiatan yang dilakukan meliputi tahap - tahap:*
      1. ** Preventif(Pencegahan):** Yaitu kegiatan yang lebih dititikberatkan pada upaya penyebarluasan tentang berbagai peraturan, perundang - undangan yang berdampak untuk mengurangi resiko bencana termasuk pembuatan peta rawan bencana.
2. ** Mitigasi(penjinakan):** Yaitu kegiatan yang lebih dititikberatkan pada upaya secara fisik untuk mengurangi dampak yang ditimbulkan oleh bencana, seperti pembuatan cek dam, rehabilitasi aliran sungai, pengawasan terhadap pelaksanaan RUTR, IMB, Pemindahan Penduduk ke daerah yang aman dari bencana, dan pemasangan tanda - tanda larangan di daerah yang rawan bencana.
3. ** Kesiapsiagaan:** Yaitu meliputi kegiatan untuk mengadakan latihan atau gladi Pramuka dan masyarakat yang tinggal di daerah rawan bencana, serta pendidikan dan pelatihan bagi personil yang tergabung dalam organisasi satlak maupun satgas PBP serta aparat pemerintah dan ormas lainnya.Kegiatan pada tahap ini amat penting karena usaha untuk menghindari bencana akan lebih efektif dan efisien daripada rehabilitasi dan kontruksi.

** b.Saat bencana terjadi **
* Kegiatan yang dilaksanakan pada tahap ini meliputi:*
      1. ** Peringatan dini:** Yaitu upaya dan kegiatan yang sangat penting dan tidak boleh diabaikan dimana untuk memberikan kesempatan kepada penduduk untuk menyelamatkan diri dari kemungkinan terlanda bencana alam.
2. ** Tanggap darurat:** Yaitu upaya dan kegiatan pengerahan unsur - unsur penanggulangan bencana guna mencari, menolong dan menyelamatkan korban bencana serta memberikan bantuan kepada para pengungsi berupa makanan dan minuman, pakaian, obat, pembuatan barak - barak darurat sebagai tempat penampungan sementara.

** c.Sesudah Bencana Terjadi **
* Kegiatan yang dilakukan setelah terjadi bencana meliputi:*
      1. ** Rehabilitasi:** Yaitu upaya dan kegiatan untuk memfungsikan dan memberdayakan kembali berbagai sarana prasarana umum yang mengalami kerusakan akibat bencana, guna mengurangi penderitaan masyarakat yang tertimpa musibah.
2. ** Rekonstruksi:** Yaitu upaya dan kegiatan untuk membangun kembali berbagai kerusakan yang diakibatkan oleh bencana secara lebih baik daripada keadaan sebelumnya untuk mengantisipasi kemungkinan terjadinya bencana di waktu yang akan datang.Kegiatan pada tahap rekonstruksi harus direncanakan dengan teliti dan seksama, dengan mengikutsertakan berbagai pihak yang terkait sesuai dengan bidang masing - masing secara terintegrasi dan terpadu.
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
                title: 'Pengertian PPGD',
                content: `
### Pengertian Perjalanan dan Penanganan Gawat Darurat(PPGD)

Perjalanan dan penanganan gawat darurat(PPGD) adalah hal - hal yang mencakup keadaan kesehatan pada suatu perjalanan / kegiatan meliputi kesiapan fisik, mental dan pengetahuan tentang kesehatan dan gizi.
`
              },
              {
                id: 'pba-2-article-2',
                title: 'Cara Melaksanakan PPGD',
                content: `
### Cara Melaksanakan Perjalanan dan Penanganan Gawat Darurat(PPGD)

      ** a) Kesiapan fisik **
      1.  Kesiapan fisik penolong harus dalam kondisi yang prima.
2.  Mengetahui tehnik Pertolongan Pertama Pada Kecelakaan(P3K).
3.  Dapat mengambil tindakan dengan cepat dan tepat dalam memberikan pertolongan kepada korban.

** b) Kesiapan Mental **
      1.  Memiliki rasa percaya diri dalam melakukan Pertolongan Pertama Pada Kecelakaan(P3K).
2.  Memiliki kepekaan terhadap diri dan lingkungan.
3.  Selalu mengedepankan akal sehat dalam mengambil setiap tindakan Pertolongan Pertama Pada Kecelakaan(P3K).
4.  Mampu mengendalikan diri terhadap segala situasi.

** c) Pengetahuan tentang kesehatan dan gizi **
      1.  Mengerti tentang tehnik Pertolongan Pertama Pada Kecelakaan(P3K).
2.  Mengerti dan mengetahui tentang obat dan penggunaannya.
3.  Memahami tentang berbagai macam penyakit dan gangguan kesehatan.
4.  Mengetahui berbagai macam jenis makanan yang layak dikonsumsi.
5.  Mengerti perimbangan nutrisi dan gizi dalam melaksanakan kegiatan dan perjalanan.
6.  Mampu melaksanakan tehnik evakuasi korban.
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
### Kompor Lapangan T - 50

      ** a.Kompor Lapangan T - 50 terdiri dari:**
      1.  1 Peti Kompor Lapangan T - 50.
2.  1 Tangki Bahan Bakar.
3.  2 Brander.
4.  2 Tungku.
5.  1 Pompa tangan.

** b.Bahan Bakar **
      Bahan Bakar yang digunakan yaitu minyak tanah.

** c.Kapasitas Tabung Bahan Bakar **
      16 Liter.

** d.Cara Penggunaan:**
      1.  Kita Berdiri searah dengan angin dan letakkan peti, sisi gembok berhadapan dengan kita.
2.  Buka peti sampai tutup peti menyentuh tanah.
3.  Keluarkan peralatan kompor dan letakkan pada tutup peti.
4.  Keluarkan tungku dan pasang tatakan kaki tungku dengan cara seperti memasang baut.Tatakan kaki tungku berfungsi juga sebagai penyetel ketinggian brander terhadap alat masak.
5.  Letakkan kedua tungku pada sebelah kiri dan kanan peti dengan jarak minimal 30 cm, posisi lubang tungku menghadap ke peti.
6.  Letakkan brander di tengah - tengah tungku dengan tangki brander dan selang minyak mengarah ke sisi engsel peti.
7.  Keluarkan tangki dan masukkan kembali peralatan cadangan yang tidak digunakan ke dalam peti, lalu peti ditutup, isi tangki dengan minyak tanah maksimum 16 liter, letakkan tangki di tengah - tengah sisi engsel peti hubungkan selang kedua brander pada kran minyak pada tangki.
8.  Peti dapat digunakan sebagai meja ringan maksimum beban 30 kg.
9.  Pompa tangki hingga bertekanan maksimum 3 kg / cm² setelah itu kran minyak dibuka sedikit demi sedikit agar minyak mengalir keluar dari spuyer brander dan perhatikan jangan ada udara keluar dari selang, biarkan sedikit minyak tertampung pada mangkuk penyala brander, kemudian kran ditutup kembali sampai minyak berhenti mengalir.
10. Sebelum disulut letakkanlah sumbu yang telah tersedia(kertas, ranting kering dapat digunakan dalam keadaan darurat) di atas mangkuk brander, kemudian sulut dengan api minyak tanah yang berada di mangkuk penyala brander, menggunakan alat penyulut api(penyala yang tersedia) hingga terbakar.
11. Biarkan api menyala pada mangkuk penyala brander sampai terlihat semburan api pada brander, yang semula terlihat besar, tunggulah sampai semburan api mulai mengecil kembali seperti akan mati yang merata.Jangan sekali - kali membuka kran minyak langsung besar.
12. Bila pada saat membuka kran, perhatikan spuyer brander apakah yang keluar berupa gas atau minyak yang belum menjadi gas, jika terlihat belum menjadi gas, maka semburan api yang akan terjadi seperti kebakaran, jangan panik / takut langsung saja kran ditutup kembali tunggu dan biarkan api mengecil sendiri seperti pada penjelasan di atas, berarti brander belum cukup panas.
13. Apabila semburan sudah berupa gas dan nyala api mulai stabil, kran dibuka perlahan - lahan sampai menghasilkan nyala api yang terbaik.
14. Setelah nyala api baik, kompor siap digunakan.

** e.Gangguan dan mengatasi gangguan:**
      1. ** Gangguan tiba - tiba api mati:** Langsung kran ditutup, periksa minyak dalam selang bila terlihat selang masih dipenuhi minyak dan tidak terlihat udara didalamnya maka nyalakan alat penyulut, dekatkan api penyulut ke spuyer brander sambil menyogok lubang spuyer brander.
2. ** Gangguan tiba - tiba api brander menyala seperti kebakaran:** Penyebabnya adalah kran terlalu besar dibuka yang mengakibatkan aliran minyak ke brander dan keluar dari spuyer brander tidak menjadi gas, kran langsung ditutup dan tunggu api menjadi kecil kembali, lalu buka kran minyak sedikit demi sedikit sampai mendapatkan nyala api yang terbaik / yang diinginkan.
3. ** Gangguan semburan api tidak rata atau api tidak dapat sempurna:** Penyebabnya adalah bila lubang spuyer rusak, matikan kompor lalu ganti spuyer dengan yang baru menggunakan kunci spuyer.
4.  Langkah pertama dalam menghadapi gangguan apapun adalah menutup kran pada tabung, dengan demikian kebakaran akan terhindari.Jangan sekali - kali menyiram kebakaran kompor dengan air, usahakan dalam memasak menyiapkan karung / kain yang dibasahi oleh air untuk menutupi api saat terjadi kebakaran pada kompor.

** f.Pengaturan Ketinggian Api:**
* ** Merebus:** Pada saat merebus terutama merebus air minum / memasak nasi dengan jumlah yang banyak tatakan kaki tungku distel rapat terhadap kaki tungku agar jarak api terhadap kuali / dandang lebih dekat(Jarak terdekat sesuai yang dirancang 5 cm) sehingga panas yang cepat dan waktu mematangkan masakan lebih cepat.
    * * Perlu diwaspadai:* Apabila merebus sayur - sayuran, kacang - kacangan, api brander harus dikecilkan dan atau selalu mengaduk masakan agar masakan yang berada di dasar kuali tidak hangus, karena sayuran dan kacang - kacangan selalu mengendap di dasar kuali.
* ** Menggoreng:** Pada saat menggoreng(menggunakan minyak goreng) kedudukan tatakan kaki tungku distel berjarak 2 atau 3 cm dari kaki tungku dengan cara memutar tatakan kaki tungku seperti membuka baut, agar jarak api terhadap kuali atau wajan tidak terlalu dekat, sehingga panas yang diterima oleh minyak goreng tidak terlalu tinggi sehingga yang dimasak matang secara merata atau tidak terjadi gosong luar dan mentah di dalam.
`
              },
              {
                id: 'pba-3-article-2',
                title: 'Alat Dapur Lapangan',
                content: `
### Alat Dapur Lapangan

      ** a.Ketel 100 **
      Bahan terbuat dari alumunium dengan kapasitas memasak ± 18 Kg / beras untuk melayani 100 orang.

** b.Ketel 50 **
      Bahan terbuat dari alumunium untuk memasak sayur.

** c.Ketel 40 **
      Bahan terbuat dari alumunium untuk masak air atau untuk mengangkut hasil masakan.
`
              },
              {
                id: 'pba-3-article-3',
                title: 'Teknik Dasar Memasak',
                content: `
### Teknik Dasar Memasak
Memasak meliputi kegiatan penanganan dan pemasakan(* handling and cooking *).Memasak yang benar dan baik mempunyai pengaruh penting sekali dalam penyajian suatu menu.Oleh karena itu harus dikuasai teknik dasar memasak, sebagai berikut:

** a.Sumber Hidrat Arang **
      Molekul - molekul hidrat arang dan molekul air bila dipanaskan akan saling mengikat dan mengkanji.Setelah masak dan dibiarkan dalam jangka waktu tertentu ada kecenderungan untuk memisah.Bila proses pemisahan ini terjadi berarti telah mendekati tingkat basi.Oleh karena itu bila memasak nasi harus betul - betul diperhitungkan jumlahnya agar habis sekali makan.

** b.Sumber Protein **
      Dapat kita golongkan dalam hewani dan nabati.Protein adalah zat makanan yang paling lekas busuk karena sangat diperlukan oleh bakteri - bakteri.Makanan yang mengandung protein tinggi sebaiknya segera dimakan setelah selesai dimasak.Khusus protein yang terdapat pada jaringan - jaringan otot memerlukan perlakuan khusus waktu memasak.Sedangkan telur merupakan sumber protein yang paling mudah dimasak.

** c.Sumber Lemak **
      Baik hewani maupun nabati akan menjadi tengik bila disimpan lama oleh sebab itu sumber lemak harus diperlakukan baik agar sumber kalori paling besar ini tidak mudah rusak.Pada umumnya sumber lemak ini tidak kita makan langsung tetapi untuk memasak makanan lain baik berupa minyak maupun santan.

** d.Sumber Vitamin dan Mineral **
      Harus diperhatikan sejak mengerjakan mencuci, sampai memasak, sebab Vitamin banyak yang larut / rusak dalam air dan panas.
`
              },
              {
                id: 'pba-3-article-4',
                title: 'Tata Cara Memasak',
                content: `
### Tata Cara Memasak

      ** a.Nasi **
      1.  Beras dibersihkan dari kotoran dan barang - barang asing lainnya.
2.  Beras dicuci untuk menghilangkan sisa - sisa kotoran.
3.  Mencuci beras tidak boleh direndam agar Vitamin B1 yang diperlukan tidak larut.
4.  Beras dimasukkan ke dalam ketel / wajan yang telah disiapkan(air mendidih) atau diaron.
5.  Apabila mengaron menggunakan wajan, beras harus terendam dan air ± 2 - 3 Cm di atas permukaan beras.
6.  Setelah setengah matang masukkan ke dalam dandang yang telah dipersiapkan kemudian aduk dan tunggu sampai matang.

** b.Lauk **

** (1) Memasak Daging **
* (a) Daging dicuci dahulu untuk membersihkan kotorannya.
* (b) Buang serat - serat yang alotnya.
* (c) Daging direbus sampai matang dengan temperatur rendah.
* (d) Porsi miring memotong serat.
* (e) Masak sesuai resep yang diinginkan.

** (2) Memasak Ikan **
* (a) Potong semua duri yang sekiranya akan mengganggu dalam proses pemasakan.
* (b) Ikan yang bersisik supaya dibuang sisiknya.
* (c) Buang insang dan isi perutnya kemudian dicuci.
* (d) Bubuhkan cuka / kunyit untuk menghilangkan bau amis / anyir.
* (e) Masak sesuai resep yang diinginkan.

** (3) Sayur **
* (a) Semua bahan sayuran harus dibersihkan dari kotoran / dicuci sebelum diporsi / diracik.
* (b) Sayuran yang telah diracik tidak boleh direndam dalam air kecuali jenis bahan sayuran yang tidak mengandung Vitamin B dan C.
* (c) Masak sesuai resep yang diinginkan / direncanakan.
* (d) Masak lebih awal dari bahan - bahan sayuran yang memerlukan waktu pemotongan lebih lama.
* (e) Untuk menghasilkan warna alami, cerah dan menarik selera bahan sayuran yang berwarna sebelum dimasak supaya direndam dahulu dalam air garam.
`
              },
              {
                id: 'pba-3-article-5',
                title: 'Tata Cara Menyajikan',
                content: `
### Tata Cara Menyajikan

      ** a.Cara Barat **
      Menu ala Barat penyusunannya ada yang menurut menu klasik dan menu sederhana, namun secara umum urut - urutannya adalah sebagai berikut:
      1. ** Hidangan Pembuka:** Hidangan pembuka ada 2 macam, yakni: (a) Hidangan Pembuka panas, (b) Hidangan Pembuka dingin.Maksud dan tujuan dari hidangan pembuka adalah untuk merangsang selera makan.Hidangan pembuka dapat berupa sop kuah atau berupa makanan ringan.
2. ** Hidangan Pokok:** Hidangan pokok adalah hidangan yang menyenangkan terdiri dari hidangan ikan atau masakan daging / unggas beserta lauk pauknya.
3. ** Hidangan Selingan:** Hidangan Selingan dapat berupa hidangan sayuran atau buah - buahan berupa selada dan dapat juga berupa hidangan manis seperti puding, agar - agar dan lain sebagainya.
4. ** Hidangan Penutup:** Yang termasuk kedalam hidangan penutup adalah hidangan manis(* Nyamikan / Sweet Dessert *).Segala hidangan manis antara lain Es krim, dan hidangan buah - buahan serta sebagai penutup dihidangkan kopi.

** b.Cara China **
      1. ** Menghidangkan:** Urutan hidangan mulai dengan makanan pembuka, tetapi tidak diakhiri dengan dessert dan Sop tidak dihidangkan pada awal santapan.Santapan khas China dimulai dengan 4(empat) macam makanan dingin sebagai pembuka, dilanjutkan dengan hidangan udang yang diasinkan atau ginjal yang diiris - iris.Kemudian disusul oleh delapan macam masakan sebagai hidangan pokok antara lain terdiri dari: Masakan daging kepiting, masakan daging itik, masakan ikan lengkap dan nasi putih.Sesudah hidangan pokok terakhir dihidangkan dua macam hidangan manis antara lain potongan apel bergula atau Pangsit / Bakso kuah yang lekat.
2. ** Cara bersantap:** Melihat kepada hidangan pokok dengan jumlah delapan macam, berarti cara menyantapnyapun dilakukan secara khusus yakni dengan mengambil porsi kecil - kecil dari tiap hidangan.Oleh karena itu yang terlihat di atas meja hidangan adalah sebuah piring kecil, sebuah sendok porselin, sebuah mangkok kecil, tempat kecap atau sambal dan sepasang sumpit.
`
              },
              {
                id: 'pba-3-article-6',
                title: 'Cara Menghidangkan',
                content: `
### Cara Menghidangkan

      ** a.Di Pangkalan / di rumah / di gedung **
* Cara menghidangkan makanannya adalah sebagai berikut:*
      1. ** Sistem Prasmanan:** Suatu cara penghidangan yang diatur pada beberapa meja baik alat makan, makanan maupun minuman.Urut - urutannya adalah piring dan sendok garpu, nasi, ikan dan lauk - pauk, sayur, sambal, lalapan, kerupuk, buah dan yang terakhir adalah minuman.
2. ** Sistem Kafetaria:** Ialah suatu cara penghidangan yang diatur dalam satu garis.Urut - urutannya adalah: Piring dan sendok garpu, Nasi, Lauk - pauk, sayur, sambal, lalapan, kerupuk, dan yang terakhir adalah minuman.
3. ** Dihidangkan di meja:** Dalam sistem ini peserta makan dibagi dalam kelompok - kelompok meja yang terdiri dari 6 orang, 8 orang, atau 10 orang sesuai kapasitas meja.

** b.Di Lapangan **
      Fasilitas dan alat peralatan khusus / khas lapangan, menggunakan alat makan dan minum menggunakan alat perorangan yang dibawa.Bila keadaan memungkinkan, dapat pula menggunakan alat makan lapangan(* Lunchtray *).
1. ** Sistem Kafetaria:** Sama dengan uraian di atas, hanya alat untuk menghidangkan dan alat makan menggunakan peralatan lapangan.
2. ** Sistem semi Kafetaria:** Ialah suatu cara penghidangan Kafetaria, hanya seluruh perlengkapan menggunakan alat lapangan dan makanan dibagikan oleh petugas penyaji lapangan.
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
                title: 'Kegunaan Radio Komunikasi',
                content: `
### Kegunaan Radio Komunikasi

Radio Komunikasi adalah alat yang digunakan untuk mengirim dan menerima berita dari pihak lain / lawan bicara.

** a) Bagian - bagian besar Radio Komunikasi **
      1.  Saklar Daya
2.  Saklar Fungsi
3.  Saklar kanal / Chanel
4.  Saklar pengatur frekuensi dalam MHz
5.  Saklar pengatur frekuensi dalam KHz
6.  Tombol pengatur kanal / Chanel
7.  Penampil frekuensi
8.  Pengatur volume
9.  Konektor audio
10. Dudukan antena / penghubung antena batang
11. Konektor antena 50 Ohm
12. Konektor daya

      ** b) Mengoperasikan Radio Komunikasi **
      1. ** Menghidupkan Radio.** Putar saklar daya ke kanan hingga muncul frekuensi di layar / penampil frekuensi.
2. ** Memilih frekuensi.** Putar saklar pengatur frekuensi ke atas(* up *) untuk menaikkan frekuensi atau ke bawah(* down *) untuk menurunkan frekuensi sampai dengan frekuensi yang dikehendaki.
3. ** Mengirim berita.** Tekan saklar PTT pada handset untuk berbicara, lepas saklar PTT tersebut apabila kita akan menerima berita / mendengarkan lawan bicara.
4. ** Mematikan Radio.** Putar saklar daya ke kiri hingga frekuensi di layar hilang.
`
              },
              {
                id: 'pba-4-article-2',
                title: 'Prosedur Kirim Terima Berita',
                content: `
### Prosedur Kirim Terima Berita

Yaitu tata cara yang harus dipahami dan dilaksanakan oleh setiap operator / pelayan radio dalam melaksanakan kirim terima berita.

** a) Dalam prosedur komunikasi harus memperhatikan IKIT **
      1. ** Irama:** Bagilah kalimat agar mudah diterima, untuk menghindari kesalahan.
2. ** Kecepatan:** Bicaralah pada kecepatan yang memadai, sehingga jelas didengar dan cukup waktu untuk mencatat.
3. ** Isi suara:** Lebih kuat sedikit dari percakapan biasa, tetapi jangan berteriak.
4. ** Tinggi nada:** Nada yang tinggi lebih jelas didengar.

** b) Abjad Fonetik **
* A = ALFA
      * B = BRAVO
      * C = CHARLIE
      * D = DELTA
      * E = ECHO
      * F = FOXTROT
      * G = GOLF
      * H = HOTEL
      * I = INDIA
      * J = JULIET
      * K = KILO
      * L = LIMA
      * M = MIKE
      * N = NANCY
      * O = OSCAR
      * P = PAPA
      * Q = QUBECK
      * R = ROMEO
      * S = SIERA
      * T = TANGGO
      * U = UNIFORM
      * V = VICTOR
      * W = WISKY
      * X = X - RAY / XTRA
      * Y = YANKI
      * Z = ZULU
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
