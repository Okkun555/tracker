FactoryBot.define do
  factory :profile do
    name { Faker::Name.name }
    introduction { Faker::Lorem.sentence }
    birthday { Faker::Date.birthday }
    gender { :man }
    avatar { nil }
    association :user
  end
end
