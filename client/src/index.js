import React from 'react'
import RouteDOM from 'react-dom';

// 외부 컴포넌트 import 
import App from './components/App';


RouteDOM.render(
	<App/>,
	document.querySelector('#root')
);