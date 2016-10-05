class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.string :title, null: false
      t.text :description
      t.integer :author_id, null: false
      t.boolean :answered, default: false

      t.timestamps null: false
    end
    add_index :questions, :author_id
  end
end
