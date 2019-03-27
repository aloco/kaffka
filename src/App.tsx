import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Teaser from './components/Teaser';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Teaser/>
			</div>
		);
	}
}

export default App;
