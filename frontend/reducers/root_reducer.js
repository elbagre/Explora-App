import { combineReducers } from 'redux';
import SessionReducer from './session_reducer.js';
import QuestionReducer from './question_reducer.js';
import QuestionDetailReducer from './question_detail_reducer.js';
import CommentReducer from './comment_reducer.js';
import TopicReducer from './topic_reducer.js';
import SearchReducer from './search_reducer.js';

const RootReducer = combineReducers({
  session: SessionReducer,
  questions: QuestionReducer,
  question_detail: QuestionDetailReducer,
  comments: CommentReducer,
  topics: TopicReducer,
  query: SearchReducer
});

export default RootReducer;
