let burgerBtn = document.querySelector('.burger');
let catalogMenu = document.querySelector('.catalog-menu');
let headMain = document.querySelector('.head-main');
let headMainNavLinks = document.querySelector('.head-main__nav-links'); 


document.querySelector('.burger-btn').onclick = () => {
	burgerBtn.classList.toggle("change");
	catalogMenu.classList.toggle("catalog-menu-active");
	headMain.classList.toggle("catalog-menu-active");
	headMainNavLinks.classList.toggle("catalog-menu-active");
};



// window.addEventListener('scroll', function() {
    
// 	if (pageYOffset > 10) {
// 		headMain.classList.add("fix-head");
// 	} else {
// 		headMain.classList.remove("fix-head");
// 	}
	
// });