var React = require('react');
var TodoList = require('TodoList');
var AddToDo = require('AddToDo');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
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
  render: function(){
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos}/>
        <AddToDo addToDo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;