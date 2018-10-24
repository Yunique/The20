// slick slider
$('.slider').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    mobileFirst: true,
    centerMode: false,
    slidesToShow: 1,
    infinite: true,
    arrows: false,
});


// arrow scrolling
$(document).ready(function() {
    $("a.main__bottom__arrow").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });
    
    
});
