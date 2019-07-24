Rails.application.routes.draw do
  namespace :api , defaults: {format: :json} do
    namespace :v1 do
      resources :users
      post '/auth/login', to: 'authentication#login'

      get '/*a', to: 'application#not_found'
    end
  end
end
