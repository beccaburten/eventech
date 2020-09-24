# == Route Map
#
#                    Prefix Verb   URI Pattern                                                                              Controller#Action
#                      root GET    /                                                                                        static_pages#root
#                 api_users POST   /api/users(.:format)                                                                     api/users#create {:format=>:json}
#                  api_user GET    /api/users/:id(.:format)                                                                 api/users#show {:format=>:json}
#                           PATCH  /api/users/:id(.:format)                                                                 api/users#update {:format=>:json}
#                           PUT    /api/users/:id(.:format)                                                                 api/users#update {:format=>:json}
#          api_authenticate GET    /api/authenticate(.:format)                                                              api/users#authenticate {:format=>:json}
#               api_session DELETE /api/session(.:format)                                                                   api/sessions#destroy {:format=>:json}
#                           POST   /api/session(.:format)                                                                   api/sessions#create {:format=>:json}
#                api_events GET    /api/events(.:format)                                                                    api/events#index {:format=>:json}
#                           POST   /api/events(.:format)                                                                    api/events#create {:format=>:json}
#             new_api_event GET    /api/events/new(.:format)                                                                api/events#new {:format=>:json}
#            edit_api_event GET    /api/events/:id/edit(.:format)                                                           api/events#edit {:format=>:json}
#                 api_event GET    /api/events/:id(.:format)                                                                api/events#show {:format=>:json}
#                           PATCH  /api/events/:id(.:format)                                                                api/events#update {:format=>:json}
#                           PUT    /api/events/:id(.:format)                                                                api/events#update {:format=>:json}
#                           DELETE /api/events/:id(.:format)                                                                api/events#destroy {:format=>:json}
#        rails_service_blob GET    /rails/active_storage/blobs/:signed_id/*filename(.:format)                               active_storage/blobs#show
# rails_blob_representation GET    /rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format) active_storage/representations#show
#        rails_disk_service GET    /rails/active_storage/disk/:encoded_key/*filename(.:format)                              active_storage/disk#show
# update_rails_disk_service PUT    /rails/active_storage/disk/:encoded_token(.:format)                                      active_storage/disk#update
#      rails_direct_uploads POST   /rails/active_storage/direct_uploads(.:format)                                           active_storage/direct_uploads#create

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :show, :update]
    get 'authenticate', to: 'users#authenticate'
    resource :session, only: [:create, :destroy]
    resources :events
  end
end
