export const fetchAllTopics = (success) => {
  $.ajax({
    method: 'GET',
    url: '/api/topics',
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
