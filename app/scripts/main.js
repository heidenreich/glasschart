/* jshint devel:true */
'use strict';
console.log('Welcome to Glasschart. Enjoy your visit.');


$(document).ready(function(){

  //start fullpage plugin

  if(screen.width < 480) { 
    // do any 480 width stuff here, or simply do nothing
    return;
  } else {
    // do all your cool stuff here for larger screens
  	$('#fullpage').fullpage({
      paddingTop: '20px',
      fixedElements: '#nav',
      anchors: ['home', 'glasschart', 'smarthands', 'team', 'secret'],
      menu: '#nav',
    });
  }
  

  // make embedded videos responsive with fitvid plugin
  $("#secret-section-video").fitVids();

  // toggle the menu list items for navigation
  
  $("#nav ul li a[href^='#']").on('click', function(e) {  
    $('#content').toggle('show');
  });


  $('#hideshow').on('click', function(event) {        
		$('#content').toggle('show');
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