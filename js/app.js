$(document).ready(function() {

  $('.header__nav').on('click', function() {
    $(this).toggleClass("active");
  });
  $('.header__ul a').on('click', function() {
    $(this).preventDefault();
  });
});
