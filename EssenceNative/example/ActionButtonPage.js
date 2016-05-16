/**
 * Created by zsoltmakai on 5/16/2016.
 */
const ActionButton = require('../app/components/essence-actionButton');

import React, {
  Component,
  StyleSheet,
  Text,
  View,

} from 'react-native';

export default class ActionButtonPage extends React.Compnent {

  render() {
    return (
      <View style={styles.container}>
        <ActionButton/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {}

});