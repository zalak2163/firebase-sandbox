// Documentation
// https://firebase.google.com/docs/database/web/read-and-write

// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import {
  getDatabase,
  onValue,
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

// Load messages on data event
onValue(messages, (snapshot) => {
  // Create a reference
  const ul = document.getElementById("messages");
  ul.replaceChildren();

  // Loop through messeages and add them to the ul
  snapshot.forEach((childSnapshot) => {
    // Fetch the data from the snapshot
    const childData = childSnapshot.val();

    // Create a text node with message and name
    const text = document.createTextNode(
      childData.message + " ~ " + childData.name
    );

    // Create a li element
    const li = document.createElement("li");

    // Append li and text to the ul
    li.appendChild(text);
    ul.appendChild(li);
  });
});
