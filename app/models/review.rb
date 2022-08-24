class Review < ApplicationRecord
  has_one_attached :image
  belongs_to :climber
  belongs_to :gym
end
