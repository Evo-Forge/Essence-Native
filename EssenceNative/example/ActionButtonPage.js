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

export default class ActionButtonPage extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <ActionButton
          style={{
          marginBottom: 10
          }}
          color="#FF4081"
          onTouch={() => {
          this.refs.bubbleBtn.toggle();
          }}
        />
        <ActionButton
          color="#FF4081"
          ref="bubbleBtn"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  }
});