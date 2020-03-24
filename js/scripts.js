$(document).ready(function() {
  $(".clickable").click(function() {
    $(this).children(".definition").toggle(); 
    $(this).children(".word").toggle();
  });
});