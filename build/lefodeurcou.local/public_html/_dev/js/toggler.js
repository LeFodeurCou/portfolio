export const themeToggler = () => {
	const themeToggler = document.querySelector('.jsThemeToggler');

	if (themeToggler)
		themeToggler.addEventListener(
		'click',
		e => {
			const body = document.querySelector('body');
			if (body)
				body.classList.toggle('light-theme');
			themeToggler.classList.toggle('sun');
			themeToggler.classList.toggle('moon');
			
		}
		)
	};
