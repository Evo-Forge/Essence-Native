
var LayoutAnimation = require('react-native').LayoutAnimation;
var Window = require('Dimensions').get('window');

var utils = {
	navigateMenu(Title, Component, PassProps) {
		this.props.navigator.push({
			title: Title || "Select Menu",
			component: Component,
			passProps: PassProps || {},
		})
	},


	openLink(url) {
		if (url) { LinkingIOS.openURL(url); }
		return false;
	},

	animations: {
		'spring': {
			duration: 500,
			create: {
				duration: 300,
				type: LayoutAnimation.Types.easeInEaseOut,
				property: LayoutAnimation.Properties.opacity,
			},
			update: {
				type: LayoutAnimation.Types.spring,
				springDamping: 0.6,
			},
		},
		'linear': {
			duration: 300,
			create: {
				type: LayoutAnimation.Types.linear,
			},
			update: {
				type: LayoutAnimation.Types.linear,
				springDamping: 0.7,
			},
		},
		'easeInOut': {
			duration: 300,
			create: {
				type: LayoutAnimation.Types.easeInEaseOut,
				property: LayoutAnimation.Properties.scaleXY,
			},
			update: {
				delay: 100,
				type: LayoutAnimation.Types.easeInEaseOut,
			},
		},
	},

	dimensions() { return Window },
}

// Examples:
// var Utils = require('../Utils/helpers');
//
// => Window Dimensions: Utils.dimensions;
//
// => NavigatorIOS: onPress={Utils.navigateMenu.bind(this, "Get Started", GetStarted)}

module.exports = utils;