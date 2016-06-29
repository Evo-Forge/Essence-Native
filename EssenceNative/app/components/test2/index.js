'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Component,
  Animated,
  Dimensions,
  PanResponder,
  TouchableWithoutFeedback
  } = React;

const ACTION_TIMER = 400;


class SampleApp extends Component {

  constructor(props) {
    super(props);
    this.pan = new Animated.Value(0);
  }

  componentWillMount() {


  }

  handlePressIn() {
    Animated.timing(this.pan, {
      toValue: 100,
      duration: 1000
    }).start();
  }

  handlePressOut() {
    Animated.timing(this.pan, {
      toValue: 0,
      duration: 1000
    }).start();
  }

  getCircleStyle() {
    this._scaleAnimation = this.pan.interpolate({
      inputRange: [0, 15, 30],
      outputRange: [0, 1.2, 1],
      extrapolate: 'clamp'
    });

    this._rotateAnimation = this.pan.interpolate({
      inputRange: [ -150, 0, 0],
      outputRange: [ '0deg', '50deg', '0deg']

    });

    return {
      transform: [
        {scale: this._scaleAnimation},
        {rotate: this._rotateAnimation}
      ]
    }
  }

  renderCircle() {



    return (
      <View  style={[styles.circleWrapper]}>
        <View style={styles.circle}><Text style={styles.circleText}>+</Text></View>
      </View>
    )
  }

  render() {

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPressIn={this.handlePressIn.bind(this)}
          onPressOut={this.handlePressOut.bind(this)}>
          <Animated.View style={[styles.wrapper, this.getCircleStyle()]} >
            {this.renderCircle()}
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

var styles = StyleSheet.create({
 /* container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },*/
  wrapper: {
    bottom: 30,
    backgroundColor: 'transparent'
  },
  circleWrapper: {
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
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5
  },
  circleText: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center'
  }
});

module.exports = SampleApp;

