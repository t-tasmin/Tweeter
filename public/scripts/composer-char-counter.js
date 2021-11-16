$(document).ready(function() {
  
  
  $("textArea").on('keyup', function () {
    $(this).parent().children('div').children('output').text(140-event.target.value.length);
  });
  

  
});