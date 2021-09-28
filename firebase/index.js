import firebase from 'firebase/app'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAfiTeSSy2qW4JteSYKIQhXpAk29Sff8AQ",
  authDomain: "petsproject-a5d34.firebaseapp.com",
  projectId: "petsproject-a5d34",
  storageBucket: "petsproject-a5d34.appspot.com",
  messagingSenderId: "464837227793",
  appId: "1:464837227793:web:92e7373383b77791ba08b0"
};


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }

//analytics is optional for this tutoral 
const storage = firebase.storage()

export { storage,firebase as default };