class IndexUserables < ActiveRecord::Migration[5.2]
  def change
    add_index :userables, :event_id
    add_index :userables, :userable_id
  end
end
