const tabsBtns = document.querySelectorAll(".tabs-nav button");
// console.log(tabsBtns);
const tabsItems = document.querySelectorAll(".tabs-item");
// console.log(tabsItems);


//фуункция скрывает табы и убирает active у кнопок
function hideTabs() {
	tabsItems.forEach(item => item.classList.add("hide"));
	tabsBtns.forEach(item => item.classList.remove("active"));
}

// ф-я показывает переданный номер и делает соответсвующую кнопку активной
function showTab(index) {
	tabsItems[index].classList.remove("hide");
	tabsBtns[index].classList.add("active");
}

hideTabs();
showTab(0);

tabsBtns.forEach((btn, index) => btn.addEventListener("click", () => {
	hideTabs();
	showTab(index);
}));



//anchors
const anchors = document.querySelectorAll(".header-nav a");
anchors.forEach(anc => {
	anc.addEventListener("click", function(event){
		event.preventDefault();
		const id = anc.getAttribute("href");
		const element = document.querySelector(id);
		window.scroll({
			top: element.offsetTop - 80,
			behavior: 'smooth'
		});
	});
});