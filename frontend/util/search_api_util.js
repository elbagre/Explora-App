export const fetchSearchQuestions = (success, query) => {
  $.ajax({
    method: 'GET',
    url: "/api/questions",
    data: { query },
    success,
    error: () => console.log("Error in fetch search query")
  });
};

export const fetchSearchTopics = (success, query) => {
  $.ajax({
    method: 'GET',
    url: "/api/topics",
    data: { query },
    success,
    error: () => console.log("Error in fetch search query")
  });
};

export const fetchSearchUsers = (success, query) => {
  $.ajax({
    method: 'GET',
    url: "/api/users",
    data: { query },
    success,
    error: () => console.log("Error in fetch search query")
  });
};
