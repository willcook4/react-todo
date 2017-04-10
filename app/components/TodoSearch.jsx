var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

// export var TodoSearch = React.createClass({ // export for testing
export class TodoSearch extends React.Component {
  render () {
    var {dispatch, showCompleted, searchText} = this.props;

    return (
      <div className="container__header">
        <div>
          <input type='search' ref='searchText' placeholder="Search todos" value={searchText} onChange={()=>{
            // This runs when the text box changes
            var searchText = this.refs.searchText.value;
            dispatch(actions.setSearchText(searchText));
          }}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={() => {
              dispatch(actions.toggleShowCompleted());
            }}/>
            Show Completed Todos
          </label>
        </div>
      </div>
    );
  }
}

export default connect( // Redux uses this
  (state) => {
    return {
      showCompleted: state.showCompleted,
      searchText: state.searchText
    };
  }
)(TodoSearch);