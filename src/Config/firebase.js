// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq0G_aLgwgYDZInlgIO4xkEcy5rtnZ1Z4",
  authDomain: "drive-3d5a4.firebaseapp.com",
  projectId: "drive-3d5a4",
  storageBucket: "drive-3d5a4.appspot.com",
  messagingSenderId: "278056852601",
  appId: "1:278056852601:web:9d18016bbaf82a8ce788a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();


