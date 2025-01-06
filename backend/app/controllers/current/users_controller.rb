class Current::UsersController < ApplicationController
  before_action :authenticate_user!

  def show
    @current_user = current_user

    render json: {
      id: @current_user.id,
      email: @current_user.email,
      provider: @current_user.provider,
      allow_password_change: @current_user.allow_password_change,
    }
  end
end
