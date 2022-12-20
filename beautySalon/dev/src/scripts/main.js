import '../styles/main.scss';

window.addEventListener("load", function () {
    this.document.querySelector(".header-mobile__content").addEventListener("click", function () {
        this.classList.toggle("header-mobile_active");
        document.querySelector(".burger-menu").classList.toggle('burger-menu_active');
    })
})
