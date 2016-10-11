
import * as Comment from '../actions/comment_actions.js';

const CommentReducer = (inititalState = [], action) => {
  switch (action.type) {
    case Comment.RECEIVE_ALL_COMMENTS:
      return action.comments;
    default:
      return inititalState;
  }
};

export default CommentReducer;
