/**
 * Created by zsoltmakai on 5/12/2016.
 */
import Paper from '../../lib/components/Paper/Paper';

import React, { Component, PropTypes } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';


export default class PaperPage extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Paper />
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
