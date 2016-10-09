import { combineReducers } from 'redux';
import SessionReducer from './session_reducer.js';
import QuestionReducer from './question_reducer.js';
import QuestionDetailReducer from './question_detail_reducer.js';

const RootReducer = combineReducers({
  session: SessionReducer,
  questions: QuestionReducer,
  question_detail: QuestionDetailReducer
});

export default RootReducer;
