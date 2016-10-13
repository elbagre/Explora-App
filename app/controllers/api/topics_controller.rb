class Api::TopicsController < ApplicationController
  def index
    if params[:query] == nil || params[:query].empty?
      @topics = []
    else
      query = "#{params[:query]}%".upcase
      @topics = Topic.where("UPPER(name) LIKE ?", query)
    end
    render :index
  end

  def show
    @topic = Topic.find(params[:id])
    @questions = @topic.tag_topics.map { |tagtopic| tagtopic.question }
    @questions.select! { |question| !question.answers.empty? }
  end
end
