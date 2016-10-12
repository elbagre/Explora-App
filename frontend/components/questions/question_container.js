import { connect } from 'react-redux';
import QuestionIndex from './question_index.jsx';
import { requestAllQuestions } from '../../actions/question_actions.js';
import { requestAllComments } from '../../actions/comment_actions.js';
import { withRouter, hashHistory } from 'react-router';

const mapStatetoProps = (state) => ({
  questions: state.questions
});

const mapDispatchToProps = (dispatch) => ({
  requestAllQuestions: () => dispatch(requestAllQuestions()),
  requestAllComments: (id) => dispatch(requestAllComments(id))
});

export default connect(mapStatetoProps, mapDispatchToProps)(withRouter(QuestionIndex));
