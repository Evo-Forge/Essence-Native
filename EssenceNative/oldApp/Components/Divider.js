
var React = require('react-native');

var Helpers = require('../Styles/helpers');

var {
	View,
	StyleSheet,
} = React;

class Divider extends React.Component{
	render() {
		return (
			<View style={[Helpers['e-divider'], this.props.style]}>
	            {this.props.children}
            </View>
		);
	}
};

// Example:
// <Divider style={[
//	 Helpers['thinnest'],
//	 Helpers['medium'],
//	 Helpers['e-margin-top-50'],
//	 Helpers['e-margin-bottom-50'],
//	 Colors['e-background-grey-400'],
//	 ]} />

module.exports = Divider;
