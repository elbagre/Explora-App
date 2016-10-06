class Answer < ActiveRecord::Base
  validates :author_id, :question_id, presence: true
  validates :body, length: { minimum: 20 }

  belongs_to :question

  belongs_to :author,
  class_name: "User",
  foreign_key: :author_id
end
