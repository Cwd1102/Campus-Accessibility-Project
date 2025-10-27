// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: replace with your app settings from Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyD0IZ6hlt782hl7Y__edaGHOHAxb2osrx4",
  authDomain: "campus-accessibility-project.firebaseapp.com",
  projectId: "campus-accessibility-project",
  appId: "231918570881",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
