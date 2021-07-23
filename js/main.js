// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

  window.fbAsyncInit = function() {
    FB.init({
      appId      : '515064459747486',
      cookie     : true,
      xfbml      : true,
      version    : 'v11.0'
    });
      
    FB.AppEvents.logPageView();   
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));




$(".nav-link").click(function () {
  var href = $(this).attr('href');
  $('html,body').animate({
      scrollTop: $(href).offset().top + -100
    },
    'fast');
});

$(window).on('scroll', e => {
  $('section').each(function () {
    if ($(this).offset().top - 140 < $(window).scrollTop()) {
      let id = '#nav-' + $(this).attr('id');
      $('.navbar-nav .nav-link').removeClass('active')
      $('.navbar-nav .nav-link' + id).addClass('active')
    }
  })
})

$(window).scroll(function () {

  if ($(window).scrollTop() > 500) {
    $('.navbar').removeClass('transparent');
  }

  if ($(window).scrollTop() < 501) {
    $('.navbar').addClass('transparent');
  }
});