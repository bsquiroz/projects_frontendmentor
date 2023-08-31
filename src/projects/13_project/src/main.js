const iconOpen = document.querySelector(".icon--open");
const iconClose = document.querySelector(".icon--close");

const contentMenu = document.querySelector(".content__menu");

const links = document.querySelectorAll(".menu li a");

function openMenu() {
	iconOpen.style.display = "none";
	iconClose.style.display = "block";
	contentMenu.classList.add("content__menu--show");
}

function closeMenu() {
	iconOpen.style.display = "block";
	iconClose.style.display = "none";
	contentMenu.classList.remove("content__menu--show");
}

iconOpen.addEventListener("click", openMenu);

iconClose.addEventListener("click", closeMenu);

for (const link of links) {
	link.addEventListener("click", closeMenu);
}
