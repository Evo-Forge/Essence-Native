'use strict';
/**
 * Created by zsoltmakai on 6/24/2016.
 */

const COLORS = require('../../colors');

import React, {StyleSheet} from 'react-native';

module.exports = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    height: 60
  },
  // lower border
  border: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 2
  },
  box: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5
  },
  title: {
    fontSize: 26,
    textShadowRadius: 1,
    textShadowOffset: {
      width: 0.5,
      height: 0.5
    }
  },
  icon: {
    position: 'absolute',
    left: SIZE.ICON_PADDING,
    top: SIZE.ICON_PADDING
  }
});