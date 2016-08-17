/**
 * Created by zsoltmakai on 5/16/2016.
 */
const Slider = require('../../lib/components/Slider/Slider');

import React, { Component, PropTypes } from 'react';

import  {
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';

export default class SliderPage extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Slider/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    top: 250
  }
});

