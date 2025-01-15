class Profile < ApplicationRecord
  has_one_attached :avatar
  belongs_to :user

  enum :gender, {
    man: 1, # 男性
    woman: 2, # 女性
    other: 3 # その他
  }

  validates :name, presence: true, length: { maximum: 100 }, uniqueness: true
  validates :introduction, length: { maximum: 250 }
  validates :birthday, presence: true, past_date: true
  validates :gender, presence: true
end
