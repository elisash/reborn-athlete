class CreateClocks < ActiveRecord::Migration[7.0]
  def change
    create_table :clocks do |t|
      t.string :timeframes
      # t.date :date

      t.timestamps
    end
  end
end
