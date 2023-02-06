import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_1fRFtA--GOikx1GP2GvcdkdtcVuPR1I",
  authDomain: "cookit-recipe-react-app.firebaseapp.com",
  projectId: "cookit-recipe-react-app",
  storageBucket: "cookit-recipe-react-app.appspot.com",
  messagingSenderId: "1073220208073",
  appId: "1:1073220208073:web:b3cfad8b29f05721f25418",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
