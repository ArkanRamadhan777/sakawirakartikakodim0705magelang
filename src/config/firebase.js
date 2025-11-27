// Firebase Configuration
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLJl8dVIRdNUuFGIJvuhO2VMK4Sphijng",
  authDomain: "swk-kodim-0705.firebaseapp.com",
  projectId: "swk-kodim-0705",
  storageBucket: "swk-kodim-0705.firebasestorage.app",
  messagingSenderId: "93437327878",
  appId: "1:93437327878:web:0dfe4e2032db5536762187",
  measurementId: "G-PP0T33G9Z3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
