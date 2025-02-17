class ApplicationController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken
  include DeviseHackFakeSession

  protected

  def render_not_found
    render json: { 'message' => 'リソースが見つかりません。' }, status: :not_found
  end

  def render_bad_request(message)
    render json: { 'message' => message }, status: :bad_request
  end
end
