
var React = require('react-native');

var Helpers = require('../Styles/helpers');

var {
	View,
	DatePickerIOS,
} = React;

class DatePicker extends React.Component{

	constructor(props) {
		super(props);

		this.state = {
			date: new Date(),
		}
	}

	onDateChange(date) {
		this.setState({
			date: date
		})
	}

	render() {
		return (
			<View style={[Helpers['e-picker'], this.props.style]}>
				<DatePickerIOS
					date={this.state.date}
					mode='date'
					onDateChange={this.onDateChange.bind(this)}/>
			</View>
		); 
	}
};

// Example:
// => navigate to DatePicker
//
// <BtnItem onPress={Utils.navigateMenu.bind(this, "Date Picker", DatePicker)}>
// 	 Please select your Date
// </BtnItem>
//
// => navigate to DatePicker with style props
//
//<BtnItem onPress={Utils.navigateMenu.bind(this, "Date Picker", DatePicker, {style: [Colors['e-background-grey-300'], Helpers['e-margin-top-50']] } )}>
//	 Please select your Date
//</BtnItem>
//
// => as standalone component
// <DatePicker style={Colors['e-background-grey']} />

module.exports = DatePicker;