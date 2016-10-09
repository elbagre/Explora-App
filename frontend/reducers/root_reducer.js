import { combineReducers } from 'redux';
import SessionReducer from './session_reducer.js';
import QuestionReducer from './question_reducer.js';
import AnswerReducer  from './answer_reducer.js';

const RootReducer = combineReducers({
  session: SessionReducer,
  questions: QuestionReducer,
  answers: AnswerReducer
});

export default RootReducer;
