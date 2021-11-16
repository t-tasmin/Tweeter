$(document).ready(function() {
  
  
  $("textArea").on('keyup', function () {
    if (140-event.target.value.length<0){
      $(this).parent().children('div').children('output').css( "color", "red");
    }
    $(this).parent().children('div').children('output').text(140-event.target.value.length);
  });
  
// $(this).parent().children('div').children('output') or $('.counter') 
  
});