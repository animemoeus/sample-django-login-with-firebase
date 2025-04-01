// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3aMIwSCM3EpiW7s8cx1CHIetwwHpHXk8",
  authDomain: "coach-trusted-development-7085.firebaseapp.com",
  projectId: "coach-trusted-development-7085",
  storageBucket: "coach-trusted-development-7085.firebasestorage.app",
  messagingSenderId: "809887306046",
  appId: "1:809887306046:web:c6e7f08f53b4d1efe31c6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();



export {auth, provider, signInWithPopup};