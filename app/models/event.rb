class Event < ApplicationRecord
    has_many :event_users
    has_many :users, through: :event_users
    has_many :venues, through: :event_users
   
end
