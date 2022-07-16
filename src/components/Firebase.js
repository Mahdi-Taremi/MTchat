import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyApJ4UQ7dVIKNbHWRMaXDzj9PGRoDZOHh4",
    authDomain: "mtchat-1390e.firebaseapp.com",
    projectId: "mtchat-1390e",
    storageBucket: "mtchat-1390e.appspot.com",
    messagingSenderId: "996498077764",
    appId: "1:996498077764:web:ca8e2ae8ccfa12d434e411",
  })
  .auth();
