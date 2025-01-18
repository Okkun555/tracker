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
      return render json: {
        message: 'プロフィールは既に作成されています。'
      }, status: :bad_request
    end

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

  def update
    profile = current_user.profile
    if profile.nil?
      return render json: {
        message: 'プロフィールが見つかりませんでした。'
      }, status: :not_found
    end

    if profile.update(profile_params)
      render json: {
        id: profile.id,
        name: profile.name,
        introduction: profile.introduction,
        birthday: profile
      }, status: :ok
    end
  end

  private

  def profile_params
    params.require(:profile).permit(:name, :introduction, :birthday, :gender)
  end
end
