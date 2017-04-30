$(document).ready(function () {
  'use strict';
  
/*========================================================================
	Header carousel
==========================================================================*/
  $('.carousel').carousel({
    interval: 5000,
	 pause: 'none'
  });

  
/*========================================================================
	Header Menu 
==========================================================================*/   
	$('.toggle-menu').jPushMenu();
		
/*========================================================================
	Owl cCarousel
==========================================================================*/		
	 $("#hireme_slide").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
	  autoPlay: true
   });	

	$("#sponsor_slide").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 5,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
	  itemsTablet : [768,3],
	  itemsMobile :	[480,1],
	  navigation : true,
	  navigationText : false,
	  pagination : false
	  
 
  });	
	 $("#testmonial_slide").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      autoPlay: 3000,
      paginationSpeed : 400,
      singleItem:true,
	  items : 1, 
	  navigation : false,
   });
		
/*========================================================================
	Wow Animation
==========================================================================*/
	$(".fancybox").fancybox();
			
/*========================================================================
	Wow Animation
==========================================================================*/
	setTimeout(function(){
		$('body').addClass('loaded');
		$('h1').css('color','#222222');
	}, 3000);
	
/*========================================================================
	Wow Animation
==========================================================================*/
  var wow = new WOW({
    mobile: false
  });
  wow.init();


  

});

var index = 0;
var captionLength = 0;
var captionOptions = ["Cristiano Raffi Cunha",".NET CSharp"]

// this will make the cursor blink at 400ms per cycle
function cursorAnimation() {
  $('#cursor').animate({
      opacity: 0
  }, 400).animate({
      opacity: 1
  }, 400);
}

// this types the caption
function type() {
    $caption.html(caption.substr(0, captionLength++));
    if(captionLength < caption.length+1) {
        setTimeout('type()', 70);
    }
}

// this erases the caption
function erase() {
    $caption.html(caption.substr(0, captionLength--));
    if(captionLength >= 0) {
        setTimeout('erase()', 50);
    }
}

// this instigates the cycle of typing the captions
function erase() {
    $caption.html(caption.substr(0, captionLength--));
    if(captionLength >= 0) {
        setTimeout('erase()', 50);
    }
}

// this instigates the cycle of typing the captions
function showCaptions() {
  caption = captionOptions[index];
  type();
  if (index < (captionOptions.length - 1)) {
    index++
    setTimeout('erase()', 4000);
    setTimeout('showCaptions()', 8000)
  } 
  
}


$(document).ready(function(){
  // use setInterval so that it will repeat itself
  setInterval('cursorAnimation()', 600);
  $caption = $('#caption');
  
  // use setTimeout so that it only gets called once
  setTimeout('showCaptions()', 1000);
})