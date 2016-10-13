export const REQUEST_MATCHES = "REQUEST_MATCHES";
export const RECEIVE_SEARCH_TOPICS = "RECEIVE_SEARCH_TOPICS";
export const RECEIVE_SEARCH_USERS = "RECEIVE_SEARCH_USERS";
export const RECEIVE_SEARCH_QUESTIONS = "RECEIVE_SEARCH_QUESTIONS";

export const requestMatches = (query) => ({
  type: REQUEST_MATCHES,
  query
});

export const receiveSearchTopics = (query, matches = []) => ({
  type: RECEIVE_SEARCH_TOPICS,
  query,
  matches
});

export const receiveSearchQuestions = (matches) => ({
  type: RECEIVE_SEARCH_QUESTIONS,
  matches
});

export const receiveSearchUsers = (query, matches = []) => ({
  type: RECEIVE_SEARCH_USERS,
  query,
  matches
});
