/**
 * Created by zsoltmakai on 5/16/2016.
 */
const ActionButton = require('../../lib/components/ActionButton/ActionButton');

import React, { Component, PropTypes } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
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
  },
  button: {
    padding: 20,
    borderWidth: 1,
    borderRadius: 5
  }
});


/*<View style = {{flex: 1, justifyContent: 'center'}}>
 <TouchableOpacity style={styles.button} onPress={this._onPress.bind(this)}>
 <Text>Open</Text>
 </TouchableOpacity>
 </View>*/