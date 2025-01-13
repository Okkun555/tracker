require 'rails_helper'

RSpec.describe Profile, type: :model do
  let(:user) { create(:user) }
  let(:name) { 'Jon Taro' }
  let(:introduction) { 'I live in Japan.'}
  let(:birthday) { 	Date.new(1990, 1, 1) }
  let(:gender) { :man }

  describe '.first' do
    subject { described_class.first }

    before do
      create(:profile, user: user, name: name, introduction: introduction, birthday: birthday, gender: gender)
    end

    it '作成したProfileを返却する' do
      expect(subject).to have_attributes(
        user: user,
        name: name,
        introduction: introduction,
        birthday: birthday,
        gender: gender.to_s,
      )
    end
  end

  describe 'validations' do
    let(:profile) { Profile.new(user: user, name: name, introduction: introduction, birthday: birthday, gender: gender) }

    describe 'name属性' do
      describe '空文字の場合' do
        let(:name) { nil }

        it 'Profileオブジェクトは無効' do
          expect(profile.valid?).to be(false)
        end
      end

      describe '文字数制限' do
        context 'nameが100文字以下の場合' do
          let(:name) { 'a' * 100 }

          it 'Profileオブジェクトは有効' do
            expect(profile.valid?).to be(true)
          end
        end

        context 'nameが101文字以上の場合' do
          let(:name) { 'a' * 101 }

          it 'Profileオブジェクトは無効' do
            expect(profile.valid?).to be(false)
          end
        end
      end

      describe '同じ名前が存在する場合' do
        let!(:existing_profile) { create(:profile, name: 'unique_name') }
        let(:profile) { build(:profile, name: 'unique_name') }

        it 'Profileオブジェクトは無効' do
          expect(profile.valid?).to be(false)
        end
      end
    end

    describe 'introduction属性' do
      describe '文字数制限' do
        context 'introductionが250文字以下の場合' do
          let(:introduction) { 'a' * 250 }

          it 'Profileオブジェクトは有効' do
            expect(profile.valid?).to be(true)
          end
        end

        context 'introductionが251文字以上の場合' do
          let(:introduction) { 'a' * 251 }

          it 'Profileオブジェクトは無効' do
            expect(profile.valid?).to be(false)
          end
        end
      end
    end

    describe 'birthday属性' do
      describe '空文字の場合' do
        let(:birthday) { nil }

        it 'Profileオブジェクトは無効' do
          expect(profile.valid?).to be(false)
        end
      end

      describe '未来日の場合' do
        let(:birthday) { Date.today + 1 }

        it 'Profileオブジェクトは無効' do
          expect(profile.valid?).to be(false)
        end
      end
    end

    describe 'gender属性' do
      describe '空文字の場合' do
        let(:gender) { nil }

        it 'Profileオブジェクトは無効' do
          expect(profile.valid?).to be(false)
        end
      end
    end
  end
end
