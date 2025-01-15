class User::ProfilesController < ApplicationController
  before_action :authenticate_user!

  def show
    @current_user = current_user
    profile = @current_user.profile

    if profile
      render json: {
        id: profile.id,
        name: profile.name,
        introduction: profile.introduction,
        birthday: profile.birthday,
        gender: profile.gender
      }, status: :ok
    else
      render json: {
        message: 'プロフィールが見つかりませんでした。'
      }, status: :not_found
    end
  end
end
