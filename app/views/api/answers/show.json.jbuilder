json.author @answer.author.username
json.body @answer.body
json.id @answer.id
json.question_id @answer.question_id
json.image asset_path(@answer.image.url)
