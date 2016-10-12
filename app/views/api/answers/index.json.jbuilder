json.answers do
  json.array! @answers.each do |answer|
    json.author answer.author.username
    json.body answer.body
    json.id answer.id
    json.image asset_path(answer.image.url)
  end
end
