$(document).ready(function() {
  var isActive = false,
      origHeight = 70;

  $('.header__hamburger').on('click', function() {
    isActive = !isActive;
    var winHeight = $(window).height();
    $('.header__hamburger').toggleClass("active")

    if(!isActive){

      $('.header__hamburger').animate({
        height: '70',
        width: "70"
      }, 100, function(){ });

      $('.header__ul').animate({
        width: '70',
        height: '70'
      }, 100, function(){ });


    } else {

      $('.header__hamburger').animate({
        height: winHeight,
        width: "100%"
      }, 100, function(){ });

      $('.header__ul').animate({
        height: winHeight,
        width: "100%",
        opacity: 1
      }, 100, function(){ });

    }

  });
});
