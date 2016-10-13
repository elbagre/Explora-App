export const fetchAllTopics = (success, query) => {
  $.ajax({
    method: 'GET',
    url: '/api/topics',
    data: { query },
    success,
    error: () => console.log("Fetch topics error")
  });
};

export const fetchSingleTopic = (id, success) => {
  $.ajax({
    method: 'GET',
    url: `api/topics/${id}`,
    success,
    error: () => console.log("Fetch topic error")
  });
};
