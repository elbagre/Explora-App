class Api::TopicsController < ApplicationController
  def index
    @topics = Topic.all
    render :index
  end

  def search_index
    if params[:query] == nil || params[:query].empty?
      @topics = []
    else
      query = "#{params[:query]}%".upcase
      @topics = Topic.where("UPPER(name) LIKE ?", query)
    end
    render :index
  end

  def show
    @topic = Topic.joins(:questions)
                  .where("topics.id = ?", params[:id])
                  .group("topics.id")
                  .first

    unless @topic.nil? || @topic.questions.empty?
      @questions = @topic.questions.joins(:answers)
                                   .having("COUNT(*) > 0")
                                   .group("questions.id")
                                   .preload(:author, answers: :author)
    else
      @topic = Topic.find(params[:id])
      @questions = []
    end
    render :show
  end
end
