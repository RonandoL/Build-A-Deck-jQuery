$(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    // Use a forEach() loop within a forEach() loop

    // build an array that represents a deck of cards

    // then display a list of every card in the deck.


  });



  // Jumbotron background image - goes inside UI Logic
  var jumboHeight = $('.jumbotron').outerHeight();
    function parallax(){
        var scrolled = $(window).scrollTop();
        $('.bg').css('height', (jumboHeight-scrolled) + 'px');
    }

    $(window).scroll(function(e){
        parallax();
    });

});
