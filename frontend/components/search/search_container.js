import { connect } from 'react-redux';
import { createQuestion } from '../../actions/question_actions.js';
import SearchBar from './search_bar.jsx';

const mapStateToProps = (state) => {
  return ({
  currentUser: state.session.currentUser,
  questions: state.questions
  });
};

const mapDispatchToProps = (dispatch) => ({
  createQuestion: (question) => dispatch(createQuestion(question))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
