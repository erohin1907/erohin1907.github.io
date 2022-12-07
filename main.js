$(document).ready(function(){
  $(".gallery_slider").owlCarousel({
  	loop:true,
  	nav:true,
  	dots:false,
  	responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true,
            dots: false
        },
        800:{
            items:2,
            nav:true,
            dots: false
        },
        1300:{
            items:3,
            nav:true,
            dots:false
        }
    }
  });
});
$(document).ready(function(){
  $(".trainers").owlCarousel({
  	loop:true,
  	nav:true,
  	dots:false,
  	responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true,
            dots: false
        },
        800:{
            items:2,
            nav:true,
            dots: false
        },
        1000:{
            items:3,
            nav:true,
            dots:false
        }
    }
  });
});
$(document).ready(function() {
  $('.trigger').on('click', function() {
      $('.modal-wrapper').toggleClass('open');
      $('.page-wrapper').toggleClass('blur-it');
      $('.bdy').toggleClass('modal-open');
      return false;
  });
  $('.head').on('click', function (){
      $('.modal-wrapper').removeClass('open');
      $('.bdy').removeClass('modal-open');
  })
});
$(document).ready(function(){
      var header = $('header'),
                  btn = $('button.toggle-nav');

      btn.on('click', function(){
            header.toggleClass('active');
      });
});

