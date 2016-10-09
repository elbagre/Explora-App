class Comment < ActiveRecord::Base
  validates :author_id, :answer_id, :body, presence: true

  belongs_to :author,
  class_name: "User",
  foreign_key: :author_id

  belongs_to :answer
end
