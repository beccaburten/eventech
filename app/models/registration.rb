# == Schema Information
#
# Table name: registrations
#
#  id       :bigint           not null, primary key
#  user_id  :integer          not null
#  event_id :integer          not null
#
class Registration < ApplicationRecord

    validates :user_id, :event_id, null: false
    
    belongs_to :attendee,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :registered,
        primary_key: :id,
        foreign_key: :event_id,
        class_name: :Event
end
