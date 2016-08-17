/**
 * Created by zsoltmakai on 5/12/2016.
 */
const Textfield = require('../../lib/components/Textfield/Textfield');

import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';


export default class TextfieldPage extends React.Component {

  render() {
    return (
      <View style={styles.container}>
         <Textfield placeholder="Text area with 3 rows" numberOfLines={3}/>
        <Textfield placeholder="Text Area with 5 rows" numberOfLines={5}/>
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