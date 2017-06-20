class Board < ApplicationRecord
  belongs_to :owner, class_name: 'User', foreign_key: 'board_id'
  has_many :lists, dependent: :destroy

  # has_many :board_users
  # has_many :users, through: :board_users
  has_and_belongs_to_many :users

  validates :title,
            presence: true,
            uniqueness: { scope: :user_id }

  # validates :user,
  #           presence: true


end
