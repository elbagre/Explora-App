class TagTopic < ActiveRecord::Base
  validates :question_id, :topic_id, presence: true

  belongs_to :question
  belongs_to :topic
end
