import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyDPqf-empcIBHg93qEQdImzJ7exUOn1RJs",
  authDomain: "ffstudios-9083a.firebaseapp.com",
  projectId: "ffstudios-9083a",
  storageBucket: "ffstudios-9083a.firebasestorage.app",
  messagingSenderId: "891780995261",
  appId: "1:891780995261:web:b842d88a799dd8b0833fd4",
  measurementId: "G-TXYZYQ17K6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { app, auth, db, analytics };
