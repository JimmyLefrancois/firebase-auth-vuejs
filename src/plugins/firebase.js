// Import the functions you need from the SDKs you need

import {initializeApp} from "firebase/app";
import { getAuth, browserLocalPersistence, setPersistence } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBXEG9qKL-EgR7fjaBtCzfusKrkr_1w9os",
  authDomain: "auth-6220f.firebaseapp.com",
  projectId: "auth-6220f",
  storageBucket: "auth-6220f.appspot.com",
  messagingSenderId: "1089039182940",
  appId: "1:1089039182940:web:6feb239f05876753910a99"

};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
setPersistence(auth, browserLocalPersistence)
export {
  auth
}


