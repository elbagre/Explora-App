import { connect } from 'react-redux';
import * as Comment from '../../actions/comment_actions.js';
import * as Question from '../../actions/question_actions.js';
import CommentIndex from './comment_index.jsx';

const mapStateToProps = (state, ownProps) => ({
  question_id: state.question_detail.id,
  currentUser: state.session.currentUser,
  comments: state.comments
});

const mapDispatchToProps = (dispatch) => ({
  fetchSingleQuestion: id => dispatch(Question.requestSingleQuestion(id)),
  requestAllComments: id => dispatch(Comment.requestAllComments(id)),
  createComment: (comment) => dispatch(Comment.createComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);
