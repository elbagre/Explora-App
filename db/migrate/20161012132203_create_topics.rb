class CreateTopics < ActiveRecord::Migration
  def change
    create_table :topics do |t|
      t.string :name, null: false
      t.integer :parent_id

      t.timestamps null: false
    end
    add_index :topics, :name, unique: true
  end
end
