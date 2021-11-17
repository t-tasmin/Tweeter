$(document).ready(function() {
  
  
  $("textArea").on('keyup', function() {
    const LENGTH = 140 - event.target.value.length;
    
    if (LENGTH < 0) {
      $(this).parent().children('div').children('output').css("color", "red");
    } else {
      $(this).parent().children('div').children('output').css("color", "black");
    }

    $(this).parent().children('div').children('output').text(LENGTH);
  });
  
  // $(this).parent().children('div').children('output') or $('.counter')
  
});