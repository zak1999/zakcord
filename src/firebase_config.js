// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

// import 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBR82OWUHcJgGjAoxwYvsDUcpyJhImff_I",
  authDomain: "chat-e62c7.firebaseapp.com",
  projectId: "chat-e62c7",
  storageBucket: "chat-e62c7.appspot.com",
  messagingSenderId: "660034214720",
  appId: "1:660034214720:web:ccd3ae1c82cacab57f38a5",
  measurementId: "G-G07QGWRRJB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {
  app,
  db,
  auth,
};