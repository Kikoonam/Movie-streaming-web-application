//Imoprt file! dont't change anything from here !
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyCeU11Ra0fMCSSke8WETg_zcfDm6FYCm7w",
    authDomain: "movie-streaming-server.firebaseapp.com",
    databaseURL: "https://movie-streaming-server-default-rtdb.firebaseio.com",
    projectId: "movie-streaming-server",
    storageBucket: "movie-streaming-server.appspot.com",
    messagingSenderId: "969779394442",
    appId: "1:969779394442:web:be759f3cd33d448a153a73",
    measurementId: "G-MGHKKVY7HW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider,storage};
export default db;  