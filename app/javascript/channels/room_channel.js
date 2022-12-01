import consumer from "channels/consumer"

consumer.subscriptions.create("RoomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
    //console.log('we are live');
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    if(data.body !== null && data.body !== ''){
      $('#msg').append('<div class="message alert alert-secondary">' + data.body + '</div>');
    }
    // Called when there's incoming data on the websocket for this channel
  }
});

var submit_messages;


$(document).on('ready turbolinks:load',function(){
  submit_messages()
})


submit_messages = function() {
  $('#message_content').on('keydown' ,function(event){
    if(event.key === 'Enter') {
      $('input').trigger("click")
      event.target.value = ''
      event.preventDefault()
    }
  })

  $('#btn_submit').on('click', function(){
    setTimeout(function() {
      $('#message_content').val('')
    },100)
  })
}


