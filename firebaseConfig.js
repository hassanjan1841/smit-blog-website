// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  limit,
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCO8sNGfX8DzUdkg6gFGSr_jemgPjs2_FE",
  authDomain: "blog-website-642d2.firebaseapp.com",
  projectId: "blog-website-642d2",
  storageBucket: "blog-website-642d2.appspot.com",
  messagingSenderId: "425746900375",
  appId: "1:425746900375:web:e2523c4265e0ee3cbad0d2",
  measurementId: "G-GG7N1MQC81",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs, query, limit };
