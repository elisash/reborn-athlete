class ClocksController < ApplicationController
    def index
       clock = Clock.all
         render json: clock
     end
end
