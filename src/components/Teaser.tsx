import React from 'react';
import withStyles, { WithStyles } from 'react-jss'
import globalStyles from '../global-style'

import ContentBlock from './ContentBlock';
import PrimaryButton from './PrimaryButton';

const styles = {
	section: {
		backgroundColor: globalStyles.colors.dark,
		color: globalStyles.colors.darkFontColor,
	},
	textBox: {
		flexDirection: 'column',
		textAlign: 'left',
		margin: '80px 0px'
	},
	headline: {
		...globalStyles.styles.headline1,
		margin: '0px'
	},
	paragraph: {
		...globalStyles.styles.paragraph,
		margin: '40px 0px'
	}
};

interface IHeaderProps extends WithStyles<typeof styles> {}


class Header extends React.Component<IHeaderProps, {}> {
	render() {

		const style = this.props.classes;
		
		return (
			<section className={style.section}>
				<ContentBlock>
					<div className={style.textBox}>
						<h1 className={style.headline}>
							KAFFKA - Dein Kaffee Kalkulator
						</h1>
						<p className={style.paragraph}>
							Mit Kaffka kannst du deinen täglichen Kaffeekonsum tracken und dir berechnen lassen, auf welchem Level du von Kaffee abhängig bist.
						</p>
						<PrimaryButton link={"#"}>
							Kalkuliere
						</PrimaryButton>
					</div>
				</ContentBlock>
			</section>
		);
	}
}

export default withStyles(styles)(Header)



