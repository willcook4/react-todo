var React = require('react');
var TodoList = require('TodoList');
var AddToDo = require('AddToDo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: "",
      todos: [
        {
          id: uuid(),
          text: 'Walk the dog'
        },
        {
          id: uuid(),
          text: 'Clean the yard'
        },
        {
          id: uuid(),
          text: 'Get the groceries'
        },
        {
          id: uuid(),
          text: 'Iron a shirt'
        }
      ]
    }
  },
  handleAddTodo: function(text){
    // alert('new todo: ' + text);
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text
        }
      ]
    });
  },
  handleSearch: function(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  },
  render: function(){
    var {todos} = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <AddToDo addToDo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;