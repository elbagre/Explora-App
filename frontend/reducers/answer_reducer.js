import * as Answer from '../actions/answer_actions.js';
import React from 'react';

const AnswerReducer = (inititalState = [], action) => {
  switch (action.type) {
    case Answer.RECEIVE_ALL_ANSWERS:
      return action.answers;
    case Answer.RECEIVE_SINGLE_ANSWER:
      return [...inititalState, action.answer];
    default:
      return inititalState;
  }
};

export default AnswerReducer;
