class Api::UsersController < ApplicationController

    def authenticate
        user = User.find_by_email(params[:email]) #params access body params of input???
        if user
            render json: ['true'], status: 200 
        else 
            render json: ['false'], status: 404 #data isn't used but status will allow for a fail callback
        end
    end

    def create
        # debugger
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render :show ###THIS RENDERS MY USER INFO
        else
            render @user.errors.full_messages 
        end
    end
    
    private

    def user_params
        params.require(:user).permit(:email, :password, :fname, :lname)
    end

end
