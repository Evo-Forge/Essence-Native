
var React = require('react-native');

var Helpers = require('../Styles/helpers');
var Buttons = require('../Styles/buttons');

var {
	Text,
	View,
	StyleSheet,
} = React;

class BtnItem extends React.Component{
	render() {
		return (
			<View style={[Buttons['e-btn'], Helpers['e-center'], this.props.containerStyle]}>
	            <Text 
	              style={this.props.textStyle}
	              onPress={this.props.onPress}
	            >
	              {this.props.children}
	            </Text>
            </View>
		);
	}
};

// Example:
// <BtnItem 
//  	containerStyle={Colors['e-background-indigo-800']} 
//  	textStyle={Colors['e-text-white']}
//  	onPress={Utils.navigateMenu.bind(this, "Get Started", GetStarted)}>
//  	Your button text
// </BtnItem>

module.exports = BtnItem;