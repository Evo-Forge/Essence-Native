/**
 * Created by zsoltmakai on 5/25/2016.
 */

import React, { Component, PropTypes} from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class TestPage extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Testing Page</Text>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});