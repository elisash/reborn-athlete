class EventsController < ApplicationController
    # skip_before_action :authorize, only: :create
   
    def index
        event = Event.all
        render json: event
    end
    def show
        event = Event.find(params[:id])
        render json: event
    end
    def create
        event = Event.create!(event_params)
        render json: event, status: :created
    end
    def destroy
       @event = Event.find(params[:id])
        if@event.destroy
          flash[:notice] = "Event was successfully deleted."
          redirect_to events_path
        else
          flash[:alert] = "There was an error deleting the event."
          redirect_to events_path
        end
      end
      

    private

    def event_params
        params.permit(:organizer,  :sport, :comments,  :sort,  :category, :level, :spots_available, :time, :location, :price_per_player, :date)
    end
end
