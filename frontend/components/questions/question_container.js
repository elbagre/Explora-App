import { connect } from 'react-redux';

const mapStatetoProps = (state) => ({
  questions: state.questions
});

const mapDispatchToProps = (dispatch) => ({
  receiveSingleQuestion: (question) => dispatch(receiveSingleQuestion(question)) 
});

export default connect(mapStatetoProps, mapDispatchToProps)(QuestionIndex);
