import * as Topic from '../actions/topic_actions.js';
import * as API from '../util/topic_api_util.js';

const TopicMiddleware = ({ getState, dispatch }) => (next) => (action) => {
  const topicsSuccess = (topics) => dispatch(Topic.receiveAllTopics(topics));
  const topicSuccess = (topic) => dispatch(Topic.receiveSingleTopic(topic));
  switch (action.type) {
    case Topic.REQUEST_ALL_TOPICS:
      API.fetchAllTopics(topicsSuccess);
      break;
    case Topic.REQUEST_SINGLE_TOPIC:
      API.fetchSingleTopic(action.id, topicSuccess)
      break;
    default:
      return next(action);
  }
};

export default TopicMiddleware;
