class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render :show
    else
      render @comment.errors.full_messages, status: 422
    end
  end

  def index
    @comments = Comment.where(answer_id: params[:answer_id])
    render :index
  end

  def update
    @comment = Comment.find(params[:id])

    if @comment.update(comment_params)
      render :index
    else
      render @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = comment.find(params[:id])
    @comment.destroy
    render :index
  end

  private

  def comment_params
    params.require(:comment).permit(:author_id, :answer_id, :body)
  end
end
