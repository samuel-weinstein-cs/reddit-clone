class CommentsController < ApplicationController
  before_action :set_post
  before_action :set_post_comment, only: [:show, :update, :destroy]
  skip_before_action :authorize_request, only: [:index, :show]

  def index
    render json: @post.comments, include: :user
  end

  def show
    render json: @comment, include: :user
  end

  def create
    params = comment_params
    params[:user] = @current_user
    @post.comments.create!(params)

  end
  private

  def comment_params
    params.permit(:text, :comments_id)
  end

  def set_post
    @post = Post.find(params[:post_id])
  end

  def set_post_comment
    @comment = @post.comments.find_by(id: params[:id]) if @post
  end
end
