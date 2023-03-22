class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        user = User.create!(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {error: ["Not valid"]}, status: :unauthorized
        end
    end

    def show
        render json: @current_user
    end

    def create
        @user = User.new(user_params)
        if @user.save
          redirect_to user_path(@user)
        else
          render :new
        end
      end

    private

    def user_params
        params.permit(:username, :email, :avatar, :password, :password_confirmation)
    end
end
