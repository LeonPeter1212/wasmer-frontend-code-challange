$(document).ready(function () {

    if ($(".owl-carousel").length > 0) {
        setTimeout(() => {
            $(".owl-carousel").owlCarousel({
                autoPlay: true,
                items: 10,
			});
        }, 500);
    } 
	
});
