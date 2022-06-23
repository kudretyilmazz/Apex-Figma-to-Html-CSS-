const toogle = document.querySelector(".fa-bars");
const mobileNavbar = document.querySelector(".mobile-navbar");
toogle.addEventListener("click", function () {
	mobileNavbar.style.display === "none"
		? (mobileNavbar.style.display = "block")
		: (mobileNavbar.style.display = "none");
});
