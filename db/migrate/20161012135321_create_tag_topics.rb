class CreateTagTopics < ActiveRecord::Migration
  def change
    create_table :tag_topics do |t|
      t.integer :topic_id, null: false
      t.integer :question_id, null: false

      t.timestamps null: false
    end
    add_index :tag_topics, [:topic_id, :question_id], unique: true
  end
end
