Rails.application.routes.draw do
  devise_for :users

  root 'static_pages#index'

  scope :api do
    scope :v1 do
      resources :boards
      resources :lists
      resources :cards
      resources :boards_users
      resources :users, only: [:index]
      resources :boards_users, only: [:new]
    end
  end

end
