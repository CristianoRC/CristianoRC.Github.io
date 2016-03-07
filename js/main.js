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