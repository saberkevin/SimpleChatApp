Rails.application.routes.draw do
  get 'landing/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  resources :messages, only: [:new, :create]
  # Defines the root path route ("/")
  # root "articles#index"

  root 'landing#index'
end
