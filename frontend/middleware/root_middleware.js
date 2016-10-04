import SessionMiddleware from './session_middleware.js';
import { applyMiddleware } from 'redux';

const RootMiddleware = applyMiddleware(
  SessionMiddleware
);

export default RootMiddleware;
