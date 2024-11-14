// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJb4_aFVgqSHM4q8L_vWWwhBbkqaAKTkA",
  authDomain: "sustair-2e6ed.firebaseapp.com",
  databaseURL: "https://sustair-2e6ed-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "sustair-2e6ed",
  storageBucket: "sustair-2e6ed.appspot.com",
  messagingSenderId: "551816672554",
  appId: "1:551816672554:web:b72033970de9cea7815a53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export {database}