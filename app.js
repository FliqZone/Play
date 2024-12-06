// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUQWXvyd9QkxWoSkDK23fuAYyJTUee8ro",
  authDomain: "project-3833434340775651641.firebaseapp.com",
  projectId: "project-3833434340775651641",
  storageBucket: "project-3833434340775651641.firebasestorage.app",
  messagingSenderId: "432616599808",
  appId: "1:432616599808:web:133c1e5539a8f2c3bd43e5"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Handle Sign-Up
const signupForm = document.getElementById("signup-form");
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      document.getElementById("message").textContent = "Sign-up successful!";
    })
    .catch((error) => {
      document.getElementById("message").textContent = error.message;
    });
});
