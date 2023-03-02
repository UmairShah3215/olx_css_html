$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',

    nav: false,
    dots: false,
    autoplay:true,
    items: 1,
    margin: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})