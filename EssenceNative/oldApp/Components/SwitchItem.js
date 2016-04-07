
var React = require('react-native');

var Helpers = require('../Styles/helpers');

var {
	View,
	Text,
	StyleSheet,
	SwitchIOS,
} = React;

class SwitchItem extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			switchIsOn: this.props.checked,
		}
	}

	renderTextBefore() {
		if (!this.props.beforeText) return null;
		
		return (
			<Text style={[Helpers['text-before'], this.props.textStyle]}>
				{this.props.beforeText}
			</Text>
		);
	}

	renderTextAfter() {
		if (!this.props.afterText) return null;
		
		return (
			<Text style={[Helpers['text-after'], this.props.textStyle]}>
				{this.props.afterText}
			</Text>
		);
	}

	render() {

		return (
			<View style={[Helpers['e-switch'], this.props.containerStyle]}>
				{this.renderTextBefore()}

				<SwitchIOS
					onTintColor={'#009587'}
					tintColor={'#505050'}
					onValueChange={(value) => this.setState({switchIsOn: value})}
					value={this.state.switchIsOn}
					disabled={this.props.disabled}/>

				{this.renderTextAfter()}
			</View>
		);
	}
};

// Example:
// <SwitchItem
//	 textStyle={Colors['e-text-white']}
//	 containerStyle={Colors['e-background-indigo-300']}
//	 beforeText='Switches before'
//	 afterText='Switches after'/>

module.exports = SwitchItem;