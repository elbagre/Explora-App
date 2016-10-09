import * as Answer from '../actions/answer_actions.js';
import * as API from '../util/answer_api_util.js';

const AnswerMiddleware = ({ getState, dispatch }) => (next) => (action) => {
  switch (action.type) {
    case Answer.CREATE_ANSWER:
      API.createAnswer(action.answer, () => next(action));
      break;
    default:
      return next(action);
  }
}

export default AnswerMiddleware;
