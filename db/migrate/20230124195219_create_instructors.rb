class CreateInstructors < ActiveRecord::Migration[7.0]
  def change
    create_table :instructors do |t|
      t.string :image
      t.string :name
      t.string :class_name
      t.string :instruct
      t.string :description
      t.integer :hourly_rate
      t.integer :user_id
      t.timestamps
    end
  end
end
