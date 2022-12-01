require "test_helper"

class MessagesControllerTest < ActionDispatch::IntegrationTest
  test "create message" do
    msg_params = {"content"=>"test"}

    message = Message.create(msg_params)

    assert_equal "test", message.content
  end
end
