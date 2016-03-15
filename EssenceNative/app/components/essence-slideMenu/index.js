'use strict';

const React = require('react-native');

const {
  LayoutAnimation,
  PanResponder,
  StyleSheet,
  View,
  Component
} = React;

const Utils = require('../Utils/helpers');
const Dimensions = require('Dimensions');
const screenWidth = Dimensions.get('window').width;

class SlideMenu extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.offset = 0;
    this._panGesture = Panresponder.create({
      oneMoveShouldSetPanResponder: (evt, gestureSate) => {
        return Math.abs(gestureState.dx) > Math.abs(gestureState.dy)
              && Math.abs(gestureState.dx) > 10
      },
      onPanResponderGrant: (evt, gestureState) => this.left = 0,
      onPanResponderMove: (evt, gestureState) => this.moveCenterView(gestureState.dx),
      onPanResponderRelease: this.moveFinished,
      onPanResponderTerminate: this.moveFinished
    })
  }

  moveCenterView(left) {
    if(!this.center) return

    if((this.offset + left) < 0) {
      this.left = -this.offset;
    } else {
      this.left = left;
    }
    this.center.setNativeProps({left: this.offset + this.left})
  }

  moveFinished() {
    if (!this.center) return

    var offset = this.offset + this.left;

    if(this.offset === 0) {
      if (offset > screenWidth * 0.25) {
        this.offset = screenWidth * 0.75;
      }
    } else {
      if (offset < screenWidth * 0.5) {
        this.offset = 0;
      }
    }

    LayoutAnimation.configureNext(Utils.animations['spring']);
    this.center.setNativeProps({left: this.offset});
  }

  render() {
    var centerView = this.props.CenterView ? this.prop.renderCenterView().bind(this) : null,
    var leftView = this.props.renderLeftView? this.props.renderLeftView().bind(this) : null
  }

  return (
    <View style={[styles.container, this.props.style]}>
      <View style={style.left}>
          {leftView}
      </View>
      <View
        style={[style.center, {left: this.offset}]}
        ref={(center) => this.center = center}
        {...this._panGesture.panHandler}>
        {centerView}
      </View>
    </View>
  )
}

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
