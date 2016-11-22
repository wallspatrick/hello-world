$(document).ready(function() {
   $('img').mouseenter(function() {
       $('img').fadeTo('fast',0.5);
   });
       $('img').mouseleave(function() {
       $('img').fadeTo('fast',1.00);
   });
});
$(document).ready(function() {
    $('h1').click(function() {
        $(this).toggleClass('highlighted');
    });
});