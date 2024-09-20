// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
import {
     getAuth,
     onAuthStateChanged,
    createUserWithEmailAndPassword
    signInWithEmailAndPassword
 } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyD8LkVVC0rsDHXbpIVMRUUabLAde4p4ja0",
  authDomain: "testhackathon-1d832.firebaseapp.com",
  projectId: "testhackathon-1d832",
  storageBucket: "testhackathon-1d832.appspot.com",
  messagingSenderId: "467314105268",
  appId: "1:467314105268:web:1172653d0bc35ed39c70e1",
  measurementId: "G-5VEVW03E8K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const signup_email = document.getElementById("signup_email")
const signup_password = document.getElementById("signup_password")
const signup_confirmPassword = document.getElementById("signup_confirmPassword")
const signup_btn = document.getElementById("signup_btn")

const signin_email = document.getElementById("signin_email")
const signin_password = document.getElementById("signin_password")
const signup_confirmPassword = document.getElementById("signup_confirmPassword")
const signin_btn = document.getElementById("signin_btn")

signup_btn.addEventListener("click", creatuseraccount)
signin_btn.addEventListener("click", signin)

onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

  function creatuseraccount(){
    createUserWithEmailAndPassword(auth, signup_email.value, signup_password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

  }

  function signin() {
    signInWithEmailAndPassword(auth, signin_email.value, signin_password.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  
  }