let tabHead = document.querySelectorAll(".tab-head");
let tabText = document.querySelectorAll(".tab-text");


for (let i = 0; i < tabHead.length; i++) {
    tabHead[i].addEventListener("click", () => {
        tabHead[i].classList.toggle('active');
        tabText[i].classList.toggle('active');
    });
}