var $ = require('jquery');

module.exports = {
  // setTodos: function(todos) {
  //   if($.isArray(todos)){
  //     localStorage.setItem('todos', JSON.stringify(todos));
  //     return todos;
  //   }
  // },
  // getTodos: function() {
  //   var stringTodos = localStorage.getItem('todos');
  //   var todos = [];
  //
  //   try {
  //     todos = JSON.parse(stringTodos);
  //   } catch(e) {
  //     console.log('Error passing the JSON todos');
  //   }
  //
  //   return $.isArray(todos) ? todos : [];
  // },


  filterTodos: function(todos, showCompleted, searchText) {
    var filteredTodos = todos;

    // Filter by show completed
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });
    // Filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      var todoText = todo.text.toLowerCase();
      return searchText.length === 0 || todoText.indexOf(searchText.toLowerCase()) > -1;
    });

    // Sort Todos with non-completed first
    filteredTodos.sort((a, b) => {
      // a before b
      // return -1;
      // b before a
      // return 1;
      // no change(a===b)
      // return 0;
      if(!a.completed && b.completed) {
        return -1;
      } else if(a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });
    return filteredTodos;
  }
};