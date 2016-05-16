/**
 * Created by zsoltmakai on 5/12/2016.
 */
const Button = require('../app/components/essence-button');

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Dimensions,
  PropTypes
} from 'react-native';


export default class ButtonPage extends React.Component {

  render() {
    return (
      <View style={styles.container}>
       <Button type="default" text="DEFAULT"/>
        <View style={{height: 10}} />
       <Button type="primary" text="PRIMARY"/>
        <View style={{height: 10}} />
       <Button type="success" text="SUCCESS"/>
        <View style={{height: 10}} />
       <Button type="info" text="INFO"/>
        <View style={{height: 10}} />
       <Button type="warning" text="WARNING"/>
        <View style={{height: 10}} />
       <Button type="danger" text="DANGER"/>
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