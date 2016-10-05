import * as Questions from '../actions/question_actions.js';
import { merge } from 'lodash';

const QuestionReducer = (inititalState = [], action) => {
  switch(action.type) {
    case Questions.RECEIVE_ALL_QUESTIONS:
      return action.questions;
    case Questions.RECEIVE_SINGLE_QUESTION:
      return [...inititalState, action.question];
    default:
      return inititalState;
  }
};

export default QuestionReducer;
