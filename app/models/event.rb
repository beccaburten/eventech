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
#  organizer_id      :integer          not null
#
class Event < ApplicationRecord

    validates :title, :date, :start_time, :end_time, :category_id, :registration_type, :organizer_id, presence: true
    validates :title, uniqueness: true

    has_one_attached :photo #AWS
    #add photo to instance (`e1`) by running in Rails console:
    # e1.photo.attach(io: File.open("/Users/beccaburten/Desktop/events/bryan-goff-f7YQo-eYHdM-unsplash.jpg"), filename: "asgard.jpg")
    # here, "/Users...jpg" is filepath, can get by dragdropping pic into browser

    belongs_to :organizer,
        primary_key: :id,
        foreign_key: :organizer_id,
        class_name: :User

    belongs_to :category,
        primary_key: :id,
        foreign_key: :category_id,
        class_name: :Category
    
    has_many :registrations,
        primary_key: :id,
        foreign_key: :event_id,
        class_name: :Registration 
        
    has_many :attendees,
        through: :registrations,
        source: :attendee

end
