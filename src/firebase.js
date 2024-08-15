// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQ59_F5ldCNgqYENzGyytWui1w6N_PHAc",
  authDomain: "inventory-management-app-f7d2b.firebaseapp.com",
  projectId: "inventory-management-app-f7d2b",
  storageBucket: "inventory-management-app-f7d2b.appspot.com",
  messagingSenderId: "141098859114",
  appId: "1:141098859114:web:146033268a697a29512813",
  measurementId: "G-NQ7VTNWYD4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const analytics = getAnalytics(app);
export { firestore };
