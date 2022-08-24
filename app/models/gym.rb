class Gym < ApplicationRecord
    has_many :reviews
    has_many :climbers, through: :reviews
end
