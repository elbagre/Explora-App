import * as Session from '../actions/session_actions.js';
import { merge } from 'lodash';

const defaultState = {
  currentUser: null,
  errors: []
};

const SessionReducer = (inititalState = defaultState, action) => {
  switch (action.type) {
    case Session.REQUEST_CURRENT_USER:
      return merge({}, inititalState, { currentUser: action.currentUser });
    case Session.LOGOUT:
      return defaultState;
    default:
      return inititalState;
  }
};

export default SessionReducer;
