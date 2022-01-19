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

// this entire function was created to to store user data in our database by means of a google auth sign
export const createUserProfileDocument = async (userAuth, additionalData) => {
  // checking if there is a user has been auth through google sign in
  // if not return and step out of this function.
  if (!userAuth) return;

  // if a user has been authenticated thru google sign-in grab the userAuth uid and store in userRef variable
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  // checking to see if there is no existing data on this sign in the database
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    // if there isn't create a new user using the data from our auth object
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user");
    }
  }

  // We may want to use this user reference for other things so we will return it from this user
  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// Code to trigger the google pop up whenever we use the google auth provider for authentication & sign in
provider.setCustomParameters({ prompt: "select_account" });

// helps us to focus on the google pop and not other providers like twitter or instagram
// This will also be imported into our sign-in component
// and triggered when the user clicks on the blue google sign-in button
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
