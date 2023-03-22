class InstructorSerializer < ActiveModel::Serializer
  attributes :id, :name, :class_name, :instruct, :description, :hourly_rate, :image
end
