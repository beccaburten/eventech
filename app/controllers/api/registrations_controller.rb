class Api::RegistrationsController < ApplicationController

    def index  
        @user = current_user
        if current_user
            @registrations = current_user.registrations
            render :index 
            #return Event objects to Events reducer
        else
            render json: ["Must log in to see registrations."]
        end
    end

    def create
        @registration = Registration.new(registration_params)
        if @registration.save!
            @user = current_user
            render "/api/users/show" #this will send user info w updated registration
            #return User object with updated registration to User reducer
        else
            render @registration.errors.full_messages, status: 422
        end
    end

    def destroy
         @registration = Registration.find(params[:id])
        #  debugger
        if @registration.destroy
            @user = current_user
            render "/api/users/show"
            #return User object with updated registration to User reducer 
        else
            render json: ['Something went wrong'], status: 422
        end
    end

    private
    
    def registration_params
        params.require(:registration).permit(:user_id, :event_id)
    end


end