/**
 * Created by zsoltmakai on 5/12/2016.
 */
const Card = require('../../lib/components/Card/Card');

import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';


export default class CardsPage extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Card size={150} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container :{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});