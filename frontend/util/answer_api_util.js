export const createAnswer = (formData, success) => {
  $.ajax({
    method: 'POST',
    url: `/api/answers`,
    dataType: 'json',
    contentType: false,
    processData: false,
    data: formData,
    success,
    error: () => console.log("MESSED UP")
  });
};

export const fetchAllAnswers = (id, success) => {
  $.ajax({
    method: 'GET',
    url: `/api/questions/${id}/answers`,
    success,
    error: () => console.log("Error in fetchAllAnswers")
  });
};
