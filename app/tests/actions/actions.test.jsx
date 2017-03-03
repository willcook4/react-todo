/* global describe, expect, it */ //esLint config for this file
const expect = require('expect');
const actions = require('actions');

describe('Actions', ()=> {
  it('Should generate search text action', () => {
    const action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some Search Text'
    };
    const response = actions.setSearchText(action.searchText);
    expect(response).toEqual(action);
  });

  it('Should generate add todo action', () => {
    const action = {
      type: 'ADD_TODO',
      text: 'Thing to do'
    };
    const response = actions.addTodo(action.text);
    expect(response).toEqual(action);
  });

  it('Should generate toggle show completed action', () => {
    const action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    const response = actions.toggleShowCompleted();
    expect(response).toEqual(action);

  });

  it('Should generate toggle todo action', () => {
    const action = {
      type: 'TOGGLE_TODO',
      id: 2
    };
    const response = actions.toggleTodo(action.id);
    expect(response).toEqual(action);
  });


});