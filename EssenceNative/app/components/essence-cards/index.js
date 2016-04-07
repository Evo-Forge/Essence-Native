const React = require('react-native');


const helpers = require('../../styles/helpers');
const typography = require('../../styles/typography');
const colors = require('../../styles/colors');
const Divider = require('../essence-divider/index');
const Button = require('../essence-button/index');

const {
	View,
    Image,
    Text,
		StyleSheet,
		Component,
		PropTypes
} = React;



class Card extends Component {
	static propTypes = {
		headerText: PropTypes.string,
		text: PropTypes.string,
		width: PropTypes.number,
		height: PropTypes.number,
		image: PropTypes.any,
		size: PropTypes.number,
		backgroundColor: PropTypes.string
	};

	static defaultProps = {
		headerText: 'Header',
		text: 'Card content, can be used with images',
		width: 100,
		height: 100,
		backgroundColor: 'white',
		size: 10
	};

	render() {
		let fontSize = this.props.size,
		 	cardSize = fontSize *2;
		const localStyle = {
			width: cardSize,
			height: cardSize,
			backgroundColor: this.props.backgroundColor,

		}
		return (
			<View style={styles.contaier}>
				<View style={styles.headerContainer}>
					<Text>{this.props.headerText}</Text>
				</View>
				<View style={styles.contentContainer}>
					<Text>{this.props.text}</Text>
				</View>
				<Divider/>
				<View style={styles.footerContainer}>
					<Button style={styles.leftButton} text={'OK'} type={'PRIMARY'}/>
					<Button text={'SKIP'}/>
				</View>
			</View>
		);
	}
};

const styles = StyleSheet.create({
	container: {
		borderWidth: 0.5,
		flex: 1
	},
	headerContainer: {
	//	flex: 1,
		alignSelf: 'flex-start'
	},
	contentContainer: {
		flex: 2
	},
	footerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	leftButton: {
		left: 10
	}

})

module.exports = Card;
