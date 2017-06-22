class CreateCardsUsers < ActiveRecord::Migration[5.0]
  def change
    create_join_table :cards, :users do |t|
      t.index :card_id
      t.index :user_id

      t.timestamps
    end
  end
end
