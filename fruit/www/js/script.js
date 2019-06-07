jQuery(function($){
	"use script";

if($('.fa-bars').length){
  $('.fa-bars').on('click',function(){
      $('.header_top .inner_header nav>ul').show();
      $(this).hide();
      $('.fa-times').show();

      if ($(window).width() <= '414'){
        $('.mobile_navigation').show();
      } else {
        $('.mobile_navigation').hide;
      }
  });

   $('.fa-times').on('click',function(){
      $('.header_top .inner_header nav>ul').hide();
      $(this).hide();
      $('.fa-bars').show();
      $('.mobile_navigation').hide();
  });
}




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
      nextArrow: "<div class=\"right\"><i class=\"fas fa-arrow-right\"></i></div>",
      responsive: [
       {
          breakpoint: 960,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 420,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        
      ]
    });
  }

  if($('.testimonials_carousel').length){
    $('.testimonials_carousel').slick({
      infinite:true,
      slidesToShow:3,
      slidesToScroll:1,
      appendArrows: $('.testimonial_slider_box'),
      prevArrow: "<div class=\"left_arrow\"><div class=\"left\"><i class=\"fas fa-arrow-left\"></i></div></div>",
      nextArrow: "<div class=\"right_arrow\"><div class=\"right\"><i class=\"fas fa-arrow-right\"></i></div></div>",
      responsive: [
       {
          breakpoint: 960,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 420,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        
      ]
    });
    $('.testimonials_carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      var tabs_container = $('.testimonial_tab_container');
      tabs_container.find($('.tab-item')).hide();
      tabs_container.find($('.tab-' + nextSlide)).show();
      console.log(nextSlide);
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

  if($('.contenet_slider_twitter').length){
      $('.contenet_slider_twitter').slick({
      vertical:true,
      appendArrows: $('.twit_slider .arrows'),
      prevArrow: "<div class=\"up\"><i class=\"fas fa-arrow-up\"></i></div>",
      nextArrow: "<div class=\"down\"><i class=\"fas fa-arrow-down\"></i></div>"
      
    });
  }

        
});    
