import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCyicSvjuaR6Tp-ycEK-o0veK4i-7I92yk",
  authDomain: "tinker-81c3c.firebaseapp.com",
  projectId: "tinker-81c3c",
  storageBucket: "tinker-81c3c.firebasestorage.app",
  messagingSenderId: "772168945108",
  appId: "1:772168945108:web:e12798cc971a396d731a41",
  measurementId: "G-QRPBBYYDZ9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
