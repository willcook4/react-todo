var React = require('react');
var TodoList = require('TodoList');
var AddToDo = require('AddToDo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: "",
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Clean the yard'
        },
        {
          id: 3,
          text: 'Get the groceries'
        },
        {
          id: 4,
          text: 'Iron a shirt'
        }
      ]
    }
  },
  handleAddTodo: function(text){
    alert('new todo: ' + text);
    // this.state.todos.push({ id: todos.length, text: text});
    // console.log(todos);
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