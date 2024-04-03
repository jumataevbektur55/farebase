// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALJmdBaOf4Y2_2xEph3oTiCQA-JQBJwSw",
  authDomain: "fir-f9a81.firebaseapp.com",
  projectId: "fir-f9a81",
  storageBucket: "fir-f9a81.appspot.com",
  messagingSenderId: "1012336990008",
  appId: "1:1012336990008:web:091d387c7813a3bd8cd3cd",
  measurementId: "G-KM36CHRR0G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)