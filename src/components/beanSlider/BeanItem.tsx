import React from 'react';
import withStyles, { WithStyles } from 'react-jss';
import IBean from '../../types/IBean';
import Checkmark from '../../assets/icons/ic_checkmark.png';
import globalStyles from '../../global-style'

const styles = {
	container: {
		height: "650px",
		margin: "60px",
		border: "1px solid",
		borderColor: globalStyles.colors.dark,
	},
	beanImageContainer: {
		height: "70%",
		width: "100%",
		display: "block",
		margin: "0 auto",
		backgroundPosition: "center",
		backgroundSize: "cover"
	},
	checkbox: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		height: "50%",
		width: "100%",
		border: "solid",
		borderWidth: "0px 0px 1px 1px",
		borderColor: globalStyles.colors.dark, 
		"& img": {
			display: "flex",
			height: "50%",
		}
	},
	textBox: {
		height: "30%",
		display: "flex",
		textAlign: "left",
		border: "solid",
		borderColor: globalStyles.colors.dark, 
		borderWidth: "1px 0px 0px 0px",
		"& h3": {
			"& span": {
				fontWeight: "normal" 
			},
			"& strong": {
				fontWeight: "bold" 
			}
		}
	},
	mainText: {
		margin: "20px",
		width: "80%"
	},
	description: {
		height: "100%",
		width: "20%"
	}
};

interface IBeanItemProps extends WithStyles<typeof styles> {
	isSelected: boolean,
	bean: IBean,
	selectBeanHandler: (bean: IBean) => void // handles bean selection
}

class BeanItem extends React.Component<IBeanItemProps, {}> {

	selectBean() {
		this.props.selectBeanHandler(this.props.bean);
	}

	render() {
		const style = this.props.classes;
		return (
			<div className={style.container}>	
				<div className={style.beanImageContainer} style={{backgroundImage: "url(" + this.props.bean.imageUrl + ")"}}/>
				<div className={style.textBox}>
					<div className={style.mainText}>
						<h3>
							<span>Kaffee Bohne </span>
							<strong>{this.props.bean.name}</strong>
						</h3>
						<p>
							{this.props.bean.description}
						</p>
					</div>
					<div className={style.description}>
						<a className={style.checkbox} onClick={this.selectBean.bind(this)} style={this.props.isSelected ? { backgroundColor: globalStyles.colors.dark} : {}}>
							<img src={Checkmark} alt="checkmark"/>
						</a>
						<div>
							<span>{this.props.bean.caffeinInMG} mg</span>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(BeanItem)



