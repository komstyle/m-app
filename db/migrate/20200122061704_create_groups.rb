class CreateGroups < ActiveRecord::Migration[5.0]
  def up
    create_table :groups do |t|
      t.string :name, null: false
      t.index :name
      t.string :genre
      t.index :genre
      t.integer :border
      t.integer :flag
      t.timestamps
    end
  end
  def down
  end
end
