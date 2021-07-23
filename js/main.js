// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

$(".nav-link").click(function () {
  var href = $(this).attr('href');
  $(".navbar-nav .nav-link").removeClass('active');
  $(this).addClass('active');
  $('html,body').animate({
      scrollTop: $(href).offset().top + -100
    },
    'fast');
});