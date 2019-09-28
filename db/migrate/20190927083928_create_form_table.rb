class CreateFormTable < ActiveRecord::Migration[6.0]
  def change
    create_table :form_tables do |t|
      t.string :title
      t.string :description
      t.text :form_fields
      t.integer :lock_version
      t.timestamps
    end
  end
end
