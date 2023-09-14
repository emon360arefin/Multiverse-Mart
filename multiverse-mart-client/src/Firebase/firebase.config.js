// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_apiKey,
  authDomain:import.meta.env.VITE_authDomain,
  projectId:import.meta.env.VITE_projectId,
  storageBucket:import.meta.env.VITE_storageBucket,
  messagingSenderId:import.meta.env.VITE_messagingSenderId,
  appId:import.meta.env.VITE_appId,
};


// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB2K-6Ba9ScEQFC3dPeeoxtuuqueM7DWrc",
//   authDomain: "multiversemart-157a1.firebaseapp.com",
//   projectId: "multiversemart-157a1",
//   storageBucket: "multiversemart-157a1.appspot.com",
//   messagingSenderId: "1011727313073",
//   appId: "1:1011727313073:web:a867975111d7e266439a90"
// };


// Initialize Firebase
export const app = initializeApp(firebaseConfig);