// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
   apiKey: "AIzaSyBfLcB99Bdes1MdNYOdrV4iPyglPTttq88",
   authDomain: "rosterapp-f470b.firebaseapp.com",
   databaseURL: "https://rosterapp-f470b.firebaseio.com",
   projectId: "rosterapp-f470b",
   storageBucket: "rosterapp-f470b.appspot.com",
   messagingSenderId: "139015460844",
   appId: "1:139015460844:web:0b750efe916987b22b52c9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;