class CreateOrganizedEventsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :organized_events do |t|
      t.integer :user_id, null: false
      t.integer :event_id, null: false
    end
    add_index :organized_events, :user_id
    add_index :organized_events, :event_id
  end
end
