export const CREATE_COMMENT = "CREATE_COMMENT";
export const REQUEST_ALL_COMMENTS = "REQUEST_ALL_COMMENTS";
export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";

export const createComment = (comment) => ({
  type: CREATE_COMMENT,
  comment
});

export const requestAllComments = (answer_id) => ({
  type: REQUEST_ALL_COMMENTS,
  answer_id
});

export const receiveAllComments = (comments) => ({
  type: RECEIVE_ALL_COMMENTS,
  comments
});
