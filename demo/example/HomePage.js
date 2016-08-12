/**
 * Created by zsoltmakai on 5/12/2016.
 */
const Image = require('../../lib/components/Image/Image');

import React, {Component} from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';


export default class HomePage extends React.Component {

  render() {
    return (
      <View style={styles.container}>
       <Image height={150} width={150} source='assets/essence_icon'/>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'

  }

});