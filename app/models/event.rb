class Event < ApplicationRecord

    validates :title, :date, :start_time, :end_time, :category_id, :registration_type, presence: true
    validates :title, uniqueness: true

    has_many :users, as: :userable
    
end