import * as Questions from '../actions/question_actions.js';
import * as Answer from '../actions/answer_actions.js';
import { merge } from 'lodash';

const QuestionDetailReducer = (inititalState = { answers: [] }, action) => {
  switch(action.type) {
  case Questions.RECEIVE_SINGLE_QUESTION:
    return action.question;
  case Answer.RECEIVE_SINGLE_ANSWER:
    return merge({}, inititalState, { answers: [
      ...inititalState.answers,
      action.answer
    ]});
  case Answer.RECEIVE_ALL_ANSWERS:
    return merge({}, inititalState, { answers: action.answers });
  default:
    return inititalState;
  }
};

export default QuestionDetailReducer;
