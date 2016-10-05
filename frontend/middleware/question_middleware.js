import * as Questions from '../actions/question_actions.js';
import * as API from '../util/question_api_util.js';

const QuestionMiddleware = ({getState, dispatch}) => (next) => (action) => {
  const questionsSuccess = (questions) => dispatch(Questions.receiveAllQuestions(data));
  const questionSuccess = (question) => dispatch(Questions.receiveSingleQuestion(question));
  switch(action.type) {
    case REQUEST_ALL_QUESTIONS:
      API.fetchAllQuestions(questionsSuccess);
      next(action);
    case REQUEST_SINGLE_QUESTION:
      API.fetchSingleQuestion(action.id, questionSuccess);
    case CREATE_QUESTION:
      API.fetchSingleQuestion(questionSuccess);
    default:
      return next(action);
  }
};

export default QuestionMiddleware;
