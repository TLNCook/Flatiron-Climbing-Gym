class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.belongs_to :climber, null: false, foreign_key: true
      t.belongs_to :gym, null: false, foreign_key: true

      t.timestamps
    end
  end
end
