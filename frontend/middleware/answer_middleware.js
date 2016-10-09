import * as Answer from '../actions/answer_actions.js';
import * as API from '../util/answer_api_util.js';
import hashHistory from 'react-router';

const AnswerMiddleware = ({ getState, dispatch }) => (next) => (action) => {
  const answersSuccess = (answers) => {
    dispatch(Answer.receiveAllAnswers(answers));
    hashHistory.push('/answer');
  };

  const answerSuccess = (answer) => dispatch(Answer.receiveSingleAnswer(answer));

  switch (action.type) {
    case Answer.REQUEST_ALL_ANSWERS:
      API.fetchAllAnswers(answersSuccess);
      return next(action);
    case Answer.CREATE_ANSWER:
      API.createAnswer(action.answer, answerSuccess);
      return next(action);
    default:
      return next(action);
  }
}

export default AnswerMiddleware;
