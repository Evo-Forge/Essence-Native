/**
 * Created by zsoltmakai on 5/16/2016.
 */
const Slider = require('../app/components/essence-slider');

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Dimensions,
  PropTypes
} from 'react-native';

export default class SliderPage extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Slider/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    top: 250
  }
});

