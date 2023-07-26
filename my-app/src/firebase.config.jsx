import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAJGk4vNXThmbOds3nwp3Bh9K4cXPrqmgY",
    authDomain: "ecara-82e32.firebaseapp.com",
    projectId: "ecara-82e32",
    storageBucket: "ecara-82e32.appspot.com",
    messagingSenderId: "607416756577",
    appId: "1:607416756577:web:53fe7b52ea4e8cda35fd20"
};
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export default app;