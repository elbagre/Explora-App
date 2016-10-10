export const CREATE_ANSWER = 'CREATE_ANSWER';
export const REQUEST_ALL_ANSWERS = "REQUEST_ALL_ANSWERS";
export const RECEIVE_ALL_ANSWERS = "RECEIVE_ALL_ANSWERS";

export const createAnswer = (answer) => ({
  type: CREATE_ANSWER,
  answer
});

export const requestAllAnswers = () => ({
  type: REQUEST_ALL_ANSWERS,
});

export const receiveAllAnswers = (answers) => ({
  type: RECEIVE_ALL_ANSWERS,
  answers
});
