class UpdateNullConstraint < ActiveRecord::Migration[5.2]
  def change
    change_column_null :events, :end_date, false
  end
end
