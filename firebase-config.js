// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDoc, setDoc, doc, onSnapshot, query, orderBy, where, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth, signInAnonymously, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyATfSwTh7nQ-1HAE1iarmp-K6GoKkboEbc",
  authDomain: "aeternum-840dd.firebaseapp.com",
  projectId: "aeternum-840dd",
  storageBucket: "aeternum-840dd.firebasestorage.app",
  messagingSenderId: "409417083922",
  appId: "1:409417083922:web:fc33d26814a7d7e86bfccb",
  measurementId: "G-TDJQLYF4S4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, collection, addDoc, getDoc, setDoc, doc, onSnapshot, query, orderBy, serverTimestamp, signInAnonymously, onAuthStateChanged, where };