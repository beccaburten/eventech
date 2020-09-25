class DropOrganization < ActiveRecord::Migration[5.2]
  def change
    drop_table :organizations
    add_column :events, :organizer_id, :integer, null: false
  end
end
