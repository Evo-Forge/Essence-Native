"use strict";

// Essence components
var BtnItem = require('./BtnItem');
var Divider = require('./Divider');
var Progress = require('./Progress');
var PaperItem = require('./PaperItem');
var Card = require('./Cards');
var SwitchItem = require('./SwitchItem');
var SliderItem = require('./SliderItem');
var DialogItem = require('./DialogItem');
var DatePicker = require('./DatePicker');
var Menu = require('./Menu');
var List = require('./List');
var Navigation = require('./Navigation');
var SlideMenu = require('./SlideMenu');

// Components for Menu navigation
var Pages = require('../Pages/Pages');

// Styles components
var Colors = require('../Styles/colors');
var Helpers = require('../Styles/helpers');
var Typography = require('../Styles/typography');
var Buttons = require('../Styles/buttons');

// Utils components
var Utils = require('../Utils/helpers');

var Essence = {
	// Styles
	Colors: 		Colors,
	Helpers: 		Helpers,
	Typography: 	Typography,
	Buttons: 		Buttons,

	// Pages
	GetStarted: 	Pages.GetStarted,
	Main: 			Pages.Main,

	// Utils
	Utils: 			Utils,
	
	// Modules
	BtnItem: 		BtnItem,
	Divider: 		Divider,
	Progress: 		Progress,
	PaperItem: 		PaperItem,
	Card: 			Card,
	SwitchItem: 	SwitchItem,
	SliderItem: 	SliderItem,
	DialogItem: 	DialogItem,
	DatePicker: 	DatePicker,
	Menu: 			Menu,
	List: 			List,
	Navigation: 	Navigation,
	SlideMenu: 		SlideMenu,
};

module.exports = Essence;