class UsersController < ApplicationController

    def authenticate(email)
        user = User.find_by_email(email) #can I access email from body params of input???
        user ? render ['true'] : render ['false'] #returns json?
    end

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render :user ###THIS RENDERS MY USER INFO
        else
            render @user.errors.full_messages 
        end
    end

    private

    def user_params
        params.require(:user).permit(:email, :password)
    end

end
