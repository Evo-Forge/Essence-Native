'use strict';
/**
 * Created by zsoltmakai on 6/24/2016.
 */
import React, {StyleSheet} from 'react-native';

module.exports = StyleSheet.create({
  drawer: {
    position: 'absolute',
    top: 0,
    bottom: 0
  },
  main: {
    flex: 1
  },
  overlay: {
    backgroundColor: '#000',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});