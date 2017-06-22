class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  # has_many :boards
  has_many :ownedboards, class_name: 'Board', foreign_key: 'user_id', inverse_of: 'owner'

  # has_many :inviations
  # has_many :boards, through: :invitation
  has_and_belongs_to_many :boards
  has_and_belongs_to_many :cards

  validates :email,
            presence: true

  validates :password,
            presence: true
end
