class Api::QuestionsController < ApplicationController

  def create
    @question = Question.new(question_params)

    if @question.save
      render "api/questions/show"
    else
      render @question.errors.full_messages, status: 402
    end
  end

  def show
    @question = Question.find(params[:id])
    render :show
  end

  def index
    @questions = Question.all
    render :index
  end

  def destroy
    @question = Question.find(params[:id])

    if @question.destroy
      render :index
    else
      render @question.errors.full_messages, status: 402
    end
  end

  private

  def question_params
    params.require(:question).permit(:title, :description, :author_id)
  end
end
