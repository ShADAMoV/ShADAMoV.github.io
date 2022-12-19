$(document).ready(function () {
    //Узнаем количество элементов в слайдере
    let sliderItems = $('.example__item');
    let sliderItemCount = sliderItems.length;

    $(".example__list").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false
    });

    //Создаем столько точке для переключения, сколько элементов в слайдере, но не больше 5-ти
    for (let i = 0; i < sliderItemCount; i++) {
        if (i === 5) {
            break;
        }

        if (i === 0) {
            $('<div>', {
                class: 'example__dots-item example__dots-item_active'
            }).appendTo('.example__dots');

            continue;
        }

        $('<div>', {
            class: 'example__dots-item'
        }).appendTo('.example__dots');
    }

    //Ниже страшная логика для правильного переключения между точками...

    if (sliderItemCount <= 5) {
        $('.example__list').on('afterChange', function () {
            let dotItems = $(".example__dots-item")
            let currentSlide = $('.example__list').slick('slickCurrentSlide');

            dotItems[currentSlide].classList.add("example__dots-item_active")
            $('.example__dots-item').not(dotItems[currentSlide]).removeClass('example__dots-item_active')
        })
    }

    /*Если больше 5-ти элементов в слайдере, зациклиться на третьей точке до того, пока
    не будет достигнут предпоследний элемент в слайдере*/
    if (sliderItemCount > 5) {
        $('.example__list').on('afterChange', function () {
            let dotItems = $(".example__dots-item")
            let currentSlide = $('.example__list').slick('slickCurrentSlide');

            if (currentSlide < sliderItemCount - 2) {
                dotItems[2].classList.add("example__dots-item_active")
                $('.example__dots-item').not(dotItems[2]).removeClass('example__dots-item_active')
            } else if (currentSlide === sliderItemCount - 2) {
                dotItems[3].classList.add("example__dots-item_active")
                $('.example__dots-item').not(dotItems[3]).removeClass('example__dots-item_active')
            } else if (currentSlide === sliderItemCount - 1) {
                dotItems[4].classList.add("example__dots-item_active")
                $('.example__dots-item').not(dotItems[4]).removeClass('example__dots-item_active')
            } else {
                dotItems[currentSlide].classList.add("example__dots-item_active")
                $('.example__dots-item').not(dotItems[currentSlide]).removeClass('example__dots-item_active')
            }
        })
    }

    //При загрузке страницы заполянем блок с ценой данными из первого item
    $('.example__dots-wrapper').find('span')[0].textContent = sliderItems.find('span')[0].textContent

    /*Скрипт снизу нужен для того, чтобы когда у нас имеется больше 5-ти элементов в 
    слайдере, просиходило правильное переключение между первыми двумя точками
    Так же берем из текущего item цену и вставляем ее в скрытый до 900px блок*/
    $('.example__list').on('afterChange', function () {
        let dotItems = $(".example__dots-item")
        let currentSlide = $('.example__list').slick('slickCurrentSlide');

        if (currentSlide <= 2) {
            dotItems[currentSlide].classList.add("example__dots-item_active")
            $('.example__dots-item').not(dotItems[currentSlide]).removeClass('example__dots-item_active')
        }

        $('.example__dots-wrapper').find('span')[0].textContent = sliderItems.find('span')[currentSlide].textContent
    })
});