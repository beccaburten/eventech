class Api::LikesController < ApplicationController

    def create
        @user_id = current_user.id
        @event_id = params[:event_id]
        like = Like.new({user_id: @user_id, event_id: @event_id})
        if like.save!
            render :show
        else
            render like.errors.full_messages, status: 422
        end
    end

    def destroy
        like = current_user.likes.where(event_id: params[:event_id])[0]
        like.destroy
        @user_id = current_user.id
        @event_id = params[:event_id] 
        render :show
    end

end

