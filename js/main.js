// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

$(".nav-link").click(function () {
  var href = $(this).attr('href');
  $('html,body').animate({
    scrollTop: $(href).offset().top + -100
  },
    'fast');
});

$(window).on('scroll', e => {
  $('section').each(function () {
    if ($(this).offset().top - 300 < $(window).scrollTop()) {
      let id = '#nav-' + $(this).attr('id');
      console.log(id);
      $('.navbar-nav .nav-link').removeClass('active')
      $('.navbar-nav .nav-link' + id).addClass('active')
    }
  })
})

$(window).scroll(function () {

  if ($(window).scrollTop() > 0) {
    $('.navbar').removeClass('transparent');
  }

  if ($(window).scrollTop() < 1) {
    $('.navbar').addClass('transparent');
  }
});