import { connect } from 'react-redux';

mapStateToProps = (state) => ({
  questions: this.state.questions
});

mapDispatchToProps = (dispatch) => ({
  requestAllQuestions: () => dispatch(requestAllQuestions)
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsList);
