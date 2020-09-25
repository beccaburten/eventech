# == Schema Information
#
# Table name: events
#
#  id                :bigint           not null, primary key
#  title             :string           not null
#  date              :datetime         not null
#  start_time        :datetime         not null
#  end_time          :datetime         not null
#  category_id       :integer          not null
#  company_id        :integer
#  registration_type :string           not null
#  promo_pic         :string
#  url               :string
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
class Event < ApplicationRecord

    validates :title, :date, :start_time, :end_time, :category_id, :registration_type, presence: true
    validates :title, uniqueness: true

    # has_one :organization,
    #     primary_key: :id,
    #     foreign_key: :event_id,
    #     class_name: :OrganizedEvent

    # has_one :organizer
    #     through: :organization,
    #     source: :organizer
    
    # has_many :registrations,
    #     primary_key: :id,
    #     foreign_key: :event_id,
    #     class_name: :Registration 
        
    # has_many :attendees,
    #     through: :registrations,
    #     source: :attendee
end
