class CreateSavedFormations < ActiveRecord::Migration
  def change
    create_table :saved_formations do |t|
      t.string :title
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
