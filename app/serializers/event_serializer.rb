class EventSerializer < ActiveModel::Serializer
  attributes  :id, :sport,  :comments, :organizer, :sort, :category, :level, :spots_available, :time, :location, :price_per_player, :date, :roster

  def roster
   return self.object.users
  end
 end
  