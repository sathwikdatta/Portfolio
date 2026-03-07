
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD_RmbozwMrQCjHDC6V_2A4hL5IlPFodCk",
  authDomain: "portfolio-ae62d.firebaseapp.com",
  projectId: "portfolio-ae62d",
  storageBucket: "portfolio-ae62d.firebasestorage.app",
  messagingSenderId: "676890360783",
  appId: "1:676890360783:web:e82aecc8d0f5c99066b0ba",
  measurementId: "G-8T2NG0X8EN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);