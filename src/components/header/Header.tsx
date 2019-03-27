import React from 'react';
import withStyles, { WithStyles } from 'react-jss'
import ContentBlock from '../ContentBlock';

import logo from '../../assets/logos/logo_dal.png';
import headerTeaserImage from '../../assets/images/img_hero_coffe4.jpg';

const styles = {
	logoWrapper: {
		minHeight: "60px",
		display: "flex"
	},
	logo: {
		display: 'flex',
		maxWidth: '200px',
		alignSelf: 'center'
	},
	headerImage: {
		display: "block",	
		width: '100%'
	}
};

interface IHeaderProps extends WithStyles<typeof styles> {}


class Header extends React.Component<IHeaderProps, {}> {
	render() {
		const style = this.props.classes;
		return (
			<header>
				<ContentBlock>
					<div className={style.logoWrapper}>
						<img src={logo} className={style.logo} alt="logo" />
					</div>
				</ContentBlock>
				<div>
					<img src={headerTeaserImage} className={style.headerImage} alt="coffee makes me happy" />
				</div>
			</header>
		);
	}
}

export default withStyles(styles)(Header)



