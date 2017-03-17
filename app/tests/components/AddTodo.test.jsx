/* global describe, it */ //esLint config for this file
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

import * as actions from 'actions';
var {AddToDo} = require('AddToDo');

describe('AddToDo', () => {
  it('should exist', () => {
    expect(AddToDo).toExist();
  });

  it('should dispatch ADD_TODO when vaild todo text', () => {
    var todoText = 'This is a test item';
    var action = actions.startAddTodo(todoText);
    var spy = expect.createSpy();
    var addToDoForm = TestUtils.renderIntoDocument(<AddToDo dispatch={spy}/>);
    var $element = $(ReactDOM.findDOMNode(addToDoForm));

    addToDoForm.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($element.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should not dispatch ADD_TODO when invalid text, (too short an)input is entered', () =>{
    var todoText = '';
    var spy = expect.createSpy();
    var addToDoForm = TestUtils.renderIntoDocument(<AddToDo dispatch={spy}/>);
    var $element = $(ReactDOM.findDOMNode(addToDoForm));

    addToDoForm.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($element.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});