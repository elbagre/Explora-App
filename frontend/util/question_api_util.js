export const fetchAllQuestions = (success) => {
  $.ajax({
    method: 'GET',
    url: '/api/questions',
    success,
    error: (error) => console.log("Error is here")
  });
};

export const fetchSingleQuestion = (id, success) => {
  $.ajax({
    method: 'GET',
    url: `/api/questions/${id}`,
    success
  });
};

export const postQuestion = (question, success) => {
  $.ajax({
    method: 'POST',
    url: '/api/questions',
    data: {question},
    success
  });
};
