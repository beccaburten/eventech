class Api::SessionsController < ApplicationController

    # before_action :ensure_logged_in, only: [:destroy]
    # before_action :authenticate_user, [:create]
    # ^^ using protected frontend routes instead?

    def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password])
        if @user
            login!(@user)
            render "api/users/show", status: 200  #Redirects to users/show.json.jbuilder
        else
            render json: ['Incorrect password'], status: 404
        end
    end

    def destroy
        logout!
        #redirect_to root_url
        render json: ['Logout successful'] ##just data being sent
    end
end
