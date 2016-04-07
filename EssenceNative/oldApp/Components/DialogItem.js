
var React = require('react-native');

var {
	View,
	AlertIOS,
} = React;

class DialogItem extends React.Component{

	renderDialog() {
		return (
			AlertIOS.alert(
				this.props.title || null,
				this.props.message || null,
				this.props.children || [{
					text: 'OK', 
					onPress: () => console.log('OK'),
				}]
			)
		)
	}

	render() {
		this.renderDialog();
		return null; 
	}
};

// Example:
// <DialogItem 
// 	title={"Alert title"} 
// 	message={"Alert message"}
// >
// 	{[
// 		{text: 'OK', onPress: () => console.log('OK Pressed!')},
// 		{text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
// 	]}
// </DialogItem>

module.exports = DialogItem;