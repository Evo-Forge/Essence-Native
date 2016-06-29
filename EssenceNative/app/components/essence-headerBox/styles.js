'use strict';
/**
 * Created by zsoltmakai on 6/24/2016.
 */
import React, {StyleSheet} from 'react-native';

const ICON_PADDING = 16;

module.exports = StyleSheet.create({
  border: {
    height: 2,
    borderBottomWidth: 1,
    position: 'absolute',
    bottom: 0
  },
  backgroundImage: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row'
  },
  centerImage: {
    alignSelf: 'center',
    marginTop: 15
  },
  contentBox: {
    position: 'absolute',
    bottom: 3,
    left: 0,
    right: 0
  },
  leftIcon: {
    position: 'absolute',
    left: ICON_PADDING,
    top: ICON_PADDING
  },
  rightIcon: {
    position: 'absolute',
    right: 0,
    top: ICON_PADDING
  }
});