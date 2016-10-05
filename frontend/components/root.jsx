import { Provider } from 'react-redux';
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app.jsx';
import SessionContent from './session_form/session_content.jsx';
import SessionForm from './session_form/session_form_container.js';
import QuestionContainer from './questions/question_container.js';


const Root = ({ store }) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/home');
    }
  }

  const _redirectUnlessLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser === null) {
      replace('/entry');
    }
  }

    return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App} onEnter={_redirectUnlessLoggedIn}>
          <IndexRoute component={App}/>
          <Route path="/home" component={QuestionContainer}/>
        </Route>
        <Route path="/entry" component={SessionContent} onEnter={_redirectIfLoggedIn}>
          <Route path="/signup" component={SessionForm} />
          <Route path="/login" component={SessionForm} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
