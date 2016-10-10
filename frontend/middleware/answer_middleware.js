import * as Answer from '../actions/answer_actions.js';
import * as Question from '../actions/question_actions.js';
import * as API from '../util/answer_api_util.js';
import { hashHistory } from 'react-router';

const AnswerMiddleware = ({ getState, dispatch }) => (next) => (action) => {
  switch (action.type) {
    case Answer.CREATE_ANSWER:
      const answerSuccess = () => {
        dispatch(Question.requestSingleQuestion(action.answer.question_id));
        hashHistory.push(`/question/${action.answer.question_id}`);
      }
      API.createAnswer(action.answer, answerSuccess);
      next(action);
    case Answer.REQUEST_ALL_ANSWERS:
      API.fetchAllAnswers(action.answer.question_id, (answers) => {
        dispatch(Answer.receiveAllAnswers(answers));
        hashHistory.push(`/question/${action.answer.question_id}`);
        }
      );
      return next(action);
    default:
      return next(action);
  }
}

export default AnswerMiddleware;
