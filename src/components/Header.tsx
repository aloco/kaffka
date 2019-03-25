import React from 'react';
import withStyles, { WithStyles } from 'react-jss'
import globalStyles from '../global-style'
import logo from '../assets/images/dotsandlines_black.png';
import headerTeaserImage from '../assets/images/img_hero_coffe4.jpg';

const styles = {
	logoWrapper: {...globalStyles.container},
	logo: {
		display: 'flex',
		maxWidth: '200px',
		height: '100px'
	},
	headerImage: {
		width: '100%'
	}
};


interface IHeaderProps extends WithStyles<typeof styles> {}


class Header extends React.Component<IHeaderProps, {}> {
	render() {

		const style = this.props.classes;
		
		return (
			<header>
				<div className={style.logoWrapper}>
					<img src={logo} className={style.logo} alt="logo" />
				</div>
				<div>
					<img src={headerTeaserImage} className={style.headerImage} alt="coffee makes me happy" />
				</div>
			</header>
		);
	}
}

export default withStyles(styles)(Header)



