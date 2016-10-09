import { connect } from 'react-redux';
import { requestAllQuestions } from '../../actions/question_actions.js';
import AnswerPage from './answer_page.jsx';
import { createAnswer} from '../../actions/answer_actions.js';

const mapStateToProps = (state) => ({
  questions: state.questions,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  requestAllQuestions: () => dispatch(requestAllQuestions()),
  createAnswer: (answer) => dispatch(createAnswer(answer))
});

export default connect(mapStateToProps, mapDispatchToProps)(AnswerPage);
