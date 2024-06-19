// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDF6pQ-6QOG1Oi6mkbCRfIjR2qCea-i31w",
  authDomain: "career-hub-react-db6b5.firebaseapp.com",
  projectId: "career-hub-react-db6b5",
  storageBucket: "career-hub-react-db6b5.appspot.com",
  messagingSenderId: "1024771618758",
  appId: "1:1024771618758:web:c141dc0a7cf81cba6ea4c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;