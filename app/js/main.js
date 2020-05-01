$(function() {

    $('.line__box').on('click', function() {
        $('.drop-down__inner').slideToggle();
    });

    wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: false,
        live: true
    })
    wow.init();


});