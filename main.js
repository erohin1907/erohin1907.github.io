/*$(function(){
	$('.trainers').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  arrows: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
}) 
})*/
$(function(){
	$('.gallery_slider').slick({
		infinite:true,
		slidesToShow:3,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
	})
})
