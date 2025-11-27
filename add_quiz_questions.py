import re

# Additional questions for each quiz
additional_questions = {
    'Quiz Pembuatan Jembatan Improvisasi': [
        ('Jembatan Tepi Sederhana dibuat dengan cara...', ['Meletakkan satu batang kayu melintang', 'Mengikat banyak tali', 'Membuat menara', 'Menggali tanah'], 0),
        ('Jembatan Kuda-kuda menggunakan konstruksi berbentuk...', ['Segitiga untuk kekuatan', 'Lingkaran', 'Persegi panjang', 'Oval'], 0),
        ('Jembatan Bambu Satu terdiri dari berapa batang bambu utama?', ['1 batang sebagai pijakan', '2 batang', '5 batang', '10 batang'], 0),
        ('Jembatan Tarik menggunakan sistem...', ['Tali yang ditarik untuk menyeberang', 'Roda', 'Motor', 'Baling-baling'], 0),
        ('Kekuatan jembatan darurat tergantung pada...', ['Warna tali', 'Cuaca', 'Kualitas ikatan dan bahan', 'Waktu pembuatan'], 2),
        ('Sebelum digunakan, jembatan darurat harus...', ['Dicat', 'Diuji kekuatannya dengan beban', 'Diberi nama', 'Difoto'], 1),
        ('Jembatan improvisasi sebaiknya dibuat di...', ['Tengah sungai deras', 'Bagian sungai yang sempit dan stabil', 'Tempat terdalam', 'Asal saja'], 1),
        ('Tiang penyangga jembatan harus ditanam...', ['Di pasir', 'Kokoh dengan kedalaman cukup', 'Di lumpur', 'Di atas rumput'], 1),
        ('Jembatan kaki delapan memiliki berapa tiang penyangga utama?', ['4 tiang', '6 tiang', '8 tiang', '10 tiang'], 2),
        ('Safety factor pada jembatan darurat minimal harus...', ['1:1', '2:1 atau lebih untuk keamanan', '0.5:1', 'Tidak perlu'], 1),
    ],
    'Quiz Pembuatan Perkemahan': [
        ('Gapura perkemahan berfungsi sebagai...', ['Pintu masuk yang menandai identitas regu', 'Tempat memasak', 'Gudang', 'WC'], 0),
        ('Barak adalah bangunan darurat untuk...', ['Tempat tinggal sementara dalam jumlah banyak', 'Menyimpan air', 'Tempat api unggun', 'Parkir'], 0),
        ('Barak Tionghoa memiliki bentuk atap...', ['Bulat', 'Pelana memanjang', 'Datar', 'Segitiga terbalik'], 1),
        ('Menara pandang digunakan untuk...', ['Mengawasi area perkemahan dari ketinggian', 'Menyimpan makanan', 'Mengeringkan pakaian', 'Bermain'], 0),
        ('Tiang Ander pada barak berfungsi untuk...', ['Memberikan ruang kepala lebih tinggi di tengah', 'Menahan angin', 'Menggantung lampu', 'Dekorasi'], 0),
        ('Drainase/parit keliling barak berfungsi untuk...', ['Menampung air hujan agar tidak masuk barak', 'Memancing', 'Mandi', 'Irigasi'], 0),
        ('Jarak ideal antara barak dengan dapur adalah...', ['1 meter', '5-10 meter untuk keamanan dari api', '100 meter', 'Tidak ada aturan'], 1),
        ('Lantai barak sebaiknya dibuat lebih tinggi dari tanah untuk...', ['Mencegah banjir dan kelembaban', 'Pemandangan', 'Gaya', 'Hemat material'], 0),
        ('Gapura perkemahan dibuat dari material...', ['Kayu/bambu dengan dekorasi tali temali', 'Besi', 'Beton', 'Plastik'], 0),
        ('Menara Kaki Tiga (Tripod) menggunakan berapa tiang utama?', ['2 tiang', '3 tiang sebagai kaki', '5 tiang', '10 tiang'], 1),
    ],
    'Quiz Bekal Air dan Listrik': [
        ('Sumber air terbaik untuk perkemahan adalah...', ['Air sungai keruh', 'Mata air jernih', 'Air got', 'Air laut'], 1),
        ('Metode filtrasi air menggunakan lapisan...', ['Pasir, arang, dan kerikil', 'Kapas', 'Kertas', 'Daun'], 0),
        ('Air harus direbus minimal berapa menit untuk disinfeksi?', ['1 menit', '3 menit', '5-10 menit', '30 menit'], 2),
        ('Tablet penjernih air mengandung...', ['Gula', 'Klorin atau iodine', 'Garam', 'Pewarna'], 1),
        ('Genset mengubah energi...', ['Listrik menjadi mekanik', 'Mekanik menjadi listrik', 'Cahaya menjadi listrik', 'Suara menjadi listrik'], 1),
        ('Instalasi seri menyebabkan...', ['Jika satu lampu mati, semua mati', 'Semua tetap nyala', 'Lampu lebih terang', 'Hemat listrik'], 0),
        ('Instalasi paralel menyebabkan...', ['Jika satu mati, yang lain tetap nyala', 'Semua mati', 'Konslet', 'Hemat kabel'], 0),
        ('Multimeter digunakan untuk mengukur...', ['Berat', 'Panjang', 'Tegangan, arus, dan hambatan listrik', 'Suhu'], 2),
        ('Test pen digunakan untuk...', ['Mengecek ada tidaknya tegangan listrik', 'Menulis', 'Menggambar', 'Mengukur panjang'], 0),
        ('Hukum Ohm menyatakan...', ['V = I × R', 'V = I + R', 'V = I - R', 'V = I / R'], 0),
    ],
    'Quiz Panjat Tebing': [
        ('Teknik dasar panjat tebing menggunakan prinsip...', ['Tiga titik tumpu selalu kontak dengan dinding', 'Satu tangan saja', 'Melompat', 'Bergelantungan'], 0),
        ('Harness digunakan untuk...', ['Mengikat tubuh pemanjat dengan tali pengaman', 'Mengikat kaki', 'Dekorasi', 'Menyimpan alat'], 0),
        ('Carabiner adalah alat berbentuk...', ['Cincin logam dengan kunci pengaman', 'Tali', 'Paku', 'Helm'], 0),
        ('Belay adalah teknik...', ['Mengamankan pemanjat dari bawah dengan mengontrol tali', 'Memanjat', 'Melompat', 'Berenang'], 0),
        ('Jenis pegangan tangan dalam panjat tebing: Crimp adalah...', ['Genggaman dengan ujung jari', 'Genggaman penuh', 'Tidak memegang', 'Menggunakan kaki'], 0),
        ('Jenis pegangan: Pinch adalah...', ['Menjumput dengan ibu jari dan jari lain', 'Menarik', 'Mendorong', 'Melompat'], 0),
        ('Tali dinamis digunakan untuk...', ['Panjat tebing karena elastis menyerap kejatuhan', 'Mengikat kayu', 'Membuat jembatan', 'Tali jemuran'], 0),
        ('Figure 8 adalah jenis...', ['Simpul untuk mengikat tali ke harness', 'Alat panjat', 'Helm', 'Sepatu'], 0),
        ('Ascending adalah teknik...', ['Naik menggunakan ascender pada tali', 'Turun', 'Berayun', 'Melompat'], 0),
        ('Crux dalam panjat tebing adalah...', ['Bagian tersulit dari jalur panjat', 'Bagian termudah', 'Titik awal', 'Titik akhir'], 0),
    ],
    'Quiz Turun Tebing': [
        ('Rappelling adalah teknik...', ['Turun tebing dengan bantuan tali', 'Naik tebing', 'Melompat', 'Berenang'], 0),
        ('Figure 8 descender digunakan untuk...', ['Mengontrol kecepatan turun dengan gesekan', 'Naik', 'Melompat', 'Istirahat'], 0),
        ('Posisi tangan saat rappelling: tangan kiri...', ['Memegang tali di depan descender untuk keseimbangan', 'Di belakang', 'Tidak memegang', 'Mengayun'], 0),
        ('Posisi tangan kanan saat rappelling...', ['Memegang tali di belakang descender untuk kontrol kecepatan', 'Di depan', 'Di atas kepala', 'Tidak memegang'], 0),
        ('Posisi kaki saat rappelling harus...', ['Selebar bahu, menempel dinding, tegak lurus', 'Rapat', 'Silang', 'Menggantung'], 0),
        ('Posisi tubuh saat rappelling adalah...', ['Tegak dengan punggung lurus, sedikit condong ke belakang', 'Membungkuk', 'Terlentang', 'Tengkurap'], 0),
        ('Anchor point untuk rappelling harus...', ['Kokoh dan aman menahan beban', 'Kecil', 'Goyang', 'Rapuh'], 0),
        ('Back-up rappelling dilakukan untuk...', ['Keamanan ekstra dengan tali cadangan', 'Percepatan', 'Dekorasi', 'Tidak perlu'], 0),
        ('Saat mendekati tepi atas saat rappelling, pemanjat harus...', ['Pelan-pelan mundur dengan posisi rendah', 'Melompat', 'Berlari', 'Terburu-buru'], 0),
        ('Stopper knot pada rappelling berfungsi untuk...', ['Mencegah tali keluar dari descender jika terlalu pendek', 'Dekorasi', 'Tidak ada fungsi', 'Mempercepat'], 0),
    ],
    'Quiz Pelintasan Kering': [
        ('Pelintasan kering adalah teknik melintas...', ['Rintangan seperti jurang atau parit tanpa air', 'Sungai', 'Laut', 'Danau'], 0),
        ('Jembatan tali 3 tali terdiri dari...', ['1 tali injak + 2 tali pegangan', '3 tali injak', '3 tali pegangan', '1 tali saja'], 0),
        ('Flying fox adalah teknik pelintasan dengan cara...', ['Meluncur pada tali miring dengan katrol', 'Berjalan', 'Melompat', 'Berenang'], 0),
        ('Tyrolean traverse menggunakan sistem...', ['Tali horizontal dengan karabiner dan harness', 'Tangga', 'Jembatan kayu', 'Perahu'], 0),
        ('Katrol pada flying fox berfungsi untuk...', ['Mengurangi gesekan sehingga bisa meluncur', 'Menahan', 'Memperlambat', 'Dekorasi'], 0),
        ('Tension pada tali pelintasan harus...', ['Cukup kencang untuk menahan beban', 'Kendor', 'Putus', 'Tidak perlu'], 0),
        ('Helmet pada pelintasan kering digunakan untuk...', ['Melindungi kepala dari benturan', 'Gaya', 'Menahan tali', 'Tidak perlu'], 0),
        ('Proses belay pada pelintasan adalah...', ['Mengamankan peserta dari bawah/samping', 'Melompat', 'Berenang', 'Tidak perlu'], 0),
        ('Commando crawl adalah teknik...', ['Merangkak di bawah jaring/rintangan rendah', 'Berdiri', 'Melompat', 'Berlari'], 0),
        ('Safety briefing sebelum pelintasan penting untuk...', ['Menjelaskan prosedur dan bahaya', 'Mengobrol', 'Makan', 'Tidak perlu'], 0),
    ],
    'Quiz Pelintasan Basah': [
        ('Pelintasan basah adalah teknik melintas...', ['Sungai atau perairan', 'Gunung', 'Hutan kering', 'Padang rumput'], 0),
        ('Saat menyeberang sungai, sebaiknya menyeberang di...', ['Bagian lebar dan dangkal dengan arus tenang', 'Bagian sempit dan dalam', 'Air terjun', 'Pusaran air'], 0),
        ('Teknik menyeberang sungai dengan posisi...', ['Menyamping menghadap arus, kaki melangkah menggeser', 'Membelakangi arus', 'Melompat', 'Berenang melawan arus'], 0),
        ('Tali pengaman saat menyeberang sungai diikat di...', ['Harness atau pinggang dengan bowline', 'Leher', 'Kaki', 'Tidak perlu'], 0),
        ('Tongkat penyeimbang saat menyeberang berfungsi untuk...', ['Menambah titik tumpu dan menjaga keseimbangan', 'Memukul ikan', 'Dekorasi', 'Tidak ada fungsi'], 0),
        ('Pendulum swing adalah teknik...', ['Berayun dengan tali dari satu sisi ke sisi lain', 'Melompat', 'Berenang', 'Berjalan'], 0),
        ('Zip line basah berbeda dengan flying fox karena...', ['Berakhir di air atau melintas di atas air', 'Lebih pendek', 'Tidak ada bedanya', 'Lebih tinggi'], 0),
        ('Sepatu yang cocok untuk pelintasan basah adalah...', ['Sepatu yang tidak licin dan cepat kering', 'Sepatu kulit', 'Sandal jepit', 'Telanjang kaki'], 0),
        ('Arus sungai yang berbahaya untuk diseberangi adalah...', ['Arus deras > 1 m/detik dengan pusaran', 'Arus tenang', 'Air dangkal', 'Air jernih'], 0),
        ('Jika terjatuh di sungai deras, posisi badan yang benar adalah...', ['Telentang, kaki ke arah hilir, kepala di hulu', 'Tengkurap', 'Berdiri', 'Menyelam'], 0),
    ],
    'Quiz Jenis-Jenis Tumbuhan': [
        ('Tumbuhan yang dapat dimakan di hutan adalah...', ['Pakis, rebung bambu, umbi-umbian tertentu', 'Semua jamur', 'Semua daun hijau', 'Semua bunga'], 0),
        ('Ciri tumbuhan beracun umumnya adalah...', ['Getah putih susu, warna mencolok, bau menyengat', 'Hijau', 'Berdaun lebar', 'Berbunga'], 0),
        ('Getah pohon yang bisa digunakan sebagai lem alami adalah...', ['Getah damar, pinus', 'Getah karet', 'Getah singkong', 'Semua getah'], 0),
        ('Tanaman bambu berguna untuk...', ['Konstruksi bangunan, wadah air, alat makan', 'Obat', 'Pewarna', 'Tidak berguna'], 0),
        ('Tanaman rotan digunakan untuk...', ['Tali-temali pengikat yang kuat', 'Makanan', 'Obat demam', 'Cat'], 0),
        ('Daun pisang di survival berguna untuk...', ['Pembungkus makanan, atap darurat, alas tidur', 'Obat luka', 'Pewarna', 'Sabun'], 0),
        ('Tumbuhan paku (pakis) muda bisa...', ['Dimakan setelah direbus', 'Beracun', 'Untuk pewarna', 'Untuk tali'], 0),
        ('Umbi-umbian liar harus...', ['Diuji dulu atau direbus sebelum dimakan', 'Langsung dimakan mentah', 'Dibuang', 'Dijadikan obat'], 0),
        ('Tanaman obat di hutan: Sambiloto berkhasiat untuk...', ['Menurunkan demam dan infeksi', 'Patah tulang', 'Luka bakar', 'Keracunan'], 0),
        ('Cara menguji tumbuhan asing jika boleh dimakan: oleskan getah di...', ['Kulit tangan, tunggu reaksi alergi', 'Langsung makan', 'Mata', 'Mulut langsung'], 0),
    ],
    'Quiz Jenis-Jenis Binatang': [
        ('Tanda jejak harimau berbeda dengan kucing karena...', ['Ukuran lebih besar, cakar tidak terlihat (ditarik)', 'Lebih kecil', 'Berkuku', 'Tidak ada bedanya'], 0),
        ('Jejak babi hutan memiliki ciri...', ['Dua kuku utama di depan, dua kuku samping lebih kecil', 'Telapak bundar', 'Tidak berkuku', 'Bercakar panjang'], 0),
        ('Ular berbisa umumnya memiliki ciri...', ['Kepala segitiga, pupil vertikal, taring panjang', 'Kepala bulat', 'Tidak ada taring', 'Pupil bulat'], 0),
        ('Jika bertemu ular, sebaiknya...', ['Mundur perlahan, jangan provokasi', 'Lari cepat', 'Lempar batu', 'Pegang ekornya'], 0),
        ('Jika bertemu beruang, jangan...', ['Berlari atau berteriak, tetap tenang dan mundur perlahan', 'Berdiri diam', 'Berbicara pelan', 'Mundur'], 0),
        ('Lintah dapat dilepaskan dengan...', ['Garam, tembakau, atau api (jangan dicabut paksa)', 'Dicabut langsung', 'Dibiarkan', 'Air dingin'], 0),
        ('Kalajengking sering bersembunyi di...', ['Bawah batu, kayu, dan sepatu', 'Pohon tinggi', 'Air', 'Terbuka'], 0),
        ('Jika digigit ular berbisa, pertolongan pertama adalah...', ['Tenangkan korban, immobilisasi, segera ke RS (JANGAN disedot)', 'Disedot racunnya', 'Lari', 'Dibiarkan'], 0),
        ('Burung Rangkong memiliki ciri...', ['Paruh besar dengan tanduk di atas', 'Paruh kecil', 'Tidak berparuh', 'Berparuh runcing'], 0),
        ('Jejak kaki rusa memiliki bentuk...', ['Dua kuku runcing seperti hati', 'Bulat', 'Bercakar', 'Pipih'], 0),
    ],
}

# Read the file
with open('e:/swk - Copy/src/data/quizzes.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Function to add questions
def add_questions_to_quiz(content, quiz_title, questions):
    # Find the quiz and its last question
    pattern = rf"(title: '{re.escape(quiz_title)}'[\s\S]*?id: 10,[\s\S]*?correctAnswer: \d+\s*\}})\s*\]\s*\}}"
    
    match = re.search(pattern, content)
    if not match:
        print(f"Could not find quiz: {quiz_title}")
        return content
    
    # Build new questions
    new_questions = []
    for i, (question, options, correct) in enumerate(questions, start=11):
        q = f'''      {{
        id: {i},
        question: "{question}",
        options: [
          "{options[0]}",
          "{options[1]}",
          "{options[2]}",
          "{options[3]}"
        ],
        correctAnswer: {correct}
      }}'''
        new_questions.append(q)
    
    # Replace
    new_questions_str = ',\n' + ',\n'.join(new_questions)
    replacement = match.group(1) + ',' + new_questions_str + '\n    ]\n  }'
    
    content = content[:match.start()] + replacement + content[match.end():]
    return content

# Add questions for each quiz
for quiz_title, questions in additional_questions.items():
    print(f"Adding questions to: {quiz_title}")
    content = add_questions_to_quiz(content, quiz_title, questions)

# Write back
with open('e:/swk - Copy/src/data/quizzes.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Done! Questions added successfully.")
