/**
 * Created by zsoltmakai on 5/12/2016.
 */
const ToolBar = require('../app/components/essence-toolBar');

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Dimensions,
  PropTypes
} from 'react-native';


export default class ToolBarPage extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <ToolBar leftIcon="." rightIcon="." tittle="Title"/>
        <View style={{height: 10}} />
        <ToolBar leftIcon="." title="Title" />
        <View style={{height: 10}} />
        <ToolBar rightIcon="." title="Title" />
        <View style={{height: 10}} />
        <ToolBar title="Title" />
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