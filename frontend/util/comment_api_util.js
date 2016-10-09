export const createComment = (comment, success) => {
  $.ajax({
    method: 'POST',
    url: '/api/comments',
    success,
    error: () => console.log("Error in postComment")
  });
};
