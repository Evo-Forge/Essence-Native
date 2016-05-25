/**
 * Created by zsoltmakai on 5/25/2016.
 */
const AnimatedHeart = require('../app/components/essence-test');

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
        <AnimatedHeart/>
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