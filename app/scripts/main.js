/* jshint devel:true */
console.log('Welcome to Glasschart. Enjoy your visit.');


$(document).ready(function(){
	
  // toggle the menu list items for navigation
  $('#hideshow').on('click', function(event) {        
		$('#content').toggle('show');
	});

  // smooth out the scroll when navigating on page
  $("#nav ul li a[href^='#']").on('click', function(e) {

    //clear out the nav list after nav click
    $('#content').toggle('show');

   // prevent default anchor click behavior
    e.preventDefault();

   // store hash
    var hash = this.hash;

   // animate
    $('html, body').animate({
       scrollTop: $(hash).offset().top + 40
      }, 1000, function(){

      // when done, add hash to url
      // (default click behaviour)
      window.location.hash = hash;
    });
  });

  // rotate hamburger back to original postion on navclick
  // set the angle to use in functions below
  var angle = 0;
  $("#nav ul li").click(function(){
      angle = (angle + 90) % 360;
      $(".nav-menu").css("webkit-transform", "rotate(" + angle + "deg)");
  });

  /// turn that menu hamburger on click
  // var angle = 0;
  $("#hideshow").click(function(){
      angle = (angle + 90) % 360;
      $(".nav-menu").css("webkit-transform", "rotate(" + angle + "deg)");
  });



});