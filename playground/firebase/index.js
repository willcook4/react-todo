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
// Firebase Actions:

// CREATE firebaseRef.set({ -> Set wipes the previous values
// CREATE firebaseRef.child('user').set({ sets a child
// READ firebaseRef.once('value').then((snapshot) => { console.log('Got the entire database here: ', snapshot.val()); });
// READ firebaseRef.child('user').once('value').then((snapshot) => { console.log('Got user data', snapshot.val()); }); // Subset of data retrieved
// UPDATE firebaseRef.update() // Modify data on the first level not nested properties
//    // multipath updates 'path': newValue will do nested
// DELETE firebaseRef.remove() -> Removes everything!
// DELETE firebaseRef.child('app/name').remove(); -> Removes the child
// DELETE firebaseRef.child('app').update({ name: null});  // Any data set to null will be reomved from firebase, same as remove



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
});

// firebaseRef.update({
//   isRunning: false,
//   'app/name': 'Todo Application' // multipath updates 'path': newValue
// });

// This is the same as the block above.
// firebaseRef.child('app').update({
//   name: 'Todo Application'
// }).then(() => {
//   console.log('update worked');
// }, (e) => {
//   console.log('Update Failed', e);
// });

// Exercise 1
// firebaseRef.update({
//   'app/name': 'New name',
//   'user/name': 'Timmy'
// });

// Exercise 2
// firebaseRef.child('app').update({
//   name: 'Another name'
// }).then(()=>{
//   firebaseRef.child('user').update({
//     name: 'Judy'
//   });
// });

// firebaseRef.child('app/name').remove();
//
// firebaseRef.child('app').update({
//   version: '2.0',
//   name: null   // Any data set to null will be reomved from firebase, same as remove
// });

// Exercise 3
// firebaseRef.update({
//   isRunning: null
// });
//
// // Exercise 4
// firebaseRef.child('user/age').remove();

// firebaseRef.once('value').then((snapshot) => {
//   console.log('Got entire database', snapshot.val());
// }, (error)=>{
//   console.log('unabe to fetch value', error);
// });
//
// firebaseRef.child('user').once('value').then((snapshot) => {
//   console.log('Got user data', snapshot.key, snapshot.val());
// }, (error)=>{
//   console.log('unabe to fetch value', error);
// });
//
// firebaseRef.on('value', (snapshot) => { // Turns on the Listener when this value changes
//   console.log('Got value', snapshot.val());
// });
//
// firebaseRef.off(); // Turns off all the event Listeners
//
// firebaseRef.update({isRunning: false});

// firebaseRef.child('user').on('value', (snapshot) => {
//   console.log('Updated the user name:', snapshot.val());
// });
//
// firebaseRef.child('user').update({
//   name: 'Kate'
// });
//
// firebaseRef.child('user').update({
//   name: 'Something completly new'
// });

//Exercise 5
//Create a new variable to store array
//use child added with key value
// push 2 values into the array
var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('child_added', snapshot.key, snapshot.val());
});

var todo1 = todosRef.push({
  text: 'Walk the dog'
});

var todo2 = todosRef.push({
  text: 'Feed the cat'
});

