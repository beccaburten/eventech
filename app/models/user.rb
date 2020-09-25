# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  fname           :string           not null
#  lname           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  job_title       :string
#  company_id      :integer
#  github          :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :email, :password_digest, presence: true
    validates :email, uniqueness: true
    validates :password, length: {minimum: 8, allow_nil: true}

    attr_reader :password

    before_validation :ensure_session_token

    has_many :organized_events,
        primary_key: :id,
        foreign_key: :organizer_id,
        class_name: :Event

    has_many :registrations,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Registration

    has_many :events_attending,
        through: :registrations,
        source: :registered
        

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        user && user.is_password?(password) ? user : nil
    end

    def self.find_by_email(email) #CHECKS FOR USER PRESENCE
        user = User.find_by(email: email)
        user ? true : false
    end

    def is_password?(pw)
        BCrypt::Password.new(self.password_digest).is_password?(pw)
    end

    def password=(pw)
        @password = pw
        self.password_digest = BCrypt::Password.create(pw)
    end

    def ensure_session_token
        self.session_token ||= generate_session_token
    end

    def reset_session_token!
        self.session_token = generate_session_token
        self.save!
        self.session_token
    end

    private 

    def generate_session_token
        SecureRandom.urlsafe_base64
    end
    
end
