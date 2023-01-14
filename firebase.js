import firebase from "firebase";
// import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAGA_VAssITjFwJs4mrZfXYWMZS1hkXv-w",
  authDomain: "uber-eat-366520.firebaseapp.com",
  projectId: "uber-eat-366520",
  storageBucket: "uber-eat-366520.appspot.com",
  messagingSenderId: "891985021258",
  appId: "1:891985021258:web:a3977dd8f2b0b9d63359b3",
};


//  !firebase.app.length ? initializeApp(firebaseConfig) : firebase.app()
 !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

 export default firebase;

// const app = initializeApp(firebaseConfig);