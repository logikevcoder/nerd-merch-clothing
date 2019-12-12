import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD96I9oaWg_sAb5fvWxXWkQN7emh1rskeM",
  authDomain: "nerd-merch-clothing.firebaseapp.com",
  databaseURL: "https://nerd-merch-clothing.firebaseio.com",
  projectId: "nerd-merch-clothing",
  storageBucket: "nerd-merch-clothing.appspot.com",
  messagingSenderId: "742125951752",
  appId: "1:742125951752:web:94855c15df386c220c2abd",
  measurementId: "G-RBD8HZ7D3B"
};

firebase.initializeApp(config);

// export anywhere authentication is needed
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
