import firebase from "firebase";

var config = {
  apiKey: "AIzaSyBvNMTXVXuyqEOXzEuxUxQdrVacSo8FI6s",
  authDomain: "lineup-db358.firebaseapp.com",
  databaseURL: "https://lineup-db358.firebaseio.com",
  projectId: "lineup-db358",
  storageBucket: "lineup-db358.appspot.com",
  messagingSenderId: "1026250129223"
};
let fire = firebase.initializeApp(config);
export default fire;
