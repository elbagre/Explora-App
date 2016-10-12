class Api::TopicsController < ApplicationController
  def index
    @topics = Topic.all
    render :index
  end

  def show
    @topic = Topic.find(params[:id])
    @questions = @topic.tag_topics.map { |tagtopic| tagtopic.question }
    render :show
  end
end
