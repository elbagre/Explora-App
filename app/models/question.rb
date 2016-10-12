# == Schema Information
#
# Table name: questions
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :text
#  author_id   :integer          not null
#  answered    :boolean          default(FALSE)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Question < ActiveRecord::Base
  validates :author_id, :title, presence: true

  after_create :create_tag_topics

  belongs_to :author,
  class_name: "User",
  foreign_key: :author_id

  has_many :answers

  has_many :tag_topics

  attr_reader :most_upvoted_answer, :most_upvoted_author

  def most_upvoted_answer
    #NEED TO EDIT: Order by upvotes, as well as using id not full object
    return {} if self.answers.empty?
    @most_upvoted_answer = self.answers.first
  end

  def most_upvoted_author
    return "" if self.answers.empty?
    @most_upvoted_author = self.most_upvoted_answer.author.username
  end

  def image
    return "/images/original/missing.png" if self.answers.empty?
    @most_upvoted_answer.image
  end

  def create_tag_topics
    words = self.title.split(/[\s\.\,\:\?]/).map(&:capitalize)
    words.each do |word|
      if Topic.names.include?(word)
        topic = Topic.find_by(name: word)

        TagTopic.create!(
          topic_id: topic.id,
          question_id: self.id
        )

        if topic.parent_topic
          TagTopic.create!(
            topic_id: topic.parent_id,
            question_id: self.id
          )
        end
      end
    end
  end

end
