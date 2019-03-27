import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Teaser from './components/header/Teaser';
import BeanSelector from './components/beanSlider/BeanSelector';
import IBean from './types/IBean';

import Coffe1 from './assets/images/img_hero_coffe1.jpg';
import Coffe2 from './assets/images/img_hero_coffe2.jpg';
import Coffe3 from './assets/images/img_hero_coffe3.jpg';

interface IAppState {
	selectedBean?: IBean;
	availableBeans: IBean[];
}


const initialState = (props: {}): IAppState => {

	const availableBeans = [
		{
			id: "cbb02fe4-b2bc-4eb5-bb2d-1ce073534cde",
			name: "Arabica",
			description: "Es wird berichtet, ein Hirte im Königreich Kaffa habe beobachtet, wie eine Ziege, sobald sie Blätter und Samen eines immergrünen Strauches gefressen hatte, von Unruhe und Schlaflosigkeit befallen wurde. Dies habe er Mönchen erzählt, welche sich seither dieser Pflanze bedienten, um die Vigilien verlängern zu können.",
			caffeinInMG: 60,
			imageUrl: Coffe1
		},
		{
			id: "08cdfe86-5e73-40df-88ea-5fb88903179a",
			name: "Excelsa",
			description: "Sie gilt als seltene Delikatesse, die im Jahr 1904 im Westen Afrikas am Tschadsee entdeckt wurde und eine Variante des Liberica-Kaffees darstellt. Excelsa Bohnen gleichen ihrer Größe nach denen der Robusta.",
			caffeinInMG: 120,
			imageUrl: Coffe2
		},
		{
			id: "d07b8e56-1d20-4ce7-9a18-bbe06f8ccbc3",
			name: "Robusta",
			description: "Der Name dieses Kaffeestrauches ist sozusagen „Programm“, denn er ist weitaus robuster als die Arabica, so dass er in flachen Regionen mit starken Temperaturschwankungen und höheren Temperaturen gut gedeiht. ",
			caffeinInMG: 86,
			imageUrl: Coffe3
		}
	];

	return {
		selectedBean: availableBeans[0],
		availableBeans
	}
}

class App extends Component<{}, IAppState> {

	constructor(props: {}) {
        super(props);
        this.state = initialState(props);
	}
	
	// Save bean selection to app state
	selectBeanHandler(bean: IBean) {
		this.setState({
			...this.state,
			selectedBean: bean
		});
	}

	render() {
		return (
			<div className="App">
				<Header />
				<Teaser/>
				<BeanSelector availableBeans={this.state.availableBeans} selectedBean={this.state.selectedBean} selectBeanHandler={this.selectBeanHandler.bind(this)}/>
				
			</div>
		);
	}
}

export default App;
