let nav = document.querySelector(".header__nav");
let burger = document.querySelector(".hamburger");
let burgerFirstLine = document.querySelector(".hamburger__line:nth-child(1)");
let burgerSecondLine = document.querySelector(".hamburger__line:nth-child(2)");
let burgerThirdLine = document.querySelector(".hamburger__line:nth-child(3)");

burger.addEventListener("click", function () {
    // Toggle the lines to create the hamburger effect
    burgerFirstLine.classList.toggle("hamburger__line-1");
    burgerSecondLine.classList.toggle("hamburger__line-2");
    burgerThirdLine.classList.toggle("hamburger__line-3");

    // Toggle the display of the navigation menu
    nav.classList.toggle("display__nav");
});
