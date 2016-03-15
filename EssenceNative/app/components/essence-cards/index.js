const React = require('react-native');


var Helpers = require('../../styles/helpers');
var Typography = require('../../styles/typography');
var Colors = require('../../styles/colors');


const {
	View,
    Image,
    Text,
	StyleSheet,
	Component
} = React;


class Item extends React.Component{
	render() {
		return (
			<View style={this.props.cardStyle}>
	            {this.props.children}
            </View>
		);
	}
};

class Header extends Component {
	render() {
		if(!this.props.imageSource) return null;

		return (
			<View style={[{width: this.props.imageWidth || 350}, this.props.cardStyle]}>
				<Image
					style={[{width: this.props.imageWidth || 350, height: this.props.imageHeight || 200}, {backgroundColor: 'transparent'}]}
					source={{uri: this.props.imageSource}}>
					<Text style={[Typography['e-display'], Colors['e-text-white'], {position: 'absolute', bottom: '10', left: '2'}]}>{this.props.imageText}</Text>
				</Image>
			</View>
		)
	}
};

class Content extends Component {
	render() {
		return (
			<View>
				<Text>
					{this.props.children}
				</Text>
			</View>
		);
	}
};

class Footer extends Component {
	render() {
		return (
			<View>
				{this.props.children}
			</View>
		);
	}
};

const Card = {
  Item,
  Header,
  Content,
  Footer
}


module.exports = Card;
