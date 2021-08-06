import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './Contact.scss';

export const Contact = () => {
	const [name, setName] = useState('');
	const [mail, setMail] = useState('');
	const [msg, setMsg] = useState('');
	const [honeypot, setHoneypot] = useState(false);

	const submitMsg = e => {
		e.preventDefault();

		const data = new FormData();
		data.append('name', name);
		data.append('mail', mail);
		data.append('msg', msg);
		data.append('honeypot', honeypot);

		fetch(
			'/api/v1/send/mail',
			{
				method: 'POST',
				body: data,
            	headers: new Headers(),
			}
		)
		.then(response => response.json())
		.then(json => console.log(json))
		.catch(error => console.log(error));
	};

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
					type='text'
					placeholder='nom'
					value={name}
					onChange={e => setName(e.target.value)}
					required
				/>
				<input
					type='text'
					placeholder='mon.email@mail.fr'
					value={mail}
					onChange={e => setMail(e.target.value)}
					required
				/>
				<textarea
					placeholder='Votre message ici'
					value={msg}
					onChange={e => setMsg(e.target.value)}
					required
				></textarea>
				<input
					type='checkbox'
					onChange={e => setHoneypot(!honeypot)}
					className='honeypot'
				/>
				<button
					type="submit"
					onClick={submitMsg}
				>
					Envoyer
				</button>
			</form>
		</React.Fragment>
	);
};