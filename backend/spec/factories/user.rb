FactoryBot.define do
  factory :user do
    sequence :email do |n|
      "sample#{n}@example.com"
    end
    password { 'fizz_buzz' }
    password_confirmation { 'fizz_buzz' }
  end
end