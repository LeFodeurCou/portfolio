import React from 'react';
import ReactDOM from 'react-dom';

import { themeToggler } from '../js/toggler';

const Main = () => {

	themeToggler();

	return (
		<div>
			<div className='container'>
				<p>
					{/* Contact */}
				</p>
			</div>
		</div>
	);
}

let App = document.getElementById('app');
ReactDOM.render(<Main />, App);

