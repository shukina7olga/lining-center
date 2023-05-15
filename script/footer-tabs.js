let footerListBox = document.querySelectorAll(".footer__list-box");
let footerBoxLink = document.querySelectorAll(".footer__box-link");


for (let i = 0; i < footerListBox.length; i++) {
    footerListBox[i].addEventListener("click", () => {
        footerListBox[i].classList.toggle('active');
        footerBoxLink[i].classList.toggle('active');
    });
}