class DropUserables < ActiveRecord::Migration[5.2]
  def change
    drop_table :userables
  end
end
