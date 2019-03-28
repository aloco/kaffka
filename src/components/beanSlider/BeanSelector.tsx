import React from 'react';
import withStyles, { WithStyles } from 'react-jss'
import Slider from "react-slick";
import IBean from '../../types/IBean';
import BeanItem from './BeanItem';
import ContentBlock from '../ContentBlock';


const styles = {};

interface IBeanSelectorProps extends WithStyles<typeof styles> {
	availableBeans: IBean[],
	selectedBean: IBean,
    selectBeanHandler: (bean: IBean) => void // handles bean selection change
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
	
	// create a BeanItem Component for each available Bean
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

	// component lifecycle hook
	componentWillReceiveProps(nextProps: IBeanSelectorProps) {

		// receives new props
		const nextSelectedProps = nextProps.selectedBean;
		const currentSelectedProps = this.props.selectedBean;

		let updateSelectedBean = true;

		// compare if new props are the same like before
		if (typeof currentSelectedProps !== "undefined" && typeof nextSelectedProps !== "undefined") {
			if (nextSelectedProps.id === currentSelectedProps.id) {
				updateSelectedBean = false;
			}
		}


		// update state only if update is relevant / props are new
		if (updateSelectedBean) {

			// find index of selected bean
			const nextSelectedBeanId = typeof nextSelectedProps === "undefined" ? "" : nextSelectedProps.id; 
			const index = this.props.availableBeans.findIndex(bean => bean.id === nextSelectedBeanId)
			const newIndex = index >= 0 ? index : 0;

			// save current selection index
			this.setState({
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



