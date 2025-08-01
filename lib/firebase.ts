// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1ALribOmcSp9tmDSCzmPenc0JG8Bnj5c",
  authDomain: "test-34b1e.firebaseapp.com",
  projectId: "test-34b1e",
  storageBucket: "test-34b1e.firebasestorage.app",
  messagingSenderId: "762307050055",
  appId: "1:762307050055:web:1912a0ebd832bead068f62"
};

// Initialize Firebase only on client side
let app;
let db;

if (typeof window !== 'undefined') {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
}

export { db };
export default app;