import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBm5k464-RJURTNAY0W50F7shXL-9P3zt4",
    authDomain: "firegram-16cc5.firebaseapp.com",
    projectId: "firegram-16cc5",
    storageBucket: "firegram-16cc5.appspot.com",
    messagingSenderId: "108314479600",
    appId: "1:108314479600:web:4b50cdb32e9c85b42b6b35"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };