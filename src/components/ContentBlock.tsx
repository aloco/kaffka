import React from 'react';
import withStyles, { WithStyles } from 'react-jss'
import globalStyles from '../global-style'

const styles = {
	container: {
		...globalStyles.styles.container,
		display: "flex"
	},
};

interface IContentBlockProps extends WithStyles<typeof styles> {}

class ContentBlock extends React.Component<IContentBlockProps, {}> {
	render() {
		return (
			<div className={this.props.classes.container}>
				{this.props.children}
			</div>
		);
	}
}

export default withStyles(styles)(ContentBlock)



