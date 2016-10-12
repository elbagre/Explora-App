json.extract! question, :title, :description, :id

json.answer_count question.answers.length

json.author do
  json.username question.author.username
  json.id question.author_id
end

json.most_upvoted_answer question.most_upvoted_answer
json.most_upvoted_author question.most_upvoted_author
json.image question.image
