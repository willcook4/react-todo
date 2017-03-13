import firebase from 'firebase';
try {
  // Initialize Firebase
  var config = {
    apiKey: process.env.TODOAPP_G_FIREBASE_API_KEY,
    authDomain: 'will-todoapp.firebaseapp.com',
    databaseURL: 'https://will-todoapp.firebaseio.com',
    storageBucket: 'will-todoapp.appspot.com',
    messagingSenderId: '763011594421'
  };
  // console.log(config);
  firebase.initializeApp(config);
} catch (e) {
  // console.log(e);
}
export var firebaseRef = firebase.database().ref();
export default firebase;