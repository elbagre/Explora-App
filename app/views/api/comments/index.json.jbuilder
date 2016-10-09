json.array! @questions.each do |question|
  json.partial! "api/comments/comment" question: question
end
