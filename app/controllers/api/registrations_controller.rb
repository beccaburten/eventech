class Api::RegistrationsController < ApplicationController

    def index  
        if current_user
            # @registrations = []
            # current_user.registrations.each do |reg|  # array of registration objects
            #     id = reg.id
            #     event = { [id]: Event.find(reg.event_id)}
            #     @registrations.push(event)
            #   # returns object with registration id pointing to event object?
            #   # id needed so you can unregister from index page
            # end
            @registrations = current_user.registrations
            render :index #takes array of objects {registration_id: {Event object}}
        else
            render json: ["Must log in to see registrations."]
        end
    end

    def create
        @registration = Registration.new(registration_params)
        if @registration.save!
            @user = current_user
            render "/api/users/show" #this will send user info w updated registration
            # render json: ["Registration successful."]
        else
            render @registration.errors.full_messages
        end
    end

    def destroy
         @registration = Registration.find(params[:id])
        if @registration.destroy
            render json: ['Unregistered successfully.']
        else
            render json: ['Something went wrong'], status: 422
        end
    end

    private
    
    def registration_params
        params.require(:registration).permit(:user_id, :event_id)
    end


end