// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "dragon-marketplace.firebaseapp.com",
  projectId: "dragon-marketplace",
  storageBucket: "dragon-marketplace.firebasestorage.app",
  messagingSenderId: "651825538855",
  appId: "1:651825538855:web:d6925cb7a6cfab69d8ab02",
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
