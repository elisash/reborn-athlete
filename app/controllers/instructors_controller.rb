class InstructorsController < ApplicationController
    def index
        instructor = Instructor.all
         render json: instructor
     end
     def create
         instructor = Instructor.create!(instructor_params)
         render json: instructor, status: :created
     end

    #  def delete
    #      instructor = Instructor.find(params[:id])
    #      instructor.destroy
    #      render json: instructor, status: :deleted
    #  end
    def destroy
        @instructor = Instructor.find(params[:id])
        if @instructor.destroy
          flash[:notice] = "Instructor was successfully deleted."
          redirect_to instructors_path
        else
          flash[:alert] = "There was an error deleting the instructor."
          redirect_to instructors_path
        end
      end
 
     private
 
     def instructor_params
         params.permit( :name, :class_name, :instruct, :description, :hourly_rate, :image
         )
 end
end
