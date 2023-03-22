class Venue < ApplicationRecord
    has_many :event_users
    has_many :users, through: :event_users
    has_many :events, through: :event_users
end
