import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDIOpHF-DwGy3ciUR0EaF38Evycf4M9lZo",
    authDomain: "newsletter-3fb7a.firebaseapp.com",
    databaseURL: "https://newsletter-3fb7a-default-rtdb.firebaseio.com",
    projectId: "newsletter-3fb7a",
    storageBucket: "newsletter-3fb7a.appspot.com",
    messagingSenderId: "745137927764",
    appId: "1:745137927764:web:7f402e3a1f7c0ecfea9fc1"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)

  export default firebase.database();
