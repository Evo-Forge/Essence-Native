/**
 * Created by zsoltmakai on 5/12/2016.
 */
const Chip = require('../../lib/components/Chip/Chip');

import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';


export default class ChipPage extends React.Component {


  render() {
    return (
      <View style={styles.container}>
        <Chip text={"Example chip"} chipIcon={true} closable={false} />
        <View style={{height: 10}} />
        <Chip text={"Example chip"} chipIcon={true} closable={true}/>
        <View style={{height: 10}} />
        <Chip text={"Example chip"} chipIcon={false} closable={false}/>
        <View style={{height: 10}} />
        <Chip text={"Example chip"} chipIcon={false} closable={true}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container :{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
});