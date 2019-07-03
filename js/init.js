(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.dropdown-trigger').dropdown({
      constrainWidth : false, 
      coverTrigger : false
      });
    $('.tap-target').tapTarget();
    $('.collapsible').collapsible();
    
  }); // end of document ready
})(jQuery); // end of jQuery name space
