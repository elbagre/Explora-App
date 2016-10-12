export const REQUEST_ALL_TOPICS = "REQUEST_ALL_TOPICS";
export const REQUEST_SINGLE_TOPIC = "REQUEST_SINGLE_TOPIC";
export const RECEIVE_ALL_TOPICS = "RECEIVE_ALL_TOPICS";
export const RECEIVE_SINGLE_TOPIC = "RECEIVE_SINGLE_TOPIC";

export const requestAllTopics = () => ({
  type: REQUEST_ALL_TOPICS,
});

export const receiveAllTopics = (topics) => ({
  type: RECEIVE_ALL_TOPICS,
  topics
});

export const requestSingleTopic = (id) => ({
  type: REQUEST_SINGLE_TOPIC,
  id
});

export const receiveSingleTopic = (topic) => ({
  type: RECEIVE_SINGLE_TOPIC,
  topic
});
