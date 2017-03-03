/* global describe, expect, it */ //esLint config for this file
var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should add a todo to the todos state on handleAddTodo ',() => {
    var todoText = 'test text';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({
      todos: []
    });
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
    expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });

  it('should toggle completed value when handleToggle is called', ()=>{
    var todoData = {
      id: 11,
      text: 'Testing features',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    };

    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]});

    //Check the first todo has completed state of false.
    expect(todoApp.state.todos[0].completed).toBe(false);
    //Call handleToggle with 11
    todoApp.handleToggle(11);
    //Verify value changed
    expect(todoApp.state.todos[0].completed).toBe(true);
    expect(todoApp.state.todos[0].completedAt).toBeA('number');
  });

  it('should toggle todo from completed to incomplete', ()=>{
    var todoData = {
      id: 11,
      text: 'Testing features',
      completed: true,
      createdAt: 60,
      completedAt: 660
    };

    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]});

    //Check the first todo has completed state of false.
    expect(todoApp.state.todos[0].completed).toBe(true);
    //Call handleToggle with 11
    todoApp.handleToggle(11);
    //Verify value changed
    expect(todoApp.state.todos[0].completed).toBe(false);
    expect(todoApp.state.todos[0].completedAt).toNotExist();
  });
});