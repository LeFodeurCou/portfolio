export const bodyOverflow = () => {

	document.querySelectorAll('.jsBodyOverflow').forEach(x => {
		x.addEventListener('click', e => {
			document.querySelector('body').style.overflow = 'hidden';
		});
	});
	document.querySelectorAll('.close').forEach(x => {
		x.addEventListener('click', e => {
			document.querySelector('body').style.overflow = 'initial';
		});
	});

};