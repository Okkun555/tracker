Rails.application.routes.draw do
  scope :api do
    mount_devise_token_auth_for 'User', at: 'auth'

    namespace :current do
      resource :user, only: [:show]
    end

    resources :user, only: [] do
      resource :profile, only: [:show, :create, :update]
    end

    get "up" => "rails/health#show", as: :rails_health_check
  end
end
