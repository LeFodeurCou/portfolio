import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './Contact.scss';

export const Contact = () => {
	const [name, setName] = useState('');
	const [mail, setMail] = useState('');
	const [msg, setMsg] = useState('');

	console.log(msg);

	return (
		<React.Fragment>
			<h2>
				Contact
			</h2>
			<form
				action='./'
				method='post'
				className='contact-form'
			>
				<input
					type="text"
					placeholder='name'
					value={name}
					onChange={e => setName(e.target.value)}
				/>
				<input
					type="text"
					placeholder='mon.email@mail.fr'
					value={mail}
					onChange={e => setMail(e.target.value)}
				/>
				<textarea
					onChange={e => setMsg(e.target.value)}
					value={msg}
				></textarea>
				<button
					type="submit"
				>
					Envoyer
				</button>
			</form>
		</React.Fragment>
	);
};