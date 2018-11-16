class SessionsController < ApplicationController

  before_action :require_user!, only: [:destroy]

  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])

    if @user && @user.save
      login(@user)
      redirect_to user_url(@user)
    else
      flash.now[:errors] = "Invalid credentials"
      render :new
    end
  end

  def destroy
    logout
    redirect_to new_sessions_url
  end
end
