// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMSniQaaiiCyVwsVoYmdN0vyGiQz5cW2s",
  authDomain: "netflixgpt-fa076.firebaseapp.com",
  projectId: "netflixgpt-fa076",
  storageBucket: "netflixgpt-fa076.firebasestorage.app",
  messagingSenderId: "388480036959",
  appId: "1:388480036959:web:5df457aa80e0b19160abea",
  measurementId: "G-QVKXWGK3H4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();