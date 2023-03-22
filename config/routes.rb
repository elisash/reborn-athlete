Rails.application.routes.draw do
  resources :event_users
  

  #Users routes
  post "/signup", to: "users#create"
  get "/me", to: "users#show"

  #Sessions routes
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  #Event routes 
  post "/events", to: "events#create"
  get "/events", to: "events#index"
   get "/events/:id", to: "events#show"
  delete "/events/:id", to: "events#destroy"
  

  #venues routes
  post "/venues", to: "venues#create"
  get "/venues", to: "venues#index"
  delete "/venues/:id", to: "venues#destroy"
  get "/venues/:id", to: "venues#show"

 

# clock routes
get "/clock", to: "clocks#index"

#instructors routes
get "/instructors", to: "instructors#index"
post "/instructors", to: "instructors#create"
delete "/instructors/:id", to: "instructors#destroy"
get "/instructors/:id", to: "instructors#show"
  
  # resources :users
  # # Routing logic: fallback requests for React Router.
  # # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
