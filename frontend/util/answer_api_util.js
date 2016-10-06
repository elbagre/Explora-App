export const fetchAllAnswers = (id, success) => {
  $.ajax({
    method: 'GET',
    url: `/api/questions/${id}/answers`,
    data: id,
    success
  });
};

export const createAnswer = (answer, success) => {
  $.ajax({
    method: 'POST',
    url: `/api/answers`,
    data: {answer},
    success,
    error: () => console.log("MESSED UP")
  });
};
