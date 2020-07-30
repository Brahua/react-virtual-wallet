import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA_HVVeilMyDfsIJwyAJjzIVTdLkp1cn4k",
  authDomain: "virtualwallet-d5164.firebaseapp.com",
  databaseURL: "https://virtualwallet-d5164.firebaseio.com",
  projectId: "virtualwallet-d5164",
  storageBucket: "virtualwallet-d5164.appspot.com",
  messagingSenderId: "547043330870",
  appId: "1:547043330870:web:63815a26ba2b13b0570197",
  measurementId: "G-TTYGKVTEJV",
};

firebase.initializeApp(firebaseConfig);
// firebase.analytics();
const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
