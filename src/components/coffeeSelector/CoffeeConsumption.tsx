import React from 'react';
import withStyles, { WithStyles } from 'react-jss'

import ContentBlock from '../ContentBlock';
import ICoffeeConsumption from '../../types/ICoffeeConsumption';


const styles = {
	container: {
		margin: "60px 0"
	}
};

interface ICoffeeConsumptionProps extends WithStyles<typeof styles> {
	coffeeConsumption: ICoffeeConsumption[]
}

class CoffeeConsumption extends React.Component<ICoffeeConsumptionProps, {}> {
	render() {
		return (
			<ContentBlock>
				<section className={this.props.classes.container}>
					<h2>
						Du trinks jeden Tag ...
					</h2>
				</section>
			</ContentBlock>
		);
	}
}

export default withStyles(styles)(CoffeeConsumption)

