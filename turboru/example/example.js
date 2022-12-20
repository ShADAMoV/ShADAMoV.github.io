$(document).ready(function () {
    //Узнаем количество элементов в слайдере
    let sliderItems = $('.example__item');
    let sliderItemCount = sliderItems.length;

    $(".example__list").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        appendDots: $(".example__dots"),
        arrows: false
    });

    //Создаем столько точке для переключения, сколько элементов в слайдере
    for (let i = 0; i < sliderItemCount; i++) {
        if (i === 0) {
            $('<div>', {
                class: 'example__dots-item example__dots-item_active',
                slideNumber: `${i}`
            }).appendTo('.example__dots');

            continue;
        }

        $('<div>', {
            class: 'example__dots-item',
            slideNumber: `${i}`
        }).appendTo('.example__dots');
    }

    //При загрузке страницы заполянем блок с ценой данными из первого item
    $('.example__dots-wrapper').find('span')[0].textContent = sliderItems.find('span')[0].textContent


    // Переключение активной точки. Так же берем из текущего item цену и вставляем ее в скрытый до 900px блок*/
    $('.example__list').on('afterChange', function () {
        let dotItems = $(".example__dots-item")
        let currentSlide = $('.example__list').slick('slickCurrentSlide');

        dotItems[currentSlide].classList.add("example__dots-item_active")
        $('.example__dots-item').not(dotItems[currentSlide]).removeClass('example__dots-item_active')

        $('.example__dots-wrapper').find('span')[0].textContent = sliderItems.find('span')[currentSlide].textContent
    })

    $(".example__dots-item").on('click', function () {
        $('.example__list').slick('slickGoTo', +$(this).attr('slideNumber'));
    })
});