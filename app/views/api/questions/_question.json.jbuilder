json.extract! question, :title, :description, :id

json.answer_count question.answers.length

json.author do
  json.username question.author.username
  json.id question.author_id
end

json.most_upvoted_answer do
  json.body question.most_upvoted_answer
  json.author question.most_upvoted_author
end
