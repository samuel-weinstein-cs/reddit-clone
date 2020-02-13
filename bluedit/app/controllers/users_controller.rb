class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]
  skip_before_action :authorize_request, only: [:create, :index, :show]
  def index
    @users = User.all
    json_response(@users)
  end
  def show
    json_response(@user)
  end

  def create
    user = User.create!(user_params)
    puts 'This is user',user.email, user.password
    auth_token = AuthenticateUser.new(user.email, user.password).call
    response = { message: Message.account_created, auth_token: auth_token, user: user }
    json_response(response, :created)
  end

  private

  def set_user
    @user=User.find(params[:id])
  end

  def user_params
    params.permit(
        :username,
        :email,
        :password
    )
  end
end
