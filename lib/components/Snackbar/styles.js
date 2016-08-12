'use strict';
/**
 * Created by zsoltmakai on 6/24/2016.
 */
const COLORS = require('../../colors');

import React, {StyleSheet, Dimensions} from 'react-native';

function getHeight() {
  return Dimensions.get('window').height;
}
const width = Dimensions.get('window').width;

module.exports = StyleSheet.create({
  container: {
    height: getHeight(),
    width: width,
    flex: 1,
    position: 'absolute'
  },
  wrapper: {
    flexDirection: 'row',
    backgroundColor: '#323232',
    height: 48,
    marginTop: getHeight() * 0.88,
    width: width,
    paddingHorizontal: 24,
    paddingVertical: 14
  },
  text: {
    textAlign: 'left',
    color: 'lightgrey',
    flex: 1
  },
  undoButton: {},
  undoText: {
    color: 'green'
  }
});