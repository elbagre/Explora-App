import * as Search from '../actions/search_actions.js';

const SearchReducer = (initialState = [], action) => {
  switch(action.type) {
    case Search.RECEIVE_SEARCH_TOPICS:
      return action.matches;
    case Search.RECEIVE_SEARCH_USERS:
      return action.matches;
    case Search.RECEIVE_SEARCH_QUESTIONS:
      return action.matches;
    default:
      return initialState;
  }
};

export default SearchReducer;
