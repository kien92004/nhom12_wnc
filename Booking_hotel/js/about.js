$(document).ready(function(){
    
    $('.slide__banner').owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        nav: true,
        navText: ["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>"],
        animateOut: 'fadeOut',
        // autoplay: true,
        // autoplayTimeout: 2000,
        smartSpeed: 1000,
        responsive:{
            0:{
                items:1
            },
            820:{
                items:1
            },
            1300:{
                items:1
            }
        }
    })

    $('.slide__st__rooms').owlCarousel({
        loop: false,
        margin: 30,
        dots: false,
        nav: false,
        navText: ["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>"],
        animateOut: 'fadeOut',
        // autoplay: true,
        // autoplayTimeout: 2000,
        smartSpeed: 1000,
        responsive:{
            0:{
                items:1
            },
            820:{
                items:2
            },
            1300:{
                items:3
            }
        }
    })

    $('.slide__st__facilities').owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        nav: false,
        center: true,
        navText: ["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>"],
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        responsive:{
            0:{
                items:1
            },
            820:{
                items:2
            },
            1300:{
                items:3
            }
        }
    })

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        // fade: true,
        asNavFor: '.slider-nav',
        arrows: false,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-chevron-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa-solid fa-chevron-right' aria-hidden='true'></i></button>",
    });
    $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        // centerMode: true,
        focusOnSelect: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 0,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 5
                }
            }

        ]
    });

    $('.slide__client').owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        nav: false,
        navText: ["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>"],
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        responsive:{
            0:{
                items:1
            },
            820:{
                items:1
            },
            1300:{
                items:2
            }
        }
    })

    $('.slide__article').owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        nav: false,
        navText: ["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>"],
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        responsive:{
            0:{
                items:1
            },
            820:{
                items:2
            },
            1300:{
                items:3
            }
        }
    })

    $('.slide__ins').owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        nav: false,
        navText: ["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>"],
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        responsive:{
            0:{
                items:2
            },
            820:{
                items:3
            },
            1300:{
                items:6
            }
        }
    })

    $('.slider-for-rooms').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        // fade: true,
        asNavFor: '.slider-nav-rooms',
        arrows: false,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-chevron-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa-solid fa-chevron-right' aria-hidden='true'></i></button>",
    });
    $('.slider-nav-rooms').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for-rooms',
        dots: false,
        // centerMode: true,
        focusOnSelect: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 0,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 4
                }
            }

        ]
    });


    $('.main__special__menu').owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        nav: false,
        navText: ["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>"],
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        responsive:{
            0:{
                items:1
            },
            820:{
                items:2
            },
            1300:{
                items:3
            }
        }
    })

    $('.slide__restaurant').owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        nav: false,
        navText: ["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>"],
        animateOut: 'fadeOut',
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        responsive:{
            0:{
                items:1
            },
            820:{
                items:1
            },
            1300:{
                items:1
            }
        }
    })
})

 

$(window).scroll(function () {
    if ($(this).scrollTop() >= 300) {
        $('.back-to-top').addClass('animate');
    }
    else {
        $('.back-to-top').removeClass('animate');
    }


    if ($(this).scrollTop() > 200) {
        $('header').addClass('active');
    }
    else {
        $('header').removeClass('active');
    }
    
})

$('.back-to-top').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
});
// $('.counter').counterUp({
//     delay: 10,
//     time: 2000
// });
$('.counter').counterUp();
$('.counter').addClass('animated fadeInDownBig');

$(document).ready(function(){
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');
		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

        $(this).addClass('current');
		$("#"+tab_id).addClass('current');
	}) 
    $('ul.tabs__menu li').click(function(){
		var tab_id2 = $(this).attr('data-tabs');
		$('ul.tabs__menu li').removeClass('current');
		$('.tab-content').removeClass('current');

        $(this).addClass('current');
		$("#"+tab_id2).addClass('current');
	}) 
}); 

$('[data-fancybox]').fancybox({
    buttons: [
        'close'
    ],
    wheel: false,
    transitionEffect: "slide",
    // thumbs          : false,
    // hash            : false,
    loop: false,
    // keyboard        : true,
    toolbar: true,
    // animationEffect : false,
    // arrows          : true,
    clickContent: false,
    hash: false,
    infobar: false,
});

