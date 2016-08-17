/*var a = <Toolbar />;
 var b = <Toolbar leftIcon="some-icon" />
 var c = <Toolbar leftIcon={<Icon name="some-icon" />} />
 var d = <Toolbar rightIcon="some-icon" />
 var e = <Toolbar rightIcon={<Icon name="some-icon" />} />
 var g = <Toolbar title="My title" />;
 var f = <Toolbar><Text>My content</Text></Toolbar>
 var h = <Toolbar color="#c3c3c3" />
 // <Toolbar theme="primary/secondary" />*/

'use strict';

import React, { Component, PropTypes } from 'react';
const styles = require('./styles');


import {
  View,
  Dimensions,
  Text
  } from 'react-native';

const width = Dimensions.get('window').width;

class UiToolBar extends Component {

  static propTypes = {
    title: PropTypes.string,
    color: PropTypes.string,
    leftIcon: PropTypes.any,
    rightIcon: PropTypes.any
  };

  static defaultProps = {
    color: '#fff'
  };

  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
  }

  renderLeftIcon() {
    if (!this.props.leftIcon) return;
    return (
      <View style={styles.leftIconWrapper}>
        <View style={styles.leftIcon}>

        </View>
      </View>
    )
  }

  renderRightIcon() {
    if (!this.props.rightIcon) return;
    return (
      <View style={styles.rightIconWrapper}>
        <View style={styles.rightIcon}>

        </View>
      </View>
    )
  }

  render() {
    const height = 48;

    const localStyle = {
      height: height,
      width,
      //backgroundColor: this.props.color
    };
    /*  const paddingHorizontal = 0;
     const middleStyle = {
     paddingHorizontal: paddingHorizontal
     };*/

    /*  if (!this.props.leftIcon) {
     middleStyle.paddingHorizontal = 16;
     }*/
    console.log(localStyle.height);
    console.log(localStyle.backgroundColor);
    return (
      <View>
        <View style={[styles.wrapper, localStyle]}>
          {this.renderLeftIcon()}
          <View style={[styles.titleView]}>
            <Text style={styles.titleText}>
              {this.props.title}
            </Text>
          </View>
          {this.renderRightIcon()}
        </View>
      </View>
    )
  }
}


module.exports = UiToolBar;