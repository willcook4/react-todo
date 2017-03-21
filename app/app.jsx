var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');


// import './../playground/firebase/index';

// Local Storage - Get the Todos
// store.subscribe(() => {
//   var state = store.getState();
//   console.log('New state', state);
//   TodoAPI.setTodos(state.todos);
// });

// var initialTodos = TodoAPI.getTodos();
// store.dispatch(actions.addTodos(initialTodos));

store.dispatch(actions.startAddTodos());  // Get the todos from Firebase

// Load foundation SCSS
$(document).foundation();

// Load CSS(sass)
require('style-loader!css-loader!sass-loader!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);