import { combineReducers } from 'redux';
import SessionReducer from './session_reducer.js';

const RootReducer = combineReducers({
  session: SessionReducer
});

export default RootReducer;
