import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyBE3LwUIIqOUxtZb6szEeBtf_IS-kw40Q8",
    authDomain: "pro-c71-e-ride-stage-4-a7ec3.firebaseapp.com",
    projectId: "pro-c71-e-ride-stage-4-a7ec3",
    storageBucket: "pro-c71-e-ride-stage-4-a7ec3.appspot.com",
    messagingSenderId: "976242348593",
    appId: "1:976242348593:web:47a0280d3e29930d3b3b10"
  };
  
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
