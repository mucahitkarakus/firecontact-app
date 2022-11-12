// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: "https://contact-app-79e2f-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: "contact-app-79e2f.appspot.com",
  messagingSenderId: "315694816926",
  appId: "1:315694816926:web:b86ba93959cfc88515258f",
  measurementId: "G-FNKMCP8QEB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)