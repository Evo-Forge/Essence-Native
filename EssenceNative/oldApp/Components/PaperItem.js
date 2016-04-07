
var React = require('react-native');

var Helpers = require('../Styles/helpers');

var {
	View,
	Text,
	StyleSheet,
} = React;

class PaperItem extends React.Component{
	render() {
		this.hasType = Helpers[this.props.type] ? Helpers[this.props.type] : null;

		return (
			<View style={[Helpers['e-paper'], this.hasType, this.props.containerStyle]}>
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
// type: sharp || circle; default: ''
//
// <PaperItem type={'sharp'}>
// 		Your text
// </PaperItem>

module.exports = PaperItem;