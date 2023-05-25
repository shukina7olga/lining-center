let head = document.querySelectorAll(".catalog__list-head");
let nested = document.querySelectorAll(".catalog__list-nested");


for (let i = 0; i < head.length; i++) {
    head[i].addEventListener("click", () => {
        head[i].classList.toggle('active');
        nested[i].classList.toggle('active');
    });
}


let filterBtn = document.querySelector(".filter-btn");
let filterBox = document.querySelector(".catalog__filter-box");
let cardsBox = document.querySelector(".catalog__cards-box");

filterBtn.addEventListener("click", () => {
    filterBox.classList.toggle('active');
    cardsBox.classList.toggle('active');
});