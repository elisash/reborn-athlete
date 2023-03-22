class EventUserSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :event_id, :venue_id
end
