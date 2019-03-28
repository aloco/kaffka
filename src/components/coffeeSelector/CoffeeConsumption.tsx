import React from 'react';
import withStyles, { WithStyles } from 'react-jss'

import ContentBlock from '../ContentBlock';
import ICoffeeConsumption from '../../types/ICoffeeConsumption';
import IBean from '../../types/IBean';

import PlusIcon from '../../assets/icons/ic_add.png';
import MinusIcon from '../../assets/icons/ic_subtract.png';
import globalStyle from '../../global-style';

const styles = {
	container: {
		margin: "60px 0",
		display: "flex",
		flexDirection: "column",
		width: "100%"
	},
	listItem: {
		margin: "20px",
		height: "80px",
		display: "flex",
		alignItems: "center",
	},
	buttonContainer: {
		width: "10%",
		height: "80px",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		border: "1px solid",
		boxSizing: "border-box",
		borderColor: globalStyle.colors.darkFontColor,
		"& button": {
			backgroundColor: globalStyle.colors.dark,
			border: 0,
			width: "30px",
			height: "30px",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			padding: 0,
			"& img": {
				width: "20px",
				height: "20px",
				display: "flex"
			}
		}
	},
	listContainer: {
		color: globalStyle.colors.darkFontColor,
		backgroundColor: globalStyle.colors.dark,
		padding: 0,
		margin: 0,
		listStyle: "none"
	},
	coffeeDescription: {
		backgroundColor: globalStyle.colors.darkFontColor,
		color: globalStyle.colors.dark,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		height: "80px",
		padding: "0px 20px",
	},
	titleSubTitleItem: {
		margin: "10px",
		display: "flex",
		flexDirection: "column",
		textAlign: "left",
	}
};

interface ICoffeeConsumptionProps extends WithStyles<typeof styles> {
	coffeeConsumption: ICoffeeConsumption[],
	selectedBean: IBean,
	increaseCoffeeHandler: (coffeeConsumption: ICoffeeConsumption) => void,
	decreaseCoffeeHandler: (coffeeConsumption: ICoffeeConsumption) => void
}

class CoffeeConsumption extends React.Component<ICoffeeConsumptionProps, {}> {

	// calculates caffein of the given coffeeconsumption for one item
	calculateCaffein(coffeeConsumption: ICoffeeConsumption) {
		let modifier = 0;
		switch (coffeeConsumption.coffee.intensity) {
			case "light": 
				modifier = 1;
				break;
			case "medium": 
				modifier = 2
				break;
			case "strong": 
				modifier = 3
				break;
		}

		const caffeinInMGPer100ML = this.props.selectedBean.caffeinInMG * modifier;
		const liquidMilliliter = coffeeConsumption.coffee.milliliters;
		return ((caffeinInMGPer100ML * liquidMilliliter) / 100);
	}


	renderCoffeeConsumption() {
		const calculateCaffein = this.calculateCaffein.bind(this);
		const props = this.props;
		return this.props.coffeeConsumption.map(function(item) {

			return (
				<li key={"consumption-" + item.coffee.id} className={props.classes.listItem}>
					<div style={{width: "10%", fontSize: "30px"}}>{item.amount} x</div>
					<div style={{width: "80%"}} className={props.classes.coffeeDescription}>
						<img style={{height: "40px", margin: "0 20px"}} src={item.coffee.iconUrl} alt={item.coffee.name}/>
						<span style={{fontSize: "20px", width: "150px"}}>{item.coffee.name}</span>
						<div className={props.classes.titleSubTitleItem}>
							<strong>Menge Gesamt</strong>
							<span>{item.coffee.milliliters} ml</span>
						</div>
						<div className={props.classes.titleSubTitleItem}>
							<strong>Menge Bohnen</strong>
							<span>{item.coffee.coffeeBeanInMilligrams} mg</span>
						</div>
						<div className={props.classes.titleSubTitleItem}>
							<strong>Menge Koffein</strong>
							<span>{calculateCaffein(item)} mg</span>
						</div>
					</div>
					<div className={props.classes.buttonContainer}>
						<button onClick={e => props.increaseCoffeeHandler(item)}>
							<img src={PlusIcon} alt="plus"/>
						</button>
						<button onClick={e => props.decreaseCoffeeHandler(item)}>
							<img src={MinusIcon} alt="minus"/>
						</button>
					</div>
				</li>
			);

		});
	}

	render() {
		return (
			<ContentBlock>
				<section id={"calculator"} className={this.props.classes.container}>
				<h2 style={{textAlign: "left"}}>
					Du trinks jeden Tag ...
				</h2>
					<ul className={this.props.classes.listContainer}>
						{this.renderCoffeeConsumption()}
					</ul>
				</section>
			</ContentBlock>
		);
	}
}

export default withStyles(styles)(CoffeeConsumption)

