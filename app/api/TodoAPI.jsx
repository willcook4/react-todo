var $ = require('jquery');

module.exports = {
  setTodos: function(todos) {
    if($.isArray(todos)){
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function() {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch(e) {
      console.log('Error passing the JSON todos');
    }

    return $.isArray(todos) ? todos : [];
  },
  filterTodos: function(todos, showCompleted, searchText) {
    var filteredTodos = todos;

    // Filter by show completed
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });
    // Filter by searchText

    // Sort Todos with non-completed first

    return filteredTodos;
  }
};