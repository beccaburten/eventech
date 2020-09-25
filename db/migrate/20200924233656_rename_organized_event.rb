class RenameOrganizedEvent < ActiveRecord::Migration[5.2]
  def change
    rename_table :organized_events, :organizations
  end
end
