import * as Topic from '../actions/topic_actions.js';
import { merge } from 'lodash';

const defaultState = {
  items: [],
  detail: {}
};

const TopicReducer = (inititalState = defaultState, action) => {
  switch (action.type) {
    case Topic.RECEIVE_ALL_TOPICS:
      return merge({}, inititalState, { items: action.topics });
    case Topic.RECEIVE_SINGLE_TOPIC:
      return Object.assign({}, inititalState, { detail: action.topic });
    default:
      return inititalState;
  }
};

export default TopicReducer;
