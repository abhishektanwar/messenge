import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBr43KJ-tByqs-aGCn4lSILEqMp4FOvYgA",
    authDomain: "slack2-540e2.firebaseapp.com",
    projectId: "slack2-540e2",
    storageBucket: "slack2-540e2.appspot.com",
    messagingSenderId: "6879638834",
    appId: "1:6879638834:web:26970293edeaa28b22d32b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider,db};