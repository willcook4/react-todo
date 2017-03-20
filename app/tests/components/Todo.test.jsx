/* global describe, expect, it */ //esLint config for this file
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');
import * as actions from 'actions';
import {Todo} from 'Todo';
// var {Todo} = require('Todo');

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });

  it('should dispatch UPDATE_TODO action on click', () => {
    var todoData = {
      id: 199,
      text: 'Testing features',
      completed: true
    };

    var action = actions.startToggleTodo(todoData.id, !todoData.completed);  // action we expect the spy to have been called with

    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy}/>);

    //Select with jQuery
    var $element = $(ReactDOM.findDOMNode(todo));
    //Simulate the click event
    TestUtils.Simulate.click($element[0]);
    //Check spy was called
    expect(spy).toHaveBeenCalledWith(action);
  });
});