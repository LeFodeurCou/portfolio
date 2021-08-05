import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './Contact.scss';

export const Contact = () => {
	const [name, setName] = useState('');
	const [mail, setMail] = useState('');
	const [msg, setMsg] = useState('');

	const submitMsg = e => {
		e.preventDefault();
		alert(name + ' vous avez envoyé le message ' + msg + ' en signant de votre adresse mail : ' + mail);
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