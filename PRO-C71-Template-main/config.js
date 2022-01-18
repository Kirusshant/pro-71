import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDeAIfmHrvvOaPm5sDwmbLFnpiAYHPxs-0",
    authDomain: "pro-71-1580a.firebaseapp.com",
    projectId: "pro-71-1580a",
    storageBucket: "pro-71-1580a.appspot.com",
    messagingSenderId: "1015584878639",
    appId: "1:1015584878639:web:f4dc57971fff9561c2d6da"
  };





firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


