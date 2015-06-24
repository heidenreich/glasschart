/* jshint devel:true */
console.log('Welcome to Glasschart. Enjoy your visit.');


jQuery(document).ready(function(){
	
  // toggle the menu list items for navigation
  jQuery('#hideshow').on('click', function(event) {        
		jQuery('#content').toggle('show');
	});


  // smooth out the scroll when navigating on page
  $("#nav ul li a[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
    e.preventDefault();

   // store hash
    var hash = this.hash;

   // animate
    $('html, body').animate({
       scrollTop: $(hash).offset().top
      }, 1000, function(){

      // when done, add hash to url
      // (default click behaviour)
      window.location.hash = hash;
    });
  });

  var angle = 0;
$("#hideshow").click(function(){
    angle = (angle + 90) % 360;
    $(".nav-menu").css("webkit-transform", "rotate(" + angle + "deg)");
    console.log("sup")
});

});