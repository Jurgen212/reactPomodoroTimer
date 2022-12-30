import { initializeApp } from "firebase/app";

import { getAuth }       from 'firebase/auth'
import { getFirestore }  from 'firebase/firestore/lite'
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyDwkJCTohapZfLRnzieiEAgZN47Ou99oGE",
  authDomain: "todolist-6fc4f.firebaseapp.com",
  projectId: "todolist-6fc4f",
  storageBucket: "todolist-6fc4f.appspot.com",
  messagingSenderId: "409726401377",
  appId: "1:409726401377:web:464663bb240ed8a7576320",
  measurementId: "G-59M2C03FDC"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth      ( FirebaseApp  );
export const FirebaseDB   = getFirestore ( FirebaseApp  );
const analytics = getAnalytics( FirebaseApp );