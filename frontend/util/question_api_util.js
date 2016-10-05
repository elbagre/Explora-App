export const fetchAllQuestions = (success) => {
  $.ajax({
    method: 'GET',
    url: '/api/questions',
    success,
    failure
  });
};

export const fetchSingleQuestion = (id, success) => {
  $.ajax({
    method: 'GET',
    url: `/api/questions/${id}`,
    success,
    failure
  });
};

export const postQuestion = (question, success, failure) => {
  $.ajax({
    method: 'POST',
    url: '/api/questions',
    data: question,
    success,
    failure
  });
};
