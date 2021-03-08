class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.text :content
      # 既読機能実装時に既読、未読の判断
      t.boolean :checked
      t.timestamps
    end
  end
end
