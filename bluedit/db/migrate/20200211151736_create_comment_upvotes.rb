class CreateCommentUpvotes < ActiveRecord::Migration[6.0]
  def change
    create_table :comment_upvotes do |t|
      t.boolean :vote
      t.references :user, null: false, foreign_key: true
      t.references :comment, null: false, foreign_key: true

      t.timestamps
    end
  end
end
