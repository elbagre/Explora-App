import * as Answer from '../actions/answer_actions.js';
import * as API from '../util/answer_api_util.js';

const AnswerMiddleware = ({ getState, dispatch }) => (next) => (action) {
  const answersSuccess = (answers) => dispatch(Answer.receiveAllAnswers(answers));
  const answerSuccess = (answer) => dispatch(Answer.receiveSingleAnswer(answer));
  switch (action.type) {
    case Answer.REQUEST_ALL_ANSWERS:
      API.fetchAllAnswers(success);
      break;
    case Answer.CREATE_ANSWER:
      API.createAnswer(action.answer, success);
      break;
    default:
      return next(action);
  }
}
