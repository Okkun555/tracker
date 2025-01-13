# spec/validators/past_date_validator_spec.rb
require 'rails_helper'

describe PastDateValidator do
  let(:dummy_model_class) do
    Struct.new(:birthday) do
      include ActiveModel::Validations

      validates :birthday, past_date: true

      def self.name
        'DummyModel'
      end
    end
  end

  subject { dummy_model_class.new(birthday) }

  context '過去日の場合' do
    let(:birthday) { Date.yesterday }

    it '有効であること' do
      expect(subject).to be_valid
    end
  end

  context '当日の場合' do
    let(:birthday) { Date.today }

    it '有効であること' do
      expect(subject).to be_valid
    end
  end

  context '未来日の場合' do
    let(:birthday) { Date.tomorrow }

    it '無効であること' do
      expect(subject).to be_invalid
      expect(subject.errors[:birthday]).to include('は未来日は指定できません')
    end
  end
end