'use strict';

import React, { Component, PropTypes } from 'react';
const styles = require('./styles');
//const COLORS = require('../../colors');

import {
  View,
  Text,
  Animated,
  Dimensions
  } from 'react-native';

function getHeight() {
  return Dimensions.get('window').height;
}

class UiSnackBar extends React.Component {

  static propTypes = {
    content: PropTypes.string,
    undoButton: PropTypes.bool
  };

  static defaultProps = {
    content: 'Snackbar',
    undoButton: false
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

  toggle() {
    if (this.state.isActive) {
      this.hide();
    } else {
      this.show();
    }
  }

  renderUndoButton() {
    if (!this.props.undoButton) return;
    return <View style={styles.undoButton}><Text style={styles.undoText}>UNDO</Text></View>
  }

  render() {

    return (
      <View style={[styles.container, this.props.style]}>
        {this.props.children}
        <Animated.View
          style={[styles.wrapper, {bottom: this.pan}]}>
          <Text style={styles.text}>{this.props.content}</Text>
          {this.renderUndoButton()}
        </Animated.View>
      </View>
    )
  }
}


module.exports = UiSnackBar;


/*
 * toggleSnackbar() {
 this.refs.snack.toggle();
 }

 render() {


 return (
 <View style={styles.container}>

 <Snackbar
 ref="snack"
 content="Snackbar"
 undoButton={false}
 >
 </Snackbar>
 <TouchableHighlight style={{
 width: 50,
 height: 50,
 backgroundColor: 'yellow',
 marginBottom: 0

 }} onPress={this.toggleSnackbar.bind(this)}>
 <View/>
 </TouchableHighlight>
 </View>
 );
 }
 }
 * */