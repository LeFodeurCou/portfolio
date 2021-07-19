export const themeToggler = () => {
	const themeToggler = document.querySelector('.jsThemeToggler');

	let day = false;
	if (themeToggler)
		themeToggler.addEventListener(
		'click',
		e => {
			const body = document.querySelector('body');
			if (body)
				body.classList.toggle('light-theme');
			const darkOrLight = themeToggler.querySelector('.jsRotate');
			if (darkOrLight)
			{
				day = !day;
				darkOrLight.style.transform = 'rotate(' + (day ? '30deg' : '-30deg') + ')';
			}

			
		}
		)
	};
