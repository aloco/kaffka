import React from 'react';
import withStyles, { WithStyles } from 'react-jss'
import globalStyles from '../global-style'


const styles = {
	button: {
		padding: '10px 80px',
		borderColor: globalStyles.colors.darkFontColor,
		color: globalStyles.colors.darkFontColor,
		borderWidth: '2px',
		borderStyle: 'solid',
		textTransform: 'uppercase',
		textDecoration: 'none',
		'&:hover': {
			backgroundColor: globalStyles.colors.darkFontColor,
			color: globalStyles.colors.dark
		}
	}
};

interface IPrimaryButton extends WithStyles<typeof styles> {
	link: string
}

class PrimaryButton extends React.Component<IPrimaryButton, {}> {
	render() {
		return (
			<a href={this.props.link} className={this.props.classes.button}>
				{this.props.children}
			</a>
		);
	}
}
export default withStyles(styles)(PrimaryButton)
