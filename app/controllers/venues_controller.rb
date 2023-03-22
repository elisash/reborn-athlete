class VenuesController < ApplicationController
    def index
       venue = Venue.all
        render json: venue
    end
    def create
        venue = Venue.create!(venue_params)
        render json: venue, status: :created
    end

    def destroy
       @venue = Venue.find(params[:id])
        if@venue.destroy
          flash[:notice] = "Venue was successfully deleted."
          redirect_to venues_path
        else
          flash[:alert] = "There was an error deleting the venue."
          redirect_to venues_path
        end
      end

    private

    def venue_params
        params.permit(:organizer, :sport, :location, :cost, :capacity, :comment, :image
        )
end

end
