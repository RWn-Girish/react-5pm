// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD74t68x44URYtbEWld9RUrmB3LY9j3kzU",
  authDomain: "react-5pm-f05f3.firebaseapp.com",
  projectId: "react-5pm-f05f3",
  storageBucket: "react-5pm-f05f3.firebasestorage.app",
  messagingSenderId: "486764440315",
  appId: "1:486764440315:web:783abf97fd4c124d82de5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);