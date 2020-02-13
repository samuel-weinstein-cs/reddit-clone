class PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]
  skip_before_action :authorize_request, only: [:index, :show] #remove index eventually, but not show.

  def index
    @posts = Post.all
    render json: @posts, include: :user
  end
  def show
    render json: @post, include: :user
  end

  private

  def set_post
    @post=Post.find(params[:id])
  end
end
