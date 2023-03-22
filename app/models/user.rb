class User < ApplicationRecord
    has_secure_password
    # has_one_attached :avatar
    has_many :event_users
    has_many :venues, through: :event_users
    has_many :events, through: :event_users
    

    validates :username, presence: true, uniqueness: true
    # mount_uploader :avatar, AvatarUploader
end
