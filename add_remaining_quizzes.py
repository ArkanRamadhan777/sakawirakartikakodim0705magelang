import re

# Additional questions for remaining quizzes
additional_questions = {
    'Quiz Survival Hutan Gunung': [
        ('Prioritas utama survival di hutan adalah...', ['Mencari makanan', 'Mencari air dan shelter', 'Bermain', 'Tidur'], 1),
        ('Shelter darurat di hutan bisa dibuat dari...', ['Ranting, daun, terpal, poncho', 'Batu saja', 'Tanah', 'Air'], 0),
        ('Posisi shelter sebaiknya...', ['Di tempat tinggi, kering, aman dari bahaya', 'Di lembah', 'Di bawah pohon mati', 'Di tepi jurang'], 0),
        ('Api unggun berguna untuk...', ['Menghangatkan, memasak, sinyal, mengusir binatang', 'Membakar hutan', 'Bermain', 'Tidak ada gunanya'], 0),
        ('Cara membuat api tanpa korek: menggunakan...', ['Gesekan kayu, lensa, batu api', 'Air', 'Tanah', 'Udara'], 0),
        ('Tanda bahaya universal di survival adalah...', ['SOS atau tiga tanda berurutan (asap, suara, cahaya)', 'Tertawa', 'Tidur', 'Makan'], 0),
        ('Air sungai di hutan harus...', ['Disaring dan direbus sebelum diminum', 'Langsung diminum', 'Dibuang', 'Untuk mandi saja'], 0),
        ('Jika tersesat di hutan, sebaiknya...', ['Tetap tenang, buat shelter, tunggu bantuan', 'Panik dan lari', 'Teriak terus', 'Tidur saja'], 0),
        ('Pisau survival berguna untuk...', ['Memotong, membuat shelter, persiapan makanan', 'Berkelahi', 'Melempar', 'Mainan'], 0),
        ('Navigasi di hutan tanpa kompas bisa menggunakan...', ['Posisi matahari, bintang, lumut di pohon', 'Tebakan', 'Mata ditutup', 'Tidak bisa'], 0),
    ],
    'Quiz Survival Rawa Laut': [
        ('Bahaya utama survival di rawa adalah...', ['Lumpur dalam, buaya, penyakit, sulit bergerak', 'Terlalu kering', 'Terlalu dingin', 'Tidak ada bahaya'], 0),
        ('Cara berjalan di rawa agar tidak tenggelam...', ['Menggunakan papan lebar atau merangkak', 'Berlari', 'Melompat', 'Berdiri tegak'], 0),
        ('Air rawa tidak boleh langsung diminum karena...', ['Mengandung bakteri dan parasit tinggi', 'Terlalu jernih', 'Terlalu dingin', 'Terlalu manis'], 0),
        ('Survival di laut: cara mendapatkan air tawar adalah...', ['Menangkap air hujan, destilasi solar', 'Minum air laut', 'Tidak minum', 'Minum air seni'], 0),
        ('Sinyal darurat di laut menggunakan...', ['Cermin, asap, pakaian warna cerah, peluit', 'Diam saja', 'Tidur', 'Berenang'], 0),
        ('Rakit darurat di laut bisa dibuat dari...', ['Pelampung, bambu, drum kosong, kayu', 'Batu', 'Besi', 'Tidak bisa'], 0),
        ('Bahaya hipotermia di laut terjadi karena...', ['Air dingin menurunkan suhu tubuh', 'Terlalu panas', 'Lapar', 'Haus'], 0),
        ('Jika ada hiu, sebaiknya...', ['Tetap tenang, jangan panik, hindari gerakan cepat', 'Berenang cepat', 'Teriak', 'Pukul hiu'], 0),
        ('Ikan yang aman dimakan di laut biasanya...', ['Berenang berkelompok, berwarna biasa', 'Warna cerah mencolok', 'Berduri tajam', 'Berbentuk aneh'], 0),
        ('Dehidrasi di laut sangat berbahaya karena...', ['Air laut asin tidak bisa diminum', 'Air terlalu banyak', 'Udara lembab', 'Tidak ada alasan'], 0),
    ],
    'Quiz Survival Kit': [
        ('Survival kit harus berisi minimal...', ['Pisau, korek api, air, P3K, tali, peluit', 'Mainan', 'Uang', 'Makanan enak'], 0),
        ('Korek api dalam survival kit sebaiknya...', ['Waterproof atau disimpan wadah kedap air', 'Basah', 'Dibiarkan', 'Tidak perlu'], 0),
        ('P3K dalam survival kit berisi...', ['Perban, antiseptik, obat standar, plester', 'Permen', 'Mainan', 'Buku'], 0),
        ('Peluit dalam survival kit berguna untuk...', ['Memberi sinyal darurat dengan hemat energi', 'Bermain', 'Musik', 'Tidak berguna'], 0),
        ('Pisau survival yang baik memiliki...', ['Blade kuat, full tang, pegangan nyaman', 'Warna cerah saja', 'Kecil sekali', 'Tumpul'], 0),
        ('Tali paracord 550 berguna untuk...', ['Tali serba guna, bisa diurai jadi benang kecil', 'Diikat saja', 'Tidak berguna', 'Dekorasi'], 0),
        ('Cermin sinyal (signal mirror) digunakan untuk...', ['Memantulkan cahaya matahari sebagai sinyal', 'Bercermin', 'Mainan', 'Tidak ada fungsi'], 0),
        ('Selimut thermal (space blanket) berguna untuk...', ['Menahan panas tubuh dan mencegah hipotermia', 'Dekorasi', 'Alas duduk', 'Tidak penting'], 0),
        ('Tablet purifikasi air berfungsi untuk...', ['Membunuh bakteri dan virus dalam air', 'Memberi rasa', 'Pewarna', 'Tidak ada fungsi'], 0),
        ('Survival kit sebaiknya disimpan di...', ['Tempat mudah dijangkau dan waterproof', 'Gudang jauh', 'Di rumah saja', 'Tidak perlu disimpan'], 0),
    ],
    'Quiz Mengesan Jejak (Sanjak)': [
        ('Sanjak (tracking) adalah kemampuan...', ['Membaca dan mengikuti jejak', 'Menyanyi', 'Menari', 'Memasak'], 0),
        ('Jejak kaki manusia di tanah lunak menunjukkan...', ['Arah perjalanan dan waktu relatif', 'Nama orang', 'Umur pasti', 'Hobi'], 0),
        ('Jejak baru biasanya memiliki ciri...', ['Tepi tajam, warna segar, belum tererosi', 'Kabur', 'Hilang', 'Tertutup rumput'], 0),
        ('Jejak lama memiliki ciri...', ['Tepi terkikis, warna pudar, mungkin berisi air/daun', 'Tajam', 'Basah', 'Baru'], 0),
        ('Sign cutting adalah teknik...', ['Mencari jejak di area luas dengan pola zigzag', 'Memotong tanda', 'Menggambar', 'Menulis'], 0),
        ('Jejak di pasir berbeda dengan tanah karena...', ['Lebih jelas tapi cepat hilang tertiup angin', 'Tidak ada bedanya', 'Lebih awet', 'Tidak terlihat'], 0),
        ('Tracking stick digunakan untuk...', ['Mengukur panjang langkah dan jarak jejak', 'Memukul', 'Menggali', 'Tidak ada fungsi'], 0),
        ('Jejak ranting patah menunjukkan...', ['Arah perjalanan dan tinggi pelaku', 'Cuaca', 'Waktu pasti', 'Nama pelaku'], 0),
        ('Kotoran binatang di tracking memberikan info...', ['Jenis binatang, waktu, dan makanannya', 'Warna favorit', 'Nama binatang', 'Umur pasti'], 0),
        ('Aging tracks adalah teknik...', ['Memperkirakan umur jejak berdasarkan kondisi', 'Menua', 'Melukis', 'Bermain'], 0),
    ],
    'Quiz Manajemen Penanggulangan Bencana': [
        ('Fase pra-bencana meliputi...', ['Mitigasi, kesiapsiagaan, peringatan dini', 'Evakuasi', 'Rekonstruksi', 'Pemulihan'], 0),
        ('Mitigasi bencana adalah...', ['Upaya mengurangi risiko bencana sebelum terjadi', 'Saat bencana', 'Setelah bencana', 'Tidak ada hubungan'], 0),
        ('Early warning system berfungsi untuk...', ['Memberi peringatan dini sebelum bencana', 'Hiburan', 'Komunikasi biasa', 'Tidak penting'], 0),
        ('Evacuation route harus...', ['Jelas, aman, dan diketahui semua warga', 'Rahasia', 'Rumit', 'Tidak perlu'], 0),
        ('Assembly point adalah...', ['Titik kumpul aman saat evakuasi', 'Tempat bermain', 'Kantor', 'Rumah'], 0),
        ('Saat gempa bumi, jika di dalam ruangan sebaiknya...', ['Drop, Cover, Hold On di bawah meja kuat', 'Lari keluar', 'Berdiri di jendela', 'Naik tangga'], 0),
        ('Saat tsunami, segera...', ['Lari ke tempat tinggi atau ke dalam bangunan tinggi', 'Ke pantai', 'Berenang', 'Berdiam diri'], 0),
        ('Golden hour dalam SAR adalah...', ['Waktu kritis untuk menyelamatkan korban (1-6 jam pertama)', '24 jam', '1 minggu', 'Tidak ada'], 0),
        ('Triage dalam bencana adalah...', ['Pemilahan korban berdasarkan prioritas penanganan', 'Makan', 'Tidur', 'Bermain'], 0),
        ('Fase recovery pasca bencana meliputi...', ['Rehabilitasi dan rekonstruksi', 'Persiapan', 'Peringatan', 'Evakuasi'], 0),
    ],
    'Quiz PPGD': [
        ('Langkah pertama PPGD: Primary Survey dimulai dengan...', ['Cek Danger - Response - Send for help - Airway', 'Nafas buatan', 'Pijat jantung', 'Menelepon keluarga'], 0),
        ('CPR (Cardiopulmonary Resuscitation) dilakukan saat...', ['Korban tidak sadar dan tidak bernapas normal', 'Korban sadar', 'Luka ringan', 'Patah tulang'], 0),
        ('Rasio kompresi dan nafas pada CPR dewasa adalah...', ['30 kompresi : 2 nafas', '15:2', '5:1', '2:30'], 0),
        ('Kedalaman kompresi dada pada CPR dewasa minimal...', ['5-6 cm', '1-2 cm', '10 cm', 'Tidak perlu dalam'], 0),
        ('Recovery position digunakan untuk...', ['Korban tidak sadar tapi bernapas normal', 'Patah tulang', 'Luka bakar', 'Tersedak'], 0),
        ('Heimlich maneuver digunakan untuk...', ['Mengatasi tersedak (obstruksi jalan napas)', 'Patah tulang', 'Luka bakar', 'Pingsan'], 0),
        ('Perdarahan hebat diatasi dengan...', ['Tekanan langsung + elevasi + pressure point', 'Dibiarkan', 'Dikompres dingin', 'Ditutup plastik'], 0),
        ('Luka bakar derajat 2 memiliki ciri...', ['Lepuh (blister), merah, nyeri', 'Hanya merah', 'Hitam hangus', 'Tidak nyeri'], 0),
        ('Penanganan patah tulang: immobilisasi dilakukan dengan...', ['Bidai di atas dan bawah patahan', 'Digerakkan', 'Dipijat', 'Dibiarkan'], 0),
        ('Shock (syok) ditandai dengan...', ['Pucat, keringat dingin, nadi lemah cepat, kesadaran menurun', 'Wajah merah', 'Demam tinggi', 'Batuk'], 0),
    ],
    'Quiz Komunikasi Radio': [
        ('HT (Handy Talky) adalah...', ['Radio komunikasi genggam portabel', 'Telepon', 'Komputer', 'Kamera'], 0),
        ('Frequency radio adalah...', ['Gelombang yang digunakan untuk transmisi', 'Suara', 'Cahaya', 'Panas'], 0),
        ('VOX (Voice Operated Exchange) adalah fitur...', ['Transmisi otomatis saat berbicara tanpa tekan PTT', 'Volume', 'Frekuensi', 'Tidak ada'], 0),
        ('PTT (Push To Talk) adalah tombol...', ['Untuk transmit/berbicara', 'Volume', 'Power', 'Menu'], 0),
        ('Kode "Roger" dalam komunikasi radio berarti...', ['Pesan diterima dan dimengerti', 'Tidak jelas', 'Ulangi', 'Selesai'], 0),
        ('Kode "Over" berarti...', ['Saya selesai bicara, silakan balas', 'Selesai total', 'Ulangi', 'Tidak jelas'], 0),
        ('Kode "Out" berarti...', ['Percakapan selesai, tidak perlu balas', 'Lanjutkan', 'Ulangi', 'Mulai'], 0),
        ('Phonetic alphabet untuk huruf "A" adalah...', ['Alpha', 'Adam', 'Apple', 'Ant'], 0),
        ('Squelch pada radio berfungsi untuk...', ['Menghilangkan noise saat tidak ada sinyal', 'Volume', 'Frekuensi', 'Power'], 0),
        ('Repeater dalam komunikasi radio adalah...', ['Perangkat yang memperluas jangkauan sinyal', 'Pengulang suara', 'Mikrofon', 'Speaker'], 0),
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

print("Done! All remaining questions added successfully.")
