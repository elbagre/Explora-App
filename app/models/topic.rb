class Topic < ActiveRecord::Base
  validates :name, presence: true, uniqueness: true

  belongs_to :parent_topic,
    class_name: "Topic",
    foreign_key: :parent_id

  has_many :subtopics,
    class_name: "Topic",
    foreign_key: :parent_id

  has_many :tag_topics

  has_many :questions,
  through: :tag_topics

  def self.names
    Topic.all.map { |topic| topic.name }
  end
end
