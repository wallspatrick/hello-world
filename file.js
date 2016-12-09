$(document).ready(function() {
   $('img').mouseenter(function() {
       $('img').fadeTo('fast',0.5);
   });
       $('img').mouseleave(function() {
       $('img').fadeTo('fast',1.00);
   });
});
$(document).ready(function() {
    $('img').click(function() {
        $(this).fadeOut('slow');
    });
});
$(document).ready(function() {
    $('button').click(function() {
        $('#blue').fadeOut('slow');
    });