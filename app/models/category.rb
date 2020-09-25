# == Schema Information
#
# Table name: categories
#
#  id         :bigint           not null, primary key
#  category   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Category < ApplicationRecord

    validates :category, presence: true

    has_many :events,
        primary_key: :id,
        foreign_key: :category_id,
        class_name: :Event
end
