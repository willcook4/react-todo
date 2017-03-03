/* global describe, expect, it */ //esLint config for this file
var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Todo = require('Todo');

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });

  it('should call onToggle prop with the todo id on click', () => {
    var todoData = {
      id: 199,
      text: 'Testing features',
      completed: true
    };

    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>);

    //Select with jQuery
    var $element = $(ReactDOM.findDOMNode(todo));
    //Simulate the click event
    TestUtils.Simulate.click($element[0]);
    //Check spy was called
    expect(spy).toHaveBeenCalledWith(199);
  });
});