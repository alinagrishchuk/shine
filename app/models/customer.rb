class Customer < ActiveRecord::Base
  enum status: {
      signed_up: "signed_up",
      verified: "verified",
      inactive: "inactive",
  }
end
