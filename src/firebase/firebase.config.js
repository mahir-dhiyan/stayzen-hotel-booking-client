// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwbGfUUmoyWt0Jx89MjzKt8HdpyjLq-gs",
  authDomain: "stayzen-hotel-booking.firebaseapp.com",
  projectId: "stayzen-hotel-booking",
  storageBucket: "stayzen-hotel-booking.appspot.com",
  messagingSenderId: "671363146830",
  appId: "1:671363146830:web:8ad9d029abad500d9f8f1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;