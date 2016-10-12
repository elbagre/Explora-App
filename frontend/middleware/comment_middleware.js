import * as Action from '../actions/comment_actions.js';
import * as API from '../util/comment_api_util.js';

const CommentMiddleware = ({ getState, dispatch }) => next => action => {
  const commentsSuccess = (comments) => dispatch(Action.receiveAllComments(comments));
  switch(action.type) {
    case Action.CREATE_COMMENT:
      API.createComment(action.comment, () => next(action));
      break;
    case Action.REQUEST_ALL_COMMENTS:
      API.fetchAllComments(action.answer_id, commentsSuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default CommentMiddleware;
