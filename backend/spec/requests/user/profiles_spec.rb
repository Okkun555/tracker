require 'rails_helper'

RSpec.describe 'User::Profiles', type: :request do
  let(:user) { create(:user) }
  let(:token) { sign_in user }

  subject { response.parsed_body }

  describe 'GET /user/:user_id/profile' do
    context 'プロフィール未作成の場合' do
      it 'ユーザーのプロフィールが存在しない' do
        get user_profile_path(user), headers: token

        expect(response).to have_http_status :not_found
      end
    end

    context 'プロフィール作成済みの場合' do
      let!(:profile) { create(:profile, user: user) }

      it 'ユーザーのプロフィールを取得する' do
        get user_profile_path(user), headers: token

        expect(response).to have_http_status :ok
        expect(subject).to include(
          'id' => profile.id,
          'name' => profile.name,
          'introduction' => profile.introduction,
          'birthday' => profile.birthday.to_s,
          'gender' => profile.gender
        )
      end
    end
  end

  describe 'POST /user/:user_id/profile' do
    let(:params) do
      {
        name: 'テストユーザー',
        introduction: 'テストです。',
        birthday: '1990-01-01',
        gender: 'man'
        
      }
    end

    context 'プロフィール未作成の場合' do
      it 'ユーザーのプロフィールを作成する' do
        post user_profile_path(user), headers: token, params: params

        expect(response).to have_http_status :created
        expect(Profile.last).to have_attributes(
          name: 'テストユーザー',
          introduction: 'テストです。',
          birthday: Date.parse('1990-01-01'),
          gender: 'man'
        )
      end
    end

    context 'プロフィール作成済みの場合' do
      let!(:profile) { create(:profile, user: user) }

      it 'プロフィールの作成に失敗する' do
        post user_profile_path(user), headers: token, params: params

        expect(response).to have_http_status :bad_request
        expect(subject).to include('message' => 'プロフィールは既に作成されています。')
      end
    end
  end

  describe 'PATCH /user/:user_id/profile' do
    let(:params) do
      {
        profile: {
          name: 'テストユーザー',
          introduction: 'テストです。',
          birthday: '1990-01-01',
          gender: 'man'
        }
      }
    end

    context 'プロフィール未作成の場合' do
      it 'プロフィールの更新に失敗する' do
        patch user_profile_path(user), headers: token, params: params

        expect(response).to have_http_status :not_found
        expect(subject).to include('message' => 'プロフィールが見つかりませんでした。')
      end
    end

    context 'プロフィール作成済みの場合' do
      let!(:profile) { create(:profile, user: user) }

      it 'ユーザーのプロフィールを更新する' do
        patch user_profile_path(user), headers: token, params: params

        expect(response).to have_http_status :ok
        expect(Profile.last).to have_attributes(
          name: 'テストユーザー',
          introduction: 'テストです。',
          birthday: Date.parse('1990-01-01'),
          gender: 'man'
        )
      end
    end
  end
end
