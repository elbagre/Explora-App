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
    @answers = @question.answers.includes(:author).order(id: :desc)
    render :show
  end

  def index
    if params[:query]
      if params[:query].empty?
        @questions = []
      else
        query = "#{params[:query]}%".upcase
        @questions = Question.where("UPPER(title) LIKE ?", query)
      end
      render :search_index
    else
      @questions = Question.joins(:answers).having("COUNT(*) > 0").group("questions.id").preload(:author, answers: :author)
      render :index
    end
  end

  def destroy
    @question = Question.find(params[:id])

    if @question.destroy
      render {}
    else
      render @question.errors.full_messages, status: 402
    end
  end

  private

  def question_params
    params.require(:question).permit(:title, :description, :author_id)
  end
end
