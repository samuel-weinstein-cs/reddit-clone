class Post < ApplicationRecord
  belongs_to :user
  has_many :upvotes
  has_many :comments
end
