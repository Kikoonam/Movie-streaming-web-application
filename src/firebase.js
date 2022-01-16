//Imoprt file! dont't change anything from here !
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getStorage } from "firebase/storage";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuab2XvtdXIDpQCGVAl2ji__TEkrN5e7M",
  authDomain: "movie-web-app-32269.firebaseapp.com",
  projectId: "movie-web-app-32269",
  storageBucket: "movie-web-app-32269.appspot.com",
  messagingSenderId: "657651419787",
  appId: "1:657651419787:web:d187fe80b5db1cc45be28e"
};



const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider,storage};
export default db;  