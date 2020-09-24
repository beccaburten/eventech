class Api::EventsController < ApplicationController

    def index
        @events = Event.all
        render :index 
    end
    
    def create
        @event = Event.new(event_params)
        if @event.save!
            render :show
        else
            render @event.errors.full_messages
        end
    end

    def show
        @event = Event.find(params[:id])
        render :show
    end

    def update
        @event = Event.find(params[:id])
        if  @event.user_id == current_user.id && @event.update(event_params)
            render :show
        else
            render @event.errors.full_messages
        end
    end

    def destroy
        @event = Event.find(params[:id])
        if @event.destroy
            render json: ['Event deleted successfully']
        else
            render json: ['Something went wrong']
        end
    end

    private
    def event_params
        params.require(:event)
        .permit(:title, :date, :start_time, :end_time, :category_id, :company_id, :registration_type, :promo_pic, :url)
    end
    
end

#    api_events GET    /api/events(.:format)            api/events#index {:format=>:json}
#               POST   /api/events(.:format)            api/events#create {:format=>:json}
# new_api_event GET    /api/events/new(.:format)        api/events#new {:format=>:json}
#edit_api_event GET    /api/events/:id/edit(.:format)   api/events#edit {:format=>:json}
#     api_event GET    /api/events/:id(.:format)        api/events#show {:format=>:json}
#               PATCH  /api/events/:id(.:format)        api/events#update {:format=>:json}
#               DELETE /api/events/:id(.:format)        api/events#destroy {:format=>:json}
