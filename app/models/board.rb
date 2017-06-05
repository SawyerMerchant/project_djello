class Board < ApplicationRecord
  belongs_to :user

  validates :title,
            presence: true,
            uniqueness: { scope: :user_id }

  validates :user,
            presence: true
end