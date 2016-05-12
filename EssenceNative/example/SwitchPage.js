/**
 * Created by zsoltmakai on 5/12/2016.
 */

const Switch = require('../app/components/essence-switch');

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Dimensions,
  PropTypes
} from 'react-native';


export default class SwitchPage extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Switch />
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