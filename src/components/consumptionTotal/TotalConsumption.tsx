import React from 'react';
import withStyles, { WithStyles } from 'react-jss'
import globalStyles from '../../global-style'

import ContentBlock from '../ContentBlock';
import ICoffeeConsumption from '../../types/ICoffeeConsumption';
import IBean from '../../types/IBean';

const styles = {

}

interface ITotalConsumptionProps extends WithStyles<typeof styles> {
	coffeeConsumption: ICoffeeConsumption[],
	selectedBean: IBean
}


class TotalConsumption extends React.Component<ITotalConsumptionProps, {}> {


	calculateCaffein() {
		const selectedBean = this.props.selectedBean;

		let total = 0;

		this.props.coffeeConsumption.forEach(function(coffeeConsumption) {
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
	
			const caffeinInMGPer100ML = selectedBean.caffeinInMG * modifier;
			const liquidMilliliter = coffeeConsumption.coffee.milliliters;
			total += ((caffeinInMGPer100ML * liquidMilliliter) / 100) * coffeeConsumption.amount;
		});
		return total;
	}

	render() {

		return (
			<ContentBlock>
				<h2>
					Dein totaler Koffeinkonsum beträgt {this.calculateCaffein()} mg
				</h2>
			</ContentBlock>
		);
	}
}

export default withStyles(styles)(TotalConsumption)