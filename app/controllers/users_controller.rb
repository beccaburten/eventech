class UsersController < ApplicationController

    def authenticate_user(email)
        User.find_by_email(email)
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
