class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :title, null: false, unique: true
      t.datetime :date, null: false
      t.datetime :start_time, null: false
      t.datetime :end_time, null: false
      t.integer :category_id, null: false
      t.integer :company_id
      t.string :registration_type, null: false
      t.string :promo_pic
      t.string :url
      t.timestamps
    end
    add_index :events, :title
    add_index :events, :category_id
  end
end
