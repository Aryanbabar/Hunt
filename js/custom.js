$(function(){
    // back-to-top;
    $('.back-to-top').click(function(){
        $('html,body').animate({scrollTop:0},1500);
    });
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        if(scrolling > 300){
            $('.back-to-top').fadeIn(500);
        }
        else {
            $('.back-to-top').fadeOut(500);
        }
    });

    //animation scroll js;
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 90
                }, 1500);
                return false;
            }
        }
    });

    // menuber bg;
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        if(scrolling > 100){
            $('.navbar').addClass('navbg');
        }
        else {
            $('.navbar').removeClass('navbg');
        }
    })

    var scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '.navbar',
        offset:80
    });
      

    // banner slick slider;
    $('.banner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows:true,
        autoplaySpeed: 2000,
        prevArrow:'.prev-arrow',
        nextArrow:'.next-arrow',
        fade:true,
        speed:3500,
    });



    // portfolio slick slider;
    $('.portfolio-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows:false,
        autoplaySpeed: 2000,
        centerMode:true,
        centerPadding:false,
        responsive: [
            {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
            }
            },
            {
                breakpoint: 992,
                settings: {
                slidesToShow: 3,
                }
            }
        ]
    });

    // service-slider;
    $('.service-main').slick({
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        prevArrow: ".srcol-down",
        nextArrow: ".srcol-up",
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    // vertical: true,
                    // verticalSwiping: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                }
            }
        ]
    });

    // testimonilas slider;
    $(".testm-cliens-img").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: ".testm-main",
        dots: false,
        arrows: true,
        prevArrow: '.prev',
        nextArrow: '.next',
        vertical: true,
        verticalSwiping: true,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        speed: 1000,
        responsive: [{
                breakpoint: 768,
                settings: {
                    vertical: false,
                    verticalSwiping: false,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    vertical: false,
                    verticalSwiping: false,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    vertical: false,
                    verticalSwiping: false,
                },
            }
        ],
    });
    $(".testm-main").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: ".testm-cliens-img",
    });

    // counterup
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // venubox;
    $('.venobox').venobox();

    // team-area slider;
    $('.team-slide').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows:false,
        autoplaySpeed: 2000,
        centerMode:true,
        centerPadding:false,
        responsive: [
            {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
            },
            {
                breakpoint: 768,
                settings: {
                slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                slidesToShow: 3,
                }
            }
        ]
    });

    // partners slider;
    $('.partners-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        arrows:false,
        autoplaySpeed: 2000,
        centerMode:true,
        centerPadding:false,
        responsive: [
            {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
            }
            },
            {
                breakpoint: 768,
                settings: {
                slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                slidesToShow: 5,
                }
            }
        ]
    });

    


});