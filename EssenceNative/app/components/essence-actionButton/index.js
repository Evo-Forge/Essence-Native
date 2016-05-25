/**
 * Created by zsoltmakai on 5/16/2016.
 */
'use strict';

const React = require('react-native');
const ui = require('../../utils/ui');

const {
  Component,
  StyleSheet,
  View,
  Dimensions,
  PropTypes,
  TouchableHighlight,
  Text
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
    if(!this.props.icon) return;
    return (
      <View style={styles.actionButtonIcon}> </View>
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
            <Text style={styles.icon}>+</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  actionButtonIcon: {
    /*   height: 56,
     width: 56,
     borderRadius: 56,
     backgroundColor: '#FF4081',*/

  },
  icon: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 24
  }

});

module.exports = UiActionButton;
