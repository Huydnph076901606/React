import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAbH2Tx0-G1pLOysIzVoc7Tj7OuHGsYGrU",
  authDomain: "react-js-pt14314.firebaseapp.com",
  databaseURL: "https://react-js-pt14314.firebaseio.com",
  projectId: "react-js-pt14314",
  storageBucket: "react-js-pt14314.appspot.com",
  messagingSenderId: "343351466635",
  appId: "1:343351466635:web:e3963fd7d1091731a5528e"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase