'use strict';
/**
 * Created by zsoltmakai on 6/24/2016.
 */
const COLORS = require('../../colors');

import React, {StyleSheet} from 'react-native';

module.exports = StyleSheet.create({
  inactive: {
    position: 'absolute',
    width: 1,
    height: 1,
    bottom: -1,
    left: -1
  },
  wrapper: {
    flex: 1,
    backgroundColor: 'grey',
    borderTopWidth: 1,
    borderTopColor: 'black',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 1,
    paddingVertical: 16,
    paddingHorizontal: 20
  },
  text: {
    color: 'white',
    fontSize: 16
  }
});