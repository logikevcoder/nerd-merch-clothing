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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  // if the userAuth id exists
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    // set the displayName and email along with the createdAt date to the database online qa
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("Error creatinguser :", error.message);
    }
  }

  return userRef;
};

// export anywhere authentication is needed
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
