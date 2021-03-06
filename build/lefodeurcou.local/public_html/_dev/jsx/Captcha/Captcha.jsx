import React from 'react';
import ReactDOM from 'react-dom';


// Usage : const [Captcha, verifyCaptcha] = useCaptcha();
// Captcha is a component wich is used to present thing to do before validate current form
// veryfiCaptcha is a function to verify everywhere if the captcha has a good value
export const useCaptcha = () => {

	const operations = [
		{
			sign: '+',
			run: (a, b) => a + b
		},
		// {
		// 	sign: '-',
		// 	run: (a, b) => a - b
		// },
		{
			sign: '*',
			run: (a, b) => a * b
		}
		// {
		// 	sign: '/',
		// 	run: (a, b) => a / b
		// }
	];
	const operandOne = Math.floor(Math.random() * 10) + 1;
	const operandTwo = Math.floor(Math.random() * 10) + 1;
	const operation = operations[Math.floor(Math.random() * operations.length)];
	const result = operation.run(operandOne, operandTwo);
	let testValue = 0;

	return [
		() => {
			return (
				<React.Fragment>
					Vérifions que vous n'êtes pas un robot ;D
					<br />
					Combien font : {operandOne} {operation.sign} {operandTwo} ?
					<br />
					Indice : {result}
					<input
						type='number'
						onChange={e => testValue = e.target.value}
					/>
				</React.Fragment>
			);
		},
		result,
		() => {
			return testValue == result;
		}
	];
}