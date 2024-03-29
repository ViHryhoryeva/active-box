// Получаем ссылку на элемент
let scrollingElement = document.querySelector(".header");
// Функция, которая будет вызываться при прокрутке
function handleScroll() {
    // Проверяем, насколько прокручена страница по вертикали
    var scrollPosition = window.scrollY;
    // Условие, при котором добавляем класс
    if (scrollPosition > 0) scrollingElement.classList.add("scrolled");
    else scrollingElement.classList.remove("scrolled");
}
// Добавляем прослушиватель события прокрутки
window.addEventListener("scroll", handleScroll);
// Получаем ссылки на элементы
let menuButton = document.querySelector(".header__burger");
let menu = document.querySelector(".nav");
// Добавляем слушатели событий
menuButton.addEventListener("click", toggleMenu);
// Функция для открытия/закрытия меню
function toggleMenu() {
    menu.classList.toggle("open");
    menuButton.classList.toggle("open");
}
// Добавляем слушатель события для каждого пункта меню
var menuItems = document.querySelectorAll(".nav li");
menuItems.forEach(function(item) {
    item.addEventListener("click", closeMenu);
});
// Функция для закрытия меню
function closeMenu() {
    menu.classList.remove("open");
}
// swiper js
var swiper = new Swiper(".testimonialsSwiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    }
});

//# sourceMappingURL=index.d4a8b14f.js.map
