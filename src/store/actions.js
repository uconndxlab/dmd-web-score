import * as types from './mutation-types';

export const run = ({ commit, state }, payload) => {
  // commit(types.UPDATE_FOO, payload);
  chrome.tabs.executeScript({
    code: 'document.body.style.backgroundColor="orange"'
  });
};