/**
 * Created by zsoltmakai on 5/12/2016.
 */
const Divider = require('../app/components/essence-divider');

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Dimensions,
  PropTypes
} from 'react-native';

export default class DividerPage extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={{height: 50}} />
        <Divider size="thin" width="small" color="red"/>
        <View style={{height: 20}} />
        <Divider size='thin' width='medium' color="yellow"/>
        <View style={{height: 20}} />
        <Divider size="thin" width="large" color="blue"/>
        <View style={{height: 20}} />
        <Divider size="thin" width="full"/>
        <View style={{height: 20}} />
        <View style={{height: 50}} />
        <Divider size="thick" width="small"/>
        <View style={{height: 20}} />
        <Divider size='thick' width='medium'/>
        <View style={{height: 20}} />
        <Divider size="thick" width="large"/>
        <View style={{height: 20}} />
        <Divider size="thick" width="full"/>
        <View style={{height: 20}} />
        <Divider/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container :{
//    flex: 1,
//    alignItems: 'center',
//    justifyContent: 'center'
  }
});