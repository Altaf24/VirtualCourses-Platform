import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "loginvirtualcourses-a7bad.firebaseapp.com",
  projectId: "loginvirtualcourses-a7bad",
  storageBucket: "loginvirtualcourses-a7bad.firebasestorage.app",
  messagingSenderId: "78624717582",
  appId: "1:78624717582:web:19f81a564113f57632f55f"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth,provider}