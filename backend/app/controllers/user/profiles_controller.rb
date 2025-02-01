class User::ProfilesController < ApplicationController
  before_action :authenticate_user!

  def show
    @profile = current_user.profile
    
    return render_not_found unless @profile
    
    render json: @profile.as_json
  end

  def create
    return render_bad_request 'プロフィールは既に作成されています。' if current_user.profile

    @profile = current_user.build_profile(profile_params)
    ActiveRecord::Base.transaction do
      @profile.save!
      @profile.avatar.attach(profile_params[:avatar]) if profile_params[:avatar]
    end

    render json: @profile.as_json, status: :created
  end

  def update
    profile = current_user.profile
    if profile.nil?
      return render json: {
        message: 'プロフィールが見つかりませんでした。'
      }, status: :not_found
    end

    return unless profile.update(profile_params)

    render json: {
      id: profile.id,
      name: profile.name,
      introduction: profile.introduction,
      birthday: profile
    }, status: :ok
  end

  private

  def profile_params
    params.permit(:name, :introduction, :birthday, :gender, :avatar)
  end
end
