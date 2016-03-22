$(function() {
  $('button').click(function() {
    var suits = ['Clubs', 'Spades', 'Hearts', 'Diamonds'];
    var numbers = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
    var deck = [];
    var of = " of ";

    suits.forEach(function(suit) {
      numbers.forEach(function(number) {
        deck.push(number + of + suit);
      });
    });

    $('#theDeck').empty();
    $('#results').show();
    deck.forEach(function(card) {
      $('#theDeck').append('<li>' + card + '</li>');
    });

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
