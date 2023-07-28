import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "tiendamuelcof.firebaseapp.com",
  projectId: "tiendamuelcof",
  storageBucket: "tiendamuelcof.appspot.com",
  messagingSenderId: "927268944692",
  appId: "1:927268944692:web:22c91ddea83fba8feb8361"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

