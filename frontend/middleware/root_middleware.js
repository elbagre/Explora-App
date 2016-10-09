import SessionMiddleware from './session_middleware.js';
import { applyMiddleware } from 'redux';
import QuestionMiddleware from './question_middleware.js';
import AnswerMiddleware from './answer_middleware.js';

const RootMiddleware = applyMiddleware(
  SessionMiddleware, QuestionMiddleware, AnswerMiddleware
);

export default RootMiddleware;
