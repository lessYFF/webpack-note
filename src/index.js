import _ from 'lodash';
import printMsg from './print.js';

function createComponent() {
	const element = document.createElement('div');
	element.innerHTML = _.join(['Hello', 'webpack'], '');
	
	const btn = document.createElement('button');
	btn.innerHTML = 'Click me and check the console!';
	btn.onclick = printMsg;
	element.appendChild(btn);

	return element;
}

document.body.appendChild(createComponent());
