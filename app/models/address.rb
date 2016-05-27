class Address < ActiveRecord::Base
  attr_accessor :code, :name
  belongs_to :state
end