class CreateUserable < ActiveRecord::Migration[5.2]
  def change
    create_table :userables do |t|
      t.integer :userable_id, null: false
      t.integer :event_id, null: false
      t.string :userable_type, null: false
      t.timestamps
    end
  end
end
