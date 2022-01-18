import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD1m369YARxCiz_l8B8npVfvLgNDeoOe5w",
  authDomain: "crown-shop-db-97511.firebaseapp.com",
  projectId: "crown-shop-db-97511",
  storageBucket: "crown-shop-db-97511.appspot.com",
  messagingSenderId: "186388215973",
  appId: "1:186388215973:web:752f61aac7ef191a6db54c",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// Code to trigger the google pop up whenever we use the google auth provider for authentication & sign in
provider.setCustomParameters({ prompt: "select_account" });

// helps us to focus on the google pop and not other providers like twitter or instagram
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
