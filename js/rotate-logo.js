const d = document,
$divLogo =  d.querySelector(".divLogo");

d.addEventListener("click", (e) => {
	if (e.target.matches(".navbar-toggler") || e.target.matches(".navbar-toggler-icon") ) {
		$divLogo.classList.toggle("rotate");
	}
})