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
						htmlFor='modal-controler-id'
						className='modal-closer js-modal-close'
					>
						{closerText}
					</label>
					{submit}
				</aside>
			</section>
		</React.Fragment>
	);
};