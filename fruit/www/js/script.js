jQuery(function($){
	"use script";
  if($('.home_slider').length){
      $('.home_slider').slick({
      vertical:true,
      arrows:false,
      dots:true
    });
  }
	

  if($('.shop_carousel').length){
    $('.shop_carousel').slick({
      infinite:true,
      slidesToShow:4,
      slidesToScroll:1,
      appendArrows: $('.shop_slider_navigation'),
      prevArrow: "<div class=\"left\"><i class=\"fas fa-arrow-left\"></i></div>",
      nextArrow: "<div class=\"right\"><i class=\"fas fa-arrow-right\"></i></div>"
    });
  }
  
  
	
  if($('.open_video').length){
      $('.open_video').magnificPopup({
          disableOn: 700,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false
      });
  }

  if($('.testy_gallery').length){
    $('.testy_gallery').magnificPopup({
        type:'image',
        closeOnContentClick:true,
        mainClass:'mfp-img-mobile',
        image:{
          verticalFit:true
        }
    });
  }

        
});    
