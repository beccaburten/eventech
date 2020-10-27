class Api::EventsController < ApplicationController

    def index
        @events = Event.all
        render :index 
    end
    
    def create
        @event = Event.new(event_params)
        # @event.organizer_id = current_user.id
        #  
        if @event.save
            # redirect_to '/api/events', status: 303
            render :show
        else
            render @event.errors.full_messages
            # render json: ['Event create unsuccessful']
        end
    end

    def show
        @event = Event.find(params[:id]) # do I need .includes() for O(1) organizer & category?
        if current_user
            @regId = current_user.registrations.where(event_id: @event.id).pluck(:id)[0]
        else
            @regId = 'undefined'
        end
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
        .permit(:title, :date, :start_time, :end_date, :end_time, :category_id, :organizer_id, :registration_type, :description, :photo, :url)
    end

end

#    api_events GET    /api/events(.:format)            api/events#index {:format=>:json}
#               POST   /api/events(.:format)            api/events#create {:format=>:json}
# new_api_event GET    /api/events/new(.:format)        api/events#new {:format=>:json}
#edit_api_event GET    /api/events/:id/edit(.:format)   api/events#edit {:format=>:json}
#     api_event GET    /api/events/:id(.:format)        api/events#show {:format=>:json}
#               PATCH  /api/events/:id(.:format)        api/events#update {:format=>:json}
#               DELETE /api/events/:id(.:format)        api/events#destroy {:format=>:json}

