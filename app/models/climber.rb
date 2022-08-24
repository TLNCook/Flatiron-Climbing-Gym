class Climber < ApplicationRecord
    has_many :reviews

    validates :name, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    
    has_secure_password
end
