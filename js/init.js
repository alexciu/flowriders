(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.dropdown-trigger').dropdown({
      constrainWidth : false, 
      coverTrigger : false
      });
    $('.tap-target').tapTarget();
    $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: true,
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space
