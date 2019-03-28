(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.dropdown-trigger').dropdown({
      constrainWidth : false, 
      coverTrigger : false
      });
    $('.tap-target').tapTarget();
    // $('.carousel.carousel-slider').carousel({
    //   fullWidth: true,
    //   indicators: true,
    // });
    $('.carousel_slick ').slick({
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space
