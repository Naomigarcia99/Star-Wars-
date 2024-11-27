import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA6E2KInG-EUtxfmL558QJfs5QZPJvbETw",
  authDomain: "star-wars-71a9e.firebaseapp.com",
  projectId: "star-wars-71a9e",
  storageBucket: "star-wars-71a9e.firebasestorage.app",
  messagingSenderId: "608281860739",
  appId: "1:608281860739:web:be51e3fda5e5819cf719b6",
};

const appFirebase = initializeApp(firebaseConfig);
const auth = getAuth(appFirebase);

export { auth };
export default appFirebase;
