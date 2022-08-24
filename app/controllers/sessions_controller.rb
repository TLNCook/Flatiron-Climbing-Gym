class SessionsController < ApplicationController
     # POST '/login'
     def create
        climber = Climber.find_by_name(params[:name])
        if climber&.authenticate(params[:password])
          session[:climber_id] = climber.id
          render json: climber, status: :ok
        else
          render json: "Invalid Credentials", status: :unauthorized
        end
      end

      # DELETE '/logout'
      def destroy
        session.delete(:climber_id)
      end
end
