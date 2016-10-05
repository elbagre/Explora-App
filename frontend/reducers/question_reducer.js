import * as Questions from '../actions/question_actions.js';
import { merge } from 'lodash';

const QuestionReducer = (inititalState = {}, action) => {
  switch(action.type) {
    case Questions.RECEIVE_ALL_QUESTIONS:
      return merge({}, inititalState, action.benches);
    case Questions.RECEIVE_SINGLE_QUESTION:
      const newQuestion = { [action.bench.id]: action.bench };
      return merge({}, inititalState, newQuestion);
    default:
      return inititalState;
  }
};

export default QuestionReducer;
