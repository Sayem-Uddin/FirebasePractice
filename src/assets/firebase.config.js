// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8eKVkcU3LKjTeVVcMWoh-M7VpPP1YHPM",
  authDomain: "rocking-realstate.firebaseapp.com",
  projectId: "rocking-realstate",
  storageBucket: "rocking-realstate.appspot.com",
  messagingSenderId: "410957738829",
  appId: "1:410957738829:web:6389aa124fa0167dc1bd04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth ;