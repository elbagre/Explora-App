import SessionMiddleware from './session_middleware.js';
import { applyMiddleware } from 'redux';
import QuestionMiddleware from './question_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware
);

export default RootMiddleware;
