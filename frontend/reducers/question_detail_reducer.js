import * as Questions from '../actions/question_actions.js';
import { merge } from 'lodash';

const QuestionDetailReducer = (inititalState = { answers: [] }, action) => {
  switch(action.type) {
  case Questions.RECEIVE_SINGLE_QUESTION:
    return action.question;
  default:
    return inititalState;
  }
};

export default QuestionDetailReducer;
