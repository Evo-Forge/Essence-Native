'use strict';
import React, { Component, PropTypes } from 'react';
const styles = require('./styles');
//const COLORS = require('../../colors');

import {
  View,
  Dimensions,
  Text
  } from 'react-native';



class ListHeader extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string,
    first: PropTypes.bool
  };

  static defaultProps = {
    backgroundColor: '#fff'
  };


  render() {
    const width = Dimensions.get('window').width;
    let localStyle = {
      width,
      backgroundColor: this.props.backgroundColor
    };
    if(!this.props.first) {
      localStyle.borderTopWidth = 0;
    }
    return (
      <View style={[styles.wrapper, localStyle]}>
        <Text style={styles.headerTitle}>{this.props.title}</Text>
      </View>
    )

  }
}

module.exports = ListHeader;

/* <ListHeader title="Title" first={true}/> */