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
        todo: {
          id: 'abcd123',
          text: 'something to do',
          completed: false,
          createdAt: 92384275
        }
      };
      const res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });

    it('should update the todo', () => {
      const todos = [{
        id: '22',
        text: 'Walk the dog',
        completed: true,
        createdAt: 213,
        completedAt: 253
      }];

      const updates = {
        completed: false,
        completedAt: null
      };

      const action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
      };

      const res = reducers.todosReducer(df(todos), df(action));
      expect(res[0].completed).toEqual(updates.completed);
      expect(res[0].completedAt).toEqual(updates.completedAt);
      expect(res[0].text).toEqual(todos[0].text);
    });


    it('should add existing todos', () => {
      const todos = [{
        id: '111',
        text: 'anything',
        completed: false,
        completedAt: undefined,
        createdAt: 33000
      }];
      const action = {
        type: 'ADD_TODOS',
        todos
      };
      var result = reducers.todosReducer(df([]), df(action));
      expect(result.length).toEqual(1);
      expect(result[0]).toEqual(todos[0]);
    });
  });
});