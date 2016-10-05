import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root.jsx';
import * as Question from './util/question_api_util.js';


const success = data =>console.log(data);
window.fetchSingleQuestion = (id) => Question.fetchSingleQuestion(id, success);
window.fetchAllQuestions = () => Question.fetchAllQuestions(success);
window.postQuestion = () => Question.postQuestion = (question, success);

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
