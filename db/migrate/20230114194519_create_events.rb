class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.string :organizer
      t.string :sort
      t.string :sport
      t.string :category
      t.string :level
      t.integer :spots_available
      t.time :time
      t.string :location
      t.integer :price_per_player
      t.string :comments
      t.date :date

      t.timestamps
    end
  end
end
