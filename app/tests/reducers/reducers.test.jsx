/* global describe, expect, it */ //esLint config for this file
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
});