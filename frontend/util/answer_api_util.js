export const createAnswer = (answer, success) => {
  $.ajax({
    method: 'POST',
    url: `/api/answers`,
    data: {answer},
    success,
    error: () => console.log("MESSED UP")
  });
};
