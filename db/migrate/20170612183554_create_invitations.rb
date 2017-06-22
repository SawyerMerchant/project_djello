class CreateInvitations < ActiveRecord::Migration[5.0]
  def change
    create_join_table :boards, :users do |t|
      t.index :board_id
      t.index :user_id

      t.timestamps
    end
  end
end
