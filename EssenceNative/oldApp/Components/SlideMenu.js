'use strict'

var React = require('react-native')
var {
  LayoutAnimation,
  PanResponder,
  StyleSheet,
  View,
} = React

var Utils = require('../Utils/helpers')
var Dimensions = require('Dimensions')
var screenWidth = Dimensions.get('window').width

var SlideMenu = React.createClass({
  componentWillMount: function() {
    this.offset = 0 // Contains the center view offset from the left edge
    this._panGesture = PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        return Math.abs(gestureState.dx) > Math.abs(gestureState.dy)
               && Math.abs(gestureState.dx) > 10
      },
      onPanResponderGrant: (evt, gestureState) => this.left = 0,
      onPanResponderMove: (evt, gestureState) => this.moveCenterView(gestureState.dx),
      onPanResponderRelease: this.moveFinished,
      onPanResponderTerminate: this.moveFinished,
    })
  },

  moveCenterView: function(left) {
    if (!this.center) return

    if ((this.offset + left) < 0) {
      this.left = -this.offset
    } else {
      this.left = left
    }

    this.center.setNativeProps({left: this.offset + this.left})
  },

  moveFinished: function() {
    if (!this.center) return

    var offset = this.offset + this.left

    if (this.offset === 0) {
      if (offset > screenWidth * 0.25) {
        this.offset = screenWidth * 0.75
      }
    } else {
      if (offset < screenWidth * 0.5) {
        this.offset = 0
      }
    }

    LayoutAnimation.configureNext(Utils.animations['spring']);
    //Animation.startAnimation(this.center, 400, 0, 'easeInOut', {'anchorPoint.x': 0, 'position.x': this.offset})
    this.center.setNativeProps({left: this.offset})
  },

  render: function() {
    var centerView = this.props.renderCenterView ? this.props.renderCenterView() : null
    var leftView = this.props.renderLeftView ? this.props.renderLeftView() : null

    return (
      <View style={[styles.container, this.props.style]}>
        <View style={styles.left}>
          {leftView}
        </View>
        <View
          style={[styles.center, {left: this.offset}]}
          ref={(center) => this.center = center}
          {...this._panGesture.panHandlers}>
          {centerView}
        </View>
      </View>
    )
  },
})

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    flex: 1,
    backgroundColor: '#EEEEEE',
  },
  left: {
    position: 'absolute',
    top:0,
    left:0,
    bottom:0,
    right: 0,
    backgroundColor: '#EEEEEE',
  },
})

module.exports = SlideMenu