/* global describe, it */ //esLint config for this file
const expect = require('expect');
const reducers = require('reducers');
const df = require('deep-freeze-strict');

describe('Reducers', () => {
  describe('SearchTextReducer', () => {
    it('should set search text', ()=> {
      const action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };                                     // Empty string is the current starte.
      const res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('Should toggle show completed', () => {
      const action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      const res = reducers.showCompletedReducer(df(false), df(action));
      expect(res).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it('should add a new todo', () => {
      const action = {
        type: 'ADD_TODO',
        text: 'Walk the dog'
      };
      const res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });

    it('should toggle the todo to completed and update the completedAt', () => {
      const action = {
        type: 'TOGGLE_TODO',
        id: '22'
      };

      const todos = [{
        id: '22',
        text: 'Walk the dog',
        completed: true,
        createdAt: 213,
        completedAt: 253
      }];
      const res = reducers.todosReducer(df(todos), df(action));
      expect(res[0].completed).toEqual(false);
      expect(res[0].completedAt).toEqual(undefined);
    });
  });
});