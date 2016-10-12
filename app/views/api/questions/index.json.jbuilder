json.array! @questions.order(id: :asc).each do |question|
  json.partial! "api/questions/question", question: question
end
