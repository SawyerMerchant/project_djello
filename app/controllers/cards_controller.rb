class CardsController < ApplicationController
  before_action :authenticate_user!
  before_action :setList, only: [:create, :update]

  def index
    @cards = Card.all_by_list_id(params[:list_id])
    respond_to do |format|
      format.json { render json: @cards }
    end
  end

  def create
    @card = @list.cards.build(create_params)
    if @card.save
      respond_to do |format|
        format.json { render json: @card }
      end
    else
      respond_to do |format|
        format.json { render json: @card.errors.full_messages }
      end
    end
  end

  def update
    @card = @list.cards.find(params[:card][:id])
    if @card.update(update_params)
      respond_to do |format|
        format.json { render json: @card.to_json() }
      end
    else
      respond_to do |format|
        format.json { render json: @card.errors.full_messages }
      end
    end
  end

  def destroy
    @card = Card.find(params[:id])
    if @card.destroy
      respond_to do |format|
        format.json { render json: { status: "ok" } }
      end
    else
      respond_to do |format|
        format.json { render json: @card.errors.full_messages }
      end
    end
  end

  private

    def create_params
      params.require(:card).permit(:title, :description, :list_id)
    end

    def update_params
      params.require(:card).permit(:id, :title, :description, :list_id, :created_at, :updated_at)
    end

    def setList
      @list = List.find(params[:card][:list_id])
    end

end
