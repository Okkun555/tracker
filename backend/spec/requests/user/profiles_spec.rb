require 'rails_helper'

RSpec.describe 'User::Profiles', type: :request do
  let(:user) { create(:user) }
  let(:token) { sign_in user }

  describe 'GET /user/:user_id/profile' do
    subject { JSON.parse(response.body) }

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
end
