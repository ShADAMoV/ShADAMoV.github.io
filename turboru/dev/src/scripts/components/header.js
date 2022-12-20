window.addEventListener("load", function () {
    document.querySelector(".header__burger").addEventListener('click', function () {
        this.classList.toggle("header__burger_active");
        document.querySelector(".menu").classList.toggle('show');
    });
});