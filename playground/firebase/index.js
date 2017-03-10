import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: process.env.TODOAPP_G_FIREBASE_API_KEY,
  authDomain: 'will-todoapp.firebaseapp.com',
  databaseURL: 'https://will-todoapp.firebaseio.com',
  storageBucket: 'will-todoapp.appspot.com',
  messagingSenderId: '763011594421'
};
console.log(config);
firebase.initializeApp(config);


var firebaseRef = firebase.database().ref();

firebaseRef.set({

  app: {
    name: 'Soemthing Silly',
    version: '0.1.1'
  },
  isRunning: true,
  user: {
    name: 'Bill',
    age: 54
  }
}).then(()=>{
  console.log('Set Worked');
}, (error)=>{
  console.log('Set Failed: ', error);
});

// firebaseRef.set({                  // Set Wipes the previous values
//   appName: 'Todo Application'
// });

firebaseRef.child('user').set({ // Also returns a promise
  name: 'Mike'
});

firebaseRef.child('app').set({
  name: 'Todo App'
});