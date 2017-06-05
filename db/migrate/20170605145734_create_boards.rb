class CreateBoards < ActiveRecord::Migration[5.0]
  def change
    create_table :boards do |t|

      t.string :title, null: false
      t.integer :user_id, null: false

      t.index :title
      t.index :user_id
      t.index [:title, :user_id], unique: true

      t.timestamps
    end
  end
end
