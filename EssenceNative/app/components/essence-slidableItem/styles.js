'use strict';
/**
 * Created by zsoltmakai on 6/24/2016.
 */
import React, {StyleSheet, Dimensions} from 'react-native';

const DEFAULT_WIDTH = Dimensions.get('window').width / 3.5;

module.exports = StyleSheet.create({
  content: {},
  buttonWrapper: {
    width: DEFAULT_WIDTH,
    position: 'absolute',
    right: 0,
    top: 0
  },
  innerBorder: {
    position: 'absolute',
    left: 0, top: 0, width: DEFAULT_WIDTH,
    height: 1
  },
  innerWrapper: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 16,
    marginTop: 2,
    textShadowRadius: 1,
    textShadowOffset: {
      width: 0.5,
      height: 0.5
    }
  }
});