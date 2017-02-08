var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var AddToDo = require('AddToDo');

describe('AddToDo', () => {
  it('should exist', () => {
    expect(AddToDo).toExist();
  });

  it('should call addToDo if valid input added', () => {
    var spy = expect.createSpy();
    var addToDoForm = TestUtils.renderIntoDocument(<AddToDo addToDo={spy}/>);
    var $element = $(ReactDOM.findDOMNode(addToDoForm));

    addToDoForm.refs.todoInput.value = 'This is a test item';

    TestUtils.Simulate.submit($element.find('form')[0]);

    expect(spy).toHaveBeenCalledWith('This is a test item');
  });

  it('should not call addToDo if invalid (too short an)input is entered', () =>{
    var spy = expect.createSpy();
    var addToDoForm = TestUtils.renderIntoDocument(<AddToDo addToDo={spy}/>);
    var $element = $(ReactDOM.findDOMNode(addToDoForm));

    addToDoForm.refs.todoInput.value = 'Th';

    TestUtils.Simulate.submit($element.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });

});