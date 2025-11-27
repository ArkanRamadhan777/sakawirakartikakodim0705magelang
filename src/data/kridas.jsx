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
### Definisi Dasar

**Peta** adalah gambaran permukaan bumi atau sebagian permukaan bumi yang diperkecil dengan menggunakan skala tertentu dan digambarkan pada bidang datar. Peta menampilkan unsur-unsur alam maupun buatan manusia yang ada di atas atau di bawah permukaan bumi.

**Medan** adalah bagian permukaan bumi dengan segala benda yang tidak bergerak di atasnya, seperti gunung, lembah, sungai, jalan, dan bangunan.

### Unsur-Unsur Peta

Setiap peta yang baik harus memiliki unsur-unsur berikut:

* **Judul Peta:** Menunjukkan nama daerah yang dipetakan
* **Nomor Peta:** Kode identifikasi peta
* **Koordinat:** Sistem untuk menentukan posisi (geografis atau grid)
* **Kontur:** Garis yang menghubungkan titik-titik dengan ketinggian yang sama dari permukaan laut
* **Skala:** Perbandingan jarak di peta dengan jarak sebenarnya di lapangan
* **Legenda:** Keterangan simbol-simbol yang digunakan dalam peta
* **Orientasi:** Petunjuk arah utara
* **Tahun Pembuatan:** Waktu peta dibuat atau direvisi

### Fungsi Peta

* Menunjukkan posisi dan lokasi suatu tempat
* Memperlihatkan bentuk permukaan bumi (relief)
* Membantu dalam perencanaan perjalanan dan navigasi
* Menunjukkan jarak dan arah antar lokasi
* Alat komunikasi informasi geografis
`
              },
              {
                id: 'navrat-1-article-2',
                title: 'Jenis-Jenis Peta',
                content: `
### Peta Topografi

Peta topografi adalah jenis peta yang menggambarkan posisi mendatar (planimetris) dan posisi tegak (altimetris) dari permukaan bumi. Kata "topografi" berasal dari bahasa Yunani: *topos* (tempat) dan *graphein* (menggambar).

**Karakteristik Peta Topografi:**
* Menggunakan garis kontur untuk menunjukkan ketinggian
* Skala besar dan sangat detail (biasanya 1:50.000 atau lebih besar)
* Menampilkan relief medan, perairan, vegetasi, dan hasil budaya manusia
* Sangat penting untuk kegiatan militer, pendakian, dan penjelajahan alam
* Warna standar: cokelat (kontur), biru (air), hijau (vegetasi), hitam (buatan manusia), merah (jalan utama)

**Kegunaan:**
* Perencanaan rute perjalanan di medan sulit
* Analisis medan untuk operasi militer
* Kegiatan pendakian gunung dan orienteering
* Penelitian geografi dan geologi

### Peta Tematik

Peta tematik adalah peta yang menyajikan informasi khusus sesuai dengan tema tertentu.

**Jenis-Jenis Peta Tematik:**

* **Peta Jenis Tanah (Pedologi):** Menampilkan variasi jenis tanah di suatu wilayah, termasuk pH, tekstur, dan kesuburan tanah

* **Peta Perairan (Hidrologi):** Menjelaskan sistem sungai, danau, rawa, waduk, dan daerah aliran sungai

* **Peta Geologi:** Menunjukkan jenis batuan, struktur geologi, dan potensi mineral

* **Peta Iklim:** Menampilkan zona iklim, curah hujan, dan temperatur

* **Peta Kependudukan:** Menunjukkan persebaran dan kepadatan penduduk

* **Peta Penggunaan Lahan:** Memperlihatkan fungsi lahan (pertanian, permukiman, hutan, industri)

### Perbedaan Utama

| Aspek | Peta Topografi | Peta Tematik |
|-------|----------------|---------------|
| Tujuan | Gambaran umum medan | Informasi khusus tema tertentu |
| Skala | Besar, detail | Bervariasi |
| Pengguna | Militer, pendaki, navigator | Peneliti, perencana, analis |
`
              },
              {
                id: 'navrat-1-article-3',
                title: 'Tanda-Tanda Peta (Simbol)',
                content: `
### Sistem Warna pada Peta Topografi

Peta topografi menggunakan sistem warna standar internasional untuk memudahkan pembacaan:

#### Warna Hitam
* Benda-benda buatan manusia:
  * Jalan kereta api
  * Batas administratif (negara, provinsi, kabupaten)
  * Jaringan komunikasi
  * Nama geografis dan label
* Vegetasi buatan (perkebunan, kebun)

#### Warna Biru
* Semua unsur perairan:
  * Sungai dan anak sungai
  * Danau dan waduk
  * Rawa dan payau
  * Sawah (dengan pola khusus)
  * Pantai dan laut
  * Mata air

#### Warna Merah atau Merah Muda
* Konstruksi batu dan bangunan permanen:
  * Jalan beraspal (jalan raya utama)
  * Bangunan penting
  * Kawasan perkotaan yang padat
  * Jembatan permanen

#### Warna Hijau
* Vegetasi alam:
  * Hutan lebat
  * Semak belukar
  * Kebun campuran
  * Taman
* Semakin gelap warna hijau, semakin lebat vegetasinya

#### Warna Cokelat
* Kontur (garis ketinggian):
  * Kontur utama: garis tebal
  * Kontur bantu: garis tipis
  * Kontur indeks: garis sangat tebal dengan angka ketinggian
* Semakin rapat jarak antar kontur, semakin curam medannya

#### Warna Kuning atau Orange
* Daerah terbuka tanpa vegetasi
* Lahan kering
* Padang pasir atau padang rumput

### Simbol-Simbol Penting

**Simbol Titik:**
* Puncak gunung (△)
* Sumur (○)
* Pohon tunggal (●)

**Simbol Garis:**
* Jalan setapak (- - -)
* Pagar (┴┴┴)
* Saluran air (~~~)

**Simbol Area:**
* Sawah (kotak-kotak kecil)
* Rawa (rumput dengan air)
* Hutan (simbol pohon berulang)

### Membaca Legenda

Legenda adalah kunci untuk memahami peta. Setiap peta memiliki legenda yang menjelaskan arti dari setiap simbol yang digunakan. Selalu periksa legenda terlebih dahulu sebelum membaca peta.
`
              },
              {
                id: 'navrat-1-article-4',
                title: 'Koordinat Peta',
                content: `
### Sistem Koordinat Geografis

Koordinat geografis adalah sistem yang menggunakan garis lintang (latitude) dan garis bujur (longitude) untuk menentukan posisi di permukaan bumi.

**Garis Lintang (Latitude):**
* Garis horizontal yang sejajar dengan khatulistiwa
* Dihitung dari 0° (khatulistiwa) hingga 90° (kutub)
* Lintang Utara (LU) di atas khatulistiwa
* Lintang Selatan (LS) di bawah khatulistiwa

**Garis Bujur (Longitude):**
* Garis vertikal yang menghubungkan kutub utara dan selatan
* Dihitung dari 0° (Greenwich, Inggris) hingga 180°
* Bujur Timur (BT) ke arah timur Greenwich
* Bujur Barat (BB) ke arah barat Greenwich

**Satuan:**
* Derajat (°)
* Menit (') → 1° = 60'
* Detik (") → 1' = 60"

**Contoh Penulisan:**
* 7° 36' 45" LS, 110° 24' 30" BT (Koordinat kota Magelang)

### Sistem Koordinat Grid (UTM)

Universal Transverse Mercator (UTM) adalah sistem koordinat yang menggunakan grid persegi panjang untuk memudahkan pembacaan posisi.

**Karakteristik:**
* Menggunakan sistem kotak (karvak/grid)
* Satuan dalam meter
* Lebih praktis untuk navigasi darat
* Digunakan pada peta topografi militer

**Cara Pembacaan: KIKA-BATAS**
* **KIKA** = Kiri ke Kanan (sumbu X, arah Timur)
* **BATAS** = Bawah ke Atas (sumbu Y, arah Utara)

**Tingkat Ketelitian:**

1. **Koordinat 4 Angka (Grid Square)**
   * Format: 1234 5678
   * Akurasi: 1 km × 1 km
   * Menunjukkan satu kotak grid
   * Contoh: 1234 5678 = Grid kotak 12-34 (timur) dan 56-78 (utara)

2. **Koordinat 6 Angka**
   * Format: 123456 567890
   * Akurasi: 100 m × 100 m
   * Setiap kotak grid dibagi menjadi 10 bagian
   * Contoh: 123456 567890

3. **Koordinat 8 Angka**
   * Format: 12345678 56789012
   * Akurasi: 10 m × 10 m
   * Setiap kotak grid dibagi menjadi 100 bagian
   * Digunakan untuk posisi yang sangat presisi

4. **Koordinat 10 Angka**
   * Format: 1234567890 5678901234
   * Akurasi: 1 m × 1 m
   * Tingkat presisi tertinggi untuk operasi khusus

### Cara Menentukan Koordinat Grid

**Langkah-langkah:**
1. Tentukan kotak grid tempat titik berada (2 angka pertama horizontal dan vertikal)
2. Bagi kotak grid menjadi 10 bagian (untuk 6 angka) atau 100 bagian (untuk 8 angka)
3. Hitung jarak dari garis grid kiri ke titik (angka timur)
4. Hitung jarak dari garis grid bawah ke titik (angka utara)
5. Gabungkan angka-angka tersebut

**Tips:**
* Gunakan penggaris atau alat bantu koordinat
* Selalu baca KIKA dulu, baru BATAS
* Periksa zona UTM pada sudut peta
* Latih pembacaan dengan berbagai tingkat ketelitian
`
              },
              {
                id: 'navrat-1-article-5',
                title: 'Kedar Peta dan Sudut Tanjakan',
                content: `
### Kedar Peta (Skala)

Kedar peta atau skala adalah perbandingan antara jarak di peta dengan jarak sebenarnya di medan.

**Rumus Dasar:**

Kedar = Jarak Peta (JP) : Jarak Medan (JM)

**Jenis-Jenis Skala:**

1. **Skala Angka (Numerical Scale)**
   * Ditulis dalam bentuk pecahan atau rasio
   * Contoh: 1:50.000 atau 1/50.000
   * Artinya: 1 cm di peta = 50.000 cm (500 m) di medan

2. **Skala Garis (Graphic Scale)**
   * Berupa garis dengan pembagian jarak
   * Lebih praktis karena tidak terpengaruh pembesaran/pengecilan peta
   * Biasanya terletak di bagian bawah peta

**Contoh Perhitungan:**

Jika skala peta 1:25.000 dan jarak di peta 4 cm, maka:

Jarak Medan = 4 cm × 25.000 = 100.000 cm = 1.000 m = 1 km

Jika jarak medan 2,5 km dan skala 1:50.000, maka:

Jarak Peta = 2.500 m : 50.000 = 2.500.000 cm : 50.000 = 5 cm

**Klasifikasi Skala:**
* **Skala Besar:** 1:10.000 atau lebih besar (detail tinggi)
* **Skala Sedang:** 1:10.000 hingga 1:100.000
* **Skala Kecil:** 1:100.000 atau lebih kecil (cakupan luas)

### Sudut Tanjakan (Gradient)

Sudut tanjakan adalah tingkat kemiringan lereng yang diukur dalam derajat.

**Rumus:**

Sudut Tanjakan = (Selisih Tinggi / Jarak Mendatar) × 57,3°

Angka 57,3° adalah konversi dari radian ke derajat (180°/π)

**Tanda:**
* **(+)** untuk tanjakan (mendaki)
* **(-)** untuk turunan (menurun)

**Contoh Perhitungan:**

Dari titik A (ketinggian 500 m) ke titik B (ketinggian 750 m) dengan jarak mendatar 1.000 m:

Selisih Tinggi = 750 - 500 = 250 m
Jarak Mendatar = 1.000 m
Sudut Tanjakan = (250 / 1.000) × 57,3° = 0,25 × 57,3° = +14,3°

Artinya: Tanjakan dengan kemiringan 14,3 derajat (cukup curam)

**Klasifikasi Kemiringan:**
* 0° - 8°: Landai (mudah dilalui)
* 8° - 16°: Agak curam (butuh kehati-hatian)
* 16° - 30°: Curam (sulit, perlu teknik khusus)
* > 30°: Sangat curam (berbahaya, butuh peralatan)

### Menghitung dari Kontur

Untuk menghitung sudut tanjakan dari peta:

1. Hitung selisih tinggi dari garis kontur
2. Ukur jarak horizontal di peta
3. Konversi jarak peta ke jarak medan menggunakan skala
4. Gunakan rumus sudut tanjakan

**Contoh:**
* Interval kontur: 25 m
* Jumlah kontur yang dilalui: 4 garis
* Selisih tinggi: 4 × 25 m = 100 m
* Jarak di peta: 2 cm
* Skala: 1:25.000
* Jarak medan: 2 cm × 25.000 = 50.000 cm = 500 m
* Sudut: (100/500) × 57,3° = +11,46°

### Aplikasi Praktis

* **Perencanaan Rute:** Pilih jalur dengan kemiringan yang sesuai kemampuan
* **Estimasi Waktu:** Medan curam membutuhkan waktu lebih lama
* **Keamanan:** Hindari lereng sangat curam tanpa peralatan memadai
* **Konsumsi Energi:** Tanjakan curam menghabiskan energi lebih banyak
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
### Pengertian Kompas

Kompas adalah alat navigasi yang menunjukkan arah mata angin berdasarkan prinsip kemagnetan bumi. Jarum kompas selalu menunjuk ke arah kutub magnet bumi.

### Prinsip Kerja Kompas

Bumi memiliki medan magnet dengan dua kutub: Kutub Magnet Utara (dekat Kutub Utara geografis) dan Kutub Magnet Selatan (dekat Kutub Selatan geografis). Jarum kompas yang terbuat dari bahan magnetik akan selalu menunjuk ke arah kutub magnet utara.

**Perbedaan Utara:**
* **Utara Sebenarnya (True North):** Arah menuju Kutub Utara geografis
* **Utara Magnetis (Magnetic North):** Arah yang ditunjuk jarum kompas
* **Deklinasi Magnetis:** Perbedaan sudut antara Utara Sebenarnya dan Utara Magnetis (bervariasi per lokasi)

### Bagian-Bagian Kompas

**Komponen Utama:**
1. **Badan/Rumah Kompas:** Wadah yang melindungi mekanisme kompas
2. **Jarum Magnetis:** Jarum yang selalu menunjuk utara magnetis
3. **Dial/Rose:** Lingkaran berderajat (0°-360°)
4. **Garis Rambut/Pisir:** Garis penunjuk untuk bidikan
5. **Cairan Peredam:** Cairan dalam rumah kompas untuk meredam getaran jarum
6. **Kaca Pembesar:** Untuk membaca skala dengan jelas

### Jenis-Jenis Kompas

#### 1. Kompas Bidik (Prisma/Lensatic)

**Karakteristik:**
* Dilengkapi dengan prisma untuk membaca derajat sambil membidik
* Memiliki kawat pisir (sight wire) dan celah bidik
* Akurasi tinggi (± 1°)
* Digunakan untuk navigasi presisi
* Umum digunakan oleh militer dan pecinta alam profesional

**Bagian Khusus:**
* Tutup pelindung dengan celah bidik
* Prisma pembaca sudut
* Kawat pisir vertikal
* Cincin untuk jempol
* Bezel yang dapat diputar

**Keunggulan:**
* Sangat akurat
* Tahan banting
* Dapat digunakan siang dan malam (ada fitur luminous)
* Dapat membidik sasaran jauh dengan presisi

#### 2. Kompas Orienteering (Silva/Baseplate)

**Karakteristik:**
* Badan transparan sehingga dapat diletakkan langsung di atas peta
* Memiliki travel arrow (panah arah perjalanan)
* Bezel/cincin yang dapat diputar
* Garis-garis orienteering untuk mensejajarkan dengan garis utara peta
* Penggaris di tepi untuk mengukur jarak di peta

**Bagian Khusus:**
* Baseplate transparan
* Direction of travel arrow
* Orienting arrow (panah di dalam rumah kompas)
* Meridian lines (garis-garis sejajar untuk orientasi)
* Skala penggaris (biasanya 1:25.000 dan 1:50.000)

**Keunggulan:**
* Sangat praktis untuk navigasi dengan peta
* Ringan dan tidak memakan tempat
* Mudah digunakan untuk pemula
* Ideal untuk orienteering dan hiking

#### 3. Kompas Jari (Thumb Compass)

**Karakteristik:**
* Dipasang di jari dengan tali/gelang
* Sangat kecil dan ringan
* Digunakan khusus untuk lomba orienteering
* Dapat dibaca sambil berlari

**Keunggulan:**
* Tangan bebas memegang peta
* Sangat cepat untuk dibaca
* Tidak mudah terjatuh atau hilang

#### 4. Kompas Digital/GPS

**Karakteristik:**
* Menggunakan sensor elektronik
* Terintegrasi dengan GPS
* Menampilkan arah dalam format digital
* Banyak fitur tambahan (altimeter, barometer)

**Keunggulan:**
* Akurasi tinggi dengan koreksi deklinasi otomatis
* Banyak fitur navigasi tambahan
* Dapat menyimpan waypoint dan track

**Kelemahan:**
* Memerlukan baterai
* Lebih mahal
* Rentan terhadap air dan benturan

### Perbandingan Kompas

| Jenis | Akurasi | Kemudahan | Harga | Penggunaan Ideal |
|-------|---------|-----------|-------|------------------|
| Prisma | Sangat Tinggi | Sedang | Mahal | Navigasi presisi, militer |
| Orienteering | Tinggi | Mudah | Terjangkau | Hiking, orienteering |
| Jari | Sedang | Sangat Mudah | Mahal | Lomba orienteering |
| Digital | Sangat Tinggi | Mudah | Sangat Mahal | Teknologi modern |

### Tips Penggunaan Kompas

1. **Jauhkan dari Benda Magnetis:**
   * Pisahkan min. 50 cm dari logam, elektronik, kendaraan
   * Lepas jam tangan, pisau, atau benda metal lain saat menggunakan
   * Hindari penggunaan dekat power lines atau bangunan baja

2. **Posisi yang Benar:**
   * Pegang kompas rata/horizontal di depan dada
   * Berdiri tegak dan stabil
   * Tunggu hingga jarum berhenti bergerak

3. **Perawatan Kompas:**
   * Simpan di tempat kering dan sejuk
   * Hindari terjatuh atau benturan keras
   * Jangan biarkan terkena sinar matahari langsung lama
   * Bersihkan dengan kain lembut

4. **Kalibrasi:**
   * Cek akurasi dengan membandingkan arah matahari/bintang
   * Periksa apakah gelembung udara ada (tanda kebocoran)
   * Pastikan jarum bergerak bebas

5. **Kondisi Khusus:**
   * **Di Area Kutub:** Kompas standar tidak akurat, gunakan kompas khusus
   * **Di Khatulistiwa:** Jarum kompas cenderung miring, butuh kompas balance global
   * **Di Medan Vulkanik:** Kandungan mineral dapat mengganggu kompas

### Kegunaan Kompas dalam Navigasi

* **Menentukan Arah:** Mengetahui posisi mata angin
* **Mengikuti Azimuth:** Berjalan lurus mengikuti sudut jurusan
* **Orientasi Peta:** Menyelaraskan peta dengan medan sebenarnya
* **Reseksi:** Menentukan posisi sendiri di peta
* **Interseksi:** Menentukan posisi objek di medan
* **Back Bearing:** Menentukan arah balik untuk kembali

* Orienting lines (garis sejajar utara)
* Scale ruler (penggaris skala)

**Keunggulan:**
* Sangat praktis untuk orienteering
* Mudah digunakan dengan peta
* Ringan dan compact
* Cocok untuk pemula

#### 3. Kompas Pelat Dasar (Baseplate Compass)

Variasi dari kompas orienteering dengan fitur lebih sederhana, cocok untuk penggunaan umum dan pelajar.

#### 4. Kompas Ibu Jari (Thumb Compass)

Kompas kecil yang diikatkan di ibu jari, digunakan khusus untuk lomba orienteering agar dapat membaca kompas sambil berlari.

#### 5. Kompas Digital/Elektronik

**Karakteristik:**
* Menggunakan sensor elektronik
* Menampilkan arah dalam angka digital
* Sering terintegrasi dengan GPS
* Membutuhkan baterai

**Kekurangan:**
* Tergantung baterai
* Rentan gangguan elektronik
* Kurang akurat di area dengan banyak logam

### Tips Menggunakan Kompas

**Do (Lakukan):**
* Jauhkan dari benda logam (minimal 1 meter)
* Pegang dalam posisi rata (horizontal)
* Tunggu jarum berhenti bergerak sebelum membaca
* Kalibrasi secara berkala
* Simpan di tempat kering

**Don't (Hindari):**
* Jangan gunakan dekat logam (pisau, jam, kendaraan)
* Jangan dekat magnet atau peralatan elektronik
* Jangan disimpan di tempat panas ekstrem
* Jangan dijatuhkan atau dibenturkan

### Perawatan Kompas

* Bersihkan secara teratur dengan kain lembut
* Periksa gelembung udara dalam cairan (tidak boleh terlalu besar)
* Lindungi dari benturan
* Simpan dalam tas pelindung
* Jauhkan dari magnet kuat
* Periksa akurasi dengan membandingkan beberapa kompas
`
              },
              {
                id: 'navrat-2-article-2',
                title: 'Orientasi Peta dengan Kompas',
                content: `
### Pengertian Orientasi Peta

Orientasi peta adalah proses menyelaraskan peta dengan medan sebenarnya sehingga arah di peta sama dengan arah di lapangan. Setelah peta diorientasi, utara peta akan menunjuk ke utara sebenarnya, dan semua fitur di peta akan sesuai posisinya dengan medan.

### Tujuan Orientasi Peta

1. **Memudahkan Identifikasi Medan:** Fitur di peta sesuai dengan posisi sebenarnya
2. **Menentukan Arah dengan Akurat:** Memastikan arah perjalanan benar
3. **Menemukan Posisi:** Lebih mudah menentukan lokasi Anda di peta
4. **Navigasi Efektif:** Mengurangi kesalahan dalam menentukan rute

### Metode Orientasi Peta dengan Kompas

#### Langkah-Langkah Detail:

**1. Persiapan:**
* Buka peta dan letakkan di permukaan datar
* Pastikan kompas berfungsi dengan baik
* Jauhkan dari benda magnetis (minimal 50 cm dari logam)
* Identifikasi garis grid utara di peta (biasanya vertikal)

**2. Posisikan Kompas:**
* Letakkan kompas di atas peta
* Sejajarkan sisi atau garis rambut kompas dengan garis grid utara peta
* Pastikan titik 0° kompas mengarah ke atas peta

**3. Putar Peta:**
* Pegang kompas tetap pada posisinya
* Putar peta (bersama kompas) secara perlahan
* Tunggu hingga jarum utara kompas berhenti bergerak
* Sejajarkan jarum utara dengan angka 0° atau 360° pada dial kompas

**4. Verifikasi:**
* Cek apakah fitur medan (gunung, sungai, jalan) sesuai dengan peta
* Identifikasi minimal 2-3 landmark untuk memastikan orientasi benar

### Tips Orientasi yang Akurat

**Lakukan:**
* Orientasi ulang setiap kali berhenti atau berbelok
* Gunakan peta dengan skala yang sesuai (1:25.000 atau 1:50.000)
* Latih orientasi di medan yang sudah dikenal dulu
* Selalu cek minimal 2 fitur medan sebagai konfirmasi

**Hindari:**
* Mengandalkan satu metode saja
* Orientasi di dekat kendaraan atau bangunan baja
* Terburu-buru tanpa verifikasi
`
              },
              {
                id: 'navrat-2-article-3',
                title: 'Penggunaan Kompas Siang dan Malam',
                content: `
### Kompas Siang (Daytime Compass)

Kompas siang digunakan untuk membidik sasaran yang terlihat dan menentukan sudut jurusannya (azimuth).

#### Langkah-Langkah Penggunaan Kompas Siang:

**1. Buka Kompas:**
* Buka tutup kompas hingga tegak lurus (90°) dengan badan kompas
* Angkat prisma hingga posisi 45° (dapat dilihat melalui lubang prisma)
* Pastikan jarum kompas bebas bergerak

**2. Posisi Pegangan:**
* Masukkan ibu jari ke cincin kompas
* Telunjuk menahan bagian bawah tutup
* Jari tengah dan manis di bawah badan kompas
* Pegang kompas setinggi dada atau mata

**3. Membidik Sasaran:**
* Arahkan kompas ke sasaran yang ingin ditentukan sudut jurusannya
* Lihat sasaran melalui celah bidik di tutup
* Sejajarkan kawat pisir (sight wire) dengan sasaran
* Pastikan sasaran, kawat pisir, dan celah bidik berada dalam satu garis lurus

**4. Membaca Sudut:**
* Tanpa mengubah arah bidikan, baca angka derajat melalui prisma
* Angka yang sejajar dengan garis indeks adalah sudut jurusan (azimuth)
* Tunggu jarum kompas berhenti bergerak sebelum membaca

**5. Mencatat:**
* Catat sudut jurusan yang terbaca
* Format: "Sasaran [nama]: Azimuth [angka]°"
* Contoh: "Puncak Gunung: Azimuth 075°"

### Kompas Malam (Night Compass)

Kompas malam digunakan untuk berjalan mengikuti sudut jurusan tertentu tanpa melihat sasaran (karena gelap atau sasaran tidak terlihat).

#### Langkah-Langkah Penggunaan Kompas Malam:

**1. Setting Azimuth:**
* Buka tutup kompas hingga rata dengan badan (180°)
* Kendorkan sekrup pengunci bezel (jika ada)
* Putar kaca/bezel kompas hingga angka azimuth yang diinginkan sejajar dengan garis rambut
* Contoh: Jika ingin jalan ke arah 045°, putar hingga angka 45 di garis rambut
* Kencangkan sekrup pengunci

**2. Aktivasi Luminous (jika perlu):**
* Kompas modern memiliki cat fosfor yang menyerap cahaya
* Sebelum gelap, charge kompas dengan cahaya senter selama 10-30 detik
* Jarum dan tanda akan bercahaya selama beberapa jam

**3. Posisi Kompas:**
* Pegang kompas di depan dada, posisi horizontal
* Pastikan garis rambut mengarah ke depan (arah perjalanan)
* Jaga jarak aman dari benda logam

**4. Orientasi Badan:**
* Putar seluruh badan (bukan hanya kompas) perlahan
* Tunggu jarum berhenti bergerak
* Sejajarkan ujung jarum utara (merah/bercahaya) dengan tanda indeks atau angka yang sudah di-set
* Saat jarum sejajar, arah garis rambut adalah arah perjalanan yang benar

**5. Berjalan:**
* Cari landmark di depan yang sejajar dengan garis rambut (pohon, batu, dll)
* Berjalan menuju landmark tersebut
* Setelah sampai di landmark, ulangi proses orientasi
* Tetapkan landmark baru dan lanjutkan

### Perbedaan Kompas Siang dan Malam

| Aspek | Kompas Siang | Kompas Malam |
|-------|--------------|---------------|
| Posisi Tutup | Tegak lurus (90°) | Rata (180°) |
| Fungsi | Membidik sasaran | Mengikuti azimuth |
| Pembacaan | Membaca sudut lewat prisma | Setting azimuth di bezel |
| Sasaran | Harus terlihat jelas | Tidak perlu melihat sasaran |
| Fitur Utama | Prisma + sight wire | Luminous + bezel |
| Aplikasi | Menentukan arah objek | Berjalan ke arah tertentu |

### Sudut Jurusan (Azimuth)

**Sistem Derajat:**
* 000° atau 360° = Utara (North)
* 090° = Timur (East)
* 180° = Selatan (South)
* 270° = Barat (West)

**Sudut Antara:**
* 045° = Timur Laut (Northeast)
* 135° = Tenggara (Southeast)
* 225° = Barat Daya (Southwest)
* 315° = Barat Laut (Northwest)

### Back Azimuth (Sudut Balik)

**Rumus:**

**Jika Azimuth < 180°:**
Back Azimuth = Azimuth + 180°

**Jika Azimuth > 180°:**
Back Azimuth = Azimuth - 180°

**Contoh:**
* Azimuth maju: 045° → Back Azimuth: 045° + 180° = 225°
* Azimuth maju: 270° → Back Azimuth: 270° - 180° = 090°

### Tips Penggunaan Efektif

**Untuk Kompas Siang:**
1. Bidik sasaran yang spesifik (puncak gunung, bukan "gunung")
2. Baca angka dengan mata sejajar prisma
3. Tunggu jarum benar-benar stabil (3-5 detik)
4. Catat segera sebelum lupa
5. Verifikasi dengan bidik ulang

**Untuk Kompas Malam:**
1. Charge kompas dengan senter sebelum gelap
2. Gunakan landmark interim setiap 50-100m
3. Berjalan perlahan agar tidak menyimpang
4. Re-check azimuth setiap berhenti
5. Gunakan tongkat atau teman sebagai guide arah
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
### Pengertian Resection (Mengikat ke Belakang)

**Resection** adalah teknik navigasi untuk menentukan **posisi sendiri** di peta dengan menggunakan dua atau lebih objek medan yang dapat diidentifikasi di peta.

**Kapan Digunakan:**
* Saat tersesat dan tidak tahu posisi di peta
* Untuk memverifikasi posisi saat ini
* Memulai navigasi dari titik yang tidak ditandai di peta
* Operasi pencarian dan penyelamatan (SAR)

### Langkah-Langkah Resection

#### 1. Identifikasi Objek Medan

**Syarat Objek:**
* Harus terlihat jelas dari posisi Anda
* Dapat diidentifikasi dengan pasti di peta (puncak gunung, menara, persimpangan)
* Minimal 2 objek, idealnya 3 untuk akurasi
* Sudut antara objek 30°-150° (hindari terlalu sempit atau terlalu lebar)

#### 2. Bidik Objek dengan Kompas

**Prosedur:**

A. **Bidik Objek Pertama (A):**
   * Buka kompas siang (tutup tegak lurus)
   * Bidik objek melalui celah dan kawat pisir
   * Baca azimuth melalui prisma
   * Contoh: Puncak Gunung → Azimuth 045°
   * Catat: "Objek A: 045°"

B. **Bidik Objek Kedua (B):**
   * Tanpa bergerak dari posisi, bidik objek kedua
   * Baca dan catat azimuthnya
   * Contoh: Menara → Azimuth 130°
   * Catat: "Objek B: 130°"

#### 3. Hitung Back Azimuth (Sudut Balik)

Back azimuth adalah kebalikan arah dari objek ke posisi kita.

**Rumus:**

**Jika Azimuth < 180°:**
Back Azimuth = Azimuth + 180°

**Jika Azimuth ≥ 180°:**
Back Azimuth = Azimuth - 180°

**Contoh Perhitungan:**
* Objek A: 045° → Back Azimuth = 045° + 180° = 225°
* Objek B: 130° → Back Azimuth = 130° + 180° = 310°

#### 4. Plot di Peta

**Cara Plotting:**

A. **Orientasikan Peta:**
   * Selaraskan peta dengan kompas

B. **Plot Garis Pertama:**
   * Temukan Objek A di peta
   * Letakkan kompas di objek A
   * Sejajarkan kompas dengan arah back azimuth (225°)
   * Tarik garis lurus dari Objek A mengikuti arah 225°

C. **Plot Garis Kedua:**
   * Temukan Objek B di peta
   * Sejajarkan dengan back azimuth B (310°)
   * Tarik garis dari Objek B mengikuti arah 310°

D. **Tentukan Posisi:**
   * Perpotongan 2 garis adalah posisi Anda
   * Jika menggunakan 3 garis, idealnya bertemu di satu titik
   * Jika membentuk segitiga kecil, posisi Anda di tengah segitiga

### Pengertian Intersection (Mengikat ke Depan)

**Intersection** adalah teknik navigasi untuk menentukan **posisi objek/sasaran** di peta dengan mengukur azimuth dari dua atau lebih posisi yang diketahui.

**Kapan Digunakan:**
* Menentukan posisi target yang tidak bisa didekati
* Pemetaan lokasi baru
* Operasi militer (menentukan posisi musuh)
* SAR (menentukan lokasi korban yang terlihat tapi jauh)

### Langkah-Langkah Intersection

#### 1. Pilih Posisi Pengamatan

**Syarat Posisi:**
* Dua posisi harus diketahui dengan pasti di peta
* Jarak antara kedua posisi cukup jauh (minimal 100m)
* Sudut baseline 30°-150° untuk akurasi optimal
* Objek harus terlihat dari kedua posisi

#### 2. Bidik dari Posisi Pertama

**Di Posisi 1:**
* Pastikan Anda berada tepat di titik yang diketahui di peta
* Orientasikan peta
* Bidik objek target dengan kompas siang
* Baca dan catat azimuth
* Contoh: "Dari Persimpangan, Azimuth ke target: 075°"

#### 3. Pindah ke Posisi Kedua

* Navigasi ke posisi kedua yang sudah ditentukan
* Pastikan tiba tepat di titik yang diketahui di peta

#### 4. Bidik dari Posisi Kedua

**Di Posisi 2:**
* Orientasikan peta
* Bidik objek target yang sama
* Baca dan catat azimuth
* Contoh: "Dari Jembatan, Azimuth ke target: 345°"

#### 5. Plot di Peta

**Cara Plotting:**

A. **Plot Garis Pertama:**
   * Temukan Posisi 1 di peta
   * Letakkan penggaris di Posisi 1
   * Sejajarkan dengan azimuth 075° (dari utara peta)
   * Tarik garis lurus dari Posisi 1 ke arah target

B. **Plot Garis Kedua:**
   * Temukan Posisi 2 di peta
   * Sejajarkan penggaris dengan azimuth 345°
   * Tarik garis dari Posisi 2 ke arah target

C. **Tentukan Lokasi Target:**
   * Perpotongan kedua garis adalah posisi objek target
   * Tandai dengan jelas di peta

### Perbedaan Resection dan Intersection

| Aspek | Resection | Intersection |
|-------|-----------|---------------|
| **Tujuan** | Mencari posisi sendiri | Mencari posisi target/objek |
| **Yang Diketahui** | Lokasi objek referensi | Posisi pengamat sendiri |
| **Yang Dicari** | Posisi pengamat | Lokasi target |
| **Bidikan** | Ke objek yang diketahui | Ke target yang tidak diketahui |
| **Garis yang Ditarik** | Back azimuth dari objek | Azimuth maju dari posisi |
| **Pergerakan** | Tidak perlu pindah | Harus pindah ke posisi kedua |
| **Penggunaan** | Saat tersesat | Pemetaan/lokasi target |

### Tips untuk Akurasi Tinggi

**Resection:**
1. Gunakan 3 objek untuk triangulasi sempurna
2. Pilih objek dengan sudut 60° atau 120° antara satu sama lain
3. Hindari objek yang terlalu dekat (< 500m)
4. Gunakan fitur terrain yang jelas dan mudah diidentifikasi

**Intersection:**
1. Baseline (jarak antar posisi) minimal 1/4 jarak ke target
2. Sudut potong ideal 90° (45°-135°)
3. Bidik dengan sangat hati-hati, kesalahan 1° bisa menghasilkan error puluhan meter
4. Jika memungkinkan, gunakan 3 posisi untuk verifikasi

### Aplikasi di Dunia Nyata

**Resection:**
* Hiking: Menentukan posisi saat tersesat
* Sailing: Navigasi maritim dengan lighthouse
* SAR: Tim pencari menentukan posisi sendiri
* Military: Menentukan posisi pasukan

**Intersection:**
* Artillery: Menentukan koordinat target untuk tembakan
* SAR: Menemukan korban dari kejauhan
* Surveying: Pemetaan fitur medan baru
* Tracking: Memantau pergerakan target
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
### Pengertian GPS

**GPS (Global Positioning System)** adalah sistem navigasi berbasis satelit yang dikembangkan oleh Departemen Pertahanan Amerika Serikat. Sistem ini menggunakan jaringan satelit di orbit untuk menentukan posisi, kecepatan, dan waktu dengan akurasi tinggi di mana saja di bumi.

### Sejarah GPS

* **1973:** Proyek GPS dimulai oleh Departemen Pertahanan AS
* **1978:** Satelit GPS pertama diluncurkan
* **1995:** Sistem GPS mencapai Full Operational Capability (FOC) dengan 24 satelit
* **2000:** Selective Availability (SA) dimatikan, meningkatkan akurasi untuk sipil
* **Sekarang:** GPS terdiri dari 31+ satelit aktif

### Prinsip Kerja GPS

#### Trilaterasi Satelit:

GPS bekerja berdasarkan prinsip **trilaterasi** - menghitung posisi berdasarkan jarak dari beberapa titik referensi (satelit).

**Cara Kerja:**

1. **Sinyal Satelit:**
   * Setiap satelit GPS memancarkan sinyal radio berisi:
     - Posisi satelit (ephemeris)
     - Waktu pengiriman sinyal (atomic clock)
     - Status satelit (almanac)

2. **Perhitungan Jarak:**
   * Receiver GPS menangkap sinyal
   * Menghitung waktu tempuh sinyal (kecepatan cahaya × waktu)
   * Jarak = Kecepatan Cahaya (300.000 km/s) × Waktu Tempuh

3. **Penentuan Posisi:**
   * **1 satelit:** Posisi Anda di permukaan bola (radius = jarak ke satelit)
   * **2 satelit:** Posisi di perpotongan 2 bola (lingkaran)
   * **3 satelit:** Posisi di perpotongan 3 bola (2 titik)
   * **4 satelit:** Posisi akurat + koreksi kesalahan jam receiver

**Minimal 4 satelit diperlukan untuk posisi 3D (latitude, longitude, altitude)**

### Segmen GPS

Sistem GPS terdiri dari 3 segmen:

#### 1. Space Segment (Segmen Angkasa)

* **Jumlah:** 31+ satelit aktif (minimum operasional: 24)
* **Orbit:** MEO (Medium Earth Orbit), ketinggian ±20.200 km
* **Periode orbit:** 11 jam 58 menit (2 putaran per hari)
* **Konfigurasi:** 6 bidang orbit, masing-masing 4-5 satelit
* **Jangkauan:** Minimal 4 satelit terlihat dari titik mana pun di bumi
* **Umur satelit:** 10-15 tahun

**Fungsi Satelit:**
* Memancarkan sinyal navigasi
* Menjaga waktu dengan atomic clock (akurasi 1 nanodetik)
* Mengirim data posisi dan kesehatan satelit

#### 2. Control Segment (Segmen Kontrol)

* **Master Control Station:** Colorado Springs, AS
* **Monitor Stations:** 6 stasiun di seluruh dunia
* **Ground Antennas:** 4 antena upload

**Fungsi:**
* Memantau kesehatan dan orbit satelit
* Mengirim update ephemeris dan koreksi jam
* Mengatur maneuver satelit
* Memastikan akurasi sistem

#### 3. User Segment (Segmen Pengguna)

* **Receiver GPS:** Perangkat yang menangkap sinyal satelit
* **Aplikasi:** Navigasi darat, laut, udara, pemetaan, survei, militer

### Bagian-Bagian GPS Handheld

#### Komponen Fisik:

**1. Antena**
* **Fungsi:** Menangkap sinyal satelit GPS
* **Jenis:**
  - Internal: Tersembunyi di dalam badan GPS
  - External: Antena tambahan untuk sinyal lebih kuat
* **Tips:** Jangan tutup bagian atas GPS saat digunakan

**2. Layar (Display)**
* **Fungsi:** Menampilkan informasi navigasi
* **Jenis:**
  - Monochrome: Hemat baterai, baik di bawah sinar matahari
  - Color: Lebih detail, mudah dibaca
  - Touchscreen: Lebih intuitif
* **Informasi yang ditampilkan:**
  - Koordinat (Latitude, Longitude)
  - Altitude (ketinggian)
  - Kecepatan (Speed)
  - Arah (Bearing/Heading)
  - Waktu (UTC/Local)
  - Akurasi (EPE - Estimated Position Error)
  - Jumlah satelit terkunci
  - Peta digital (jika ada)

**3. Tombol Interface**

* **Power/Light:** Menghidupkan/mematikan, backlight
* **Page:** Berpindah antar halaman tampilan
  - Satellite Page (status satelit)
  - Map Page (peta)
  - Compass Page (kompas)
  - Trip Computer (data perjalanan)
* **Enter/Mark:** Menyimpan waypoint (titik lokasi)
* **Rocker/Joystick:** Navigasi menu, zoom, pan peta
* **Zoom In/Out:** Memperbesar/memperkecil tampilan peta
* **Menu/Quit:** Masuk/keluar menu setting
* **Find:** Mencari waypoint, kota, atau POI (Point of Interest)

**4. Baterai**
* **Jenis:**
  - AA/AAA alkaline (umum)
  - Rechargeable (NiMH, Li-ion)
* **Daya tahan:** 12-30 jam (tergantung model dan penggunaan)
* **Tips:** Bawa baterai cadangan untuk perjalanan panjang

**5. Port/Konektor**
* **USB:** Transfer data, charging (model modern)
* **Micro SD:** Slot kartu memori untuk peta tambahan
* **External Antenna:** Port untuk antena eksternal (model tertentu)

**6. Casing/Body**
* **Material:** Plastik tahan banting, karet
* **Rating:** IPX7 (tahan air 1 meter selama 30 menit)
* **Desain:** Ergonomis, genggaman anti-slip

### Kegunaan GPS

#### Navigasi:

**1. Menentukan Posisi (Position Finding)**
* Koordinat geografis (Latitude/Longitude)
* Koordinat UTM (Universal Transverse Mercator)
* Altitude (ketinggian di atas permukaan laut)

**Contoh Pembacaan:**
* Lat: 7°47'30"S (atau -7.7917°)
* Lon: 110°22'15"E (atau 110.3708°)
* Alt: 115 m

**2. Navigasi Point-to-Point**
* Menyimpan titik tujuan (waypoint)
* GPS menunjukkan arah dan jarak ke tujuan
* Estimasi waktu tiba (ETA - Estimated Time of Arrival)

**3. Tracking (Pelacakan Jalur)**
* Merekam jejak perjalanan (track log)
* Dapat diputar ulang untuk navigasi balik
* Export ke komputer untuk analisis

**4. Routing (Perencanaan Rute)**
* Membuat rute multi-waypoint
* GPS memandu dari satu waypoint ke waypoint berikutnya
* Turn-by-turn navigation (model advanced)

#### Aplikasi Khusus:

**1. Hiking & Trekking:**
* Mencegah tersesat di hutan/gunung
* Menemukan kembali basecamp
* Eksplorasi medan baru dengan aman

**2. Geocaching:**
* Permainan treasure hunting dengan GPS
* Mencari cache tersembunyi berdasarkan koordinat

**3. Search and Rescue (SAR):**
* Koordinasi tim pencari
* Menandai lokasi korban
* Pemetaan area pencarian

**4. Survey & Pemetaan:**
* Pengukuran lahan
* Pembuatan peta digital
* Inventarisasi sumber daya alam

**5. Militer:**
* Navigasi pasukan
* Penentuan koordinat target
* Sinkronisasi operasi

**6. Pertanian (Precision Farming):**
* Pemetaan lahan
* Tracking traktor
* Aplikasi pupuk presisi

**7. Transportasi:**
* Navigasi kendaraan
* Fleet management
* Tracking logistik

**8. Olahraga:**
* Tracking jarak lari/bersepeda
* Analisis performa (kecepatan, elevasi)
* Virtual race

### Akurasi GPS

#### Tingkat Akurasi:

**1. Standard GPS (Civilian)**
* **Horizontal:** ±5-10 meter (95% waktu)
* **Vertical:** ±10-15 meter
* Cukup untuk navigasi umum

**2. DGPS (Differential GPS)**
* **Horizontal:** ±1-3 meter
* Menggunakan stasiun referensi ground
* WAAS/EGNOS (Wide Area Augmentation System)

**3. Military GPS (P-Code)**
* **Horizontal:** ±1 meter
* Sinyal terenkripsi
* Hanya untuk militer AS dan sekutu

**4. RTK (Real-Time Kinematic)**
* **Horizontal:** ±1-2 cm
* Untuk survey profesional
* Memerlukan base station

#### Faktor yang Mempengaruhi Akurasi:

**1. Jumlah Satelit:**
* 4 satelit: Minimum untuk fix 3D
* 5-7 satelit: Akurasi standar
* 8+ satelit: Akurasi optimal

**2. Geometri Satelit (PDOP - Position Dilution of Precision):**
* **PDOP < 4:** Excellent (akurasi tinggi)
* **PDOP 4-8:** Good (akurasi memadai)
* **PDOP > 8:** Poor (akurasi rendah)
* Satelit tersebar luas = PDOP rendah = akurat
* Satelit berkumpul = PDOP tinggi = tidak akurat

**3. Obstruksi (Halangan):**
* **Multipath:** Sinyal memantul dari gedung/tebing → error
* **Canopy:** Dedaunan tebal memblokir sinyal
* **Urban Canyon:** Gedung tinggi menghalangi satelit
* **Indoor:** Tidak ada sinyal

**4. Atmospheric Effects:**
* **Ionosphere:** Lapisan bermuatan di atmosfer atas
* **Troposphere:** Lapisan atmosfer bawah
* **Solusi:** Model koreksi, WAAS/EGNOS

**5. Selective Availability (SA):**
* Dulu: Militer AS sengaja menurunkan akurasi sipil
* 2000: SA dimatikan, akurasi sipil meningkat dari ±100m ke ±10m

### Kelebihan dan Keterbatasan GPS

#### Kelebihan:

* **Akurasi:** Posisi akurat dalam hitungan meter
* **Real-time:** Informasi posisi langsung
* **Global Coverage:** Tersedia di mana saja di bumi
* **24/7 Operation:** Bekerja siang malam, segala cuaca
* **Mudah Digunakan:** Interface user-friendly
* **Multifungsi:** Navigasi, tracking, mapping, timing

#### Keterbatasan:

* **Tidak Bekerja di Indoor:** Sinyal tidak menembus atap
* **Tergantung Baterai:** Mati jika baterai habis
* **Butuh Langit Terbuka:** Tidak akurat di hutan tebal, ngarai
* **Cold Start Lambat:** Butuh 5-15 menit untuk lock satelit pertama kali
* **Drift:** Posisi bisa "melompat" beberapa meter
* **Tidak Real-time 100%:** Update biasanya setiap 1 detik

### GPS vs Kompas & Peta

| Aspek | GPS | Kompas & Peta |
|-------|-----|---------------|
| **Akurasi** | ±5-10 m | ±50-100 m (tergantung skill) |
| **Kecepatan** | Instant | Butuh waktu untuk plotting |
| **Keandalan** | Tergantung baterai & satelit | Selalu bekerja |
| **Kemudahan** | Mudah untuk pemula | Butuh latihan |
| **Backup** | Harus ada backup tradisional | Kompas+peta adalah backup |
| **Biaya** | Mahal (perangkat + peta digital) | Murah |
| **Ketahanan** | Rentan rusak jika jatuh/basah | Sangat tahan lama |

**Kesimpulan:** GPS adalah alat navigasi modern yang sangat efektif, TAPI kompas dan peta tetap wajib dibawa sebagai backup. Jangan pernah bergantung 100% pada GPS!
`
              },
              {
                id: 'navrat-4-article-2',
                title: 'Pengoperasian GPS',
                content: `
### Persiapan Sebelum Menggunakan GPS

#### 1. Periksa Perangkat

* **Baterai:** Pastikan terisi penuh atau pasang baterai baru
* **Kondisi Fisik:** Cek tidak ada retakan atau kerusakan
* **Layar:** Bersihkan dari debu/kotoran
* **Antena:** Pastikan tidak terhalang

#### 2. Pengaturan Awal (Initial Setup)

**Format Posisi:**
* Pilih format koordinat sesuai peta yang digunakan:
  - **hddd.ddddd°** (Decimal Degrees): -7.79167°, 110.37083°
  - **hddd°mm.mmm'** (Degrees Decimal Minutes): 7°47.500'S, 110°22.250'E
  - **hddd°mm'ss.s"** (Degrees Minutes Seconds): 7°47'30"S, 110°22'15"E
  - **UTM/UPS:** 49M 459825mE 9138975mN

**Datum Peta:**
* Pilih datum sesuai peta:
  - **WGS 84:** Standard GPS, paling umum
  - **DMA (WGS 72):** Peta lama
  - **Local Datum:** Indonesia uses WGS 84

**Zona Waktu:**
* Set sesuai lokasi: Indonesia WIB (UTC+7), WITA (UTC+8), WIT (UTC+9)

**Unit Jarak:**
* Metric (meter, kilometer) atau Imperial (feet, miles)

**Format Waktu:**
* 12-hour atau 24-hour

### Menghidupkan GPS

#### Langkah-Langkah:

**1. Power On:**
* Tekan dan tahan tombol **POWER** selama 2-3 detik
* GPS akan melakukan self-test singkat
* Layar menampilkan logo/welcome screen

**2. Cold Start vs Warm Start:**

**Cold Start (Pertama kali / lama tidak digunakan):**
* GPS tidak tahu posisi terakhir
* Butuh waktu **5-15 menit** untuk lock satelit
* Harus mendownload almanac dari satelit
* **Tips:** Letakkan di tempat terbuka dengan langit bebas

**Warm Start (Baru dimatikan < 4 jam yang lalu):**
* GPS ingat posisi terakhir
* Lock satelit dalam **30-60 detik**
* Lebih cepat karena almanac masih valid

**Hot Start (Dimatikan sebentar):**
* Lock satelit dalam **10-20 detik**
* Data satelit masih tersimpan

**3. Acquiring Satellites (Menangkap Sinyal):**

**Halaman Satelit menampilkan:**
* **Bar Chart:** Kekuatan sinyal dari setiap satelit
  - Kosong: Satelit terdeteksi tapi belum lock
  - Hitam solid: Satelit ter-lock (digunakan untuk posisi)
* **Sky View:** Posisi satelit di langit
  - Lingkaran luar: Horizon (0°)
  - Lingkaran tengah: 45° elevasi
  - Titik tengah: Zenith (90°, tepat di atas kepala)
* **Accuracy (EPE):** Estimasi error posisi
  - < 5m: Excellent
  - 5-10m: Good
  - 10-20m: Fair
  - > 20m: Poor
* **Status:**
  - "Searching..." atau "Acquiring Satellites"
  - "Ready to Navigate" atau "3D Fix" (minimal 4 satelit lock)

**Tips untuk Lock Cepat:**
* Berdiri di tempat terbuka (lapangan, puncak bukit)
* Jauhi gedung tinggi, pohon lebat, tebing
* Letakkan GPS horizontal di dada atau di tanah
* Jangan bergerak saat acquiring satellites
* Hindari penggunaan di dalam mobil (kecuali ada GPS eksternal)

**4. Status Ready:**
* GPS sudah lock minimal 4 satelit
* Koordinat muncul di layar
* Siap digunakan untuk navigasi

### Halaman-Halaman Utama GPS

#### 1. Satellite Page (Halaman Satelit)

**Informasi:**
* Jumlah satelit terdeteksi dan ter-lock
* Kekuatan sinyal (bar chart)
* Sky view (posisi satelit)
* Akurasi (EPE/Error)
* Receiver status

**Kegunaan:**
* Troubleshooting jika GPS tidak akurat
* Cek jumlah satelit sebelum navigasi

#### 2. Map Page (Halaman Peta)

**Informasi:**
* Peta digital (jika ada basemap)
* Posisi Anda (ikon panah/titik)
* Track log (jejak perjalanan) - garis berwarna
* Waypoints yang disimpan
* Garis navigasi ke tujuan (jika sedang navigasi)
* Scale bar (skala peta)
* Compass rose (arah utara)

**Fungsi Tombol:**
* **Zoom In/Out:** Ubah skala peta
* **Pan:** Geser peta dengan rocker
* **Re-center:** Kembalikan posisi Anda ke tengah layar

**Zoom Levels:**
* 20 ft - 800 mi (atau 5 m - 1200 km)
* Zoom in untuk detail, zoom out untuk overview

#### 3. Compass Page (Halaman Kompas)

**Informasi:**
* **Compass Rose:** Lingkaran kompas digital
* **Heading:** Arah perjalanan Anda saat ini (0-360°)
  - 0° = North, 90° = East, 180° = South, 270° = West
* **Pointer:** Panah menunjuk ke waypoint tujuan
* **Distance to Destination:** Jarak ke tujuan
* **Bearing:** Sudut jurusan ke tujuan (azimuth)
* **Speed:** Kecepatan perjalanan (km/h atau mph)
* **ETE (Estimated Time Enroute):** Estimasi waktu tiba

**Tips:**
* GPS compass hanya akurat saat bergerak (> 5 km/h)
* Jika diam, gunakan kompas magnetis biasa

#### 4. Trip Computer (Komputer Perjalanan)

**Data yang Ditampilkan:**
* **Odometer:** Total jarak tempuh
* **Trip Odometer:** Jarak perjalanan saat ini (bisa di-reset)
* **Moving Time:** Waktu dalam keadaan bergerak
* **Stopped Time:** Waktu berhenti/istirahat
* **Average Speed:** Kecepatan rata-rata
* **Maximum Speed:** Kecepatan tertinggi
* **Elevation Gain/Loss:** Total pendakian/penurunan
* **Sunrise/Sunset:** Waktu terbit/terbenam matahari di lokasi Anda

**Kegunaan:**
* Analisis performa perjalanan
* Estimasi konsumsi energi
* Perencanaan istirahat

### Fungsi-Fungsi Dasar GPS

#### 1. Marking Waypoint (Menyimpan Lokasi)

**Langkah:**
1. Berdiri di lokasi yang ingin disimpan
2. Tekan tombol **MARK** atau **ENTER** (tahan 2 detik)
3. GPS otomatis menyimpan koordinat saat ini
4. Layar muncul info waypoint:
   * Nama (default: "001", "002", dst.)
   * Symbol (icon: flag, camp, food, dll.)
   * Koordinat
   * Elevation
   * Tanggal/waktu
5. Edit nama jika perlu (misal: "Basecamp", "Air Terjun")
6. Pilih symbol yang sesuai
7. Tekan **ENTER** untuk save, atau **QUIT** untuk batal

**Contoh Penggunaan:**
* Basecamp
* Persimpangan penting
* Sumber air
* Landmark
* Tempat parkir kendaraan
* Titik evakuasi

**Tips:**
* Beri nama deskriptif (max 10 karakter)
* Gunakan symbol yang mudah dikenali
* Simpan waypoint penting di awal perjalanan
* Backup waypoint ke komputer secara berkala

#### 2. Go To (Navigasi ke Waypoint)

**Langkah:**
1. Tekan tombol **FIND** atau masuk ke **Waypoint Manager**
2. Pilih waypoint tujuan dari daftar
3. Pilih **Go To** atau **Navigate**
4. GPS menampilkan:
   * Pointer mengarah ke tujuan
   * Bearing (sudut jurusan ke tujuan)
   * Distance (jarak ke tujuan)
   * ETE (estimasi waktu tiba)
5. Ikuti petunjuk:
   * Putar badan hingga pointer mengarah lurus ke depan
   * Berjalan mengikuti arah pointer
   * GPS akan update arah jika Anda menyimpang

**Tips:**
* Cek kompas page untuk arah yang jelas
* Perhatikan obstacle di medan (tidak ada garis jalan)
* GPS menunjuk garis lurus, bukan jalur jalan

#### 3. Track Log (Merekam Jejak)

**Pengertian:**
Track log adalah rekaman posisi GPS setiap beberapa detik/meter yang membentuk jejak perjalanan Anda.

**Setting Track Log:**
* **Interval:** Waktu atau jarak antar titik track
  - Time: Setiap 5 detik (smooth tapi boros memori)
  - Distance: Setiap 10 meter (hemat memori)
  - Auto: GPS memutuskan otomatis
* **Memory:** GPS bisa menyimpan 10.000-20.000 track points
* **Wrap:** Jika memori penuh, timpa track lama (on/off)

**Kegunaan Track Log:**
1. **Track Back (Pulang):**
   * GPS membalik track dan memandu Anda kembali
   * Useful jika tersesat atau ingin pulang via jalur yang sama
   * Langkah: Menu → Tracks → Follow Track Backward

2. **Analisis Perjalanan:**
   * Panjang jalur
   * Elevasi profile
   * Kecepatan rata-rata

3. **Sharing:**
   * Save track dan share dengan teman
   * Upload ke platform (Garmin Connect, Strava, dll.)

**Tips:**
* Aktifkan track log di awal perjalanan
* Clear track log sebelum trip baru
* Save track penting sebelum dihapus
* Export track ke GPX format untuk backup

#### 4. Route (Rute Multi-Waypoint)

**Pengertian:**
Route adalah kumpulan waypoint yang dihubungkan secara berurutan.

**Membuat Route:**
1. Menu → Route → Create New Route
2. Tambahkan waypoint satu per satu:
   * Waypoint 1: Basecamp
   * Waypoint 2: Checkpoint Alpha
   * Waypoint 3: Puncak
   * Waypoint 4: Shelter
3. Save route dengan nama (misal: "Jalur Pendakian")
4. Navigate → GPS akan memandu dari waypoint 1 → 2 → 3 → dst.

**Kegunaan:**
* Perencanaan perjalanan multi-destinasi
* Ekspedisi dengan banyak checkpoint
* Lomba orienteering

### Informasi di Layar GPS

#### Data Fields yang Umum:

**1. Location (Posisi):**
* Lat/Lon atau UTM
* Contoh: S 07°47.500' E 110°22.250'

**2. Elevation (Ketinggian):**
* Altitude di atas permukaan laut (MSL - Mean Sea Level)
* Contoh: 2.950 m
* Akurasi: ±10-20 m (kurang akurat dari posisi horizontal)

**3. Accuracy (EPE):**
* Estimated Position Error
* Contoh: ±5 m
* Semakin kecil, semakin akurat

**4. Speed (Kecepatan):**
* km/h atau mph
* Hanya akurat saat bergerak > 5 km/h

**5. Heading (Arah Perjalanan):**
* 0-360° (0° = North)
* Track bearing: arah Anda bergerak

**6. Bearing (Sudut Jurusan ke Tujuan):**
* Azimuth dari posisi Anda ke waypoint tujuan
* Contoh: 125° (Southeast)

**7. Distance (Jarak):**
* Jarak garis lurus ke tujuan
* Bukan jarak jalur (trail distance)

**8. ETE (Estimated Time Enroute):**
* Waktu perkiraan tiba di tujuan
* Berdasarkan kecepatan rata-rata

**9. ETA (Estimated Time of Arrival):**
* Jam perkiraan tiba
* Contoh: 14:35 WIB

**10. Time (Waktu):**
* UTC (Universal Time Coordinated) atau Local Time
* GPS sync dengan atomic clock satelit (sangat akurat)

### Tips Penggunaan GPS di Lapangan

#### Teknik Efektif:

**1. Hemat Baterai:**
* Matikan backlight atau set otomatis
* Gunakan mode power save (update posisi tiap 2-5 detik)
* Matikan GPS saat tidak digunakan (misalnya saat istirahat lama)
* Gunakan baterai lithium (lebih tahan di suhu dingin)

**2. Akurasi Optimal:**
* Pegang GPS horizontal di dada
* Jangan tutup antena dengan tangan/tas
* Tunggu hingga lock minimal 5 satelit
* Cek PDOP < 4 (di Satellite Page)
* Hindari penggunaan di ngarai sempit atau hutan lebat

**3. Navigasi Aman:**
* Selalu bawa peta dan kompas sebagai backup
* Jangan 100% bergantung pada GPS
* Mark waypoint basecamp di awal perjalanan
* Aktifkan track log untuk bisa pulang
* Simpan waypoint penting secara berkala

**4. Manajemen Data:**
* Hapus waypoint/track yang tidak perlu (menghemat memori)
* Backup data ke komputer setelah trip
* Export waypoint penting ke file GPX
* Update basemap jika ada versi baru

**5. Weather Protection:**
* GPS rated IPX7 tahan cipratan, tapi tidak untuk direndam
* Gunakan dry bag atau case waterproof saat hujan deras
* Lindungi dari benturan dengan pouch busa

### Troubleshooting GPS

#### Masalah Umum dan Solusi:

**1. GPS Tidak Lock Satelit:**

**Gejala:** "Searching..." terus-menerus

**Solusi:**
* Pindah ke tempat terbuka
* Tunggu 5-15 menit (cold start)
* Reset GPS (power off → remove battery → reinsert)
* Cek obstruksi (gedung, pohon)

**2. Posisi "Melompat" (Jumping):**

**Gejala:** Koordinat berubah drastis meski tidak bergerak

**Solusi:**
* Tunggu hingga EPE < 10m
* Cek PDOP (harus < 6)
* Pindah dari area multipath (gedung, tebing)

**3. Akurasi Buruk (EPE > 20m):**

**Gejala:** Error position tinggi

**Solusi:**
* Lock lebih banyak satelit (minimal 6)
* Aktifkan WAAS/EGNOS (jika tersedia)
* Hindari penggunaan di urban canyon

**4. Altitude Tidak Akurat:**

**Gejala:** Ketinggian berbeda dari peta/altimeter

**Solusi:**
* Kalibrasi dengan ketinggian yang diketahui
* Gunakan altimeter barometrik (jika ada)
* Ingat: GPS altitude akurasi ±15m

**5. Baterai Cepat Habis:**

**Solusi:**
* Matikan backlight
* Gunakan mode power save
* Ganti baterai alkaline dengan lithium
* Kurangi frekuensi update (setiap 5 detik vs setiap 1 detik)

**6. GPS Tidak Respond:**

**Solusi:**
* Soft reset: Power off → on
* Hard reset: Remove battery → tunggu 30 detik → reinsert
* Factory reset (last resort, akan hapus semua data)

### Latihan Praktis GPS

#### Latihan 1: Mark & Go To

**Tujuan:** Familiar dengan fungsi dasar

1. Mark waypoint di titik awal ("Start")
2. Jalan 200m ke arah bebas
3. Mark waypoint kedua ("Point A")
4. Jalan lagi 200m ke arah berbeda
5. Go To "Point A"
6. Ikuti petunjuk GPS hingga kembali ke Point A
7. Go To "Start" dan kembali ke titik awal

#### Latihan 2: Track Back

**Tujuan:** Belajar pulang menggunakan track log

1. Aktifkan track log
2. Berjalan membentuk jalur berliku (500m+)
3. Di titik akhir, pilih Track Back
4. Ikuti track mundur hingga kembali ke awal

#### Latihan 3: Waypoint Averaging

**Tujuan:** Meningkatkan akurasi waypoint

1. Mark waypoint di titik tertentu
2. Tunggu 2 menit (EPE stabil)
3. Mark waypoint yang sama lagi
4. Ulangi 3-5 kali
5. Rata-ratakan koordinat dari semua mark
6. Akurasi meningkat hingga ±2-3m

#### Latihan 4: Navigasi Multi-Waypoint

**Tujuan:** Membuat dan mengikuti route

1. Buat route dengan 4 waypoint (bentuk persegi)
2. Setiap waypoint jarak 100m dari yang lain
3. Navigate route dari awal hingga akhir
4. Verifikasi apakah membentuk persegi

### Etika Penggunaan GPS

**Do:**
* Backup data waypoint/track penting
* Share track jalur pendakian dengan komunitas
* Update software GPS secara berkala
* Bawa peta dan kompas sebagai backup
* Pelajari manual GPS sebelum trip pertama

**Don't:**
* Jangan 100% bergantung pada GPS
* Jangan share koordinat tempat sensitif (habitat langka, situs arkeologi)
* Jangan buang track sampah (GPS littering)
* Jangan assume GPS selalu benar (cek dengan peta)
* Jangan lupa mematikan GPS saat tidak digunakan (hemat baterai)

### GPS dan Navigasi Tradisional: Best Practice

**Pendekatan Terbaik:**

1. **Sebelum Berangkat:**
   * Pelajari peta, tandai waypoint penting
   * Input waypoint ke GPS
   * Print peta backup
   * Cek baterai GPS + bawa cadangan

2. **Selama Perjalanan:**
   * Utamakan membaca medan dan peta
   * GPS sebagai konfirmasi posisi
   * Cek GPS setiap checkpoint
   * Mark waypoint penting

3. **Jika GPS Mati:**
   * Jangan panik
   * Gunakan kompas dan peta
   * Orientasikan dengan landmark
   * Navigate secara tradisional

**Kesimpulan:** GPS adalah alat yang sangat berguna, tetapi keterampilan navigasi tradisional (peta, kompas, medan) tetap fundamental. Kombinasi keduanya adalah best practice untuk navigasi yang aman dan efektif.
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
