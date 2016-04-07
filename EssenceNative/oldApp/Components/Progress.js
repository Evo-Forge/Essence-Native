
var React = require('react-native');

var Helpers = require('../Styles/helpers');

var {
	View,
	StyleSheet,
	ActivityIndicatorIOS,
} = React;

class Progress extends React.Component{
	render() {
		return (
			<ActivityIndicatorIOS
				color={this.props.color ? this.props.color : '#139FC2'}
				style={[{height: 80}, this.props.style]}
				size={this.props.small ? "small" : "large"}/>
		);
	}
};

// Example:
// <Progress 
//	 small={true} 
//	 color='red' 
//	 style={Helpers['e-padding-top-50']}/>

module.exports = Progress;