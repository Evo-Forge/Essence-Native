'use strict';
/**
 * Created by zsoltmakai on 6/14/2016.
 */
/**
 * Created by zsoltmakai on 5/25/2016.
 */
const SampleApp = require('../app/components/test2');

import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class TestPage extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <SampleApp/>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  }
});