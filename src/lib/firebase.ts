// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsiyE4Vb5jwKnnU-OlGRukbN0FKnN_JOo",
  authDomain: "fir-6ac0d.firebaseapp.com",
  projectId: "fir-6ac0d",
  storageBucket: "fir-6ac0d.appspot.com",
  messagingSenderId: "843767454904",
  appId: "1:843767454904:web:e4813595bebfd4c566e84d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const colRef = collection(db, "mobile");
