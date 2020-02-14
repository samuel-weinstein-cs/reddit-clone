class CommentsController < ApplicationController
  before_action :set_post
  before_action :set_post_comment, only: [:show, :update, :destroy]
  skip_before_action :authorize_request, only: [:index, :show]

  def index
    json_response(@post.comments)
  end

  def show
    json_response(@comment)
  end

  def create
    params = comment_params
    params[:user] = @current_user
    puts params.keys
    @post.comments.create!(params);

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