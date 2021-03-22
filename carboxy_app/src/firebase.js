import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzmt7zrPjp4qrracjtl75jlaBuxQXQUrk",
  authDomain: "carboxyclasses-1c1ea.firebaseapp.com",
  projectId: "carboxyclasses-1c1ea",
  storageBucket: "carboxyclasses-1c1ea.appspot.com",
  messagingSenderId: "113967196865",
  appId: "1:113967196865:web:49a6a5858ea497bc718240",
  measurementId: "G-T5XDY6JESE"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
