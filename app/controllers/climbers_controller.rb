class ClimbersController < ApplicationController
    def index
        render json: Climber.all
    end
    def show
        climber = Climber.find(params[:id])
        render json: climber, serializer: ClimberWithReviewsSerializer
    end
    def create
        climber = Climber.create!(climber_params)
        session[:climber_id] = climber.id
        render json: climber, status: :ok
    end

    private
    
    def climber_params
        params.permit(:name, :email, :password)
    end

end
