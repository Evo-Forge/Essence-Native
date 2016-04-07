
var React = require('react-native');

var Helpers = require('../Styles/helpers');

var {
	View,
	StyleSheet,
	SliderIOS,
} = React;

class SliderItem extends React.Component{
	
	constructor(props) {
		super(props);
		this.state = {
			currentValue: this.props.disable ? 50 : this.props.start || 0,
		}
	}

	handleChange(value) {
		if (!this.props.disable) {
			this.setState({
				currentValue: value
			})
		}
	}

	render() {
		return (
			<SliderIOS
				minimumValue={0}
				maximumValue={100}
				maximumTrackTintColor={'#9e9e9e'}
				minimumTrackTintColor={'#3f51b5'}
				style={[Helpers['e-slider'], this.props.style]}
				value={this.state.currentValue}
				onValueChange={this.handleChange.bind(this)} />
		);
	}
};

// Example:
// <SliderItem start={10} />
// <SliderItem start={40} />
// <SliderItem start={47} />
// <SliderItem start={50} />
// <SliderItem start={23} />
// <SliderItem start={20} />

module.exports = SliderItem;