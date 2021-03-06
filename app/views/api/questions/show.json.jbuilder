json.title @question.title
json.description @question.description
json.id @question.id
json.author do
  json.username @question.author.username
  json.id @question.author.id
end


json.answers @answers.each do |answer|
  json.author answer.author.username
  json.body answer.body
  json.id answer.id
  json.image asset_path(answer.image.url)
end
