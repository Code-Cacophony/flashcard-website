$(document).ready(function() {
  $(".clickable").click(function() {
    $(this).children(".definition").slideToggle(); 
    $(this).children(".word").slideToggle();
  });
});