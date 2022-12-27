$(document).ready(function () {
    //Узнаем количество элементов в слайдере
    $(".slider__list").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        prevArrow: $('.slider__prev'),
        nextArrow: $('.slider__next'),
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});