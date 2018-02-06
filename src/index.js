import './style.css';
import './module.js';
import _ from 'lodash';
import printMsg from './print.js';
import { square } from './math.js';

function createComponent() {
	const element = document.createElement('div');
	element.innerHTML = _.join(['Hello webpack', 
				    `5 square is equal to${square(5)}` ]);
	
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
