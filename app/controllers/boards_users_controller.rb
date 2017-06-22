class BoardsUsersController < ApplicationController
  before_action :authenticate_user!

  def create
    @invite = BoardsUser.new(boardUserParams)

    respond_to do |format|
      if @invite.save
        flash.now[:success] = 'Member added to board'
        format.json { render json: @invite.to_json, status: 201 }
      else
        flash.now[:error] = 'Faild to add member'
        format.json { render json: @invite.errors.full_messages.to_json, status: 422 }
      end
    end
  end

  private

  def boardUserParams
    params.require(:boards_user).permit(:board_id, :user_id)
  end
end
