import { connect } from 'react-redux';
import { createQuestion } from '../../actions/question_actions.js';
import SearchForm from './search_form.jsx';

const mapStateToProps = (state) => {
  return ({
  currentUser: state.session.currentUser,
  questions: state.questions
  });
};

const mapDispatchToProps = (dispatch) => ({
  createQuestion: (question) => dispatch(createQuestion(question))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
