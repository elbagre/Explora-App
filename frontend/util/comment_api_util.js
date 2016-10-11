export const createComment = (comment, success) => {
  $.ajax({
    method: 'POST',
    url: '/api/comments',
    data: { comment },
    success,
    error: () => console.log("Error in postComment")
  });
};

export const fetchAllComments = (id, success) => {
  $.ajax({
    method: 'GET',
    url: `/api/answers/${id}/comments`,
    success,
    error: (errors) => console.log(errors)
  });
};
