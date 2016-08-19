/**
 * Created by zsoltmakai on 8/17/2016.
 */
'use strict';

import React, {Component, PropTypes} from 'react';

import {
  View,
  Text,
  Dimensions,
  Animated,
  TouchableHighlight
} from 'react-native';

const styles = require('./styles');

function getHeight() {
  return Dimensions.get('window').height;
}

class UiBottomNavigation extends React.Component {

  static propTypes = {
    content: PropTypes.string,
  };

  static defaultProps = {
    content: 'Bottom Navigation'
  };

  constructor(props) {
    super(props);
    this.innerHeight = getHeight();
    this.pan = new Animated.Value(0);  // substract this.innerHeight to make it disappear in the bottom
    this.state = {
      isActive: true
    };
  }

  show() {
    if (this.state.isActive) return false;
    Animated.spring(this.pan, {
      velocity: 1,
      bounciness: 0,
      toValue: 0
    }).start(() => {
      this.setState({
        isActive: true
      });
      this.props.onShow && this.props.onShow();
    });
  }

  hide() {
    if (!this.state.isActive) return false;
    Animated.spring(this.pan, {
      velocity: 1,
      bounciness: 0,
      toValue: 0 - this.innerHeight
    }).start(() => {
      this.setState({
        isActive: false
      });
      this.props.onHide && this.props.onHide();
    });
  }

  toggle() {
    if (this.state.isActive) {
      this.hide();
    } else {
      this.show();
    }
  }


  render() {

    return (
      <View style={[styles.container, this.props.style]}>
        {this.props.children}
        <Animated.View
          style={[styles.wrapper, {bottom: this.pan}]}>
          <View style={styles.upperBorder}>
            <Text style={styles.text}>{this.props.content}</Text>
          </View>
        </Animated.View>
      </View>
    )
  }

}

module.exports = UiBottomNavigation;
