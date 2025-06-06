import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBkWlcDG1Uuw8AsB6zvSFLpao3VuerwaHo",
  authDomain: "student-application-port-16d21.firebaseapp.com",
  projectId: "student-application-port-16d21",
  storageBucket: "student-application-port-16d21.appspot.com",
  messagingSenderId: "360915119564",
  appId: "1:360915119564:web:8f9e7f2df113d64932c169",
  measurementId: "G-0017PBP03V",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
