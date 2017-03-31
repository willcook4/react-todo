var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {hashHistory} = require('react-router');

var actions = require('actions');
var store = require('configureStore').configure();
import firebase from './firebase/';
import router from './router/index.jsx';

firebase.auth().onAuthStateChanged((user) => {
  // If user then auth successful else user logged out
  if(user) {
    // Redirect the user to the todo page after login
    store.dispatch(actions.login(user.uid));
    store.dispatch(actions.startAddTodos());  // Get the todos from Firebase 
    hashHistory.push('/todos');
  } else {
    store.dispatch(actions.logout());
    hashHistory.push('/');
  }
});


// import './../playground/firebase/index';

// Local Storage - Get the Todos
// store.subscribe(() => {
//   var state = store.getState();
//   console.log('New state', state);
//   TodoAPI.setTodos(state.todos);
// });

// var initialTodos = TodoAPI.getTodos();
// store.dispatch(actions.addTodos(initialTodos));



// Load foundation SCSS
$(document).foundation();

// Load CSS(sass)
require('style-loader!css-loader!sass-loader!applicationStyles');


ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);