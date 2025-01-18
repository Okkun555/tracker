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

  def create
    if current_user.profile
      render json: {
        message: 'プロフィールは既に作成されています。'
      }, status: :bad_request
    else
      profile = current_user.build_profile(profile_params)
      if profile.save!
        render json: {
          id: profile.id,
          name: profile.name,
          introduction: profile.introduction,
          birthday: profile.birthday,
          gender: profile.gender
        }, status: :created
      end
    end
  end

  def update
  end

  private

  def profile_params
    params.require(:profile).permit(:name, :introduction, :birthday, :gender)
  end
end
