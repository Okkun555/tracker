class CreateProfiles < ActiveRecord::Migration[7.1]
  def change
    create_table :profiles do |t|
      t.references :user, null: false
      t.string :name, null: false, limit: 100, comment: 'アカウント名'
      t.string :introduction, limit: 250, comment: '自己紹介'
      t.date :birthday, null: false, comment: '生年月日'
      t.integer :gender, limit: 2, null: false, default: 1, comment: '性別'

      t.timestamps
    end

    add_foreign_key :profiles, :users
    add_index :profiles, :name, unique: true
  end
end
