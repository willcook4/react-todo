// Also test countdown form .test with spys.
var React = require('react');

var AddToDo = React.createClass({
  formSubmit: function(e) {
    e.preventDefault();
    var inputText = this.refs.todoInput.value;
    // alert(inputText);
    if(inputText.length >3){
      this.props.addToDo(inputText);
    };
    this.refs.todoInput.value = '';
  },
  render: function(){
    return (
      <div>
        <form onSubmit={this.formSubmit} ref="addTodoForm">
          <input type='text' ref="todoInput"/>
          <button className="button" type='submit'>Add Todo</button>
        </form>
      </div>
    )
  }
});

module.exports = AddToDo;