require 'rails_helper.rb'

describe "testing that rspec is configured" do
  it "should pass" do
    expect(true).to eq(true)
  end

  it "can fail or not" do
    expect(true).to eq(true)
  end

end