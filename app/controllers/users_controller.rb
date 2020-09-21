class UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render : ###JBUILDER GOES HERE??
        else
            flash.now[:errors] = @user.errors.full_messages
            render :new ###JBUILDER GOES HERE
        end
    end

    private

    def user_params
        params.require(:user).permit(:email, :password)
    end

end
