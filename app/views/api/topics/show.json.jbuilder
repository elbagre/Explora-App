json.topic do
  json.extract! @topic, :id, :name
end

json.questions @questions.each do |question|
  json.partial! "api/questions/question", question: question
end
