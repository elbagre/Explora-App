import * as Questions from '../actions/question_actions.js';
import * as API from '../util/question_api_util.js';
import { hashHistory } from 'react-router';

const QuestionMiddleware = ({getState, dispatch}) => (next) => (action) => {
  const questionsSuccess = (questions) => {
    dispatch(Questions.receiveAllQuestions(questions));
    hashHistory.push(`/home`);
  }
  const questionSuccess = (question) => {
    dispatch(Questions.receiveSingleQuestion(question));
    hashHistory.push(`/question/${question.id}`)
  }

  switch(action.type) {
    case Questions.REQUEST_ALL_QUESTIONS:
      API.fetchAllQuestions(questionsSuccess);
      return next(action);
    case Questions.REQUEST_SINGLE_QUESTION:
      API.fetchSingleQuestion(action.id, questionSuccess);
      return next(action);
    case Questions.CREATE_QUESTION:
      API.postQuestion(action.question, questionSuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default QuestionMiddleware;
