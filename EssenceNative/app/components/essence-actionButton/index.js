/**
 * Created by zsoltmakai on 5/16/2016.
 */
'use strict';

const React = require('react-native');
const ui = require('../../utils/ui');
const styles = require('./styles');

const {
  Component,
  View,
  PropTypes,
  TouchableHighlight,
  Text,
  Animated
  } = React;

const SIZE = {
  mini: 40,
  default: 56
};


class UiActionButton extends Component {

  static propTypes = {
    color: PropTypes.string,
    onPress: PropTypes.func,
    icon: PropTypes.string,
    size: PropTypes.any
  };

  static defaultProps = {
    color: 'green',
    size: 'default'
  };

  constructor(props) {
    super(props);
    this.state = {
      elevation: 6,
      isVisible: true,
      isPressed: false
    };
    this.pan = new Animated.Value(0);
  }

  componentWillMount() {
    this.scaleAnimation = this.pan.interpolate({
      inputRange: [0, 15, 30],
      outputRange: [0, 1.2, 1],
      extrapolate: 'clamp'
    });
    this.rotateAnimation = this.pan.interpolate({
      inputRange: [-150, 0, 0],
      outputRange: ['0deg', '15deg', '0deg']
    });
  }
  componentDidMount() {
    Animated.timing(this.pan, {
      toValue: 0,
      duration: 500
    }).start()
  }

  getAnimationStyle() {
    return {
      transform: [
        {scale: this.scaleAnimation},
        {rotate: this.rotateAnimation}
      ]
    }
  }

  toggle() {
    if(this.state.isVisible) return this.hide();
    return this.show();
  }

  show() {

  }

  hide() {

  }

  onPress(e) {
    this.setState({
      elevation: 12,
      isPressed: true
    });
    e.stopPropagation();
    this.props.onTouch && this.props.onTouch();
  }

  onRelease(e) {
    this.setState({
      elevation: 6,
      isPressed: false
    });
    e.stopPropagation();
  }

  renderIcon() {
 //   if(!this.props.icon) return;
    return (
      <View style={styles.actionButtonIcon}><Text style={styles.icon}>+</Text> </View>
    )
  }

  render() {
    let buttonSize;
    if(typeof this.props.size === "string") {
      buttonSize = SIZE[this.props.size];
    } else {
      buttonSize = SIZE['default'];
    }
    const color = (this.state.isPressed ? ui.darken(this.props.color, 10) : this.props.color);
    const localStyle = {
      height: buttonSize,
      width: buttonSize,
      borderRadius: buttonSize,
      backgroundColor: color
    };

    return (
      <View style={this.props.style}>
        <TouchableHighlight
          activeOpacity={1}
          underlayColor={color}
          onPressIn={this.onPress.bind(this)}
          onPressOut={this.onRelease.bind(this)}
          style={[styles.wrapper, localStyle, {elevation: this.state.elevation}]}>
            <Animated.View style={[this.getAnimationStyle.bind(this), this.props.style]}>
              {this.renderIcon.bind(this)}
            </Animated.View>
        </TouchableHighlight>
      </View>
    )
  }
}

module.exports = UiActionButton;
