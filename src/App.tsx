import React, { Component } from 'react';
import './App.css';

import Header from './components/header/Header';
import Teaser from './components/header/Teaser';
import BeanSelector from './components/beanSlider/BeanSelector';
import CoffeeConsumption from './components/coffeeSelector/CoffeeConsumption';

import IBean from './types/IBean';

import Coffee1Background from './assets/images/img_hero_coffe1.jpg';
import Coffee2Background from './assets/images/img_hero_coffe2.jpg';
import Coffee3Background from './assets/images/img_hero_coffe3.jpg';

import Coffee1Icon from './assets/icons/ic_cappuccino.png';
import Coffee2Icon from './assets/icons/ic_espresso.png';

import ICoffeeConsumption from './types/ICoffeeConsumption';
import ICoffee from './types/ICoffee';
import TotalConsumption from './components/consumptionTotal/TotalConsumption';

interface IAppState {
	selectedBean: IBean
	availableBeans: IBean[]
	coffeeConsumption: ICoffeeConsumption[]
}

// create initial default state
// defines available coffee and beans
const initialState = (props: {}): IAppState => {

	// define available beans
	const availableBeans = [
		{
			id: "cbb02fe4-b2bc-4eb5-bb2d-1ce073534cde",
			name: "Arabica",
			description: "Es wird berichtet, ein Hirte im Königreich Kaffa habe beobachtet, wie eine Ziege, sobald sie Blätter und Samen eines immergrünen Strauches gefressen hatte, von Unruhe und Schlaflosigkeit befallen wurde. Dies habe er Mönchen erzählt, welche sich seither dieser Pflanze bedienten, um die Vigilien verlängern zu können.",
			caffeinInMG: 60,
			imageUrl: Coffee1Background
		},
		{
			id: "08cdfe86-5e73-40df-88ea-5fb88903179a",
			name: "Excelsa",
			description: "Sie gilt als seltene Delikatesse, die im Jahr 1904 im Westen Afrikas am Tschadsee entdeckt wurde und eine Variante des Liberica-Kaffees darstellt. Excelsa Bohnen gleichen ihrer Größe nach denen der Robusta.",
			caffeinInMG: 120,
			imageUrl: Coffee2Background
		},
		{
			id: "d07b8e56-1d20-4ce7-9a18-bbe06f8ccbc3",
			name: "Robusta",
			description: "Der Name dieses Kaffeestrauches ist sozusagen „Programm“, denn er ist weitaus robuster als die Arabica, so dass er in flachen Regionen mit starken Temperaturschwankungen und höheren Temperaturen gut gedeiht. ",
			caffeinInMG: 86,
			imageUrl: Coffee3Background
		}
	];

	// define available coffee and current consumption
	const coffeeConsumption: ICoffeeConsumption[] = [
		{
			coffee: {
				id: "b2da49c4-d8f1-4893-9edd-db0af9c5e640",
				name: "Capuccino",
				iconUrl: Coffee1Icon,
				milliliters: 100,
				coffeeBeanInMilligrams: 30,
				intensity: "light",
			},
			amount: 0
		},
		{
			coffee: {
				id: "4af28c2e-287e-40da-847f-b9ea92928ba4",
				name: "Espresso",
				iconUrl: Coffee2Icon,
				milliliters: 30,
				coffeeBeanInMilligrams: 30,
				intensity: "strong"
			},
			amount: 0
		}
	];

	// returns initial state
	return {
		selectedBean: availableBeans[0],
		availableBeans,
		coffeeConsumption
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
			...this.state, // copy previous state
			selectedBean: bean
		});
	}

	// update current coffee consumption
	updateCoffeeConsumption(operation: "plus" | "minus", coffeeConsumption: ICoffeeConsumption) {

		let newCoffeeConsumption: ICoffeeConsumption;

		// add or reduce the amount of the given coffeeconsumption
		switch(operation) {
			case "plus":
				newCoffeeConsumption = {
					...coffeeConsumption, // copy previous coffeeconsumption
					amount: coffeeConsumption.amount + 1
				}
				break;
			case "minus":
				newCoffeeConsumption = {
					...coffeeConsumption, 
					amount: Math.max(coffeeConsumption.amount - 1, 0)
				}
				break;
		}

		// replace coffeeConsumption item in available state list with the new coffeeConsumption item
		const newList = this.state.coffeeConsumption.map(function(item) {
			if (item.coffee.id === newCoffeeConsumption.coffee.id) {
				return newCoffeeConsumption;
			} else {
				return item;
			}
		});

		// update component state
		this.setState({
			...this.state, // copy previous state
			coffeeConsumption: newList
		})

	}

	render() {
		return (
			<div className="App">
				<Header />
				<Teaser/>
				<BeanSelector availableBeans={this.state.availableBeans} selectedBean={this.state.selectedBean} selectBeanHandler={this.selectBeanHandler.bind(this)}/>
				<CoffeeConsumption coffeeConsumption={this.state.coffeeConsumption} selectedBean={this.state.selectedBean} decreaseCoffeeHandler={(item) => this.updateCoffeeConsumption("minus", item)} increaseCoffeeHandler={(item) => this.updateCoffeeConsumption("plus", item)}/>
				<TotalConsumption coffeeConsumption={this.state.coffeeConsumption} selectedBean={this.state.selectedBean}/>
			</div>
		);
	}
}

export default App;