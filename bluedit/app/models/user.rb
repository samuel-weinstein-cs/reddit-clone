class User < ApplicationRecord
  #enable password encryption
  has_secure_password

  has_many :comment_upvotes
  has_many :upvotes
  has_many :posts
  has_many :comments

  validates :username, presence: true
  validates :email, uniqueness: true, presence: true
  validates :password_digest, presence: true
end
