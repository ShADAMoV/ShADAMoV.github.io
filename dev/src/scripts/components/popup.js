window.addEventListener("load", function () {
    const popupButtons = document.querySelectorAll(".example__button");

    /*Назначаем каждому элементу с классом "example__button" событие,
    которое которое заполняет попап текстом из текущего элемента с классом "example__item"*/
    for (let i = 0; i < popupButtons.length; i++) {
        popupButtons[i].addEventListener("click", function () {
            document.querySelector("body").classList.add("no-overflow")
            document.querySelector(".popup__title").textContent = this.parentElement.querySelector(".example__breakdown-title").textContent
            document.querySelector(".popup__text").textContent = this.parentElement.querySelector(".example__breakdown-text p").textContent
            document.querySelector(".popup").classList.add("show")
        })
    }

    //Закрытие попапа при нажатии на крестик
    document.querySelector(".popup__close").addEventListener("click", function () {
        document.querySelector("body").classList.remove("no-overflow")
        document.querySelector(".popup").classList.remove("show")
    })
  });
