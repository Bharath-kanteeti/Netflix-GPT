// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMMP1rYSZapRXWqMfxnMKlsbmmVyrUFUg",
  authDomain: "netflix-gpt-487da.firebaseapp.com",
  projectId: "netflix-gpt-487da",
  storageBucket: "netflix-gpt-487da.firebasestorage.app",
  messagingSenderId: "52655189629",
  appId: "1:52655189629:web:7507fa13012cbca3f88b14",
  measurementId: "G-CK8WKN4849"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();