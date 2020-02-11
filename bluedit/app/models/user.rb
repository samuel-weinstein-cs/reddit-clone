class User < ApplicationRecord
  has_many :comment_upvotes
  has_many :upvotes
  has_many :posts
  has_many :comments
end
