// Also test countdown form .test with spys.
var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddToDo = React.createClass({
  formSubmit: function(e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var todoText = this.refs.todoText.value;

    if(todoText.length >= 3){
      this.refs.todoText.value = '';
      dispatch(actions.startAddTodo(todoText));
    } else {
      // Puts focus back on the form input...
      this.refs.todoText.focus();
    }
  },
  render: function(){
    return (
      <div className="container__footer">
        <form onSubmit={this.formSubmit}>
          <input type="text" ref="todoText" placeholder="What do you need to do?"/>
          <button className="button expanded" type='submit'>Add Todo</button>
        </form>
      </div>
    );
  }
});

export default connect()(AddToDo);