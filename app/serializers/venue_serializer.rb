class VenueSerializer < ActiveModel::Serializer
  attributes :id, :organizer, :sport, :location, :cost, :capacity, :comment, :image
end
