class Answer < ActiveRecord::Base
  validates :author_id, :question_id, presence: true
  validates :body, length: { minimum: 20 }

  has_attached_file :image
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :question
  has_many :comments

  belongs_to :author,
  class_name: "User",
  foreign_key: :author_id
end
