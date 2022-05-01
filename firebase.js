import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCOGY5cYubx5QhWxwMdzxnbgG3hugnmaC0",
    authDomain: "clone-48ddf.firebaseapp.com",
    projectId: "clone-48ddf",
    storageBucket: "clone-48ddf.appspot.com",
    messagingSenderId: "974867613609",
    appId: "1:974867613609:web:e9621b7f7c4fb8f4d726b8"
  };

const app = !firebase.apps.length 
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

const db = app.firestore();

export default db;