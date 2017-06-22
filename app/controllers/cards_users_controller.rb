class CardsUsersController < ApplicationController
  before_action :authenticate_user!

  def create
    @invite = CardsUser.new(cardUserParams)

    respond_to do |format|
      if @invite.save
        flash.now[:success] = 'Member added to card'
        format.json { render json: @invite.to_json, status: 201 }
      else
        flash.now[:error] = 'Faild to add member'
        format.json { render json: @invite.errors.full_messages.to_json, status: 422 }
      end
    end
  end

  private

  def cardUserParams
    params.require(:cards_user).permit(:card_id, :user_id)
  end
end
