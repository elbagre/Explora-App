import { connect } from 'react-redux';
import QuestionIndex from './question_index.jsx';
import { requestAllQuestions } from '../../actions/question_actions.js';

const mapStatetoProps = (state) => ({
  questions: state.questions
});

const mapDispatchToProps = (dispatch) => ({
  requestAllQuestions: () => dispatch(requestAllQuestions())
});

export default connect(mapStatetoProps, mapDispatchToProps)(QuestionIndex);
