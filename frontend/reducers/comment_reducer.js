
import * as Comment from '../actions/comment_actions.js';
import { merge } from 'lodash';

const CommentReducer = (inititalState = [], action) => {
  switch (action.type) {
    case Comment.RECEIVE_ALL_COMMENTS:
      return merge([], inititalState, action.comments);
    case Comment.RECEIVE_SINGLE_COMMENT:
      return([
        ...inititalState,
        action.comment
      ]);
    default:
      return inititalState;
  }
};

export default CommentReducer;
