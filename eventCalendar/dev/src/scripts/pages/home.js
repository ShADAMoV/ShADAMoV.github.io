import '/src/styles/pages/home.scss';
import '/src/styles/components/_date-select.scss';

document.addEventListener("DOMContentLoaded", function () {
    //Переменные для годов
    const yearsBlock = document.querySelector('.general__years');
    const yearsList = document.querySelector('#year-select')
    const yearsItems = document.querySelectorAll('.general__years .date-select__item');
    const visibleYear = document.querySelector('.general__year');
    //Переменные для месяцев
    const monthBlock = document.querySelector('.general__months');
    const monthList = document.querySelector('#month-select')
    const monthItems = document.querySelectorAll('.general__months .date-select__item');
    const visibleMonth = document.querySelector('.general__month');
    //Месяца
    const monthsNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май',
        'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
    ]
    //Список дней
    const daysList = document.querySelectorAll('.general__day')

    //Выбор года
    for (let i = 0; i < yearsItems.length; i++) {
        yearsItems[i].addEventListener('click', function () {
            visibleYear.innerHTML = this.innerHTML;
            daysActivate()
        })
    }

    yearsBlock.addEventListener('click', () => {
        addActivisionToggle(yearsBlock, yearsList)
    })

    //Выбор месяца
    for (let i = 0; i < monthItems.length; i++) {
        monthItems[i].addEventListener('click', function () {
            visibleMonth.innerHTML = this.innerHTML;
            daysActivate()
        })
    }

    monthBlock.addEventListener('click', () => {
        addActivisionToggle(monthBlock, monthList)
    })

    function getDaysCountFromMonthAndYear(year, month) {
        let monthNumber = monthsNames.findIndex(item => item === month) + 1
        return new Date(year, monthNumber, 0).getDate();
    }

    function addActivisionToggle(...classes) {
        classes.map(function (item) {
            item.classList.toggle(`${item.classList[0]}_active`);
        })
    }
    //Подсвечивает количество дней в месяце
    function daysActivate() {
        let daysCount = getDaysCountFromMonthAndYear(+visibleYear.innerHTML, visibleMonth.innerHTML)
        console.log(daysCount)
        for (let i = 0; i < 31; i++) {
            if (i < daysCount) {
                daysList[i].classList.remove('general__day_inactive')
            } else {
                daysList[i].classList.add('general__day_inactive')
            }
        }
    }
});