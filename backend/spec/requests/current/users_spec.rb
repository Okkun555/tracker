require 'rails_helper'

RSpec.describe 'Current::Users', type: :request do
  describe 'GET /show' do
    let(:test_user) { create(:user) }
    let(:token) { sign_in(test_user) }

    it 'ログイン中のユーザー情報を取得する' do
      get current_user_path, headers: token
      expect(response).to have_http_status :ok
    end
  end
end
