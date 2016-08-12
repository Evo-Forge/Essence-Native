'use strict';
const React = require('react-native');

// not finished, might be redundant in favor of a imported module

const deviceScreen = Dimensions.get('window');
const helpers = require('');
const utils = require('');
const styles = require('./styles');

const {
  PanResponder,
  View,
  Dimensions
  } = React;

var openMenuOffset = Utils.dimensions().width * 2/3,
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
      onPanResponderRelease: this.handlePanResponderEnd
    });
  },

  updatePosition: function() {
    this.Navigation.setNativeProps({ left: this.left });
  },

  handleMoveShouldSetPanResponder: function(e: Object, gestureState: Object) {
    var x = gestureState.dx;
    var y = Math.round(Math.abs(gestureState.dy));

    if ( x != 0 && y < 10) {
      return true;
    }
    return false;
  },

  handlePanResponderMove: function(e: Object, gesture: Object) {
    this.left = this.prevLeft + gestureState.dx;

    if(this.left > 0) {
      this.updatePosition();
    }
  },

  openMenu: function() {
    this.queueAnimation(this.props.animation);
    this.left = this.props.opneMenuOffset || openMenuOffset;
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
        style={Helpers['e-nav-view']}
        ref={(Navigation) => this.Navigation = Navigation}
        {...this.responder.panHandlres}>
        {this.props.children}
      </View>
    );
  },

  getMenuView: function() {
    var menuActions = {
      close: this.closeMenu
    };

    return (
      <View style={helpers['e-nav-content']}>
        {React.addons.cloneWithProps(this.props.menu, { menuActions, navigator })}
      </View>
    );
  },

  render: function() {
    return (
      <View style={[helpers['e-nav-drawer'], this.props.style]}>
        {this.getMenuView()}
        {this.getContentView()}
      </View>
    );
  }
});
