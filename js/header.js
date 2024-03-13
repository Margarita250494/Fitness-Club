let hamburger = document.querySelector(".header-burger-button");
let navMenu = document.querySelector(".header-menu");
let cross = document.querySelectorAll(".header-burger-button-line");
hamburger.addEventListener("click",() => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    //cross.classList.toggle("active");
    cross.forEach(line => {
        line.classList.toggle("active");
    });
})