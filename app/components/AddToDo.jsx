// Also test countdown form .test with spys.
var React = require('react');

var AddToDo = React.createClass({
  formSubmit: function(e) {
    e.preventDefault();
    var inputText = this.refs.todoInput.value;
    // alert(inputText);
    if(inputText.length >= 3){
      this.refs.todoInput.value = '';
      this.props.addToDo(inputText);
    } else {
      // Puts focus back on the form input...
      this.refs.todoInput.focus();
    };

  },
  render: function(){
    return (
      <div className="container__footer">
        <form onSubmit={this.formSubmit} ref="addTodoForm">
          <input type="text" ref="todoInput" placeholder="What do you need to do?"/>
          <button className="button expanded" type='submit'>Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddToDo;