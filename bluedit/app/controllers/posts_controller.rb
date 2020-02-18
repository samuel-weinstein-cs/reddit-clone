class PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]
  skip_before_action :authorize_request, only: [:index, :show]

  def index
    @posts = Post.all
    render json: @posts, include: :user
  end
  def show
    render json: @post, include: :user
  end

  def create
    params = post_params
    params[:user] = @current_user
    Post.create!(params)

  end


  private

  def post_params
    params.permit(:title, :image_url, :text)
  end

  def set_post
    @post=Post.find(params[:id])
  end
end
