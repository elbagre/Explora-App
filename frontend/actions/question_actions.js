export const REQUEST_ALL_QUESTIONS = "REQUEST_ALL_QUESTIONS";
export const REQUEST_SINGLE_QUESTION = "REQUEST_SINGLE_QUESTION";
export const RECEIVE_ALL_QUESTIONS = "RECEIVE_ALL_QUESTIONS";
export const RECEIVE_SINGLE_QUESTION = "RECEIVE_SINGLE_QUESTION";
export const CREATE_QUESTION = "CREATE_QUESTION";

export const requestAllQuestions = () => ({
  type: REQUEST_ALL_QUESTIONS
});

export const requestSingleQuestion = (id) => ({
  type: REQUEST_SINGLE_QUESTION,
  id
});

export const receiveAllQuestions = (questions) => ({
  type: RECEIVE_ALL_QUESTIONS,
  questions
});

export const receiveSingleQuestion = (question) => ({
  type: RECEIVE_SINGLE_QUESTION,
  question
});

export const createQuestion = (question) => ({
  type: CREATE_QUESTION,
  question
});
