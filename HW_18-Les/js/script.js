

document.addEventListener('click', function (e) {
	const targetElement = e.target;
	if (targetElement.closest('.header__burger-lines')) {
		document.documentElement.classList.toggle('menu-open');
	}
})