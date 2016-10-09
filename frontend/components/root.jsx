import { Provider } from 'react-redux';
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app.jsx';
import SessionContent from './session_form/session_content.jsx';
import SessionForm from './session_form/session_form_container.js';
import HomeContainer from './questions/question_container.js';
import AnswerPageContainer from './answer_page/answer_page_container.js';


const Root = ({ store }) => {
  const loggedIn = () => store.getState().session.currentUser;

  const _redirectIfLoggedIn = (nextState, replace) => {
    if (loggedIn()) {
      replace('/home');
    }
  }

  const _redirectUnlessLoggedIn = (nextState, replace) => {
    if (!loggedIn()) {
      replace('/entry');
    }
  }

    return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App} onEnter={_redirectUnlessLoggedIn}>
          <Route path="/home" component={HomeContainer}/>
          <Route path="/answer" component={AnswerPageContainer}/>
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
