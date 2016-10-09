export const REQUEST_ALL_ANSWERS = 'REQUEST_ALL_ANSWERS';
export const RECEIVE_ALL_ANSWERS = 'RECEIVE_ALL_ANSWERS';
export const RECEIVE_SINGLE_ANSWER = 'RECEIVE_SINGLE_ANSWER';
export const CREATE_ANSWER = 'CREATE_ANSWER';

export const requestAllAnswers = () => ({
  type: REQUEST_ALL_ANSWERS
});

export const receiveAllAnswers = (answers) => ({
  type: RECEIVE_ALL_ANSWERS,
  answers
});

export const receiveSingleAnswer = (answer) => ({
  type: RECEIVE_SINGLE_ANSWER,
  answer
});

export const createAnswer = (answer) => ({
  type: CREATE_ANSWER,
  answer
});
