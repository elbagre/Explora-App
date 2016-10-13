class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      log_in!(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    if params[:query].empty?
      @users = []
    else
      query = "#{params[:query]}%".upcase
      @users = User.where("UPPER(username) LIKE ?", query)
    end
    render :index
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
