# == Schema Information
#

class Like < ApplicationRecord

    validates :user_id, :event_id, null: false
    validates :user_id, uniqueness: { scope: :event_id }
    
    belongs_to :liker,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :liked_event,
        primary_key: :id,
        foreign_key: :event_id,
        class_name: :Event
end
