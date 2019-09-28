Rails.application.routes.draw do

  root to: 'pages#index'

  
  get "/forms", to: 'forms#display_all'
  get "/forms/new", to: 'forms#new'
  get "/forms/create", to: 'forms#create',as: "create"
  get "/forms/:id/edit", to: 'forms#update'
  get "/forms/:id/delete", to: 'forms#delete'
  get "/forms/:id", to: 'forms#show'
  # get "/audits/:id", to: 'audit#show'

end
