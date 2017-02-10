var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

// Load foundation SCSS
$(document).foundation();

// Load CSS(sass)
require('style-loader!css-loader!sass-loader!applicationStyles');

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);