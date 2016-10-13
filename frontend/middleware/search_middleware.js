import * as Search from '../actions/search_actions.js';
import * as API from '../util/search_api_util.js';

const SearchMiddleware = ({ getState, dispatch}) => (next) => (action) => {
  switch (action.type) {
    case Search.REQUEST_MATCHES:
      API.fetchSearchTopics(
        (matches) => dispatch(Search.receiveSearchTopics(action.query, matches)),
        action.query
      );
      break;
    case Search.RECEIVE_SEARCH_TOPICS:
      if (action.matches < 1) {
        API.fetchSearchUsers(
          (matches) => dispatch(Search.receiveSearchUsers(action.query, matches)),
          action.query
        )
        break;
      } else {
        return next(action);
      }
    case Search.RECEIVE_SEARCH_USERS:
      if (action.matches.length < 1) {
        API.fetchSearchQuestions(
          (matches) => dispatch(Search.receiveSearchQuestions(matches)),
          action.query
        )
        break;
      } else {
        return next(action);
      }
    case Search.RECEIVE_SEARCH_QUESTIONS:
      if (!action.matches) {
        break;
      }
    default:
      return next(action);
  }
};

export default SearchMiddleware;
