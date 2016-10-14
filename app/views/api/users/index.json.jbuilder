json.array! @users.each do |user|
  json.name user.username
  json.id user.id
  json.type "User"
end
