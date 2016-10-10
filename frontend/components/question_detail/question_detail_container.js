import { connect } from 'react-redux';
import QuestionDetail from './question_detail.jsx';
import * as Comment from '../../actions/comment_actions.js';
import * as Answer from '../../actions/answer_actions.js';
import * as Question from '../../actions/question_actions.js';

const mapStateToProps = (state, ownProps) => ({
  id: parseInt(ownProps.params.id),
  question: state.question_detail,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  fetchSingleQuestion: id => dispatch(Question.requestSingleQuestion(id)),
  createAnswer: (answer) => dispatch(Answer.createAnswer(answer)),
  createComment: (comment) => dispatch(Comment.createComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetail);
