import React from 'react';
import ReactDOM from 'react-dom';

import { themeToggler } from '../js/toggler';
import { bodyOverflow } from '../js/bodyOverflow';

import { Contact } from './Contact/Contact';

const Main = () => {

	themeToggler();
	bodyOverflow();

	return <Contact />;
}

let App = document.getElementById('contact');
ReactDOM.render(<Main />, App);

