class CustomerDetail < ActiveRecord::Base
  self.primary_key = 'customer_id'

  Parameters = {"customer_id"=>402112,
                "first_name"=>"Alina",
                "last_name"=>"Ziemann",
                "email"=>"amiya.douglas4@schulistwhite.name",
                "username"=>"amari.bosco4",
                "joined_at"=>"2016-05-27T14:28:13.482Z",

                "billing_address_id"=>6756,
                "billing_street"=>"775 Bartell Crossroad",
                "billing_city"=>"Greenton",
                "billing_state"=>"DC",
                "billing_zipcode"=>"12336-5806",

                "shipping_address_id"=>6757,
                "shipping_street"=>"69496 Winnifred Green",
                "shipping_city"=>"Port Jessica",
                "shipping_state"=>"NY",
                "shipping_zipcode"=>"70465",
                "id"=>"402112",

                "customer"=>{"first_name"=>"Alina", "last_name"=>"Ziemann", "email"=>"amiya.douglas4@schulistwhite.name", "username"=>"amari.bosco4"}}

  def update(params)
    Customer.find(self.customer_id).update(
        params.permit(:first_name, :last_name, :username, :email))
    Address.find(self.billing_address_id).update(
        address_attributes(params,"billing"))
    Address.find(self.shipping_address_id).update(
        address_attributes(params, "shipping"))
  end

  private
  def address_attributes(params,type)
    {
        street: params["#{type}_street"],
        city: params["#{type}_city"],
        state: State.find_by_code(params["#{type}_state"]),
        zipcode: params["#{type}_zipcode"],
    }
  end
end