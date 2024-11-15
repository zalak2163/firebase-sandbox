// Documentation
// https://firebase.google.com/docs/database/web/read-and-write

// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import {
  getDatabase,
  push,
  serverTimestamp,
  set,
  ref,
} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZEQn-y8IxoD6s7xFTgRTMMQS_gKjne_0",
  authDomain: "humber-demo-b0252.firebaseapp.com",
  projectId: "humber-demo-b0252",
  storageBucket: "humber-demo-b0252.firebasestorage.app",
  messagingSenderId: "665800937322",
  appId: "1:665800937322:web:8badf52defe3cdd9a71f13",
  measurementId: "G-334W4643S1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Database
const database = getDatabase();
const messages = ref(database, "/messages");

const submit = document.getElementById("submit");

submit.addEventListener("click", function () {
  const name = document.getElementById("name");
  const message = document.getElementById("message");

  const newMessage = push(messages);

  set(newMessage, {
    name: name.value,
    message: message.value,
    crate_at: serverTimestamp(),
  });

  name.value = "";
  message.value = "";
});
