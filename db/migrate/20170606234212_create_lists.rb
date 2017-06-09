class CreateLists < ActiveRecord::Migration[5.0]
  def change
    create_table :lists do |t|

      t.string :title, null: false
      t.text :description
      t.references :board, foreign_key: true

      # t.index [:title, :board_id], unique: true


      t.timestamps
    end
  end
end
