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

  belongs_to :author,
  class_name: "User",
  foreign_key: :author_id

  has_many :answers

  attr_reader :most_upvoted_answer, :most_upvoted_author

  def most_upvoted_answer
    #NEED TO EDIT: Order by upvotes, as well as using id not full object
    return "" if self.answers.empty?
    @most_upvoted_answer = self.answers.last
  end

  def most_upvoted_author
    return "" if self.answers.empty?
    @most_upvoted_author = most_upvoted_answer.author.username
  end
end
