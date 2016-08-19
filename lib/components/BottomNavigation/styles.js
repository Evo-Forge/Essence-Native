'use strict';
/**
 * Created by zsoltmakai on 6/24/2016.
 */
//const COLORS = require('../../colors');

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
    height: getHeight(),
    width: width,
    flex: 1,
    position: 'absolute',
    backgroundColor: 'white'

  },
  wrapper: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 56,
    marginTop: getHeight() * 0.87,
    width: width,

    borderTopWidth: 4,
    borderTopColor: '#F7F7F7',
    elevation: 2
  },
  upperBorder: {
    borderTopWidth: 1,
    borderTopColor: '#E4E4E4',
    height: 56,
    width: width,
    paddingHorizontal: 24,
    paddingVertical: 14,
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