'use strict';

import React, { Component, PropTypes } from 'react';
const styles = require('./styles');
//const COLORS = require('../../colors');

import {
  View,
  Text,
  Animated,
  PanResponder
  } from 'react-native';

class UiChip extends Component {
  static propTypes = {
    data: PropTypes.any,
    name: PropTypes.string,
    text: PropTypes.string,
    icon: PropTypes.any,
    closable: PropTypes.bool,
    onClose: PropTypes.func,
    iconColor: PropTypes.string,
    chipIcon: PropTypes.bool
  };

  static defaultProps = {
    name: 'Chip',
    text: 'Chip',
    closable: false,
    chipIcon: false
  };

  constructor(props) {
    super(props);

    this.state = {
      closable: (props.closable === true),
      chipIcon: (props.chipIcon === true)
    };
    this.pan = new Animated.Value(1);
    this.panResponder = PanResponder.create({
      onPanResponderGrant: (e) => {
        return true;
      },
      onStartShouldSetPanResponder: (e) => {
        if (this.state.closable) return false;
        return true;
      },
      onPanResponderMove: (e) => {
        return true;

      },
      onPanResponderRelease: (e) => {
        Animated.timing(this.pan, {
          toValue: 0,
          duration: 50
        }).start();
      }
    });
  }

  renderChipIcon() {
    if (!this.state.chipIcon) return;
    return (
      <View style={styles.chipIcon}>
        <Text style={styles.chipIconText}>D</Text>
      </View>
    )
  }

  renderDeletableIcon() {
    if (this.state.closable) return;
    return (
      <View style={styles.chipDelete}>
        <Text style={styles.chipDeleteText}>x</Text>
      </View>
    )
  }


  render() {
    let closable = this.state.closable;
    return (
      <View style={styles.container}>
        <Animated.View
          enabled={closable}
          {...this.panResponder.panHandlers}
          style={{opacity: this.pan}}>
          <View style={styles.chipContent}>
            {this.renderChipIcon()}
            <View style={styles.textWrapper}>
              <Text style={styles.chipText}>{this.props.text}</Text>
            </View>
            {this.renderDeletableIcon()}
          </View>
        </Animated.View>
      </View>
    );
  }
}

module.exports = UiChip;