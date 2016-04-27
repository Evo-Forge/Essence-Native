const React = require('react-native');


const helpers = require('../../constants/helpers');
const typography = require('../../constants/typography');
const colors = require('../../constants/colors');
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
		backgroundColor: PropTypes.string,
		backgroundImage: PropTypes.any
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

		};
		return (
			<View style={styles.container}>
				<View style={styles.headerContainer}>
					<Text style={styles.headerText}>{this.props.headerText}</Text>
				</View>
				<View style={styles.contentContainer}>
					<Text style={styles.contentText}>{this.props.text}</Text>
				</View>

				<View style={styles.footerContainer}>
					<Button style={styles.leftButton} text={'OK'} backgroundColor={colors['e-background-indigo-500']} elevation={0} width={80} />
					<Button style={styles.rightButton}text={'SKIP'} type={'default'} elevation={0}/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		elevation: 2,
        height: 200,
        width: 300,
        backgroundColor: 'white',
        borderRadius: 2
	},
	headerContainer: {
	    paddingTop: 24,
        paddingBottom: 16,
        paddingLeft: 16,
        paddingRight: 16
	},
    headerText: {
        fontSize: 24
    },
	contentContainer: {
		flex: 2,
        padding: 16
	},
    contentText: {
        fontSize: 14

    },
	footerContainer: {
		flexDirection: 'row',
        padding: 8,
        justifyContent: 'space-between',
        borderTopWidth: 0.5,
        borderTopColor: 'lightgrey'

	}


});

module.exports = Card;
