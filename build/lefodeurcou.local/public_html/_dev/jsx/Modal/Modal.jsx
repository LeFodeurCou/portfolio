import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import './Modal.scss';

export const Modal = ({openerText, closerText, submit, children}) => {

	const bodyOverflow = () => {

		document.querySelectorAll('.js-modal-body-overflow').forEach(x => {
			x.addEventListener('click', e => {
				document.querySelector('body').style.overflow = 'hidden';
			});
		});
		document.querySelectorAll('.js-modal-close').forEach(x => {
			x.addEventListener('click', e => {
				document.querySelector('body').style.overflow = 'initial';
			});
		});
	};

	const cancel = e => {
		if (e.code == 'Enter' || e.code == 'Space')
			document.getElementById('modal-controler-id').checked = false;
	}

	const validate = e => {
		if (e.code == 'Enter' || e.code == 'Space')
		{
			submit(e);
			document.getElementById('modal-controler-id').checked = false;
		}
	}

	useEffect(() => {
		bodyOverflow();
	}, []);

	return (
		<React.Fragment>
			<label
				htmlFor='modal-controler-id'
				className='modal-opener js-modal-body-overflow'
			>
				{openerText}
			</label>
			<input
				type='checkbox'
				id='modal-controler-id'
				className='modal-controler'
			/>
			<label
				htmlFor='modal-controler-id'
				className='modal-background js-modal-close'
			></label>
			<section
				className='modal-core'
			>
				{children}
				<aside>
					<label
						tabIndex='0'
						htmlFor='modal-controler-id'
						className='modal-closer js-modal-close'
						onKeyPress={cancel}
					>
						{closerText}
					</label>
					<label
						tabIndex='0'
						htmlFor='modal-controler-id'
						onClick={submit}
						onKeyPress={validate}
					>
						Valider
					</label>
				</aside>
			</section>
		</React.Fragment>
	);
};