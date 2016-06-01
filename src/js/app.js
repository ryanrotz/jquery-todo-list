$(document).ready(function() {

$('#button').click(function(e) {
  var toDoEntered = $('#inputBox').val();
  e.preventDefault();
  $('#list').append('<li>'+toDoEntered+'  <span class="remove">remove</span>'+'</li>');
  $('#inputBox').val('');
  $('#inputBox').focus();
});

$('#list').on('click', 'li', function() {
  $(this).remove();
  $('#inputBox').focus();
});

});
