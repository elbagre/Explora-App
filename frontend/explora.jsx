import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root.jsx';
import * as Answer from './util/answer_api_util.js';


const success = data =>console.log(data);
window.fetchAllAnswers = (id) => Answer.fetchAllAnswers(id, success);
window.createAnswer = (answer) => Answer.createAnswer(answer, success);

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: {
        currentUser: window.currentUser
      }
    };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  window.store = store;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
