json.extract! @tagtopics.first.topic, :id, :name

json.questions @tagtopics.each do |tagtopic|
  json.partial! "api/questions/question", question: tagtopic.question
end
