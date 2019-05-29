jQuery(function($){
	"use script";
	$('.home_slider').slick({
		vertical:true,
		arrows:false,
		dots:true
	});
	
    $(document).ready(function() {
        $('.open_video').magnificPopup({
          disableOn: 700,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,

          fixedContentPos: false
        });
    });
    
})
