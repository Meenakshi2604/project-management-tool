// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAwZe9ts7G8UOaQrzyqptXtQ-hGsqM5WbA",
  authDomain: "project-management-6065b.firebaseapp.com",
  projectId: "project-management-6065b",
  storageBucket: "project-management-6065b.appspot.com",
  messagingSenderId: "297898528749",
  appId: "1:297898528749:web:29cf38c36fc448ac1ee1e4",
  measurementId: "G-KPXG0DG6DK"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true});
const analytics = getAnalytics(app);

export default firebase;