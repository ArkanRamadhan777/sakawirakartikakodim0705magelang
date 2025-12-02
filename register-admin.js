import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
dotenv.config();

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const email = 'admin@swk.com';
const password = 'AdminSWK2024!';

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    console.log('✅ Admin berhasil dibuat!');
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('UID:', userCredential.user.uid);
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ Error:', error.code);
    console.error('Message:', error.message);
    
    if (error.code === 'auth/email-already-in-use') {
      console.log('\n✅ Email sudah terdaftar, gunakan:');
      console.log('Email:', email);
      console.log('Password:', password);
    }
    process.exit(1);
  });
