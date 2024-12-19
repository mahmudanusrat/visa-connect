// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGgfCxZiFkceNCY8b5PpHQGiT6p7XseRo",
  authDomain: "visa-navigator-22c06.firebaseapp.com",
  projectId: "visa-navigator-22c06",
  storageBucket: "visa-navigator-22c06.firebasestorage.app",
  messagingSenderId: "660737521807",
  appId: "1:660737521807:web:36ec2664e3bb717a5b58fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;