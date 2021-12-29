import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAzsw0fvAOtu-AQZBD4woyTZvfFIcp-QIY",
  authDomain: "crwn-db-636bc.firebaseapp.com",
  databaseURL: "https://crwn-db-636bc.firebaseio.com",
  projectId: "crwn-db-636bc",
  storageBucket: "crwn-db-636bc.appspot.com",
  messagingSenderId: "1003419250009",
  appId: "1:1003419250009:web:46dca2cc95c7b383ccb048",
  measurementId: "G-PKY13TT2GR",
};
firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
