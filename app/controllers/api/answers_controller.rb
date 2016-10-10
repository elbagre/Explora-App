class Api::AnswersController < ApplicationController

  def create
    debugger
    @answer = Answer.new(answer_params)

    if @answer.save
      @question = @answer.question
      render "api/questions/show"
    else
      render @answer.errors.full_messages, status: 402
    end
  end

  def show
    @answer = Answer.find(params[:id])
    render :show
  end

  def index
    @answers = Answer.where(question_id: params[:question_id])
    render :index
  end

  def destroy
    @answer = Answer.find(params[:id])

    if @answer.destroy
      render :index
    else
      render @answer.errors.full_messages, status: 402
    end
  end

  private

  def answer_params
    params.require(:answer).permit(:author_id, :question_id, :body)
  end
end
