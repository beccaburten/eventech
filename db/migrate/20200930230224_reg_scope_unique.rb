class RegScopeUnique < ActiveRecord::Migration[5.2]
  def change
    add_index :registrations, [:user_id, :event_id], unique: true
  end
end
