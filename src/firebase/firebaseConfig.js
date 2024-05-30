
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzvwXMmWtlRV9tTgeksB5SmWNwJjmV25g",
  authDomain: "supply-chain-management-57518.firebaseapp.com",
  projectId: "supply-chain-management-57518",
  storageBucket: "supply-chain-management-57518.appspot.com",
  messagingSenderId: "239784085088",
  appId: "1:239784085088:web:850a2b00543085792ae505"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;