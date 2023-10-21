// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAts15OYytcx8G_uPqNHWgH_1S0TAwhUK8",
  authDomain: "chatapp-b0d2c.firebaseapp.com",
  projectId: "chatapp-b0d2c",
  storageBucket: "chatapp-b0d2c.appspot.com",
  messagingSenderId: "679364311778",
  appId: "1:679364311778:web:c724cc29dc34484b047cbb",
  measurementId: "G-3E4XB8EZCV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
