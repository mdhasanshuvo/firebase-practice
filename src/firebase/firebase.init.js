// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBLDGNuaSNnjtSz3Qm5a6JpU5QlD2kPlzE",
    authDomain: "simple-firebase-2-e184f.firebaseapp.com",
    projectId: "simple-firebase-2-e184f",
    storageBucket: "simple-firebase-2-e184f.firebasestorage.app",
    messagingSenderId: "1010609223521",
    appId: "1:1010609223521:web:4f9676a23a4ce984f9b720"
};
 

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;