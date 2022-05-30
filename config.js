import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAr_Bbbd3BTTGQVV0eiHlKJq7DDM78LEYo",
    authDomain: "project-no-71.firebaseapp.com",
    projectId: "project-no-71",
    storageBucket: "project-no-71.appspot.com",
    messagingSenderId: "982684493910",
    appId: "1:982684493910:web:1ea0b70deb6eb94b3b73f7"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
