// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhNFmOTNu6pEEcLTA-Pm99Cut8dcYpW1w",
  authDomain: "cloudkitchen-b2d31.firebaseapp.com",
  projectId: "cloudkitchen-b2d31",
  storageBucket: "cloudkitchen-b2d31.appspot.com",
  messagingSenderId: "841155684130",
  appId: "1:841155684130:web:055e578f83f4541919a77b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app