
var React = require('react-native');

var Helpers = require('../Styles/helpers');

var {
	View,
	Text,
	PickerIOS,
} = React;

var MenuItem = PickerIOS.Item;

class Menu extends React.Component{

	constructor(props) {
		super(props);

		this.state = {
			placeholder: this.props.placeholder || 'Menu',
			menuSelected: 0,
			showMenu: false,
		}
	}

	showMenu() {
		this.setState({
			showMenu: true,
		})
	}

	handleSelect(menuIndex) {
		this.setState({
			menuSelected: menuIndex,
			placeholder: this.props.children[menuIndex] || this.props.placeholder,
			showMenu: false,
		})
	}

	renderPlaceholder() {
		if (!this.props.placeholder) return null;

		return (
			<Text 
				style={[{textAlign: 'center'}, this.props.textStyle]}
				onPress={this.showMenu.bind(this)}>
				{this.state.placeholder}
			</Text>
		)
	}

	renderPicker() {
		if (
			(!Array.isArray(this.props.children) && this.props.children.length > 0)
		) return null;

		return (
			<PickerIOS
			  selectedValue={this.state.menuSelected}
			  onValueChange={this.handleSelect.bind(this)}>
				{this.props.children.map(
		            (menuName, menuIndex) => (
		              <MenuItem
		                key={'menu_' + menuIndex}
		                value={menuIndex}
		                label={menuName}/>
		            )
	            )}
			</PickerIOS>
		)
	}

	render() {
		return (
			<View 
				style={[Helpers['e-nav-menu'], this.props.containerStyle]}>
				{this.renderPlaceholder()}
				{this.renderPicker()}
			</View>
		); 
	}
};

// Example:
// <Menu 
// 	placeholder='Select option'
// 	textStyle={Colors['e-text-indigo-800']}
// >
// 	{[
// 		'Menu options 1',
// 		'Menu options 2',
// 		'Menu options 3',
// 		'Menu options 4',
// 	]}
// </Menu>

module.exports = Menu;