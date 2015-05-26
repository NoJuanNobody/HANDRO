$(document).ready(function(){
	// $(window).scroll(function(){
		var lastScrollTop = 0;
	$(window).on('scroll', function(){
		var st = $(this).scrollTop();
		if(st>lastScrollTop){
			$(".main-logo").animate({
				"top": "-=10px",
				"opacity": "-=0.3"
			}, {queue: false});
		}else{
			$(".main-logo").animate({
				"top": "+=10px",
				"opacity": "+=0.3"
			}, {queue: false});
		}
		lastScrollTop = st;
	});


});