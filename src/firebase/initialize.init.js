// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs1mQiWqf39uoqUuwOdJy7SxdPiyoWvyI",
  authDomain: "react-authentication-tes-59219.firebaseapp.com",
  projectId: "react-authentication-tes-59219",
  storageBucket: "react-authentication-tes-59219.firebasestorage.app",
  messagingSenderId: "666692143664",
  appId: "1:666692143664:web:528abe7532073765e3fbf5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);