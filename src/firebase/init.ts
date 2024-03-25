// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_njZS7m4EExa4QAlVCHFUcd1eYzptDWs",
  authDomain: "recorder-sulmoon-1e51f.firebaseapp.com",
  projectId: "recorder-sulmoon-1e51f",
  storageBucket: "recorder-sulmoon-1e51f.appspot.com",
  messagingSenderId: "129485698271",
  appId: "1:129485698271:web:c6ecb5696fe7420ba4a56a"
};

// Initialize Firebase
const FBapp = initializeApp(firebaseConfig);

export const DB = getFirestore(FBapp)
