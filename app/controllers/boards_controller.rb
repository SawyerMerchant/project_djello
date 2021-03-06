require 'pry'

class BoardsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_board, except: [:index, :create, :show]

  def index
    @ownedBoards = current_user.ownedboards
    @sharedBoards = current_user.boards
    @boards = @ownedBoards + @sharedBoards
    respond_to do |format|
      format.json { render json: @boards.to_json(include: {
        lists: { include: {cards: {include: :users} } },
        users: {}
      })}
    end
  end

  # format.json { render json: @boards.to_json(include: {
  #   lists: { include: :cards },
  #   users: {}
  # })}

  def show
    @users = @board.users
    respond_to do |format|
      format.json { render json: @board.to_json(include: {
        lists: { include: :cards },
        users: :users
      })}
    end
  end

  def create
    @board = current_user.ownedboards.build(board_params)
    respond_to do |format|
      if @board.save
        flash.now[:success] = 'Board created'
        format.json { render json: resource_to_json, status: 201 }
      else
        flash.now[:error] = 'Board not created',
        format.json { render json: board_errors, status: 422 }
      end
    end
  end

  def update
    respond_to do |format|
      if @board.update(board_params)
        flash.now[:success] = 'Board updated'
        format.json { render json: resource_to_json, status: 200 }
      else
        flash.now[:error] = 'Board not updated'
        format.json { render json: board_errors, status: 422 }
      end
    end
  end

  def destroy
    respond_to do |format|
      if @board.destroy
        flash.now[:success] = 'Board destroyed'
        format.json { render json: resource_to_json, status: 200 }
      else
        flash.now[:error] = 'Board not destroyed'
        format.json { render json: board_errors, status: 422 }
      end
    end
  end


  private
  def set_board
    @board = current_user.boards.find_by_id(params[:id])
    unless @board
      flash.now[:error] = 'Board not found'
      respond_to do |format|
        format.json { render json: board_errors, status: 422 }
      end
    end
  end

  def board_params
    params.require(:board).permit(:title, :id)
  end

  def board_errors
    if @board
      errors = @board.errors.full_messages.to_json
    else
      errors = flash.now[:error]
    end
    { errors: errors }
  end

  def resource_to_json
    resource = action_name == 'index' ? @boards : @board
    resource.to_json
  end
end
