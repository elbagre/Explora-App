json.answers do
  json.array! @answers.each do |answer|
    json.author answer.author.username
    json.body answer.body
  end
end
