// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAG59kh4Jmr0mmUU5Slklk54E-t2xkoCkU",
    authDomain: "manufacturing-bay.firebaseapp.com",
    projectId: "manufacturing-bay",
    storageBucket: "manufacturing-bay.appspot.com",
    messagingSenderId: "693929253358",
    appId: "1:693929253358:web:ffa1401bf9cd2d821056ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth