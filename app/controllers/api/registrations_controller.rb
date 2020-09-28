class Api::RegistrationsController < ApplicationController

    def index  
        if current_user
            @registrations = current_user.events_attending
        else
            render json: ["Must log in to see registrations."]
        end
    end

    def create
        @registration = Registration.new(registration_params)
        if @registration.save!
            render json: ["Registration successful."]
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