import './style.css';
import _ from 'lodash';
import printMsg from './print.js';

function createComponent() {
	const element = document.createElement('div');
	element.innerHTML = _.join(['Hello', 'webpack', 'by yff'], '');
	
	const btn = document.createElement('button');
	btn.innerHTML = 'Click me and check the console!';
	btn.onclick = printMsg;
	element.appendChild(btn);

	return element;
}

let element = createComponent();
document.body.appendChild(element);

if(module.hot) {
  module.hot.accept('./print.js', function(){
    console.log('Accepting the updated printMsg module!');
    document.body.removeChild(element);
    element = createComponent();
    document.body.appendChild(element);
  })
}
