import React from 'react';
import withStyles, { WithStyles } from 'react-jss'
import Slider from "react-slick";
import IBean from '../../types/IBean';
import BeanItem from './BeanItem';
import ContentBlock from '../ContentBlock';


const styles = {};

interface IBeanSelectorProps extends WithStyles<typeof styles> {
	availableBeans: IBean[],
	selectedBean?: IBean,
    selectBeanHandler: (bean: IBean) => void
}

interface IBeanSelectorState {
	currentIndex: number
}

const initialState = (props: IBeanSelectorProps): IBeanSelectorState => {
	return {
		currentIndex: 0
	}
}

class BeanSelector extends React.Component<IBeanSelectorProps, IBeanSelectorState> {

	constructor(props: IBeanSelectorProps) {
		super(props);
		this.state = initialState(props);
	}
	
	// create a BeanItem Component for each available Beans
	renderBeans() {
		const currentBean = this.props.selectedBean;
		const selectBeanHandler = this.props.selectBeanHandler;
		return this.props.availableBeans.map(function(bean) {
			// check if this item is currently selected
			let isSelected = false;
			if (typeof currentBean !== "undefined") {
				isSelected = currentBean.id === bean.id;
			}
			return <BeanItem key={bean.id} bean={bean} isSelected={isSelected} selectBeanHandler={selectBeanHandler}/>;
		});
	}

	// find bean for selected slide index and pass to handler
	selectBeanAtIndex(index: number) {
		const bean = this.props.availableBeans[index];
		this.props.selectBeanHandler(bean);
	}

	componentWillReceiveProps(nextProps: IBeanSelectorProps) {
		const nextSelectedProps = nextProps.selectedBean;
		const currentSelectedProps = this.props.selectedBean;

		let updateSelectedBean = true;

		if (typeof currentSelectedProps !== "undefined" && typeof nextSelectedProps !== "undefined") {
			if (nextSelectedProps.id === currentSelectedProps.id) {
				updateSelectedBean = false;
			}
		}

		const nextSelectedBeanId = typeof nextSelectedProps === "undefined" ? "" : nextSelectedProps.id; 

		// update state only if update is relevant
		if (updateSelectedBean) {
			// find index of selected bean
			const index = this.props.availableBeans.findIndex(bean => bean.id === nextSelectedBeanId)
			const newIndex = index >= 0 ? index : 0;

			this.setState({
				...this.state,
				currentIndex: newIndex
			});
		}
	}


	render() {
		
		const settings = {
			className: "center",
			centerMode: true,
			infinite: true,
			centerPadding: "100px",
			slidesToShow: 1,
			speed: 500
		};

		return (
			
			<section style={{marginTop: "40px"}}>	
				<ContentBlock>
					<h2>
						Wähle deine liebste Kaffe Bohne ...
					</h2>
				</ContentBlock>

				<Slider {...settings}>
					{this.renderBeans()}
				</Slider>
			</section>
		);
	}
}

export default withStyles(styles)(BeanSelector)



