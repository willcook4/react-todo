import firebase from 'firebase';

try {
  // Initialize Firebase
  var config = {};
  if(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'production') {
    // Development Environment Variables. Production - Set on Heroku/Hosting too
    config = {
      apiKey: process.env.TODOAPP_G_FIREBASE_API_KEY,
      authDomain: process.env.TODOAPP_G_FIREBASE_AUTHDOMAIN,
      databaseURL: process.env.TODOAPP_G_FIREBASE_DATABASEURL,
      storageBucket: process.env.TODOAPP_G_FIREBASE_STORAGEBUCKET,
      messagingSenderId: process.env.TODOAPP_G_FIREBASE_MESSAGINGSENDERID
    };
  } else if(process.env.NODE_ENV === 'test'){
    // Testing Environment Variables
    config = {
      apiKey: process.env.TODOTEST_G_FIREBASE_API_KEY,
      authDomain: process.env.TODOTEST_G_FIREBASE_AUTHDOMAIN,
      databaseURL: process.env.TODOTEST_G_FIREBASE_DATABASEURL,
      storageBucket: process.env.TODOTEST_G_FIREBASE_STORAGEBUCKET,
      messagingSenderId: process.env.TODOTEST_G_FIREBASE_MESSAGINGSENDERID
    };
  } else {
    //
  }

  firebase.initializeApp(config);
} catch (e) {
  // console.log(e);
}
export var githubProvider = new firebase.auth.GithubAuthProvider();
export var firebaseRef = firebase.database().ref();
export default firebase;
