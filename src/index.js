/*this require is for HMR, only for dev*/
//require('./scss/main.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>, document.getElementById('app')
);

//module.hot.accept();