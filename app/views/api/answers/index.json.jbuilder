json.array! @answers do |answer|
  json.partial! "api/answers/answer", answer: answer
end
