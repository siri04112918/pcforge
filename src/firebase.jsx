// Import Firebase core
import { initializeApp } from "firebase/app";

// Import Authentication
import { getAuth } from "firebase/auth";

// Firebase configuration (from your Firebase console)
const firebaseConfig = {
  apiKey: "AIzaSyBAgjKV8H9471JofTiWgS25xjW4HZHCdb4",
  authDomain: "pc-forge-e32a7.firebaseapp.com",
  projectId: "pc-forge-e32a7",
  storageBucket: "pc-forge-e32a7.firebasestorage.app",
  messagingSenderId: "285849438225",
  appId: "1:285849438225:web:d02db6b6175f0cad0609b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication
export const auth = getAuth(app);

// Export app if needed
export default app;