json.array! @topics.each do |topic|
  json.id topic.id
  json.name topic.name
end
