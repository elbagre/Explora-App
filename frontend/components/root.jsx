import { Provider } from 'react-redux';
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app.jsx';
import SessionFormContainer from './session_form/session_form_container.js';


const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="/signup" component={SessionFormContainer} />
        <Route path="/login" component={SessionFormContainer} />
      </Route>
    </Router>
  </Provider>
);

export default Root;
