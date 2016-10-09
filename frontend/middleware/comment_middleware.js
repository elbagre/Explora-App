import * as Action from '../actions/comment_actions.js';
import * as API from '../util/comment_api_util.js';

const CommentMiddleware = ({ getState, dispatch }) => next => action => {
  switch(action.type) {
    case Action.CREATE_COMMENT:
      API.createComment(action.comment, () => next(action));
      break;
    default:
      return next(action);
  }
};
