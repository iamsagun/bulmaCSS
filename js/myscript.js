$(document).ready(function () {

  $('.mymenu li:has(ul)').click(function (e) {
    e.preventDefault();

    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).children('ul').slideUp();
    } else {
      $('.mymenu li ul').slideUp();
      $('.mymenu li').removeClass('active');
      $(this).addClass('active');
      $(this).children('ul').slideDown();
    }
  });


  $(".toggler").on("click", function () {
    $(".menu-container").toggleClass("active");
  });
  $(".nav-toggler").on("click", function () {
    $(".navbar-toggler").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });
  function setMenuHeight() {
    var navbarHeight = $(".navbar").outerHeight();
    $(".menu-wrapper")
      .outerHeight(document.documentElement.clientHeight - navbarHeight)
      .niceScroll({
        emulatetouch: true
      });
  }
  setMenuHeight();
  $(window).on("resize", function () {
    setMenuHeight();
  });


});