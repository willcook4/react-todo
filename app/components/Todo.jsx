var React = require('react');

var Todo = React.createClass({
  render: function () {
    var {text, id} = this.props;

    return (
      <div>
        <span className="grey-text">{id}.</span> {text}
      </div>
    )
  }
});

module.exports = Todo;