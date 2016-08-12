'use strict';
/**
 * Created by zsoltmakai on 6/24/2016.
 */
const COLORS = require('../../colors');

import React, {StyleSheet} from 'react-native';

const TOUCH_AREA_SIZE = 12;

module.exports = StyleSheet.create ({
  icon: {
    borderWidth: 0,
    margin: 0,
    padding: 0,
    textAlign: 'center',
    fontWeight: '100'
  },
  fontIcon: {
    margin: 0,
    padding: 0,
    backgroundColor: 'transparent'
  },
  touch: {
    backgroundColor: 'transparent',
    left: -TOUCH_AREA_SIZE,
    top: -TOUCH_AREA_SIZE,
    paddingLeft: TOUCH_AREA_SIZE,
    paddingTop: TOUCH_AREA_SIZE,
    paddingRight: TOUCH_AREA_SIZE,
    opacity: 1
  }
});