import { createStore } from 'redux';
import RootReducer from '../reducers/root_reducer.js';
import RootMiddleware from '../middleware/root_middleware.js';

const configureStore = (preloadedState = {}) => (
  createStore(
    RootReducer,
    preloadedState,
    RootMiddleware
  )
);

export default configureStore;
