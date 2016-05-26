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
  Dimensions,
  Text
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


    this._scaleAnimation = this._yAnimation.interpolate({
      inputRange: [0, 15, 30],
      outputRange: [0, 1.2, 1],
      extrapolate: 'clamp'
    });

    this._xAnimation = this._yAnimation.interpolate({
      inputRange: [0, ANIMATION_END_Y/2,ANIMATION_END_Y],
      outputRange: [0, 15, 0]
    });

    /* old inputs for rotate
      inputRange: [0, ANIMATION_END_Y/4, ANIMATION_END_Y/3, ANIMATION_END_Y/2, ANIMATION_END_Y],
     outputRange: ['0deg', '-45deg', '0deg', '45deg', '0deg']*/

    this._rotateAnimation = this._yAnimation.interpolate({
      inputRange: [ 0, 300],
      outputRange: [ '-25deg', '0deg']
    });
  }

  componentDidMount() {
    Animated.timing(this.state.position, {
      duration: 100,
      toValue: NEGATIVE_END_Y
    }).start(this.props.onComplete);
  }

  getHeartAnimationStyle() {
    return {
      transform: [
    //    {translateY: this.state.position},
    //    {translateX: this._xAnimation},
        {scale: this._scaleAnimation},
        {rotate: this._rotateAnimation}
      ]
    }
  }

  renderHeart() {

    return (
      <View {...this.props} style={[styles.heart, this.props.style]}>
        <View style={styles.circle}><Text style={styles.circleText}>+</Text></View>

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
    width: 60,
    height: 60,
    backgroundColor: 'transparent'
  },
  circle: {
    width: 60,
    height: 60,
    position: 'absolute',
    top: 0,
    borderRadius: 60,
    backgroundColor: '#6427d1',
    alignItems: 'center',
    justifyContent: 'center'
  },
  circleText : {
    fontSize: 24,
    color: 'white',
    textAlign: 'center'
  }

});

module.exports = AnimatedHeart;