/**
 * Created by zsoltmakai on 5/25/2016.
 */
'use strict';

const React = require('react-native');

const {
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
  Component,
  Dimensions
  } = React;

const {
  width: deviceWidth,
  height: deviceHeight
  } = Dimensions.get('window');

const ANIMATION_END_Y = Math.ceil(deviceHeight *.5),
  NEGATIVE_END_Y = ANIMATION_END_Y * -1,
  startCount = 1;

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;

}

class AnimatedHeart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      position: new Animated.Value(0)
    };
  }

  componentWillMount() {
    this._yAnimation = this.state.position.interpolate({
      inputRange: [NEGATIVE_END_Y, 0],
      outputRange: [ANIMATION_END_Y, 0]
    });

    this._opacityAnimation = this._yAnimation.interpolate({
      inputRange: [0, ANIMATION_END_Y],
      outputRange: [1, 0]
    });

    this._scaleAnimation = this._yAnimation.interpolate({
      inputRange: [0, 15, 30],
      outputRange: [0, 1.2, 1],
      extrapolate: 'clamp'
    });

    this._xAnimation = this._yAnimation.interpolate({
      inputRange: [0, ANIMATION_END_Y/2,ANIMATION_END_Y],
      outputRange: [0, 15, 0]
    });

    this._rotateAnimation = this._yAnimation.interpolate({
      inputRange: [0, ANIMATION_END_Y/4, ANIMATION_END_Y/3, ANIMATION_END_Y/2, ANIMATION_END_Y],
      outputRange: ['0deg', '-2deg', '0deg', '2deg', '0deg']
    });
  }

  componentDidMount() {
    Animated.timing(this.state.position, {
      duration: 2000,
      toValue: NEGATIVE_END_Y
    }).start(this.props.onComplete);
  }

  getHeartAnimationStyle() {
    return {
      transform: [
        {translateY: this.state.position},
        {translateX: this._xAnimation},
        {scale: this._scaleAnimation},
        {rotate: this._rotateAnimation}
      ],
      opacity: this._opacityAnimation
    }
  }

  renderHeart() {

    return (
      <View {...this.props} style={[styles.heart, this.props.style]}>
        <View style={[styles.leftHeart, styles.heartShape]}/>
        <View style={[styles.rightHeart, styles.heartShape]}/>
      </View>
    )
  }

  render() {

    return (
      <Animated.View style={[styles.heartWrap, this.getHeartAnimationStyle(), this.props.style]}>
        {this.renderHeart()}
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  heartWrap: {
 //   position: 'absolute',
    bottom: 30,
    backgroundColor: 'transparent'
  },
  heart: {
    width: 50,
    height: 50,
    backgroundColor: 'transparent'
  },
  heartShape: {
    width: 30,
    height: 45,
    position: 'absolute',
    top: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: '#6427d1'
  },
  leftHeart: {
    transform: [
      {rotate: '-45deg'}
    ],
    left: 5
  },
  rightHeart: {
    transform: [
      {rotate: '45deg'}
    ],
    right: 5
  }
});

module.exports = AnimatedHeart;