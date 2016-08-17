/**
 * Created by zsoltmakai on 8/17/2016.
 */
'use strict';

import React, { Component, PropTypes } from 'react';

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
    this.pan = new Animated.Value(0 - this.innerHeight);
    this.state = {
      isActive: false
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

  render() {

    return (
      <View style={styles.container}>
        <Text>AAAAA</Text>
      </View>
    )
  }

}

module.exports = UiBottomNavigation;
