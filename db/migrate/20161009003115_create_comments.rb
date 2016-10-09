class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.integer :author_id, null: false
      t.integer :answer_id, null: false
      t.text :body, null: false
      t.integer :upvotes, default: 0
      t.integer :downvotes, default: 0

      t.timestamps null: false
    end
    add_index :comments, :author_id
    add_index :comments, :answer_id
  end
end
