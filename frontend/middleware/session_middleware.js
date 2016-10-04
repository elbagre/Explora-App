import * as Session from '../actions/session_actions.js';
import * as API from '../util/session_api_util.js';

const SessionMiddleware = ({getState, dispatch}) => next => action => {
  const success = user => dispatch(Session.requestCurrentUser(user));
  const failure = errors => dispatch(Session.receiveErrors(errors));

  switch(action.type) {
    case Session.LOGIN:
      API.login(action.user, success, failure);
      return next(action);
    case Session.SIGNUP:
      API.signup(action.user, success, failure);
      return next(action);
    case Session.LOGOUT:
      API.logout(() => next(action));
      break;
    default:
      next(action);
  }
};

export default SessionMiddleware;
