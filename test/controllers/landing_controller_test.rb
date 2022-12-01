require "test_helper"

class LandingControllerTest < ActionDispatch::IntegrationTest
  test "should not create message without title" do
    message = Message.new
    assert_not_equal Message.create, "create the Message without a title"
  end
end
