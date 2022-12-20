window.addEventListener("load", function () {
    //Исчезание и появление лупы во всех поисковых полях
    let searchInputs = document.getElementsByName("search");

    for (let i = 0; i < searchInputs.length; i++) {
        searchInputs[i].addEventListener('keyup', function (event) {
            if (this.value !== "") {
                document.querySelectorAll(".search-wrapper img")[i].style.visibility = 'hidden'
            } else {
                document.querySelectorAll(".search-wrapper img")[i].style.visibility = ''
            }
        });

        searchInputs[i].addEventListener('click', function () {
            if (this.value === "") {
                this.closest(".search-wrapper").getElementsByTagName("img")[0].style.visibility = ''
            }
        });
    }
});