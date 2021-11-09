import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const FIREBASE_CONFIG = {
    apiKey: "",
    authDomain: "yhack-demo-4aedb.firebaseapp.com",
    databaseURL: "https://yhack-demo-4aedb.firebaseapp.com",
    projectId: "yhack-demo-4aedb",
    storageBucket: "yhack-demo-4aedb.appspot.com",
    messagingSenderId: "848829807982",
    appId: "1:848829807982:web:4581af57b46fcd12ded57f",
    measurementId: "G-JFGJW1YERH"
}

export default function firebaseClient() {
    if (!firebase.apps.length) {
        firebase.initializeApp(FIREBASE_CONFIG);
    }
}