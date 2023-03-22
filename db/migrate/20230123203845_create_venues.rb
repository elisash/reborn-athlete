class CreateVenues < ActiveRecord::Migration[7.0]
  def change
    create_table :venues do |t|
      t.string :organizer
      t.string :sport
      t.string :location
      t.integer :cost
      t.integer :capacity
      t.string :comment
      t.string :image
  

      t.timestamps
    end
  end
end
