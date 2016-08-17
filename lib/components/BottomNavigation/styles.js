/**
 * Created by zsoltmakai on 8/17/2016.
 */
import React from 'react';

import {
  StyleSheet,
  Dimensions
} from 'react-native';

function getHeight() {
  return Dimensions.get('window').height;
}
const width = Dimensions.get('window').width;

module.exports = StyleSheet.create({
  container: {
    flex: 1
  }

});