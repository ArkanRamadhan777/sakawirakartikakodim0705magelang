# 🔒 Mengamankan Firebase API Keys

## ⚠️ Masalah yang Ditemukan

GitHub Secret Scanning mendeteksi **Google API Key** yang ter-expose di repository:
- File: `src/config/firebase.js`
- API Key: `AIzaSyBLJl8dVIRdNUuFGIJvuhO2VMK4Sphijng`
- Status: **Public leak** ⚠️

## ✅ Solusi yang Diterapkan

### 1. Environment Variables Setup

**File yang dibuat:**
- `.env` - File lokal berisi API keys (tidak akan di-commit)
- `.env.example` - Template untuk developer lain

**Perubahan pada `firebase.js`:**
```javascript
// SEBELUM (Hardcoded - TIDAK AMAN):
const firebaseConfig = {
  apiKey: "AIzaSyBLJl8dVIRdNUuFGIJvuhO2VMK4Sphijng",
  // ...
};

// SESUDAH (Environment Variables - AMAN):
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  // ...
};
```

### 2. Updated `.gitignore`

Menambahkan:
```
.env
.env.local
.env.*.local
```

Ini memastikan file `.env` tidak akan ter-commit ke GitHub.

## 🚨 LANGKAH PENTING yang HARUS Anda Lakukan:

### Step 1: Regenerate API Key di Firebase Console

> **SANGAT PENTING!** API key lama sudah ter-expose dan harus diganti!

1. Buka [Firebase Console](https://console.firebase.google.com/)
2. Pilih project: **swk-kodim-0705**
3. Klik ⚙️ **Settings** → **Project settings**
4. Di bagian **Your apps**, klik web app Anda
5. Klik **Config** untuk melihat konfigurasi
6. **Regenerate Web API Key** atau buat app config baru

### Step 2: Update File `.env` Lokal

Setelah dapat API key baru, update file `.env`:

```env
VITE_FIREBASE_API_KEY=<API_KEY_BARU_ANDA>
```

### Step 3: Setup Environment Variables di Vercel

1. Buka [Vercel Dashboard](https://vercel.com)
2. Pilih project Anda
3. Klik **Settings** → **Environment Variables**
4. Tambahkan semua variable dari `.env`:

| Name | Value |
|------|-------|
| `VITE_FIREBASE_API_KEY` | `<API_KEY_BARU>` |
| `VITE_FIREBASE_AUTH_DOMAIN` | `swk-kodim-0705.firebaseapp.com` |
| `VITE_FIREBASE_PROJECT_ID` | `swk-kodim-0705` |
| `VITE_FIREBASE_STORAGE_BUCKET` | `swk-kodim-0705.firebasestorage.app` |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | `93437327878` |
| `VITE_FIREBASE_APP_ID` | `1:93437327878:web:0dfe4e2032db5536762187` |
| `VITE_FIREBASE_MEASUREMENT_ID` | `G-PP0T33G9Z3` |

5. Klik **Save**
6. **Redeploy** project Anda

### Step 4: Restrict API Key (Opsional tapi Disarankan)

Di [Google Cloud Console](https://console.cloud.google.com/):

1. Pilih project yang sama
2. **APIs & Services** → **Credentials**
3. Klik API Key yang baru
4. **Application restrictions**:
   - Pilih: **HTTP referrers (websites)**
   - Tambahkan:
     - `localhost:*`
     - `*.vercel.app/*`
     - Domain production Anda
5. **API restrictions**:
   - Pilih: **Restrict key**
   - Centang hanya:
     - Firebase Authentication API
     - Cloud Firestore API
     - Identity Toolkit API
6. **Save**

## 📝 Cara Kerja

### Development (Localhost)
- Vite membaca dari file `.env`
- API keys tidak ter-commit ke GitHub
- Aman untuk development

### Production (Vercel)
- Vercel menggunakan Environment Variables dari dashboard
- Tidak ada API keys di kode
- Aman untuk production

## ✅ Checklist

- [x] Buat file `.env` dan `.env.example`
- [x] Update `firebase.js` menggunakan environment variables
- [x] Update `.gitignore` untuk ignore `.env`
- [ ] **Regenerate API Key di Firebase Console** ⚠️ PENTING!
- [ ] Update `.env` dengan API key baru
- [ ] Setup Environment Variables di Vercel
- [ ] Redeploy Vercel
- [ ] (Opsional) Restrict API Key di Google Cloud Console

## 🔄 Next Steps

1. **Restart development server** agar `.env` terbaca:
   ```bash
   # Stop server (Ctrl+C)
   pnpm dev
   ```

2. **Test** apakah aplikasi masih berfungsi di localhost

3. **Commit perubahan** (tanpa API keys):
   ```bash
   git add .
   git commit -m "security: Move Firebase config to environment variables"
   git push
   ```

4. **Setup Vercel environment variables** dan redeploy

## ⚠️ Peringatan

- **JANGAN** commit file `.env` ke GitHub
- **JANGAN** share API keys di chat/email
- **SELALU** gunakan environment variables untuk credentials
- **REGENERATE** API key yang sudah ter-expose
