import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLWLZmMCUdwmoN9lUrKDqfjgGfUf4MmfY",
  authDomain: "agency-contact-form-b28e8.firebaseapp.com",
  projectId: "agency-contact-form-b28e8",
  storageBucket: "agency-contact-form-b28e8.firebasestorage.app",
  messagingSenderId: "425468796040",
  appId: "1:425468796040:web:8e10eedd5303ae51de933d",
  measurementId: "G-W8KXSZ4CXG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
const db = getFirestore(app);

export { app, analytics, db };
