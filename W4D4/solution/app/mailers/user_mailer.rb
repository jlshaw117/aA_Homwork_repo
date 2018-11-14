class UserMailer < ApplicationMailer
  default from: "everybody@appacademy.io"

  def welcome_email(user)
    @user = user
    mail(to: 'example@example.com', subject: 'Welcome to 99 Cats')
  end
end
