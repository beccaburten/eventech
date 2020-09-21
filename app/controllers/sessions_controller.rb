class SessionsController < ApplicationController

    before_action :ensure_logged_in, only: [:destroy]
    before_action :authenticate_user, [:create]

    def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password])
        if @user
            login!(@user)
            render "api/users/show"  #Redirects to users/show.json.jbuilder
        else
            render @user.errors.full_messages, status: 404
        end
    end

   

    def destroy
        logout!
        render ['Logout successful'] ##just data being sent
    end
end
