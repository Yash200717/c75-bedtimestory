import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCHN62ZQFx9Q3V4zL-DHMW1d-PJPjOSuVY",
  authDomain: "wilyapp-e8639.firebaseapp.com",
  projectId: "wilyapp-e8639",
  storageBucket: "wilyapp-e8639.appspot.com",
  messagingSenderId: "996967291977",
  appId: "1:996967291977:web:2dafbd23dc04e0891e7398",
  measurementId: "G-1RT73FJR6M"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()
