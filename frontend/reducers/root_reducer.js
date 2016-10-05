import { combineReducers } from 'redux';
import SessionReducer from './session_reducer.js';
import QuestionReducer from './question_reducer.js';

const RootReducer = combineReducers({
  session: SessionReducer,
  questions: QuestionReducer
});

export default RootReducer;
