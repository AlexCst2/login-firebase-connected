// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js" 
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWktJUd2oecTGFTmu5OVnPB5oWhd7eTxk",
  authDomain: "fir-app-58b52.firebaseapp.com",
  projectId: "fir-app-58b52",
  storageBucket: "fir-app-58b52.appspot.com",
  messagingSenderId: "92415305694",
  appId: "1:92415305694:web:879cd47277730f3639df4f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

