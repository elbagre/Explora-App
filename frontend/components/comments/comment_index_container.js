import { connect } from 'react-redux';
import * as Comment from '../../actions/comment_actions.js';
import * as Question from '../../actions/question_actions.js';
import CommentIndex from './comment_index.jsx';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  comments: state.comments
});

const mapDispatchToProps = (dispatch) => ({
  requestAllComments: id => dispatch(Comment.requestAllComments(id)),
  createComment: (comment) => dispatch(Comment.createComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);
