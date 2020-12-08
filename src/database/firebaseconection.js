import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database'; 
import 'firebase/auth';
//import 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDPPDTd_acthEU-38PckFk4xRGKrfON4cY",
    authDomain: "projetoeleicoes-11ad7.firebaseapp.com",
    databaseURL: "https://projetoeleicoes-11ad7.firebaseio.com",
    projectId: "projetoeleicoes-11ad7",
    storageBucket: "projetoeleicoes-11ad7.appspot.com",
    messagingSenderId: "676620774619",
    appId: "1:676620774619:web:fa7ff657637ecf049b70fe",
    measurementId: "G-CVS8KM7BBX"
  };
  // Initialize Firebase
 // firebase.initializeApp(firebaseConfig);
 // firebase.analytics();
  if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig); 
  }

  export default firebase;