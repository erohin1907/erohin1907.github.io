$(function(){
	$('.gallery_slider').slick({
		infinite:true,
		slidesToShow:3,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		responsive: [
		{
			breakpoint: 1290,
			settings:{
				infinite:true,
				slidesToShow:2,
				slidesToScroll: 1,
				arrows: true,
				dots: false
			}

		},
		{
			breakpoint: 890,
			settings:{
				infinite:true,
				slidesToShow:1,
				slidesToScroll:1,
				arrows: true,
				dots:false
			}
		}
		]
	})
})
$( document ).ready(function() {
  $('.trigger').on('click', function() {
      $('.modal-wrapper').toggleClass('open');
      $('.page-wrapper').toggleClass('blur-it');
      return false;
  });
  $('.head').on('click', function (){
      $('.modal-wrapper').removeClass('open');
  })
});


$(window).on('beforeunload', function(){
          $(window).scrollTop(0);
    });
