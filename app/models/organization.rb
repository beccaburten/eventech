# == Schema Information
#
# Table name: organized_events
#
#  id       :bigint           not null, primary key
#  user_id  :integer          not null
#  event_id :integer          not null
#
class Organization < ApplicationRecord

    validates :user_id, :event_id, null: false

    belongs_to :organizer,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :organized,
        primary_key: :id,
        foreign_key: :event_id,
        class_name: :Event
end
