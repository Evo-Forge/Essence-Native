
var React = require('react-native');
var deviceScreen = require('Dimensions').get('window');
var LayoutAnimation = require('react-native').LayoutAnimation;
var Helpers = require('../Styles/helpers');
var Utils = require('../Utils/helpers');

var {
  PanResponder,
  View,
} = React;

var openMenuOffset = Utils.dimensions().width * 2 / 3,
    hiddenMenuOffset = 0,
    barrierForward = Utils.dimensions().width / 4;

var Navigation = React.createClass({
  
  shouldOpenMenu(dx: Number) {
    return dx > barrierForward;
  },

  queueAnimation(animation) {
    var _animation = Utils.animations[animation];
    if (!_animation) {
      _animation = Utils.animations['linear'];
    }
    
    LayoutAnimation.configureNext(_animation);
  },

  left: 0,

  prevLeft: 0,

  componentWillMount: function() {
    this.responder = PanResponder.create({
      onMoveShouldSetPanResponder: this.handleMoveShouldSetPanResponder,
      onPanResponderMove: this.handlePanResponderMove,
      onPanResponderRelease: this.handlePanResponderEnd,
    });
  },

  updatePosition: function() {
    this.Navigation.setNativeProps({ left: this.left });
  },

  handleMoveShouldSetPanResponder: function(e: Object, gestureState: Object) {
    var x = gestureState.dx;
    var y = Math.round(Math.abs(gestureState.dy));

    if (x != 0 && y < 10) {
      return true;
    }
    return false;
  },

  handlePanResponderMove: function(e: Object, gestureState: Object) {
    this.left = this.prevLeft + gestureState.dx;

    if (this.left > 0) {
      this.updatePosition();
    }
  },

  openMenu: function() {
    this.queueAnimation(this.props.animation);
    this.left = this.props.openMenuOffset || openMenuOffset;
    this.updatePosition();
    this.prevLeft = this.left;
  },

  closeMenu: function() {
    this.queueAnimation(this.props.animation);
    this.left = this.props.hiddenMenuOffset || hiddenMenuOffset;
    this.updatePosition();
    this.prevLeft = this.left;
  },

  handlePanResponderEnd: function(e: Object, gestureState: Object) {
    if (this.shouldOpenMenu(this.left + gestureState.dx)) {
      this.openMenu();
    } else {
      this.closeMenu();
    }

    this.updatePosition();
    this.prevLeft = this.left;
  },

  getContentView: function() {
    return (
      <View
        style={Helpers["e-nav-view"]}
        ref={(Navigation) => this.Navigation = Navigation}
        {...this.responder.panHandlers}>

        {this.props.children}
      </View>
    );
  },

  getMenuView: function() {
    var menuActions = {
      close: this.closeMenu
    };

    return (
      <View style={Helpers["e-nav-content"]}>
        {React.addons.cloneWithProps(this.props.menu, { menuActions, navigator })}
      </View>
    );
  },

  render: function() {
    return (
      <View style={[Helpers["e-nav-drawer"], this.props.style]}>
        {this.getMenuView()}
        {this.getContentView()}
      </View>
    );
  }
});

// Example
//class NavigatorMenu extends React.Component{
//  
//  constructor(props){
//    super(props);
//  }
//
//  changePage(props) {
//    this.props.menuActions.close();
//    /** 
//      this.props.navigator.push(component);
//    **/
//  }
//
//  render() {
//    return (
//      <List style={Helpers['e-padding-top-100']}>
//        <TouchableHighlight
//          underlayColor='#5C6BC0' 
//          style={[ Helpers['e-list-item'], ]}
//          onPress={this.changePage.bind(this, "Settings")}>
//          <View style={Helpers['e-list-content']}>
//            <Text style={[Helpers['e-list-text'], Colors['e-text-indigo-800']]}>Settings</Text>
//          </View>
//        </TouchableHighlight>
//
//        <TouchableHighlight
//          underlayColor='#5C6BC0' 
//          style={[ Helpers['e-list-item'], ]}
//          onPress={this.changePage.bind(this, "Getting started")}>
//          <View style={Helpers['e-list-content']}>
//            <Text style={[Helpers['e-list-text'], Colors['e-text-indigo-800']]}>Getting started</Text>
//          </View>
//        </TouchableHighlight>
//
//        <TouchableHighlight
//          underlayColor='#5C6BC0' 
//          style={[ Helpers['e-list-item'], ]}
//          onPress={this.changePage.bind(this, "Help")}>
//          <View style={Helpers['e-list-content']}>
//            <Text style={[Helpers['e-list-text'], Colors['e-text-indigo-800']]}>Help</Text>
//          </View>
//        </TouchableHighlight>
//
//        <TouchableHighlight
//          underlayColor='#5C6BC0' 
//          style={[ Helpers['e-list-item'], ]}
//          onPress={this.changePage.bind(this, "Contact")}>
//          <View style={Helpers['e-list-content']}>
//            <Text style={[Helpers['e-list-text'], Colors['e-text-indigo-800']]}>Contact</Text>
//          </View>
//        </TouchableHighlight>
//      </List>
//    );
//  }
//}
// <Navigation menu={<NavigatorMenu navigator={navigator} />} />

module.exports = Navigation;