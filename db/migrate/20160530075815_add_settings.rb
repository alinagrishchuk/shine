class AddSettings < ActiveRecord::Migration
  def up
    enable_extension :hstore
    add_column :users, :setting, :hstore, default: {}
  end

  def down
    remove_column :users, :setting
    disable_extension :hstore
  end
end
