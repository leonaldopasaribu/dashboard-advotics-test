import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import Header from './components/Header.js';
import NavLeft from './components/NavLeft.js';
import Content from './components/Content';

import './App.css';

function App() {
	function buttonClicked(e) {
		e.preventDefault();
		console.log('The button was clicked.');
	}
	return (
		<div className="wrapper">
			<Header/>
			<NavLeft/>
			<Content/>
		</div>
    );
}

export default App;
