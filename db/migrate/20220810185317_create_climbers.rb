class CreateClimbers < ActiveRecord::Migration[6.1]
  def change
    create_table :climbers do |t|
      t.string :name
      t.string :password_digest
      t.string :email

      t.timestamps
    end
  end
end
