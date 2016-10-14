json.array! @questions.each do |question|
  json.name question.title
  json.id question.id
  json.type "Question"
end
